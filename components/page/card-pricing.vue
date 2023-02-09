<template>
    <span class="flex flex-col gap-2">
        <header class="text-2xl font-semibold">
            {{ item.name }}
        </header>

        <span
            v-for="pricing of item.pricings || []"
            :key="pricing.text"
            class="flex justify-between items-center gap-4"
            :class="pricing.divider ? 'pl-2' : 'pl-8'"
        >
            <span :class="pricing.divider ? 'text-xs' : ''">
                {{ pricing.text }}
            </span>

            <span v-if="pricing.divider" class="flex-grow h-px bg-light-900" />

            <span
                v-if="!pricing.divider"
                class="whitespace-nowrap flex items-start gap-1 font-bold"
            >
                <span class="text-green-500"> ${{ pricing.price }} </span>

                <span class="text-xs text-black/50">
                    {{ pricing.extra }}
                </span>
            </span>
        </span>
    </span>
</template>

<script setup>
defineProps({ item: Object })
</script>
