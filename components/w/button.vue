<template>
    <button :class="buttonClass">
        {{ text }}

        <icon v-if="icon !== ''" :name="icon" />
    </button>
</template>

<script setup>
const props = defineProps({
    text: { type: String, default: '' },
    icon: { type: String, default: '' },
    size: { type: String, default: 'base' },
    type: { type: String, default: 'primary' },
})

const typeClasses = {
    primary: 'bg-blue text-white ',
    secondary: 'text-blue bg-white ',
    border: 'border border-blue ',
    text: '',
}

const sizeClasses = {
    sm: 'px-4 h-6 text-sm ',
    base: 'px-4 h-8 ',
    md: 'px-6 h-10 text-md ',
    lg: 'px-8 h-12 text-xl ',
}

const buttonClass = computed(() => {
    let result = ''

    if (typeClasses[props.type]) result += typeClasses[props.type]
    if (sizeClasses[props.size]) result += sizeClasses[props.size]

    return result
})
</script>
