function AllPlaces(places) {
    return {
        places: places,
        period: 'All Period',
        starts: '00:00 11 November 2000',
        ends: '00:00 1 January 2050',
        global: true,
    }
}

const globalPlaces = [
    {
        name: 'Ryanair',
        matches: ['Ryanair']
    },
    {
        name: 'Wizzair',
        matches: ['Wizz Air Uk Limited', 'Wizz Air Uk Ltd']
    },
    {
        name: 'Easyjet',
        matches: ['Easyjet']
    },
    {
        name: 'Kiwi',
        matches: ['Kiwi.co', 'kiwi.com']
    },
    {
        name: 'Other Airlines',
        matches: ['flyuia.com', 'Singapore Airlines Limite', 'Lot Internet Great Britai']
    },
    {
        name: 'Eurostar',
        matches: ['Eurostar Internet']
    },
    {
        name: 'Trainline',
        matches: ['thetrainline.com', 'Trainline']
    },
    {
        name: 'Sixt',
        matches: ['Sixt']
    },
    {
        name: 'Cicar',
        matches: ['T3 Aerp.tenerife Sur.t3']
    },
    {
        name: 'Turo',
        matches: ['Turo']
    },
    {
        name: 'Booking.com',
        matches: ['Booking.com', 'Ramada Hotel - Front O', 'Hotel Ibis Vokzal', 'Bleu Riviera', 'The Old Palace Lodge Hote', 'Apartamentos Vistasur', 'Hotel 55 Management Li', 'Montseny Hosteleria', 'Hotel Sant Just Alambi']
    },
    {
        name: 'Nintendo',
        matches: ['Nintendo']
    },
    {
        name: 'London Public Transport', // it charges with delays, so it shall sit in "globalPlaces"
        matches: ['Tfl Travel', 'TFL Travel Authorisation', 'Govia Thameslink Railw', 'Swrailwayselfserve', 'National Express Stans', 'Tfl Unpaid Fares']
    },
    {
        name: 'Amazon',
        matches: ['Amznmktplace']
    },
    {
        name: 'Mobile Internet',
        matches: ['Ee Top Up Vesta', 'Ee Topup  Vesta', 'Ee Topup Vesta']
    },
    {
        name: 'Oculus',
        matches: ['Oculus *']
    },
    {
        name: 'Revolut Top-Ups',
        matches: ['Payment from Kuzovkov S', 'Apple Pay Top-Up']
    },
    {
        name: 'Travelling Essentials (food, small shops, local bus, entry tickets, documents, covid tests)',
        matches: ['W H Smith', 'Wh Smith', 'Stonehenge', 'Thorpe Park', 'Colossus Shop', 
            'Marwell Wildlife', 'Marwell Services Ltd', 'First Glasgow', 
            'Snappy Snaps', 'Collinson Assistance', '2c2p*changi Safe Trave-Ec', 'www.eurofins.com',
            'Stansted Airport Ob'
        ]
    },
    {
        name: 'Online gaming',
        matches: ['Geoguessr', 'Geoguessr Pro', 'colonist.io']
    },
    {
        name: 'Online Education',
        matches: ['Brilliant.org', 'Cali Move', 'Skillshare', 'Grammarly Co*jst83pk']
    },
    {
        name: 'GF Research',
        matches: ['gotinder.com/help', 'Google Badoo']
    },
    {
        name: 'Medical',
        matches: ['Sp * Field Doctor', 'Iherb Iherb.com', 'Jo Mar Laboratories', 'Nya*nutrivend Ltd', 'Sq *pharmacierge',
            'www.biocare.co.uk', 'The Dental Centre', 'Bulk', 'To Nieves & Alejandro Lda', 'To Richmond Stace', 'Iz *vitali',
            'To Richard Dickson', 
        ]
    },
    {
        name: 'Funimation',
        matches: ['Funimation Productions']
    },
    {
        name: 'Netflix',
        matches: ['netflix.com']
    },
    {
        name: 'App Store 1',
        matches: ['apple.com/uk']
    },
    {
        name: 'App Store 2',
        matches: ['apple.com/bill']
    },
    {
        name: 'Gopro Subscription',
        matches: ['Gopro Subscription']
    },
    {
        name: 'Gym Subscriptions',
        matches: ['The Gym Limited', 'To Central Ymca Club', 'To The Gym Ltd', 'pure Gym', 'Studio Society', ]
    },
    {
        name: 'Thames Water',
        matches: ['Thames Water']
    },
    {
        name: 'Ovo Energy',
        matches: ['www.ovoenergy.com']
    },
    {
        name: 'Disney Plus',
        matches: ['Disney Plus']
    },
    {
        name: 'Mysterious',
        matches: ['Nyx*lrs', 'Bar', 'Po-Tp', 'H. B. Leisure Ltd.', 'Tottenham Hale To', 'Storekit', 'Sumup *bankside',
            'Virgin 77605', 'Kvadropay',
        ]
    },
    {
        name: 'Photoshoot',
        matches: ['To Aleksejs Pleskovs']
    },
    {
        name: 'Snowboarding tour',
        matches: ['Actionoutdoorsholidays', 'Ucpa']
    },
    // {
    //     name: '',
    //     matches: ['']
    // },
    // {
    //     name: '',
    //     matches: ['']
    // },
    // {
    //     name: '',
    //     matches: ['']
    // },
    // {
    //     name: '',
    //     matches: ['']
    // },
]

export default AllPlaces(globalPlaces)