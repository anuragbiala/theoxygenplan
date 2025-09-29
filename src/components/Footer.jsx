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
                          className="inline-flex items-center justify-center gap-2 px-6 absolute top-[6px] end-[6px] h-9 bg-green-700  text-white rounded-md transition-all duration-500 hover:bg-primary hover:text-white"
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
              <div>
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
                    <Link href="/contact" passHref legacyBehavior>
                      <a className="text-base text-default-700 hover:text-default-950 transition-all">
                        Contact
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">
                    Social Media
                  </h5>
                  <li className="flex items-center gap-5 group">
                    <a
                      className="h-10 w-10 inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg transition-all duration-700 group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700"
                      href=""
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <h5 className="text-base font-medium text-default-800">
                      Facebook
                    </h5>
                  </li>
                  <li className="flex items-center gap-5 group">
                    <a
                      className="h-10 w-10 inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg transition-all duration-700 group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700"
                      href=""
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                    <h5 className="text-base font-medium text-default-800">
                      Instagram
                    </h5>
                  </li>
                  <li className="flex items-center gap-5 group">
                    <a
                      className="h-10 w-10 inline-flex items-center justify-center border border-gray-300 text-gray-800 rounded-lg transition-all duration-700 group-hover:bg-green-700 group-hover:text-white group-hover:border-green-700"
                      href=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={15}
                        height={15}
                        fill="currentColor"
                        strokeWidth={2}
                        className="bi bi-twitter-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                      </svg>
                    </a>
                    <h5 className="text-base font-medium text-default-800">
                      Twitter
                    </h5>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-3">
                  <h5 className="xl:text-xl lg:text-lg font-medium text-default-800 mb-2">
                    Legal &amp; Press
                  </h5>

                  <p className="flex items-center text-sm font-medium text-dark ">
                    <span className="mr-3 text-green-700">
                      <svg
                        className="w-6 h-6  "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6.97825 3.99999c-.3729 0-.74128.08169-1.07926.23933-.32394.1511-.61243.36846-.84696.63787-1.81892 1.82189-2.35302 3.87423-1.89899 5.93671.43916 1.9949 1.77747 3.8929 3.45642 5.572 1.67897 1.6791 3.57614 3.0176 5.57034 3.4591 2.0612.4563 4.1141-.0726 5.9396-1.8853.2705-.2348.4888-.524.6405-.8489.1581-.3387.2401-.7081.2401-1.0819 0-.3739-.082-.7432-.2401-1.0819-.1516-.3247-.3696-.6137-.6398-.8483l-1.2098-1.2106c-.5043-.5041-1.1879-.7872-1.9007-.7872-.7128 0-1.3968.2835-1.9011.7876l-.6178.6181c-.1512.1513-.3563.2363-.5701.2363-.2138 0-.4189-.085-.5701-.2363l-1.85336-1.8545c-.15117-.1513-.23609-.3565-.23609-.5704 0-.214.08493-.4192.23613-.5705l.61812-.61851c.5037-.50461.7867-1.18868.7867-1.90191s-.2833-1.39767-.7871-1.90228L8.90499 4.8778c-.23462-.26969-.5233-.48727-.84749-.63848-.33798-.15764-.70636-.23933-1.07925-.23933Z" />
                        <path
                          fillRule="evenodd"
                          d="M14.9925 3.99996c0-.55228.4477-.99999 1-.99999l3.03.00002c.5523 0 1 .44772 1 1v2.98135c0 .55228-.4478 1-1 1-.5523 0-1-.44772-1-1v-.58113l-3.3184 3.29112c-.3921.38887-1.0253.38627-1.4142-.00583-.3889-.39213-.3863-1.02529.0059-1.4142l3.2983-3.27133h-.6016c-.5523 0-1-.44772-1-1.00001Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span> (+1) 91636-6660</span>
                  </p>

                  <p className="flex items-center text-sm font-medium text-dark  mt-5">
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

                  <p className="flex items-center text-sm font-medium text-dark  mt-5">
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
                    <span>
                      {" "}
                      St. Louis, Park, Minnesota 55416 , United States
                    </span>
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 max-w-screen-xl mx-auto px-4">
          <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start">
            <p className="text-base text-default-900">
              © The Oxygen Plan™. Validation completed with collaborating
              researchers; independent confirmation by OpenAI GPT‑4o.
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
