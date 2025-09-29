import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function FirstsPage() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Firsts Achieved"
        description="Milestones achieved by Stress Number™ — the first unified behavioral screener in 20 years."
      />

      <Header />

      <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white text-center">
          FIRSTS ACHIEVED
        </h2>
        <p className="text-center text-white mt-2">
          Stress Number™ milestones that make it the first of its kind.
        </p>

        <div className="w-full bg-white lg:py-20 py-10 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                First new validated screener in 20 years
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                First unified score: stress, anxiety, depression
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                First validated cutoff ≤23 (Sens 95%, Spec 79%)
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                First stress screener with AUC up to 0.92
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                First to operationalize Home/Work/Social
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                EPIC-ready &amp; CPT 96127 billable
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                Aligned with CMS Aim 1 (2026)
              </div>
              <div className="pill bg-green-100 rounded-xl py-6 px-4 font-medium">
                Third-party confirmation (GPT-4o)
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
