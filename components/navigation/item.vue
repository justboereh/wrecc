<template>
    <span
        ref="menuElement"
        class="h-16 hidden md:grid place-items-center"
        @wheel.prevent
    >
        <span
            ref="buttonElement"
            class="font-semibold hover:bg-light-500 lg:p-2 md:p-1"
            :class="
                menu.text === undefined && menu.icon
                    ? 'grid place-items-center text-2xl'
                    : ''
            "
            :style="
                menu.text === undefined && menu.icon
                    ? { width: `${buttonHeight}px` }
                    : ''
            "
        >
            {{ menu.text }}

            <icon
                v-if="menu.text === undefined && menu.icon"
                :name="menu.icon"
            />
        </span>

        <div
            ref="contentElement"
            class="absolute top-full mt-2 bg-white border grid grid-cols-2 p-4 gap-4 transform cursor-default"
            :class="showContent ? '' : 'opacity-0 scale-95 pointer-events-none'"
            :style="{ left: contentleft }"
        >
            <nuxt-link
                v-for="submenu of menu.submenus"
                :key="submenu.text"
                :to="submenu.to || '/'"
                class="hover:underline flex items-center gap-2"
            >
                <icon v-if="submenu.icon" :name="submenu.icon" />

                {{ submenu.text }}
            </nuxt-link>
        </div>
    </span>
</template>

<script setup>
import {
    useElementBounding,
    useElementHover,
    watchDebounced,
    useWindowSize,
} from '@vueuse/core'
import { watchEffect } from 'vue'

defineProps({ menu: Object, contentclass: String })

const menuElement = ref(null)
const buttonElement = ref(null)
const contentElement = ref(null)

const { left: menuLeft, right: menuRight } = useElementBounding(menuElement)
const { height: buttonHeight } = useElementBounding(buttonElement)
const { width: contentWidth } = useElementBounding(contentElement)
const { width: windowWidth } = useWindowSize()

const menuHovering = useElementHover(menuElement)
const contentHovering = useElementHover(contentElement)

const showContent = ref(false)

const contentleft = computed(() => {
    const rightOfContent = contentWidth.value + menuLeft.value

    if (rightOfContent <= windowWidth.value) {
        return `calc(${menuLeft.value}px)`
    }

    const left = menuRight.value - contentWidth.value

    if (left >= 0) return `calc(${left}px - 1rem)`

    const center = menuLeft.value + (menuRight.value - menuLeft.value) / 2

    return `calc(${center - contentWidth.value / 2}px - 1rem)`
})

watchDebounced(
    [menuHovering, contentHovering],
    ([menu, content]) => {
        const isEither = menu || content

        showContent.value = isEither
    },
    {
        debounce: 50,
        maxWait: 200,
    }
)
</script>
