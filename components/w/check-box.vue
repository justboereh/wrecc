<template>
    <span class="flex items-center gap-2">
        <span
            class="w-5 h-5 min-w-5 relative border grid place-items-center select-none cursor-pointer"
            :class="modelValue ? 'border-blue bg-blue' : 'bg-light-500'"
            @click="$emit('update:modelValue', !modelValue)"
        >
            <icon
                class="absolute text-white"
                :class="modelValue ? '' : 'opacity-0'"
                name="fluent:checkmark-16-regular"
            />
        </span>

        <p v-if="text">{{ text }}</p>

        <slot />
    </span>
</template>

<script setup>
defineEmits(['update:modelValue'])
defineProps({ modelValue: Boolean, text: String })
</script>
