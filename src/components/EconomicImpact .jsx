export default function ScienceSection() {
  return (
    <section className="py-20 lg:px-0 px-4">
      <div className="max-w-screen-xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h6 className="font-normal uppercase mb-2">
            <span className="font-semibold text-green-700">The Science</span>
          </h6>
          <h2 className="text-3xl font-semibold mb-3">
            Validation Metrics & Clinical Performance
          </h2>
          <p className="text-base font-normal text-gray-500">
            Validation completed using an adult dataset; item‑level reliability
            pending. Analyses independently confirmed by OpenAI’s GPT‑4o.
          </p>
        </div>

        {/* Science Grid */}
        <div className="grid xl:grid-cols-3 mt-20 md:grid-cols-2 grid-cols-1 items-center rounded-md overflow-hidden border border-gray-400">
          {[
            { value: "AUC0.92", label: "BDI‑II" },
            { value: "AUC0.82", label: "SCL‑90" },
            { value: "≤23", label: "Cutoff" },
            { value: "95%", label: "Sens" },
            { value: "79%", label: "Spec" },
            { value: "✔", label: "Validation completed" },
          ].map((item, index) => (
            <div
              key={index}
              className="group border-b border-gray-400 h-full bg-gray-100"
            >
              <div className="sm:p-10 p-8 text-center">
                <h2 className="text-5xl text-default-950 font-medium mb-4 mt-8">
                  {item.value}
                </h2>
                <p className="text-xl mb-6">{item.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quotes Section */}
        <div className="mt-20 max-w-4xl mx-auto space-y-8 text-gray-700">
          <blockquote className="border-l-4 border-green-700 pl-6 italic">
            “We built Stress Number™ to make screening practical and meaningful
            where people actually live their lives — home, work, and social
            settings. The validation results show it works.” — Eric Lucas,
            Founder & CEO, The Oxygen Plan™
          </blockquote>

          <blockquote className="border-l-4 border-green-700 pl-6 italic">
            “Independent evaluation by OpenAI’s GPT‑4o confirmed that Stress
            Number™ meets clinical psychometric standards with outstanding
            discrimination and an actionable threshold that generalizes across
            established gold standards.” — Third‑party analysis: OpenAI GPT‑4o
          </blockquote>
        </div>

        {/* Why it’s different */}
        <div className="mt-16 max-w-2xl mx-auto text-left space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Why it’s different</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>One tool replaces PHQ‑9 + GAD‑7</li>
            <li>Home / Work / Social domains</li>
            <li>Single score + single cutoff</li>
            <li>EPIC & CPT from day one</li>
            <li>Built for universal screening</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
