export default function StressNumber() {
  return (
    <>
      <section className="py-20 lg:px-0 px-4">
        <div className="max-w-screen-xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-3xl mx-auto">
            <h6 className="font-normal uppercase mb-2">
              <span className="font-semibold text-green-700">
                Stress Number™
              </span>{" "}
              — One Score, Three Conditions
            </h6>
            <h2 className="text-3xl font-semibold mb-3">
              Validated against gold standards with a single actionable cutoff.
            </h2>
            <p className="text-base font-normal text-gray-500">
              Built for where stress is lived: home, work, and social life.
            </p>
          </div>

          {/* Cards */}
          <div className="rounded-xl bg-default-100 bg-cover bg-no-repeat mt-10">
            <div className="container">
              <div className="relative">
                <div className="rounded-md p-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                    {/* Validated Performance */}
                    <div className="rounded-xl bg-blue-500/10 p-6 py-12 text-center drop-shadow-md">
                      <h2 className="text-2xl font-medium text-blue-700">
                        Validated Performance
                      </h2>
                      <p className="mt-3 text-base text-default-950 text-left">
                        Correlations: r = –0.69 (BDI‑II), r = –0.64 (SCL‑90).
                        AUC up to 0.92 with sensitivity 95% and specificity 79%
                        at ≤23.
                      </p>
                    </div>

                    {/* Operational Fit */}
                    <div className="rounded-xl bg-amber-500/10 p-6 py-12 text-center drop-shadow-md">
                      <h2 className="text-2xl font-medium text-amber-700">
                        Operational Fit
                      </h2>
                      <p className="mt-3 text-base text-default-950 text-left">
                        EPIC flowsheet‑ready with Best Practice Advisory at ≤23.
                        Bill under CPT 96127. Simple training for MA/RN
                        workflows.
                      </p>
                    </div>

                    {/* Policy Alignment */}
                    <div className="rounded-xl bg-emerald-500/10 p-6 py-12 text-center drop-shadow-md">
                      <h2 className="text-2xl font-medium text-emerald-700">
                        Policy Alignment
                      </h2>
                      <p className="mt-3 text-base text-default-950 text-left">
                        Explicitly aligned with CMS Aim 1 universal screening.
                        Ideal for Medicaid pilots, waivers, and payer quality
                        programs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
