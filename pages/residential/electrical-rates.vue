<template>
    <main>
        <page-header scale>Electrical Rates</page-header>

        <page-content effects>
            <div class="grid md:(grid-cols-2 gap-8 p-8) p-4 gap-4">
                <page-card-pricing
                    v-for="item of ElectricalRates"
                    :key="item.name"
                    :item="item"
                />
            </div>
        </page-content>

        <page-content grid>
            <p class="text-sm">*Add 3 percent school tax</p>

            <p>Effective: October 1, 2022</p>

            <h1>TVA Energy Fuel Cost</h1>

            <p>
                TVA Energy Fuel Cost refers to the cost of the fuel- the
                uranium, coal, and natural gas- that TVA must purchase in order
                to generate your electricity. It is a per kilowatt hour charge,
                and is determined on a monthly basis by TVA. For more
                information, visit
                <w-link
                    to="https://tva.com/Energy/Our-Power-System/Total-Monthly-Fuel-Costs"
                >
                    tva.com.
                </w-link>
            </p>

            <p>
                For the month of February 2023, the rate for residential members
                is $0.03637 per kilowatt hour used.
            </p>

            <ol class="pl-4 list-disc">
                <li>1,000 kWh at $0.03637 = $36.37</li>
                <li>1,400 kWh at $0.03637 = $50.92</li>
                <li>2,500 kWh at $0.03637 = $90.93</li>
            </ol>

            <h1>Your Warren RECC Bill</h1>

            <p>
                Still confused? Check out this

                <w-link
                    to="http://www.wrecc.com/wp-content/uploads/2022/11/Warren-Understanding-Your-Bill_8.5x11-Handout-digital.pdf"
                >
                    handy guide
                </w-link>

                that explains each section of your Warren RECC bill.
            </p>

            <h1>What Can You Do?</h1>

            <p>
                You have control. By lowering your consumption you can reduce
                the amount of your electric bill and the fuel cost.

                <w-link
                    to="http://www.wrecc.com/energy-efficiency-tips-2/"
                >
                    Here are some points to remember.
                </w-link>
            </p>

            <p>
                Increased usage can be because more heating is required due to
                colder temperatures, you use more hot water, or cook more during
                holidays. Knowing What Uses Watts can help you control electric
                usage.

                <w-link
                    to="http://www.wrecc.com/what-uses-watts-in-your-home/"
                >
                    Read more...
                </w-link>
            </p>

            <h1>Explanation of Charges</h1>

            <p>
                Member charges are based on the Cooperative's cost of providing
                certain services to individual members. Members using these
                services pay for them so rates may be kept low for other members
                who do not need these special services. Other charges may be
                applicable in special situations. Deposits and charges are
                subject to change.
            </p>
        </page-content>
    </main>
</template>

<script setup>
import ElectricalRates from '@/assets/scripts/data/residential/electrical rates'
</script>
