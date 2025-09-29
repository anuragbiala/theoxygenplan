export default function FirstsAchieved() {
  const firsts = [
    "First new validated screener in 20 years",
    "First unified score: stress, anxiety, depression",
    "First validated cutoff ≤23 (Sens 95%, Spec 79%)",
    "First stress screener with AUC up to 0.92",
    "First to operationalize Home/Work/Social",
    "EPIC‑ready & CPT 96127 billable",
    "Aligned with CMS Aim 1 (2026)",
    "Third‑party confirmation (GPT-4o)",
  ];

  return (
    <section className="py-20 lg:px-0 px-4 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h6 className="font-normal uppercase mb-2 text-gray-600">
            <span className="font-semibold text-green-700">Firsts</span>{" "}
            Achieved
          </h6>
          <h2 className="text-3xl font-bold mb-3 text-gray-900">
            Key Milestones in Stress Screening
          </h2>
          <p className="text-base font-normal text-gray-500">
            Clinically Validated & Third-party Confirmed (GPT‑4o)
          </p>
        </div>

        {/* Grid */}
        <div className="grid xl:grid-cols-3 mt-20 md:grid-cols-2 grid-cols-1 gap-8">
          {firsts.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl shadow-md p-8 flex items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Top accent line */}
              <span className="absolute top-0 left-0 w-16 h-1 bg-green-500 rounded-tr-xl rounded-tl-xl"></span>

              <h5 className="text-center text-lg md:text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                {item}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
