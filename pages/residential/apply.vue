<template>
    <main>
        <page-header>Apply for Service (Residential)</page-header>

        <div class="p-4">
            <div class="max-w-7xl mx-auto grid gap-12">
                <residential-apply-cards-request-for-service />

                <residential-apply-cards-applicant />

                <residential-apply-cards-co-applicant />

                <residential-apply-cards-building-info />

                <residential-apply-cards-billing />
            </div>
        </div>
    </main>
</template>

<script setup>
const formData = ref({})

setPageLayout('nofooter')
</script>
