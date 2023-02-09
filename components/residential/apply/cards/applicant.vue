<template>
    <residential-apply-card header="Applicant">
        <div class="grid sm:grid-cols-2 gap-4">
            <w-input
                v-model="name"
                placeholder="applicant's name"
                name="Name"
            />

            <w-input
                v-model="email"
                placeholder="you@example.com"
                name="Email Address"
            />
        </div>

        <div class="grid gap-4 md:grid-cols-2">
            <w-dropdown
                v-model="gender"
                name="Gender"
                :list="['Male', 'Female', 'Other', 'Apache Helicopter']"
            />

            <w-dropdown
                v-model="race"
                name="Race"
                :list="[
                    'White',
                    'Black or African American',
                    'Hispanic or Latino',
                    'Asian',
                    'American Indian/Alaska Native',
                    'Native Hawaiian or Pacific Islander',
                    'Other',
                    'I DO NOT WISH TO DISCLOSE',
                ]"
            />
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
            <w-input
                v-model="phone"
                placeholder="123-456-7890"
                name="Primary Phone Number"
            />

            <w-input
                v-model="altPhone"
                placeholder="123-456-7890"
                name="Other Phone Number (optional)"
            />
        </div>

        <div class="grid sm:grid-cols-2 gap-4">
            <w-input
                v-model="dateOfBirth"
                placeholder="mm/dd/yyyy"
                name="Date of Birth"
            />

            <w-input
                v-model="driverLicense"
                placeholder="000-000-000"
                name="Driver license number"
            />
        </div>

        <residential-apply-card-divider text="SERVICE Address" />

        <w-input v-model="serviceAddress" name="Address" />

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <w-input
                v-model="serviceAddressCity"
                name="City"
                class="sm:col-span-3"
            />

            <w-input v-model="serviceAddressZip" name="Zip Code" />
        </div>

        <div class="flex gap-4 items-center">
            <w-check-box v-model="primaryResidence" />

            Is this a primary resident?
        </div>

        <residential-apply-card-divider text="Mailing Address" />

        <w-input v-model="mailingAddress" name="Address" />

        <div class="grid sm:grid-cols-2 gap-4">
            <w-input v-model="mailingAddressCity" name="City" />

            <div class="grid grid-cols-2 gap-4">
                <w-input v-model="mailingAddressState" name="State" />
                <w-input v-model="mailingAddressZip" name="Zip Code" />
            </div>
        </div>
    </residential-apply-card>
</template>

<script setup>
const emit = defineEmits(['data'])

const name = ref('')
const gender = ref('')
const race = ref('')
const email = ref('')
const phone = ref('')
const altPhone = ref('')
const dateOfBirth = ref('')
const driverLicense = ref('')
const desiredServiceDate = ref('')
const serviceAddress = ref('')
const serviceAddressCity = ref('')
const serviceAddressZip = ref('')
const primaryResidence = ref(false)
const mailingAddress = ref('')
const mailingAddressCity = ref('')
const mailingAddressState = ref('')
const mailingAddressZip = ref('')

watchEffect(() => {
    emit('data', {
        desiredServiceDate: desiredServiceDate.value,
    })
})
</script>
