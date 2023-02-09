<template>
    <div
        class="font-bold text-3xl p-4 relative"
        :class="`${white ? '' : 'text-white h-40'}`"
    >
        <div
            class="absolute -z-1 h-full w-full top-0 left-0"
            :class="`${scale ? 'transform scale-175 translate-y-15' : ''} ${
                white ? 'bg-white' : 'bg-blue'
            }`"
        />

        <span class="max-w-7xl mx-auto h-full grid place-items-center">
            <p>
                <slot />
            </p>
        </span>
    </div>
</template>

<script setup>
defineProps({ scale: Boolean, white: Boolean })
</script>
