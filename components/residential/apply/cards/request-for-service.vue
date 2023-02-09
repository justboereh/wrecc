<template>
    <residential-apply-card header="request for service">
        <div class="flex gap-4 items-center">
            <w-check-box v-model="newConstruction" />

            I am building a new construction.
        </div>

        <div class="flex gap-4 items-center">
            <w-check-box v-model="previousCustomer" />

            I have previously had service with Warren RECC.
        </div>

        <div class="flex gap-4 items-center">
            <w-check-box v-model="alreadyHaveService" />

            I have service with Warren RECC.
        </div>

        <w-input
            v-model="desiredServiceDate"
            placeholder="mm/dd/yyyy"
            name="Desired Service Date"
            class="max-w-lg"
        />
    </residential-apply-card>
</template>

<script setup>
const emit = defineEmits(['data'])

const newConstruction = ref(false)
const previousCustomer = ref(false)
const alreadyHaveService = ref(false)
const desiredServiceDate = ref('')

const test = ref('')

watchEffect(() => {
    emit('data', {
        newconstruction: newConstruction.value,
        previouscustomer: previousCustomer.value,
        alreadycustomer: alreadyHaveService.value,
    })
})
</script>
