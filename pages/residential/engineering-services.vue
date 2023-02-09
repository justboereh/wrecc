<template>
    <main>
        <page-header>Engineering Servies</page-header>

        <page-content>
            <div class="grid gap-4">
                <br />

                <h1>Getting Service to Your House</h1>

                <p>
                    Knowing what is involved with getting service connected to
                    your home lessons the complexity of the transaction. What
                    measures do I take for a new home? What are the necessary
                    steps in connecting an existing home? Do mobile or modular
                    homes pose special requirements?
                </p>

                <p>You have questions- we can help.</p>

                <br />

                <h1>Avoiding Delays</h1>

                <p>
                    Most people seek to obtain service within the time frame
                    that best fits their schedule. Sometimes that is a fast
                    track; sometimes, the process is more methodical. Getting
                    service connected to your home is pretty straightforward,
                    but recognizing all the responsibilities and requirements
                    will assist in avoiding delays. Communicate as many details
                    as possible with the initial contact.
                </p>

                <span
                    v-for="item of AvoidingDelaysList"
                    :key="item"
                    class="relative pl-4 flex"
                >
                    <span
                        class="absolute text-sm left-0 h-6 grid place-items-center"
                    >
                        •
                    </span>

                    {{ item }}
                </span>

                <p>
                    If there are lingering questions regarding the application
                    process, please visit our on-line customer service
                    information

                    <w-link
                        to="/residential/apply"
                    >
                        Applying for Service
                    </w-link>

                    page.
                </p>

                <br />

                <h1>Required Inspections</h1>

                <p>
                    Warren RECC finds satisfaction in providing reliable power.
                    There are many aspects involved with ensuring this, but
                    perhaps one of the more significant elements is confirming
                    proper construction. We have considered many techniques and
                    evaluated applicable construction standards. What we require
                    in the building of our facilities has been proven to be safe
                    and reflects industry regulation.
                </p>

                <p>
                    Overhead construction is a chore primarily coordinated by
                    Warren RECC's Operations division. Safety is a major factor
                    that plays into every project. While there is an electrical
                    inspection required for all service connections, the
                    construction of the supporting “non-electrical” underground
                    facilities is typically handled by contractors and, to a
                    limited degree, by individual property owners. Warren RECC
                    requires inspection of this type of construction.
                </p>

                <span
                    v-for="item of RequiredInspectionsList"
                    :key="item"
                    class="relative pl-4 flex"
                >
                    <span
                        class="absolute text-sm left-0 h-6 grid place-items-center"
                    >
                        •
                    </span>

                    {{ item }}
                </span>

                <p>
                    We do not seek to prolong the process, but rather to
                    preserve safety and guarantee continuity of standards.
                    Requiring inspection(s) during the construction process
                    makes good business logic. As questions arise, please do not
                    hesitate to contact one of our Field Engineers for specific
                    details.
                </p>

                <br />

                <h1>Stages of Construction</h1>

                <div class="grid md:grid-cols-10">
                    <residential-engineering-services-sc-item
                        v-for="(item, index) of StageOfConst"
                        :key="item"
                        :item="item"
                        :step="index + 1"
                        :even="index % 2 === 0"
                        :last="index + 1 === StageOfConst.length"
                    />
                </div>

                <br />

                <h1>Engineering Services</h1>

                <p>
                    Warren RECC's Engineering Services Department offers a
                    variety of services to meet the customer's individual needs.
                    We are committed to helping you find the answers in your
                    areas of interest. Please feel free to contact us.
                </p>

                <p>
                    Telephone:

                    <w-link
                        to="tel:2708425214"
                    >
                        (270) 842-5214
                    </w-link>
                    , Extension 2259
                </p>

                <p>Fax: (270) 781-3299</p>
            </div>
        </page-content>
    </main>
</template>

<script setup>
const AvoidingDelaysList = [
    'Handle the related fees & charges in a timely manner',
    'Do your part. If a stake placement is required, make sure this detail is accomplished.',
    'Communicate any changes or additions.',
    'Please do not hesitate to contact us with questions and/or concerns.',
    'We desire the opportunity to help.',
]

const RequiredInspectionsList = [
    'Trenching (Ditch) Inspection',
    'Conduit Construction Inspection (Prior to cover)',
    'Concrete Structure Inspection (Intermediate & Final)',
    'Electrical Inspection',
]

const StageOfConst = [
    'Make Application for Service',
    'Request Forwarded to Field Engineering',
    'Discuss Project Details',
    'Review Proposed Design',
    'Approve Design',
    'Payment of Fees & Deposits',
    'Materials Ordered',
    'Construction Begins',
    'Inspections & Approval Process',
    'Construction Complete',
]

const topStageHeight = useState('useTopStageHeight', () => 0)
</script>
