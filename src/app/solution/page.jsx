import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function SolutionPage() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Solution"
        description="The First Unified Behavioral Screener in 20 Years — Stress Number™"
      />

      <Header />

      {/* Hero Section */}
      <section className="bg-green-700 text-white py-16 px-6 lg:px-0">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold">
            The First Unified Behavioral Screener in 20 Years
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            One validated score across <b>stress, anxiety, and depression</b> —
            replacing multiple tools with a single, EPIC-ready solution.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <a
              href="/docs/Psychometric_Validation_Packet_REAL_FULL.docx"
              className="bg-white text-green-700 font-medium px-5 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Validation Packet
            </a>
            <a
              href="/partners"
              className="bg-transparent border border-white px-5 py-3 rounded-lg hover:bg-white hover:text-green-700 transition"
            >
              Explore Partnerships
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {[
              "AUC 0.92",
              "Sensitivity 95%",
              "Specificity 79%",
              "CMS Aim 1 Aligned",
              "CPT 96127 Billable",
              "EPIC-Ready",
            ].map((item, i) => (
              <span
                key={i}
                className="bg-white/20 px-3 py-1 rounded-full text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Problem + Mandate */}
      <section className="py-16 px-6 lg:px-0 bg-white">
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold">The Problem</h2>
            <p className="mt-4 text-gray-700">
              Behavioral health screening hasn’t evolved in two decades. Teams
              juggle the PHQ-9 (depression), the GAD-7 (anxiety), and ad-hoc
              stress surveys. Workflows are complex. Patients slip through.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Mandate & Momentum</h2>
            <ul className="mt-4 list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Universal behavioral health screening required by 2026 (CMS Aim
                1)
              </li>
              <li>Clinician time is scarce — one instrument must do more</li>
              <li>Systems need EPIC-ready, CPT-billable tools</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Stress Number Solution */}
      <section className="py-16 px-6 lg:px-0 bg-gray-50">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">
            Stress Number™ — One Score, Three Conditions
          </h2>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Validated against gold standards with a single actionable cutoff.
            Built for where stress is lived: <b>home, work, and social life</b>.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mt-10">
            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Validated Performance</h3>
              <p className="mt-3 text-gray-600">
                Correlations: r = –0.69 (BDI-II), r = –0.64 (SCL-90). AUC up to
                0.92 with sensitivity 95% and specificity 79% at ≤23.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Operational Fit</h3>
              <p className="mt-3 text-gray-600">
                EPIC flowsheet-ready with Best Practice Advisory at ≤23. Bill
                under CPT 96127. Simple training for MA/RN workflows.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h3 className="text-lg font-semibold">Policy Alignment</h3>
              <p className="mt-3 text-gray-600">
                Explicitly aligned with CMS Aim 1 universal screening. Ideal for
                Medicaid pilots, waivers, and payer quality programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-16 px-6 lg:px-0 bg-white">
        <div className="max-w-screen-xl mx-auto text-center">
          <h2 className="text-2xl font-semibold">Validated Performance</h2>
          <p className="mt-4 text-gray-700">
            Independent analyses confirmed by OpenAI’s GPT-4o.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            <div className="p-6 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-500">ROC (BDI-II)</p>
              <p className="text-2xl font-bold">AUC 0.92</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-500">Cutoff</p>
              <p className="text-2xl font-bold">≤ 23</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-500">Sensitivity</p>
              <p className="text-2xl font-bold">95%</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg">
              <p className="text-sm text-gray-500">Specificity</p>
              <p className="text-2xl font-bold">79%</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
