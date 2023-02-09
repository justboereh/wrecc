<template>
    <section class="w-full max-w-7xl">
        <header class="uppercase">{{ header }}</header>

        <div
            class="border p-4 mt-4 grid gap-4"
            :class="disabled ? 'opacity-25 pointer-events-none' : ''"
        >
            <slot />
        </div>
    </section>
</template>

<script setup>
defineProps({ header: String, disabled: Boolean })
</script>
