<template>
    <nav
        class="sticky top-0 z-10 bg-white border-b border-light-900 md:pr-4 whitespace-nowrap"
    >
        <div class="mx-auto h-16 w-full max-w-7xl flex items-center">
            <nuxt-link to="/" class="h-full p-4 xl:pl-2 2xl:pl-0">
                <svg-logo class="h-full" />
            </nuxt-link>

            <div class="flex-grow min-w-4" />

            <div
                class="w-16 h-16 grid place-items-center text-3xl md:hidden cursor-pointer"
                @click="isDrawerOpened = true"
            >
                <icon name="fluent:line-horizontal-3-20-regular" />
            </div>

            <div class="flex items-center">
                <navigation-item
                    v-for="menu of DrawerMenus"
                    :key="menu.text"
                    :menu="menu"
                    class="cursor-pointer"
                />

                <navigation-item
                    :menu="{
                        icon: 'fluent:line-horizontal-3-20-regular',
                        submenus: DMS,
                    }"
                    class="cursor-pointer lg:hidden"
                />

                <nuxt-link
                    v-for="menu of DMS"
                    :key="menu.text"
                    :to="menu.to || '/'"
                    :title="menu.text"
                    :class="menu.icon ? 'text-xl' : 'font-semibold'"
                    class="cursor-pointer hidden lg:grid place-items-center hover:bg-light-500 p-2"
                >
                    <icon v-if="menu.icon" :name="menu.icon" />

                    {{ menu.icon ? '' : menu.text }}
                </nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import DrawerMenus from '@/assets/scripts/data/navigation/menus'
import DrawerMenusSecondary from '@/assets/scripts/data/navigation/menus secondary'

const DMS = [
    ...DrawerMenusSecondary,
    {
        text: 'Facebook',
        icon: 'logos:facebook',
        to: 'http://www.facebook.com/WarrenRECC',
    },
    {
        text: 'Twitter',
        icon: 'logos:twitter',
        to: 'http://www.twitter.com/WarrenRECC',
    },
    {
        text: 'Contact Us',
        to: '/contact-us',
    },
]

const MenusMore = ref()

const isDrawerOpened = useState('useIsDrawerOpened')
</script>
