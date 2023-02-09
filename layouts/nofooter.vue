<template>
    <div class="layout__default">
        <navigation ref="navigationElement" />
        <drawer />

        <slot />
    </div>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'

import '~/assets/main.css'

const navigationElement = ref(null)

const { height: navigationHeight } = useElementBounding(navigationElement)

const useNavigationHeight = useState('useNavigationHeight', () => 0)
const isDrawerOpened = useState('useIsDrawerOpened', () => false)

watchEffect(() => {
    useNavigationHeight.value = navigationHeight.value
})

watch(isDrawerOpened, (value) => {
    if (!document) return

    const intent = value ? 'add' : 'remove'

    document.body.classList[intent]('overflow-hidden')
})
</script>
