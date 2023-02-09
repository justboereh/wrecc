<template>
    <span class="flex flex-col">
        <p v-if="name" class="uppercase text-sm text-black/75 font-bold mb-1">
            {{ name }}
        </p>

        <textarea
            ref="inputElement"
            type="text"
            class="bg-transparent outline-none border hover:border-blue select-all w-full p-2"
            :class="isFocused ? 'border-blue' : 'border-light-900'"
            :value="modelValue"
            @focus="isFocused = true"
            @blur="isFocused = false"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </span>
</template>

<script setup>
defineProps({
    suffix: String,
    prefix: String,
    placeholder: String,
    modelValue: String,
    name: String,
})

const inputElement = ref(null)
const isFocused = ref(false)
</script>
