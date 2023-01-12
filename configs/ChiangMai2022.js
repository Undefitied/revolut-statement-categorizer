function ChiangMai2022(places) {
    return {
        places,
        period: 'Chiang Mai short-term accommodation 2022',
        starts: '00:00 1 October 2022', //approx.
        ends: '00:00 26 December 2022', //approx.
    }
}

const places = [
    {
        name: 'Accommodation',
        matches: ['Airbnb', 'The Opium Serviced Apartm']
    },
    {
        name: 'Cash',
        matches: ['Cash at']
    },
    {
        name: 'Big Yellow',
        matches: ['Big Yellow']
    },
    {
        name: 'Hospitals',
        matches: ['Bangkok Hosp', 'Chiangmai Ram Hospital', 'Sriphat Medical Center', 'Save Drug Center', 'National Healthcare Syste', 'Cm Mediclinic', 'Boots']
    },
    {
        name: 'My routine',
        matches: ['Gc Wellness House', 'Paypal *rhapsodymus', 'Unique Care Stati']
    },
    {
        name: 'Clothing',
        matches: ['Zara', 'Uniqlo', 'Element 72', 'Ssp-Chiangmai']
    },
    {
        name: 'Food',
        matches: ['Tops-', 'Foodpanda', 'www.grab.com', '7-11 ', 'Rimping ', 'Daiso ']
    },
    {
        name: 'Visa',
        matches: ['Language Institute Chiang']
    },
    {
        name: 'Gifts',
        matches: ['Amzn Mktp Us', 'Gmarket', 'Ssijeoiiollibeuyeong']
    },
    {
        name: 'Beauty',
        matches: ['Myujeueuiueon', 'Cj Olive Young Guwol Town']
    },
    {
        name: 'Japan cancelled trip',
        matches: ['flyscoot.com']
    },
    {
        name: 'Startup experiments',
        matches: ['Facebk *', 'Sp Bgt', 'Printful Inc. 80756648']
    },
    {
        name: 'Documents fees',
        matches: ['Card Delivery Fee', 'To Korean Visa Berlin'],
    },
]

export default ChiangMai2022(places)