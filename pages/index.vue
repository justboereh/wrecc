<template>
    <main>
        <div class="w-full h-md md:h-lg lg:h-screen-sm relative">
            <div
                ref="landingImageElement"
                class="-z-1 absolute w-full h-lg md:h-xl lg:h-screen-md bg-cover bg-center"
                :style="{ backgroundImage: `url('${landingImageUrl}')` }"
            />
        </div>

        <div class="p-4">
            <div
                class="bg-blue text-white border-4 border-white max-w-7xl mx-auto p-4 md:p-8 lg:p-12"
            >
                <header class="font-semibold text-2xl flex items-center gap-4">
                    Recent Updates

                    <span
                        class="flex-grow h-px bg-gradient-to-r from-white to-blue"
                    />
                </header>

                <br />

                <div class="grid gap-4 lg:grid-cols-3">
                    <div
                        v-for="update of recentUpdates"
                        :key="update.slug"
                        class="bg-white text-black p-4 flex flex-col gap-4 h-full"
                    >
                        <p class="font-bold text-black/50">{{ update.date }}</p>

                        <p class="font-semibold text-xl">
                            {{ update.title }}
                        </p>

                        <p class="flex-grow">
                            {{ update.desc }}
                        </p>

                        <nuxt-link :to="update.slug">
                            Read more

                            <icon name="fluent:chevron-right-20-regular" />
                        </nuxt-link>
                    </div>
                </div>
            </div>

            <div class="p-4 md:p-8 lg:p-12" />

            <div class="max-w-7xl mx-auto relative">
                <header class="font-semibold text-2xl flex items-center gap-4">
                    View Outages

                    <span
                        class="flex-grow h-px bg-gradient-to-r from-blue to-white"
                    />
                </header>

                <br />

                <div class="relative overflow-hidden border-4 border-blue">
                    <iframe
                        class="w-full"
                        src="http://12.153.21.72:82/"
                        frameborder="0"
                    />

                    <nuxt-link
                        to="http://12.153.21.72:82/"
                        target="_blank"
                        class="sm:hidden absolute top-0 left-0 w-full h-full bg-blue text-white flex flex-col justify-center items-center"
                    >
                        <div>
                            View Current Outage

                            <icon
                                class="transform scale-75"
                                name="fluent:open-20-regular"
                            />
                        </div>

                        <p class="text-sm opacity-50">
                            Device too small to view on this website.
                        </p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useElementBounding } from '@vueuse/core'

import LandingImageSizes from '~~/assets/scripts/data/home/landing image sizes'
import recentUpdates from '~~/assets/scripts/data/home/recent updates'

const landingImageElement = ref(null)
const landingImageUrl = ref('/img/landing image/sm.jpg')
const { width: LIEWidth } = useElementBounding(landingImageElement)

onMounted(() => {
    if (LIEWidth.value === 0) return

    for (const size of LandingImageSizes) {
        if (LIEWidth.value > size.width) continue

        landingImageUrl.value = size.url

        break
    }
})
</script>

<style scope>
iframe {
    aspect-ratio: 16/9;
}
</style>
