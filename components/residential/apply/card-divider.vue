<template>
    <div class="flex gap-2 items-center pt-8">
        <span class="h-px flex-grow bg-light-900" />

        <span class="uppercase font-semibold text-black/50 text-xs">
            {{ text }}
        </span>

        <span class="h-px flex-grow bg-light-900" />
    </div>
</template>

<script setup>
defineProps({ text: String })
</script>
