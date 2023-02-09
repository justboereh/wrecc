<template>
    <div class="relative min-h-screen" id="layout__default">
        <navigation />
        <drawer />

        <slot />

        

        <footer
            class="w-full py-8 mt-8 grid place-items-center bg-blue text-white font-semibold"
        >
            Service is what we do for you!
        </footer>
    </div>
</template>

<script setup>
import '~/assets/main.css'

const isDrawerOpened = useState('useIsDrawerOpened', () => false)

watch(isDrawerOpened, (value) => {
    if (!document) return

    const intent = value ? 'add' : 'remove'

    document.body.classList[intent]('overflow-hidden')
})
</script>

<style>
footer {
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>
