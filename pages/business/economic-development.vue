<template>
    <main>
        <page-header scale> Economic Development </page-header>

        <page-content spacing>
            <iframe
                ref="iFrameElement"
                class="w-full aspect-video border border-light-900"
                src="https://www.youtube.com/embed/4DToPNuyqjs?controls=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
            ></iframe>

            <p>
                Warren RECC is committed to developing innovative solutions for
                our members. Here, Warren RECC and TVA partner to bring the
                Green Invest program to the General Motors Corvette Assembly
                Plant.
            </p>

            <h1>Leadership</h1>

            <p>
                Warren RECC has taken a leadership role in the economic
                development efforts of South Central Kentucky. Our staff works
                closely with economic development professionals in Barren,
                Butler, Edmonson, Grayson, Logan, Ohio, Simpson, and Warren
                counties. Our goal is to ensure that our industrial and
                commercial prospects and existing customers considering
                expansion receive the information and assistance they need in a
                timely manner.
            </p>

            <h1>Team</h1>

            <p>
                Our team of Economic Development professionals consists of a
                rate specialist, power and field engineers, and a power quality
                specialist.
            </p>

            <p>
                We understand that reliable and prompt information is essential
                to site selection decision makers considering our service area.
                Our goal is to provide you with thorough information about our
                rates, reliability, infrastructure and available services.
            </p>

            <h1>Available Sites/Buildings</h1>

            <p>
                To search Warren RECC's service territory for available
                commercial/industrial sites, visit
                <w-link to="www.tvasites.com">www.tvasites.com</w-link>.
            </p>

            <h1>Incentives</h1>

            <p>
                For qualified industrial and commercial customers, Warren RECC,
                in partnership with TVA, (
                <w-link to="www.tvaed.com"> www.tvaed.com </w-link>
                ) offers financial incentives to assist with certain
                infrastructure costs and rate incentives to lower overall
                operating cost in the service area.
            </p>

            <h1>Local Economic Development and Chamber of Commerce Partners</h1>

            <div class="grid gap-4 md:grid-cols-2">
                <span
                    v-for="partner of Partners"
                    :key="partner.name"
                    class="p-4 bg-white border flex flex-col gap-1"
                >
                    <p class="font-bold">{{ partner.name }}</p>

                    <div class="pl-4 flex flex-col items-end">
                        <w-link
                            v-for="link of partner.links"
                            :key="partner.text"
                            :to="link.to"
                            class="py-1"
                        >
                            {{ link.text }}
                        </w-link>
                    </div>
                </span>
            </div>
        </page-content>

        <page-card effects grid padding header="Contact Us">
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <w-input name="Name" input-wow="true" />

                <w-input name="phone number" placeholder="000-000-0000" />

                <w-input
                    class="sm:col-span-2 md:col-span-1"
                    name="email"
                    placeholder="you@example.com"
                />
            </div>

            <w-input name="Subject" />

            <w-textarea name="Message" />

            <residential-apply-card-divider text="Verification" />

            <div class="grid sm:grid-cols-4 gap-4">
                <w-input class="sm:col-span-3" name="Enter the code" />

                <div class="flex items-end">
                    <div
                        class="h-10 w-full grid place-items-center border border-light-900"
                    >
                        Code: {{ randomNumber() }}
                    </div>
                </div>
            </div>

            <div>
                <w-button text="Submit" size="md" />
            </div>
        </page-card>
    </main>
</template>

<script setup>
const Partners = [
    {
        name: 'Barren County',
        links: [
            {
                text: 'Industrial Development Economic Authority',
                to: 'http://www.glasgowbarrenidea.com/',
            },
        ],
    },
    {
        name: 'Butler County',
        links: [
            {
                text: 'City of Morgantown and Butler County',
                to: 'http://www.morgantown-ky.com/',
            },
            {
                text: 'Butler County Economic Development',
                to: 'http://www.southcentralky.com/main/butler-county',
            },
        ],
    },
    {
        name: 'Edmonson County',
        links: [
            {
                text: 'Chamber of Commerce',
                to: 'http://www.edmonsonchamber.com/',
            },
            {
                text: 'Edmonson County Economic Development',
                to: 'http://www.southcentralky.com/main/edmonson-county',
            },
        ],
    },
    {
        name: 'Grayson County',
        links: [
            {
                text: 'Chamber of Commerce',
                to: 'http://www.graysoncountychamber.com/',
            },
        ],
    },
    {
        name: 'Logan County',
        links: [
            {
                text: 'Logan Economic Alliance for Development',
                to: 'http://www.loganleads.com/',
            },
        ],
    },
    {
        name: 'Ohio County',
        links: [
            {
                text: 'Ohio County Economic Development Alliance',
                to: 'http://www.ohiocounty.com/oceda-about/',
            },
        ],
    },
    {
        name: 'Simpson County',
        links: [
            {
                text: 'Franklin-Simpson Industrial Authority',
                to: 'http://www.f-sindustry.com/',
            },
        ],
    },
    {
        name: 'Warren County',
        links: [
            {
                text: 'Bowling Green Area Chamber of Commerce',
                to: 'http://www.bgchamber.com/',
            },
            {
                text: 'Warren County Economic Development',
                to: 'http://www.southcentralky.com/',
            },
        ],
    },
]

const randomNumber = () => {
    return Math.floor(Math.random() * 100 + 100)
}
</script>
