<template>
    <span>
        <p v-if="name" class="uppercase text-sm text-black/75 font-bold mb-1">
            {{ name }}
        </p>

        <div
            class="flex gap-0.5 bg-white border hover:border-blue px-2 h-10 cursor-text select-none"
            :class="isFocused ? 'border-blue' : ''"
            @click="focusInput"
        >
            <span class="uppercase text-xs text-black/50 font-bold">
                {{ suffix }}
            </span>

            <input
                ref="inputElement"
                type="text"
                class="bg-transparent outline-none border-0 select-all h-full"
                :value="modelValue"
                :placeholder="placeholder"
                @focus="isFocused = true"
                @blur="isFocused = false"
                @input="$emit('update:modelValue', $event.target.value)"
            />

            <span class="uppercase text-xs text-black/50 font-bold">
                {{ suffix }}
            </span>
        </div>
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

const focusInput = () => {
    if (!inputElement.value) return

    inputElement.value.focus()
}
</script>
