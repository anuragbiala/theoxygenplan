import Image from "next/image";
import partnershipImg from "@/app/images/mission.jpg";

export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="py-10 lg:py-20 bg-gray-50 lg:px-0 px-4"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h6 className="font-normal uppercase mb-2"></h6>
          <h2 className="text-3xl font-semibold mb-3">
            <span className="text-black">Health Equity</span>{" "}
            <span className="text-red-600">&</span>{" "}
            <span className="text-green-700">Policy Alignment</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {/* Left Column */}
          <div className="space-y-6 my-auto">
            {[
              "Universal Screening, Universal Access",
              "Medicaid & Underserved Populations",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 group rounded-xl drop-shadow-md bg-green-50 border border-green-200"
              >
                <h2 className="text-xl font-medium text-green-800 mt-2">
                  {item}
                </h2>
                <p className="mt-2 text-gray-700 text-base">
                  {item === "Universal Screening, Universal Access"
                    ? "Stress Number™ ensures every patient — regardless of background — gets measured on the same validated scale. No guesswork. No bias."
                    : "Aligned with CMS Aim 1 (2026), Stress Number™ was designed for Medicaid pilots, 1115 waivers, and community health equity initiatives."}
                </p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="drop-shadow-md bg-white rounded-xl">
            <Image
              src={partnershipImg}
              className="h-full w-full rounded-xl"
              alt="partnership"
              crossOrigin="anonymous"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6 my-auto">
            {[
              "First Validated Cutoff for Stress (≤23)",
              "CPT 96127 Billable & EPIC-Ready",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 group rounded-xl drop-shadow-md bg-green-50 border border-green-200"
              >
                <h2 className="text-xl font-medium text-green-800 mt-2">
                  {item}
                </h2>
                <p className="mt-2 text-gray-700 text-base">
                  {item === "First Validated Cutoff for Stress (≤23)"
                    ? "This breakthrough cutoff makes stress measurable, billable, and actionable — giving underserved populations the same standard of care as anyone else."
                    : "Because equity isn’t real until it’s practical. Stress Number™ works in the systems clinicians already use and unlocks reimbursement."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
