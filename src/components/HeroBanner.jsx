export default function HeroBanner() {
  return (
    <section className="relative bg-gray-50 py-24 lg:py-32">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Stress Number™
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto">
          Stress Number™ is the first new validated cutoff in behavioral health
          in 20 years — and the first ever to unify{" "}
          <span className="font-semibold text-green-700">
            stress, anxiety, and depression
          </span>{" "}
          into one number.
        </p>
      </div>

      {/* Background gradient for soft effect */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 -z-10"></div> */}
    </section>
  );
}
