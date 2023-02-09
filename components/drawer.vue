<template>
    <div
        ref="drawerElement"
        class="w-screen fixed flex z-20 justify-end bottom-0 left-0 overflow-hidden"
        :class="isDrawerOpened ? 'bg-black/75' : 'pointer-events-none'"
        :style="{ height: `${drawerHeight}px` }"
        @click.self="isDrawerOpened = false"
    >
        <div
            class="grid place-items-center p-5 absolute right-3/4 text-xl transform"
            :class="isDrawerOpened ? '' : '-translate-y-full'"
            @click="isDrawerOpened = false"
        >
            <icon class="text-white" name="fluent:dismiss-48-filled" />
        </div>

        <div
            class="w-3/4 h-full bg-white transform pointer-events-auto overflow-auto"
            :class="isDrawerOpened ? '' : 'translate-x-full'"
        >
            <drawer-content />
        </div>
    </div>
</template>

<script setup>
import { useElementBounding, useWindowSize } from '@vueuse/core'

const drawerElement = ref(null)
const isDrawerOpened = useState('useIsDrawerOpened')

const { bottom: drawerHeight } = useElementBounding(drawerElement)
const { width: windowWidth } = useWindowSize()
</script>
