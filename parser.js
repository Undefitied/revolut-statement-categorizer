import fs from 'fs';
import csv from 'csv-parser'
import * as XLSX from 'xlsx/xlsx.mjs';
import config from './configs/config.js'
import {checkDataRow} from './utils.js'

XLSX.set_fs(fs);

const totals = config.map((period) => ({
    ...period,
    places: period.places.map(place => ({
        ...place,
        dataRows: [],
        totalGBP: 0,
        totalNumberOfPurchases: 0,
        totalFee: 0,
    }))
}))

const processing = {}

config.forEach(period => {
    const directory = `./output/${period.period}`
    if (!fs.existsSync(directory)){
        fs.mkdirSync(directory);
    }
    fs.writeFileSync(`./output/${period.period}_processing.csv`, `Description,Amount`);
})

fs.createReadStream('./input/statement.csv')
  .pipe(csv())
  .on('data', dataRow => {
    checkDataRow(totals, dataRow, processing)
  })
  .on('end', () => {
    fs.createReadStream('./input/usd/statement_usd.csv')
        .pipe(csv())
        .on('data', dataRow => {
            checkDataRow(totals, dataRow, processing)
        })
        .on('end', () => {

            totals.forEach(period => {
                period.places.sort((a,b) => a.totalGBP - b.totalGBP)
            })

            totals.forEach(period => {

                let sumGBP = 0
                let sumCount = 0
                let sumFee = 0
                period.places.forEach((place, i) => {
                    const averagePurchase = (place.totalNumberOfPurchases === 0 ? 0 : place.totalGBP/place.totalNumberOfPurchases).toFixed(2)
                

                    if (!place.name.includes('unrelated') && !place.name.includes('Top-Ups')) {
                        sumGBP += place.totalGBP
                        sumCount += place.totalNumberOfPurchases
                        sumFee += place.totalFee
                    }

                    if (i === period.places.length - 1) {
                        if (processing[period.period] ) {
                            const sumUnidentified = processing[period.period].reduce((result, dataRow) => result + parseFloat(dataRow['Amount']), 0)
                            const sumFeeUnidentified = processing[period.period].reduce((result, dataRow) => result + parseFloat(dataRow['Fee']), 0)

                            period.places.push({
                                name: 'Unidentified',
                                totalGBP: sumUnidentified,	
                                totalNumberOfPurchases: processing[period.period].length,	
                                totalFee: sumFeeUnidentified,
                                dataRows: processing[period.period],
                            })

                            sumGBP += sumUnidentified
                            sumCount += processing[period.period].length
                            sumFee += sumFeeUnidentified
                        }

                        const sumAveragePurchase = sumCount === 0 ? 0 : sumGBP / sumCount

                        period.places.push({
                            name: 'Total',
                            totalGBP: sumGBP.toFixed(2),	
                            totalNumberOfPurchases: sumCount,
                            sumAveragePurchase: sumAveragePurchase.toFixed(2),		
                            totalFee: sumFee.toFixed(2),
                            dataRows: [],
                        })
                        sumGBP = sumCount = 0
                    }
                })

                const workbook = XLSX.utils.book_new();
                const worksheet = XLSX.utils.json_to_sheet(period.places.map(place => ({
                    name: place.name,
                    totalGBP: place.totalGBP,	
                    totalNumberOfPurchases: place.totalNumberOfPurchases,	
                    totalFee: place.totalFee,
                })));
                XLSX.utils.book_append_sheet(workbook, worksheet, "Summary");

                period.places.forEach(place => {
                    place.dataRows.sort((a,b) => a.Amount - b.Amount)
                    
                    const rows = place.dataRows.map(dataRow => ({
                        name: dataRow['Description'],
                        amount: dataRow['Amount'],
                        date: dataRow['Started Date'],
                    }))

                    const worksheet = XLSX.utils.json_to_sheet(rows);
                    XLSX.utils.book_append_sheet(workbook, worksheet, place.name.slice(0,31));
                })

                XLSX.writeFileSync(workbook, `./output/${period.period}/${period.period}_processed.xlsx`, {
                    cellStyles: true
                });
            })
        })

});


/*


Samyx Cleaning Service


Iherb Iherb.com

www.biocare.co.uk

Planet Organic Tp

















*/