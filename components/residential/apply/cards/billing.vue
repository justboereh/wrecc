<template>
    <residential-apply-card header="Billing">
        <w-dropdown
            v-model="billingOption"
            name="Billing Option"
            class="max-w-lg"
            :list="['Credit/Debit Card', 'Cash', 'Check']"
        />

        <div v-if="billingOption === 'Credit/Debit Card'" class="grid gap-4">
            <residential-apply-card-divider text="Card Info" />

            <div class="grid grid-cols-8 gap-4">
                <w-input
                    v-model="cardName"
                    class="col-span-8"
                    name="Name"
                    placeholder=""
                />

                <w-input
                    v-model="cardNumber"
                    class="col-span-8 md:col-span-4"
                    name="card number"
                    placeholder="0000-0000-0000-0000"
                />

                <w-input
                    v-model="cardExpiration"
                    class="col-span-6 md:col-span-2"
                    name="expiration date"
                    placeholder="mm/yy"
                />

                <w-input
                    v-model="cardCCV"
                    class="col-span-2"
                    name="CCV"
                    placeholder="000"
                />
            </div>
        </div>

        <residential-apply-card-divider text="Subscriptions" />

        <w-check-box v-model="subToKLM">
            <span class="flex items-center gap-2">
                Subscribe to

                <img
                    class="h-5"
                    src="/img/KentuckyLiving-logo.png"
                    alt="KentuckyLiving logo"
                />

                (FREE)
            </span>
        </w-check-box>

        <w-check-box
            v-model="subToOWH"
            text="Operation Warm Hearts: (Donate by rounding bill up to next dollar)"
        />
    </residential-apply-card>
</template>

<script setup>
const billingOption = ref('')
const cardName = ref('')
const cardNumber = ref('')
const cardExpiration = ref('')
const cardCCV = ref('')
const subToKLM = ref(false)
const subToOWH = ref(false)
</script>
