import PageHeadTitle from "@/components/PageHeadTitle";

export default function ContactPage() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Contact"
        description="Media, clinical/scientific, or partnership inquiries — we’ll respond quickly."
      />

      {/* Contact Section */}
      <section className="w-full lg:pt-20 pt-10 pb-0 text-center">
        <h2 className="font-bold lg:text-4xl text-2xl text-green-700">
          CONTACT
        </h2>
      </section>

      {/* Contact Section: Form Left, Map Right */}
      <section className="w-full lg:py-20 py-10 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Form */}
          <div className="lg:w-1/2 w-full bg-white/90 px-6 py-12 md:py-16 rounded-lg shadow-lg border border-gray-300 backdrop-blur-md">
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded border-2 border-gray-300 px-3 py-2 outline-none focus:border-green-700 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded border-2 border-gray-300 px-3 py-2 outline-none focus:border-green-700 transition"
              />
              <input
                type="text"
                placeholder="Organization"
                className="w-full rounded border-2 border-gray-300 px-3 py-2 outline-none focus:border-green-700 transition"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded border-2 border-gray-300 px-3 py-2 outline-none focus:border-green-700 transition"
              />
              <button
                type="button"
                className="w-full text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg py-3 text-center transition"
              >
                Send
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="lg:w-1/2 h-[500px] w-full relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>
    </>
  );
}
