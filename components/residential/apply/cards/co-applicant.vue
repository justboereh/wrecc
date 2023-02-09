<template>
    <residential-apply-card header="Co-Applicant (optional)">
        <div class="grid sm:grid-cols-2 gap-4">
            <w-input
                v-model="name"
                placeholder="co-applicant's name"
                name="Name"
            />

            <w-input
                v-model="email"
                placeholder="you@example.com"
                name="Email Address"
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
    </residential-apply-card>
</template>

<script setup>
const emit = defineEmits(['data'])

const name = ref('')
const email = ref('')
const phone = ref('')
const altPhone = ref('')
const dateOfBirth = ref('')
const driverLicense = ref('')

watchEffect(() => {
    emit('data', {})
})
</script>
