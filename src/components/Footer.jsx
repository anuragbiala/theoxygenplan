import Image from "next/image";
import Link from "next/link";
import logo from "@/app/images/logo.webp";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="border-y border-default-200">
          <div className="max-w-screen-xl mx-auto px-4 py-20">
            <div className="grid xl:grid-cols-5 md:grid-cols-3 gap-10 lg:gap-16">
              {/* Logo + Description + Newsletter */}
              <div className="xl:col-span-2 md:col-span-3">
                <div>
                  <Link href="/" passHref legacyBehavior>
                    <a>
                      <Image
                        className="w-[195px]"
                        src={logo}
                        alt=""
                        crossOrigin="anonymous"
                      />
                    </a>
                  </Link>
                  <p className="text-base text-default-800 mt-6">
                    The Oxygen Plan, is a revolutionary stress reduction program
                    for combating work, home and social stress.
                  </p>
                  <form className="space-y-2 mt-6">
                    <div className="relative w-full">
                      <div className="relative w-full">
                        <input
                          type="email"
                          placeholder="Enter Your Email"
                          name="email"
                          id="email"
                          className="px-3 bg-gray-100 border-gray-300 border focus:ring-0 focus:border-default-200 py-4 ps-4 pe-16 w-full h-12 placeholder:text-default-600 text-default-950 rounded-lg bg-default-100"
                          defaultValue=""
                        />
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-green-700 text-white rounded-md transition-all duration-500 hover:bg-primary hover:text-white"
                        >
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-6 w-6"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M18 8L22 12L18 16" />
                            <path d="M2 12H22" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              {/* Quick Links */}
              <div className="ml-20">
                <ul className="flex flex-col gap-3">
                  <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">
                    Quick Links
                  </h5>
                  <li>
                    <Link href="/science" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Science
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/solution" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Solution
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/firsts" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Firsts
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Partners
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        FAQ
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="ml-12">
                <p className="flex items-center text-sm font-medium text-dark mt-5">
                  <span className="mr-3 text-primary">
                    <svg
                      className="w-6 h-6 text-green-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.541A5.965 5.965 0 0 1 14 10v4a1 1 0 1 1-2 0v-4c0-2.206-1.794-4-4-4-.075 0-.148.012-.22.028C7.686 6.022 7.596 6 7.5 6A4.505 4.505 0 0 0 3 10.5V16a1 1 0 0 0 1 1h7v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3h5a1 1 0 0 0 1-1v-6c0-2.206-1.794-4-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                    </svg>
                  </span>
                  <span> contact@theoxygenplan.com</span>
                </p>

                <p className="flex items-center text-sm font-medium text-dark mt-5">
                  <span className="mr-3 text-primary">
                    <svg
                      className="w-6 h-6 text-green-700"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span> St. Louis, Park, Minnesota 55416, United States</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="py-4 max-w-screen-xl mx-auto px-4">
          <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
            <p className="text-base text-default-900">
              © The Oxygen Plan™. Validation completed with collaborating
              researchers; independent confirmation by OpenAI GPT-4o.
            </p>
            <p className="text-base">
              <a href=" ">Terms Conditions &amp; Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
