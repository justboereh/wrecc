<template>
    <main>
        <page-header scale>Electrical Inspections</page-header>

        <page-content effects>
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(grid-cols-3 gap-12 p-12) p-4 gap-4"
            >
                <span
                    v-for="county of EINumbers"
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

        <page-content>
            <p class="indent-lg">
                In order to maintain high standards of electrical safety,
                inspections of wiring installations are required by an inspector
                certified by the Kentucky Department of Housing, Building and
                Construction. All wiring must conform to the requirements of the
                National Electrical Code, National Electric Safety Code and/or
                other local construction standards. Kentucky law requires that a
                Certificate of Inspection be issued before permanent service is
                connected.
            </p>

            <br />

            <div
                class="flex items-center justify-center gap-4 border border-orange-500 p-4"
            >
                <icon
                    name="fluent:shield-error-20-regular"
                    class="text-2xl min-w-8 text-orange-500"
                />

                <span class="text-center <sm:text-sm">
                    ALL INSPECTIONS IN WARREN COUNTY MUST BE SCHEDULED THROUGH
                    THE ONLINE PORTAL AT

                    <w-link
                        to="WWW.WARRENCOUNTYKY.GOV"
                    >
                        WWW.WARRENCOUNTYKY.GOV
                    </w-link>
                </span>

                <icon
                    name="fluent:shield-error-20-regular"
                    class="text-2xl min-w-8 text-orange-500"
                />
            </div>

            <br />

            <div class="grid gap-4">
                <p>
                    A Certificate of Compliance must be provided to Warren RECC
                    by the appropriate party listed when the job has passed
                    inspection. Construction of the service cannot begin until
                    we have this certificate in-hand.
                </p>

                <p>
                    Warren RECC will not be responsible for obtaining a copy of
                    any applicable permits. The county where the property is
                    located will ensure that necessary permits have been
                    obtained prior to issuing the Certificate of Compliance.
                </p>

                <p>
                    All questions regarding inspection fees and schedules, or
                    the status of an inspection, should be directed to the
                    contact person in the appropriate county.
                </p>
            </div>
        </page-content>
    </main>
</template>
<script setup>
import EINumbers from '~/assets/scripts/data/residential/electrical inspection numbers'

const formatNumber = (number) => {
    number = number + ''
    number = number.substr(0, 6) + ' - ' + number.substr(6)
    number = number.substr(0, 3) + ') ' + number.substr(3)
    number = '(' + number

    return number
}
</script>
