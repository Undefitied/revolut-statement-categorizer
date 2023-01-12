import moment from 'moment'
import fs from 'fs'

const usdToGbp = 0.82;

export function withinTimeframe(category, dataRow) {
    const categoryStarts = moment(category.starts, 'HH:mm DD MMMM YYYY')
    const categoryEnds = moment(category.ends, 'HH:mm DD MMMM YYYY')
    const dataRowDate = moment(dataRow['Started Date'])

    if (dataRow['Started Date'] !== dataRow['Completed Date']) {
        // console.log('attention') todo: review
    }

    return dataRowDate.isBetween(categoryStarts, categoryEnds)
}

function matches(place, dataRow) {
    return place.matches.some(
        word => dataRow.Description.includes(word)
    )
}

export function checkDataRow(totals, dataRow, processing) {
    totals.some(period => {
        const isGlobal = period.global

        if (withinTimeframe(period, dataRow) || isGlobal) {
            const matched = period.places.some(place => {
                if (matches(place, dataRow)) {
                    const amount = parseFloat(dataRow.Amount)

                    if (amount === 0) {
                        // console.log('Zero', dataRow.Description)
                        return false;
                    }
  
                    if (isNaN(amount)) {
                        console.log(dataRow, amount)
                        return true
                    }
        
                    if (dataRow.Currency === 'GBP' || dataRow.Currency === 'USD') {
                        if (dataRow.Currency === 'USD') {
                            place.totalGBP += amount*usdToGbp;
                            place.totalFee += parseFloat(dataRow.Fee*usdToGbp);
                        } else {
                            place.totalGBP += amount;
                            place.totalFee += parseFloat(dataRow.Fee);
                        }
                        place.totalNumberOfPurchases++;
                        place.dataRows.push(dataRow)
                      } else {
                          console.log('not gbp or usd')
                      }
                      return true
                }
            })

            if (!matched && !isGlobal) {
                processing[period.period] = processing[period.period] || []
                processing[period.period].push(dataRow)
                processing[period.period].sort((a,b) => a.Amount - b.Amount)
                processing[period.period].sort((a,b) => a.Description - b.Description)
                fs.writeFileSync(`./output/${period.period}_processing.csv`, `Description,Amount`);
                processing[period.period].forEach((dataRow) => {
                    if (dataRow.Amount != 0) {
                        fs.appendFileSync(`./output/${period.period}_processing.csv`, `\n${dataRow.Description},${dataRow.Amount}`);
                    }
                })
            }

            if (!isGlobal || (isGlobal && matched)) {
                return true
            }
        }
    })


}