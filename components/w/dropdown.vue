<template>
    <span ref="containerElement" class="relative">
        <p
            v-if="name"
            ref="nameElement"
            class="uppercase text-sm text-black/75 font-bold mb-1"
        >
            {{ name }}
        </p>

        <div
            ref="buttonElement"
            class="bg-white border gap-2 px-2 h-10 relative flex items-center select-none"
            :class="showContent ? 'border-blue' : ''"
            @click="isButtonClicked = true"
        >
            {{ modelValue.text || modelValue }}

            <p v-if="modelValue === ''" class="text-black/50">
                {{ placeholder }}
            </p>

            <span class="flex-grow" />

            <icon v-if="arrow" name="fluent:chevron-right-20-regular" />
        </div>

        <div
            ref="contentElement"
            class="absolute min-w-full my-2 z-10 bg-white border transform p-2"
            :class="showContent ? '' : 'scale-95 opacity-0 pointer-events-none'"
            :style="{ top: contentTop + 'px' }"
        >
            <div
                v-for="item of list"
                :key="item.text || item"
                class="p-2 hover:bg-light-500 cursor-pointer"
                @click="$emit('update:modelValue', item), (showContent = false)"
            >
                {{ item.text || item }}
            </div>
        </div>
    </span>
</template>

<script setup>
import {
    watchDebounced,
    useElementHover,
    onClickOutside,
    useElementBounding,
    useWindowSize,
} from '@vueuse/core'

defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: { type: String, default: '' },
    placeholder: { type: String, default: '' },
    name: { type: String, default: null },
    arrow: { type: Boolean, default: true },
    onhover: { type: Boolean, default: true },
    onclick: { type: Boolean, default: false },
    list: { type: Array, default: [] },
})

const containerElement = ref(null)
const nameElement = ref(null)
const buttonElement = ref(null)
const contentElement = ref(null)
const isButtonClicked = ref(false)

const isButtonHover = useElementHover(buttonElement)
const isContentHover = useElementHover(contentElement)
const isContainerHover = useElementHover(containerElement)
const { height: nameHeight } = useElementBounding(nameElement)
const { height: contentHeight } = useElementBounding(contentElement)
const {
    bottom: buttonBottom,
    top: buttonTop,
    height: buttonHeight,
} = useElementBounding(buttonElement)
const { height: windowHeight } = useWindowSize()

const isMobile = ref(false)

const showContent = ref(null)

const contentTop = computed(() => {
    const wouldBeBottom = buttonBottom.value + contentHeight.value

    if (wouldBeBottom > windowHeight.value) {
        return 0 - contentHeight.value
    }

    return buttonHeight.value + nameHeight.value
})

watchDebounced(
    [isButtonHover, isContentHover, isButtonClicked],
    ([buttonHover, contentHover, buttonClicked]) => {
        if (contentHover && !(isMobile && buttonClicked))
            return (showContent.value = true)
        if (props.onhover) return (showContent.value = buttonHover)
        if (props.onclick) return (showContent.value = buttonClicked)

        showContent.value = true
    },
    {
        debounce: 50,
        maxWait: 200,
    }
)

onClickOutside(containerElement, () => {
    if (!props.onclick) return

    showContent.value = false
})

onMounted(() => {
    if (!navigator) return

    isMobile.value =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
})
</script>
