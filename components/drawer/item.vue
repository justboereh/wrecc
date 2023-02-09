<template>
    <div>
        <div
            class="flex items-center justify-between p-2 cursor-pointer hover:bg-light-500"
            @click="$emit('menu', menu)"
        >
            <div class="flex items-center gap-4 font-semibold">
                <icon :name="menu.icon" />

                {{ menu.text }}
            </div>

            <icon
                v-if="menu.submenus"
                class="transform"
                :class="opensub ? 'rotate-90' : ''"
                name="fluent:chevron-right-20-regular"
            />
        </div>

        <div v-if="opensub" class="pl-10 grid">
            <div
                v-for="submenu of menu.submenus"
                :key="submenu.text"
                class="py-2 cursor-pointer hover:underline"
                @click="$emit('menu', submenu)"
            >
                {{ submenu.text }}
            </div>
        </div>
    </div>
</template>

<script setup>
defineEmits(['menu'])
defineProps({ menu: Object, opensub: Boolean })
</script>
