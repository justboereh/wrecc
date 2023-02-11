<template>
    <main>
        <page-header>Developers / Contractors</page-header>

        <page-content spacing>
            <p>
                Setting up regular lines of communication is an effective way to
                maintain your building schedule. It is our desire to meet your
                needs and help you fulfill your obligations.
            </p>

            <p>
                Please contact Warren RECC prior to starting any new project to
                ensure you are aware of all related costs.
            </p>

            <h1>Downloadable Forms</h1>

            <div class="grid md:(grid-cols-2) gap-4">
                <span
                    v-for="form of forms"
                    :key="form.name"
                    class="p-4 bg-white border flex flex-col gap-1"
                >
                    <p class="font-bold">{{ form.name }}</p>

                    <div class="pl-4 flex flex-col items-end">
                        <w-link
                            v-for="link of form.links"
                            :key="link.text"
                            :to="link.to"
                            class="py-1"
                        >
                            {{ link.text }}
                        </w-link>
                    </div>
                </span>
            </div>
        </page-content>
    </main>
</template>

<script setup>
const forms = [
    {
        name: 'Forms',
        links: [
            {
                text: 'Electrical Request/Load Form',
                to: 'http://www.wrecc.com/wp-content/uploads/2014/08/Electrical-Request-Load-Form.pdf',
            },
            {
                text: 'Right-of-Way Easement – Member Extension',
                to: 'http://www.wrecc.com/wp-content/uploads/2020/11/Right-of-Way-Easement-EO-ENG-10.pdf',
            },
        ],
    },
    {
        name: 'Foundations',
        links: [
            {
                text: 'Street Light (Light Pole 14ft. & Below)',
                to: 'http://www.wrecc.com/wp-content/uploads/2014/02/UF-5-12.pdf',
            },
            {
                text: 'Street Light (Light Pole 30ft. & Above)',
                to: 'http://www.wrecc.com/wp-content/uploads/2014/04/ST-LG2-1.pdf',
            },
            {
                text: 'Street Light (Highway Projects, Light Pole 30ft. & above)',
                to: 'http://www.wrecc.com/wp-content/uploads/2014/04/ST-LG3-1.pdf',
            },
            {
                text: 'Padmount Transformer (No Barrier Wall)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/TX-PM-PAD_A.pdf',
            },
            {
                text: 'Padmount Transformer (With Barrier Wall)',
                to: 'http://www.wrecc.com/wp-content/uploads/2021/03/Padmount-Transformer-With-Barrier-Wall.pdf',
            },
        ],
    },
    {
        name: 'Primary Units',
        links: [
            {
                text: 'Single Phase Pull Box (UM1-14, Polymer Concrete)',
                to: 'http://www.wrecc.com/wp-content/uploads/2014/02/UM1-14-Polymer-Concrete-Flush-Mount-Single-Phase-Pull-Box.pdf',
            },
            {
                text: 'Three Phase Pull Box (UM1-34, Polymer Concrete)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/Three-Phase-Pull-Box-UM1-34.pdf',
            },
            {
                text: 'Ground Sleeve Assembly (UM1-7D)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/Ground-Sleeve-Assembly-UM1-7D.pdf',
            },
        ],
    },
    {
        name: 'Ditch Details',
        links: [
            {
                text: 'Primary Ditch (1 Conduit)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/PrimaryDitch-1-Conduit.pdf',
            },
            {
                text: 'Primary Ditch (3 Conduits)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/PrimaryDitch-3-Conduits.pdf',
            },
            {
                text: 'Secondary Ditch',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/SecondaryDitch.pdf',
            },
        ],
    },
    {
        name: 'Distribution Center',
        links: [
            {
                text: 'Distribution Center with Slip Joint (DC-2A)',
                to: 'http://www.wrecc.com/wp-content/uploads/2022/03/Distribution-Center-with-Slip-Joint-DC-2A.pdf',
            },
        ],
    },
]
</script>
