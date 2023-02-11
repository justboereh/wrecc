<template>
    <div class="p-4">
        <div
            class="max-w-7xl mx-auto"
            v-bind="useAttrs()"
            :class="`${effects ? 'border border-light-900 bg-white' : ''} ${
                padding ? 'p-4' : ''
            } ${grid ? 'flex flex-col gap-4' : ''}`"
        >
            <slot />
        </div>
    </div>
</template>

<script setup>
defineProps({ effects: Boolean, padding: Boolean, spacing: Boolean })
</script>
