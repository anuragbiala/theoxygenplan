import Image from "next/image";
import partnershipImg from "@/app/images/mission.jpg"; // you can replace with a relevant image
export default function Partnerships() {
  return (
    <section
      id="partnerships"
      className="py-10 lg:py-20 bg-gray-50 lg:px-0 px-4"
    >
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h6 className="font-normal uppercase mb-2">
            <span className="font-semibold text-green-700">Partnerships</span> &
            Implementation Kit
          </h6>
          <h2 className="text-3xl font-semibold mb-3">
            Expanding Reach & Operational Excellence
          </h2>
          <p className="text-base font-normal text-gray-500">
            Now onboarding founding partners across Medicaid, health systems,
            payers, and employers. Limited preferred slots available.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-10">
          {/* Left Column: Partnerships */}
          <div className="space-y-6 my-auto">
            {[
              "Medicaid pilots & 1115 waivers",
              "Health system EPIC integrations",
              "Payer quality & screening mandates",
              "Employer/EAP workforce programs",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 group rounded-xl drop-shadow-md bg-white"
              >
                <h2 className="text-2xl font-medium text-default-950 mt-2">
                  {item}
                </h2>
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

          {/* Right Column: Implementation Kit */}
          <div className="space-y-6 my-auto">
            {[
              "EPIC build spec & flowsheet",
              "BPA at ≤23 & routing",
              "96127 billing tip sheet",
              "Training slidelet (2–3 min)",
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 group rounded-xl drop-shadow-md bg-white"
              >
                <h2 className="text-2xl font-medium text-default-950 mt-2">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
