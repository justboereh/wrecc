export default [
    {
        header: 'GSA1',
        data: [
            {
                name: 'Distribution Charge',
                pricings: [
                    {
                        text: 'All Seasons (Jan - Dec)',
                        price: '22.40',
                        extra: '/ month',
                    },
                ],
            },
            {
                name: 'Energy Charge',
                pricings: [
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '0.08651',
                        extra: '/ kWh',
                    },
                    {
                        text: 'Winter (Dec - Mar)',
                        price: '0.08321',
                        extra: '/ kWh',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '0.08115',
                        extra: '/ kWh',
                    },
                ],
            },
        ],
    },
    {
        header: 'GSA2',
        data: [
            {
                name: 'Distribution Charge',
                pricings: [
                    {
                        text: 'All Seasons (Jan - Dec)',
                        price: '40',
                        extra: '/ month',
                    },
                ],
            },
            {
                name: 'Energy Charge',
                pricings: [
                    { divider: true, text: '0 - 15,000 kWh' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '0.08637',
                        extra: '/ kWh',
                    },
                    {
                        text: '	Winter (Dec - Mar)',
                        price: '0.08307',
                        extra: '/ kWh',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '0.08101',
                        extra: '/ kWh',
                    },
                    { divider: true, text: 'over 15,000 kWh' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '0.04794',
                        extra: '/ kWh',
                    },
                    {
                        text: 'Winter (Dec - Mar)',
                        price: '0.04794',
                        extra: '/ kWh',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '0.04794',
                        extra: '/ kWh',
                    },
                ],
            },
            {
                name: 'Demand Charge',
                pricings: [
                    { divider: true, text: '0 - 50 kW' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '0.0',
                        extra: '/ kW',
                    },
                    {
                        text: '	Winter (Dec - Mar)',
                        price: '0.0',
                        extra: '/ kW',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '0.0',
                        extra: '/ kW',
                    },
                    { divider: true, text: '51 - 1,000 kW' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '15.29',
                        extra: '/ kW',
                    },
                    {
                        text: 'Winter (Dec - Mar)',
                        price: '14.34',
                        extra: '/ kW',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '14.34',
                        extra: '/ kW',
                    },
                ],
            },
        ],
    },
    {
        header: 'GSA3',
        data: [
            {
                name: 'Distribution Charge',
                pricings: [
                    {
                        text: 'All Seasons (Jan - Dec)',
                        price: '105',
                        extra: '/ month',
                    },
                ],
            },
            {
                name: 'Energy Charge',
                pricings: [
                    {
                        text: 'All Seasons (Jan - Dec)',
                        price: '0.04526',
                        extra: '/ kWh',
                    },
                ],
            },
            {
                name: 'Demand Charge',
                pricings: [
                    { divider: true, text: '0 - 1,000 kW' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '14.58',
                        extra: '/ kW',
                    },
                    {
                        text: 'Winter (Dec - Mar)',
                        price: '13.63',
                        extra: '/ kW',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '13.63',
                        extra: '/ kW',
                    },
                    { divider: true, text: '1,001 - 5,000 kW' },
                    {
                        text: 'Summer (Jun - Sept)',
                        price: '17.09',
                        extra: '/ kW',
                    },
                    {
                        text: 'Winter (Dec - Mar)',
                        price: '16.16',
                        extra: '/ kW',
                    },
                    {
                        text: 'Transitional Months (Oct, Nov, Apr & May)',
                        price: '16.16',
                        extra: '/ kW',
                    },
                ],
            },
        ],
    },
]
