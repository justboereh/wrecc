<template>
    <div class="p-4">
        <drawer-item
            v-for="menu of DrawerMenus"
            :key="menu.text"
            :menu="menu"
            :opensub="menu.submenus && menuSubOpened === menu.text"
            @menu="menuClicked"
        />

        <hr class="my-2" />

        <drawer-item
            v-for="menu of DrawerMenusSecondary"
            :key="menu.text"
            :menu="menu"
            :opensub="menu.submenus && menuSubOpened === menu.text"
            @menu="menuClicked"
        />

        <drawer-item
            :menu="{
                text: 'Report An Outage',
                icon: 'fluent:call-24-regular',
            }"
            @menu="callTelephone(2708439710)"
        />

        <drawer-item
            :menu="{
                text: 'Pay By Phone',
                icon: 'fluent:phone-24-regular',
            }"
            @menu="callTelephone(2708426541)"
        />

        <hr class="my-2" />

        <div class="flex items-center justify-around text-2xl">
            <nuxt-link to="http://www.facebook.com/WarrenRECC">
                <icon name="logos:facebook" />
            </nuxt-link>

            <nuxt-link to="http://twitter.com/WarrenRECC">
                <icon name="logos:twitter" />
            </nuxt-link>

            <nuxt-link class="text-base" to="/contact-us">
                Contact Us
            </nuxt-link>
        </div>
    </div>
</template>

<script setup>
import DrawerMenus from '@/assets/scripts/data/navigation/menus'
import DrawerMenusSecondary from '@/assets/scripts/data/navigation/menus secondary'

const isDrawerOpened = useState('useIsDrawerOpened')
const menuSubOpened = ref('')
const router = useRouter()

const menuClicked = (menu) => {
    if (menu.submenus && menuSubOpened.value !== menu.text) {
        menuSubOpened.value = menu.text

        return
    }

    if (menu.submenus && menuSubOpened.value === menu.text) {
        menuSubOpened.value = ''

        return
    }

    if (!menu.to) return

    router.push(menu.to)

    isDrawerOpened.value = false
}

const callTelephone = (number) => location.assign('tel:' + number)

watchEffect(() => {
    if (isDrawerOpened.value) return

    menuSubOpened.value = ''
})
</script>
