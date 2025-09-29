import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function SciencePage() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | The Science"
        description="Validated results and psychometric performance of Stress Number™"
      />

      <Header />

      <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center">
          THE SCIENCE
        </h2>
        <p className="text-center text-white mt-2">
          Stress Number™ validated with strong psychometric results.
        </p>

        <div className="w-full bg-white lg:py-20 py-10 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto grid lg:grid-cols-2 gap-10">
            {/* Left side: Metrics & Quotes */}
            <div>
              <ul className="grid grid-cols-2 gap-4 text-center mb-6">
                <li className="p-4 bg-green-100 rounded-lg">
                  <span className="block text-sm">AUC</span>
                  <strong className="text-xl">0.92</strong> (BDI-II)
                </li>
                <li className="p-4 bg-green-100 rounded-lg">
                  <span className="block text-sm">AUC</span>
                  <strong className="text-xl">0.82</strong> (SCL-90)
                </li>
                <li className="p-4 bg-green-100 rounded-lg">
                  <span className="block text-sm">Cutoff</span>
                  <strong className="text-xl">≤ 23</strong>
                </li>
                <li className="p-4 bg-green-100 rounded-lg">
                  <span className="block text-sm">Sens</span>
                  <strong className="text-xl">95%</strong>
                </li>
                <li className="p-4 bg-green-100 rounded-lg col-span-2">
                  <span className="block text-sm">Spec</span>
                  <strong className="text-xl">79%</strong>
                </li>
              </ul>

              <p className="text-gray-600 text-sm mb-6">
                Validation completed using an adult dataset; item-level
                reliability pending. Analyses independently confirmed by
                OpenAI’s GPT-4o.
              </p>

              <div className="space-y-6">
                <blockquote className="p-4 border-l-4 border-green-600 bg-gray-50 rounded">
                  “We built Stress Number™ to make screening practical and
                  meaningful where people actually live their lives — home,
                  work, and social settings. The validation results show it
                  works.”
                  <cite className="block mt-2 text-sm font-semibold text-gray-700">
                    — Eric Lucas, Founder & CEO, The Oxygen Plan™
                  </cite>
                </blockquote>
                <blockquote className="p-4 border-l-4 border-green-600 bg-gray-50 rounded">
                  “Independent evaluation by OpenAI’s GPT-4o confirmed that
                  Stress Number™ meets clinical psychometric standards with
                  outstanding discrimination and an actionable threshold that
                  generalizes across established gold standards.”
                  <cite className="block mt-2 text-sm font-semibold text-gray-700">
                    — Third-party analysis: OpenAI GPT-4o
                  </cite>
                </blockquote>
              </div>
            </div>

            {/* Right side: Why it's different */}
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl shadow-sm h-fit">
              <h3 className="text-xl font-semibold mb-4">Why it’s different</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>One tool replaces PHQ-9 + GAD-7</li>
                <li>Home / Work / Social domains</li>
                <li>Single score + single cutoff</li>
                <li>EPIC &amp; CPT from day one</li>
                <li>Built for universal screening</li>
              </ul>
              <a
                href="/docs/Psychometric_Validation_Packet_REAL_FULL.docx"
                className="mt-6 inline-block px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all"
              >
                Download Packet
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
