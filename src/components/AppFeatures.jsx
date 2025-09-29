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

        {/* Bottom Center - App Buttons */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="#"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-6 py-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
              />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">Mac App Store</div>
            </div>
          </a>

          <a
            href="#"
            className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 text-white rounded-xl px-6 py-4 shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
              />
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
