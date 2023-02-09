<template>
    <div
        ref="containerElement"
        class="w-full h-10 md:(grid place-items-center) relative"
    >
        <span class="w-6 h-full grid place-items-center">
            <span class="w-px h-10 bg-light-900" />
        </span>
    </div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'

const props = defineProps({
    item: String,
    step: Number,
    last: Boolean,
    even: Boolean,
})

const containerElement = ref(null)
const {} = useElementBounding(containerElement)

const topStageHeight = useState('useTopStageHeight')
</script>
