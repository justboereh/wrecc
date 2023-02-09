<template>
    <residential-apply-card header="building informations">
        <div class="grid md:grid-cols-2 gap-4">
            <w-dropdown
                v-model="purchaseMethod"
                :list="['Buying this location', 'Renting this location']"
                name="location purchase method"
            />

            <w-input v-model="landlordName" name="Landlord's name" />
        </div>

        <div class="grid md:grid-cols-2 gap-4">
            <w-dropdown
                v-model="structureDesc"
                :list="['House', 'Mobile Home']"
                name="structure description"
            />

            <w-dropdown
                v-model="structureLocation"
                :list="['Onsite', 'Offsite', 'In space / Other']"
                name="structure location"
            />
        </div>

        <div class="grid md:(items-center grid-cols-3) gap-4">
            <w-check-box
                v-model="structureLighting"
                text="Security lighting at location."
            />

            <w-check-box
                v-if="structureLighting"
                v-model="structureLightingConnected"
                text="I want the security lighting connected."
            />
        </div>
    </residential-apply-card>
</template>

<script setup>
const emit = defineEmits(['data'])

const purchaseMethod = ref('')
const landlordName = ref('')
const structureDesc = ref('')
const structureLocation = ref('')
const structureLighting = ref(false)
const structureLightingConnected = ref(false)

watchEffect(() => {
    emit('data', {})
})
</script>
