import {checkDataRow, withinTimeframe} from '../utils'

const totals = [
    {
        name: 'name',
        period: 'period',
        location: 'location',
        totalGBP: 0,
        totalNumberOfPurchases: 0,
        starts: '23:00 28 June 2022',
        ends: '23:59 6 July 2022',
    }
]

const data = [
    {
        'Type': 't',
        'Product': 'p',
        'Started Date': '23:30 28 Jun 2022',
        'Completed Date': '23:30 28 Jun 2022',
        'Description': 'd',
        'Amount': '-10',
        'Fee': '0',
        'Currency': 'GBP',
        'State': 'COMPLETED',
        'Balance': '100'
    }
]

test('timeframe check', () => {
    expect(
        withinTimeframe(totals[0], data[0])
    ).toBe(true)
})

test('checking rows', () => {

    checkDataRow(totals, data[0])

    expect(totals[0].totalGBP).toBe(-10)
    expect(totals[0].totalNumberOfPurchases).toBe(1)

})