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
        <p className="text-center text-white mt-2">
          Now onboarding founding partners across Medicaid, health systems,
          payers, and employers. Limited preferred slots available.
        </p>

        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            <section className="mb-32">
              <div className="container px-6 md:px-12">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  md:py-16 md:px-12 backdrop-blur-[30px] border border-gray-300">
                  <div className="flex flex-wrap">
                    {/* Left side */}
                    <div className="mb-12 w-full lg:mb-0 lg:w-6/12 lg:px-6">
                      <h3 className="text-2xl font-semibold mb-4">
                        Partnership Opportunities
                      </h3>
                      <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        <li>Medicaid pilots &amp; 1115 waivers</li>
                        <li>Health system EPIC integrations</li>
                        <li>Payer quality &amp; screening mandates</li>
                        <li>Employer/EAP workforce programs</li>
                      </ul>
                      <a
                        href="/"
                        className="mt-6 inline-block px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all"
                      >
                        Request a Briefing
                      </a>
                    </div>

                    {/* Right side */}
                    <div className="w-full lg:w-6/12 lg:px-6">
                      <div className="p-6 bg-white rounded-xl shadow-md h-full">
                        <h3 className="text-xl font-semibold mb-4">
                          Implementation Kit
                        </h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>EPIC build spec &amp; flowsheet</li>
                          <li>BPA at ≤23 &amp; routing</li>
                          <li>96127 billing tip sheet</li>
                          <li>Training slidelet (2–3 min)</li>
                        </ul>
                      </div>
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
