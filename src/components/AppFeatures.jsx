export default function AppFeatures() {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 lg:text-left text-center lg:order-1 order-1">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-black">The </span>
              <span className="text-green-700">Problem</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Behavioral health screening hasn’t evolved in two decades. Teams
              juggle the PHQ‑9 (depression), the GAD‑7 (anxiety), and ad‑hoc
              stress surveys. Workflows are complex. Patients slip through.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 mt-12 lg:mt-0 lg:text-left text-center lg:order-2 order-2">
            <h1 className="text-4xl font-bold mb-4">
              <span className="text-black">Mandate </span>
              <span className="text-red-600">& </span>
              <span className="text-green-700">Momentum</span>
            </h1>

            <div className="space-y-4">
              {[
                "Universal behavioral health screening required by 2026 (CMS Aim 1)",
                "Clinician time is scarce — one instrument must do more",
                "Systems need EPIC‑ready, CPT‑billable tools",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
