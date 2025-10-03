import Image from "next/image";
import arrowOne from "@/app/images/arrow-1.png";
import arrowTwo from "@/app/images/arrow-2.png";

export default function UnifiedScreener() {
  return (
    <section className="py-24 lg:px-0 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Heading */}
        <div className="text-center">
          <h6 className="font-normal uppercase mb-2">
            The First Unified{" "}
            <span className="font-semibold">Behavioral Screener</span>
          </h6>
          <h2 className="text-3xl font-semibold mb-3">
            The First Unified Behavioral Screener in 20 Years
          </h2>
          <p className="text-base font-normal text-gray-500 whitespace-nowrap">
            One validated score across stress, anxiety, and depression —
            replacing multiple tools with a single, EPIC-ready solution.
          </p>
          {/* <p className="text-base font-normal text-gray-500 max-w-2xl mx-auto">
            One validated score across stress, anxiety, and depression —
            replacing multiple tools with a single, EPIC-ready solution.
          </p> */}
          <div className="flex gap-4 justify-center mt-6">
            <button className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all">
              Download Validation Packet
            </button>
            {/* <a
              href="/files/Stress_Number_Psychometric_Packet.pdf"
              download
              className="px-6 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-all"
            >
              Download Validation Packet
            </a> */}
            <a
              href="/partners"
              className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all"
            >
              Explore Partnerships
            </a>
          </div>
        </div>

        {/* Grid Section */}
        <div className="mt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
            {/* Column 1 */}
            <div className="relative text-center">
              <span
                className="inline-flex relative z-0 bg-blue-500/10 h-24 w-24 items-center justify-center"
                style={{ borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%" }}
              >
                <span className="text-blue-700 text-xl font-bold">AUC</span>
              </span>
              <h5 className="text-xl font-semibold mb-3 mt-5">AUC 0.92</h5>
              <p className="text-base text-gray-500">
                Sensitivity 95% <br /> Specificity 79%
              </p>
              <div className="hidden lg:block">
                <Image
                  src={arrowOne}
                  className="absolute -right-16 top-2/4 w-28"
                  alt="arrow"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative text-center">
              <span
                className="inline-flex relative z-0 bg-amber-500/10 h-24 w-24 items-center justify-center"
                style={{ borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%" }}
              >
                <span className="text-amber-700 text-xl font-bold">CMS</span>
              </span>
              <h5 className="text-xl font-semibold mb-3 mt-5">
                CMS Aim 1 Aligned
              </h5>
              <p className="text-base text-gray-500">
                CPT 96127 Billable <br /> EPIC-Ready
              </p>
              <div className="hidden lg:block">
                <Image
                  src={arrowTwo}
                  className="absolute -right-20 top-2/4 w-28"
                  alt="arrow"
                  crossOrigin="anonymous"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="text-center">
              <span
                className="inline-flex relative z-0 bg-emerald-500/10 h-24 w-24 items-center justify-center"
                style={{ borderRadius: "28% 72% 50% 50%/26% 20% 80% 74%" }}
              >
                <span className="text-emerald-700 text-xl font-bold">
                  Cutoff
                </span>
              </span>
              <h5 className="text-xl font-semibold mb-3 mt-5">
                ≤ 23 ROC (BDI-II)
              </h5>
              <p className="text-base text-gray-500">AUC 0.92</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
