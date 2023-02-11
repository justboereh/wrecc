<template>
    <main>
        <page-header>Electrical Rates</page-header>

        <page-card
            v-for="card of ElectricalRates"
            :key="card.header"
            :header="card.header"
            effects
        >
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(grid-cols-3 gap-12 p-12) p-4 gap-4"
            >
                <page-card-pricing
                    v-for="item of card.data"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </page-card>

        <page-content spacing>
            <p class="text-sm">
                *Add 3 percent school tax; Add 6 percent Kentucky sales tax; For
                rate schedules of greater than 5,000 kW, contact Warren RECC.
            </p>

            <p>Effective: October 1, 2022</p>

            <h1>TVA Energy Fuel Cost</h1>

            <p>
                TVA Energy Fuel Cost refers to the cost of the fuel- the
                uranium, coal, and natural gas- that TVA must purchase in order
                to generate your electricity. It is a per kilowatt hour charge,
                and is determined on a monthly basis by TVA. For more
                information, visit
                <w-link
                    to="https://tva.com/Energy/Our-Power-System/Total-Monthly-Fuel-Costs"
                >
                    tva.com.
                </w-link>
            </p>
        </page-content>

        <page-card effects>
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(grid-cols-3 gap-12 p-12) p-4 gap-4"
            >
                <page-card-pricing
                    v-for="item of EnergyFuelCost"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </page-card>
    </main>
</template>

<script setup>
import ElectricalRates from '@/assets/scripts/data/business/electrical rates'
const EnergyFuelCost = [
    {
        name: 'GSA1',
        pricings: [
            {
                text: '',
                price: '0.03575',
                extra: '/ kWh',
            },
        ],
    },
    {
        name: 'GSA2',
        pricings: [
            {
                text: '0 - 15,000 kWh',
                price: '0.03575',
                extra: '/ kWh',
            },
            {
                text: 'over 15,000 kWh',
                price: '0.03503',
                extra: '/ kWh',
            },
        ],
    },
    {
        name: 'GSA3',
        pricings: [
            {
                text: '',
                price: '0.03575',
                extra: '/ kWh',
            },
        ],
    },
]
</script>
