<template>
    <main>
        <page-header scale> Supplemental Rate</page-header>

        <page-content effects>
            <div
                v-for="(rate, index) of SupplementalRates"
                :key="rate.question + index"
                class="p-2"
                :class="
                    index + 1 === SupplementalRates.length ? '' : 'border-b'
                "
            >
                <div
                    class="select-none cursor-pointer font-bold flex items-center justify-between gap-4 p-2 sm:hover:bg-light-500"
                    @click="accordionClicked(rate.question)"
                >
                    {{ rate.question }}

                    <icon
                        class="transform"
                        :class="
                            openedAccordion === rate.question ? 'rotate-90' : ''
                        "
                        name="fluent:chevron-right-20-regular"
                    />
                </div>

                <div
                    v-if="openedAccordion === rate.question"
                    class="pl-4 pt-2 grid gap-2 pb-4"
                >
                    <p>{{ rate.text }}</p>

                    <span
                        v-for="item of rate.list"
                        :key="item"
                        class="flex items-center gap-2"
                    >
                        <span class="-left-3 text-xs">•</span>

                        {{ item }}
                    </span>
                </div>
            </div>
        </page-content>

        <br />

        <page-header scale white> Apply for SRS</page-header>

        <page-content effects grid padding>
            <div class="grid sm:grid-cols-2 gap-4">
                <w-input name="Account Number" />

                <w-input name="Name" />
            </div>

            <residential-apply-card-divider text="mailing" />

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                <w-input
                    name="Address"
                    class="col-span-2 md:col-span-3 lg:col-span-2"
                />

                <w-input
                    name="City"
                    class="col-span-2 md:col-span-1 lg:col-span-2"
                />

                <w-input name="State" />

                <w-input name="Zip" />
            </div>

            <residential-apply-card-divider text="service" />
            <div class="grid md:grid-cols-3 gap-4">
                <w-input name="Address" class="md:col-span-2" />

                <w-input name="Location No." />
            </div>

            <w-input name="Description" />

            <div class="grid gap-2 p-4">
                I hereby certify that the electrical service at the address
                listed above is:

                <ol class="list-decimal pl-8 grid gap-2">
                    <li>
                        For a separately metered location on the
                        <u>same parcel</u>
                        of property as an existing singlefamily dwelling, and;
                    </li>

                    <li>
                        The use of such meter is for
                        <u>residential use only</u>
                        and the personal comfort and convenience of those
                        residing in the single-family dwelling, such as a
                        storage/tool shed, an electric fence, or a detached
                        garage.
                    </li>
                </ol>

                In addition, I understand that:

                <ol class="list-decimal pl-8 grid gap-2" start="3">
                    <li>
                        An employee of Warren RECC may need to inspect the
                        property periodically to verify use of the electric
                        service meets the domestic purposes criteria. By signing
                        below, I grant and authorize Warren RECC and its
                        employees, contractors, and representatives access to
                        enter upon and cross my property.
                    </li>

                    <li>
                        Should it be later determined by Warren RECC, in Warren
                        RECC's sole discretion, that the service does not meet
                        the residential purposes criteria listed above, I will
                        be subject to any and all applicable charges and fees
                        from the date of the initial SRS rate implementation.
                    </li>
                </ol>
            </div>

            <w-check-box
                text="I subscribed, sworn to, and acknowledged the texts before me"
            />

            <br />

            <div>
                <w-button text="Submit Application" size="md" />
            </div>
        </page-content>
    </main>
</template>

<script setup>
import SupplementalRates from '@/assets/scripts/data/residential/supplemental rates'

const openedAccordion = ref('')

const accordionClicked = (question) => {
    if (openedAccordion.value !== question) {
        openedAccordion.value = question

        return
    }

    openedAccordion.value = ''
}
</script>
