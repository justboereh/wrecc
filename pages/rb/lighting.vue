<template>
    <main>
        <page-header>Lighting</page-header>

        <page-content grid>
            <p>
                Warren RECC offers many ways to use lighting to improve the
                quality of life while providing safety and security for homes or
                businesses. A few of these lighting services are listed below.
                Contact your local Warren RECC office for details.
            </p>

            <h1>Flood Lighting</h1>

            <p>
                If you manage public areas that require lighting for customer
                convenience or to prevent accidents and vandalism, you may be
                interested in Warren RECC's Flood Lighting Program. Schools,
                shopping centers, industrial parking lots, convenience stores,
                automobile dealers and equipment display areas are ideally
                suited for this service.
            </p>

            <p>
                For the best lighting quality in higher traffic areas, Warren
                RECC offers high-pressure sodium flood lighting. The lights are
                photocell controlled and available in three wattages:
            </p>
        </page-content>

        <page-content effects>
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(grid-cols-3 gap-12 p-12) p-4 gap-4"
            >
                <page-card-pricing
                    v-for="item of FloodLighting"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </page-content>

        <page-content grid>
            <p>
                Rates shown are for lights on existing poles. The charge for an
                additional pole or transformer will be $2.50 per month, plus a
                $300 non-refundable charge for each. TVA Energy Fuel Cost for
                lights is .04441 cents per kWh, plus facilities charge.
            </p>

            <p>
                A high quality, utility grade light fixture is installed and
                maintained by the Cooperative. The monthly charge also includes
                the energy used by the light, as well as normal monthly
                maintenance. When a transformer or additional pole is needed,
                there will be an additional monthly charge, plus a $300
                non-refundable charge for each. Prices are subject to change as
                the cost of equipment and energy changes.
            </p>

            <p>
                Warren RECC will assist in designing the most efficient and
                economical flood lighting system for your location.
            </p>

            <h1>Security Lighting</h1>

            <p>
                Feel more secure, while protecting your home or business, by
                leasing a Warren RECC security light. You'll be using the best
                outdoor lighting equipment available while saving on energy and
                maintenance costs. A photoelectric cell turns the light on and
                off automatically, so you never have to worry about it - even
                when you are away.
            </p>
        </page-content>

        <page-content effects>
            <div
                class="grid md:(grid-cols-2 gap-8 p-8) xl:(gap-12 p-12) p-4 gap-4"
            >
                <page-card-pricing
                    v-for="item of SecurityLighting"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </page-content>

        <page-content grid>
            <p>
                A high quality, utility grade light fixture is installed and
                maintained by the Cooperative. The monthly charge also includes
                the energy used by the light, as well as normal monthly
                maintenance. When a transformer or additional pole is needed,
                there will be an additional monthly charge, plus a $300
                non-refundable charge for each.
            </p>

            <b>
                Prices are subject to change as the cost of equipment and energy
                changes.
            </b>

            <h1>Lighting Design</h1>

            <p>
                Warren RECC offers assistance to homeowners and businesses in
                designing and using lighting fixtures for the most efficient and
                aesthetic use.
            </p>

            <p>
                <w-link
                    to="http://www.light-link.com/"
                >
                    InterLight
                </w-link>

                provides information on many resources on designing, selecting,
                and purchasing lighting equipment.
            </p>

            <p>
                <w-link to="http://www.light-link.com/">
                    The National Lighting Bureau
                </w-link>

                provides information and related web sites for the commercial
                and industrial customer who is seeking information on various
                types of lighting.
            </p>
        </page-content>
    </main>
</template>

<script setup>
import {
    FloodLighting,
    SecurityLighting,
} from '@/assets/scripts/data/residential/lighting pricings'
</script>
