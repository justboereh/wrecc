// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['nuxt-windicss', 'nuxt-icon'],
    app: {
        head: {
            link: [
                { rel: 'icon', href: '/favicon.ico' },
                {
                    rel: 'shortcut icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'apple-touch-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },
    experimental: { payloadExtraction: false },
    build: {
        rollupOptions: {
            external: ['/img/KentuckyLiving logo.png'],
        },
    },
})
