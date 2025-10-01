export default function AnchorsSection() {
  const anchors = [
    {
      title: "Validation Badge",
      description:
        "🧬 Clinically Validated (≤23 cutoff, AUC 0.92, Sens 95%, Spec 79%)",
    },
    {
      title: "Partnership Badge",
      description: "🤝 In Collaboration With Mayo Clinic Researchers",
    },
    {
      title: "Policy Badge",
      description: "🏛️ CMS Aim 1 Aligned — Universal Screening Ready",
    },
    {
      title: "Tech Badge",
      description: "💻 EPIC/EHR-Ready · CPT 96127 Billable",
    },
    {
      title: "Third-Party Confirmation",
      description: "🔒 Independent Verification by OpenAI GPT-4o",
    },
  ];

  return (
    <section className="py-16 bg-green-50 lg:px-0 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 text-center text-green-900 relative inline-block">
          Suggested Anchors
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-20 h-1 bg-green-600 rounded-full"></span>
        </h2>

        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6">
          {anchors.map((anchor, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {anchor.title}
              </h3>
              <p className="text-gray-700 text-base">{anchor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
