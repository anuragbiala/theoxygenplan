import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function PartnersPage() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Partnerships"
        description="Now onboarding founding partners across Medicaid, health systems, payers, and employers."
      />

      <Header />

      <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center">
          PARTNERSHIPS
        </h2>
        {/* <p className="text-center text-white mt-2">
          Now onboarding founding partners across Medicaid, health systems,
          payers, and employers. Limited preferred slots available.
        </p> */}

        <div className="w-full bg-white lg:py-20 py-10 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            <section className="mb-32">
              <div className="container px-6 md:px-12">
                <div className="block rounded-lg bg-green-50 px-6 py-12 shadow-[0_4px_30px_rgba(0,0,0,0.1)] md:py-16 md:px-12 border border-green-200">
                  <div className="flex flex-wrap">
                    {/* Full width text */}
                    <div className="w-full lg:w-full lg:px-6">
                      <h3 className="text-3xl font-bold mb-6 text-green-800 text-center">
                        Health Equity & Policy Alignment
                      </h3>
                      <ul className="list-disc pl-6 space-y-4 text-gray-700 text-lg">
                        <li>
                          <strong>
                            Universal Screening, Universal Access:
                          </strong>{" "}
                          Stress Number™ ensures every patient — regardless of
                          background — gets measured on the same validated
                          scale. No guesswork. No bias.
                        </li>
                        <li>
                          <strong>Medicaid & Underserved Populations:</strong>{" "}
                          Aligned with CMS Aim 1 (2026), Stress Number™ was
                          designed for Medicaid pilots, 1115 waivers, and
                          community health equity initiatives.
                        </li>
                        <li>
                          <strong>
                            First Validated Cutoff for Stress (≤23):
                          </strong>{" "}
                          This breakthrough cutoff makes stress measurable,
                          billable, and actionable — giving underserved
                          populations the same standard of care as anyone else.
                        </li>
                        <li>
                          <strong>CPT 96127 Billable & EPIC-Ready:</strong>{" "}
                          Because equity isn’t real until it’s practical. Stress
                          Number™ works in the systems clinicians already use
                          and unlocks reimbursement.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
