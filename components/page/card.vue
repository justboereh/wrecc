<template>
    <div class="p-4">
        <h2 v-if="header" class="max-w-7xl mx-auto uppercase">{{ header }}</h2>

        <div class="py-1" />

        <div
            class="max-w-7xl mx-auto bg-white"
            v-bind="useAttrs()"
            :class="`${effects ? 'border border-light-900' : ''} ${
                padding ? 'p-4' : ''
            } ${grid ? 'grid gap-4' : ''}`"
        >
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({
    header: String,
    effects: Boolean,
    padding: Boolean,
    grid: Boolean,
    disabled: Boolean,
})
</script>
