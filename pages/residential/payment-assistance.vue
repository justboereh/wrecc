<template>
    <main>
        <page-header scale>Payment Assistance</page-header>

        <page-content effects>
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(grid-cols-3 gap-12 p-12) p-4 gap-4"
            >
                <span
                    v-for="county of PANumbers"
                    :key="county.county"
                    class="flex flex-col gap-2"
                >
                    <header class="text-2xl font-semibold">
                        {{ county.county }}
                    </header>

                    <span
                        v-for="number of county.numbers"
                        :key="number.name"
                        class="flex justify-between pl-8"
                    >
                        <span>
                            {{ number.name }}
                        </span>

                        <w-link
                            :to="`tel:${number.number}`"
                            class="whitespace-nowrap min-w-fit"
                        >
                            {{ formatNumber(number.number) }}
                        </w-link>
                    </span>
                </span>
            </div>
        </page-content>

        <br />

        <page-content spacing>
            <h1>Community Action Agencies</h1>

            <p>
                If you need assistance paying your bill, please note that
                LiHEAP, Operation Warm Hearts, and Team Kentucky funds are still
                available through your local Community Action Agency.
            </p>

            <div class="grid gap-4 md:grid-cols-2">
                <span
                    v-for="agency of AgenciesServes"
                    :key="agency.name"
                    class="p-4 bg-white border grid gap-1"
                >
                    <p class="font-bold">{{ agency.name }}</p>

                    <p
                        :class="
                            !agency.noserve
                                ? 'text-black/50'
                                : 'opacity-0 pointer-events-none'
                        "
                    >
                        serves
                    </p>

                    <p>{{ agency.serves }}</p>

                    <br />

                    <w-link :to="agency.to">
                        Learn More

                        <icon name="fluent:open-20-regular" />
                    </w-link>
                </span>
            </div>
        </page-content>
    </main>
</template>

<script setup>
import PANumbers from '~/assets/scripts/data/residential/payment assistance numbers'

const AgenciesServes = [
    {
        name: 'Audubon Area Community Service',
        to: 'https://www.audubon-area.com/',
        serves: 'Ohio County Central',
    },
    {
        name: 'Community Action Council',
        to: 'https://ckcac.org/',
        serves: 'Grayson County',
    },
    {
        name: 'Community Action of Southern Kentucky',
        to: 'https://www.casoky.org/',
        serves: 'Barren, Butler, Edmonson, Logan, Simpson, and Warren Counties',
    },
    {
        name: 'United Way of Southern Kentucky',
        to: 'https://uwsk.org/2-1-1/',
        noserve: true,
        serves: '2-1-1 is a free and confidential, 24/7, informational referral service.',
    },
]

const formatNumber = (number) => {
    number = number + ''
    number = number.substr(0, 6) + ' - ' + number.substr(6)
    number = number.substr(0, 3) + ') ' + number.substr(3)
    number = '(' + number

    return number
}
</script>
