# revolut-statement-categorizer
Serverless script you can run to categorize your expenses. Put your revolut statement in the input folder and set the rules for categories in a JSON file.

### How to bootstrap
1. make sure you are in `revolut-statement-categorizer` folder
2. make sure you've run `npm install`
3. run in terminal `npm run go`
4. see `revolut-statement-categorizer/output` folder

### How to customize
1. Change input files on your own, see "Input explained sections"
2. Use output to iteratively analyze and define categories, see "Output explained"
3. All done, for more complex analytics you can upload output `.xlsx` files to Google Sheets

## Output explained
Let's use example statements for this explanation.
### 1. In `./output` folder, for each config in `./configs/config.js` is created a folder (later as the folder) and a `.csv` file (later as the csv)
### 2. The folder
The folder contains final xslx files.
Each xlsx has a main sheet with the rows corresponding to your categories from `./configs/config.js` object.
Also, each xsls has a sheet for every category with a list of expenses sorted by descending.
### 3. The file
The file has naming like `./output/*period name*_processing.csv`.
It is indended to help with categorization, and it contains all transactions that hasn't fallen under any of the `./configs/config.js` categories.

## Input explained
In `./input/statement.csv` use a *GBP* Revolut generated  CSV statement for the whole period.
In `./input/usd/statement_usd.csv` use a *USD* statement.

### config.js
In `./configs/config.js` you can define *periods* and *categories* for each period.
For example, by default I've set up Chiang Mai period:
```
  period: 'Chiang Mai short-term accommodation 2022',
  starts: '00:00 1 October 2022', //approx.
  ends: '00:00 31 January 2023',
```
and `places` meaning categories, like 
```
    {
        name: 'Accommodation',
        matches: ['Airbnb', 'The Opium Serviced Apartm']
    },
    {
        name: 'Cash',
        matches: ['Cash at']
    },
```.

### `matches` property in `places` in `config.js`
This property will be used as a subscring search in the description field of every transaction. It is *case-sensitive*.

# Important notes
* Please bear in mind that if a transaction row can be added to one `period` only
* Supports only USD and GBP, but you should be able to edit this easily
* GBP to USD rate is constant as of Jan 2023, search for `usdToGbp`