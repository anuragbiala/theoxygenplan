"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/app/images/logo.webp";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      const id = e.currentTarget.getAttribute("href").slice(1);
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        const prefersReduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      }
    };

    links.forEach((a) => a.addEventListener("click", handleClick));
    return () =>
      links.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  return (
    <header>
      <div className="whatsApp fixed bottom-[20px] right-[20px] z-40">
        <a href="" target="-blank">
          <span className="w-[50px] h-[50px] flex items-center justify-center bg-[#25d366] rounded-[100px]">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z"
              />
            </svg>
          </span>
        </a>
      </div>
      <div>
        {/* Top Bar */}
        <div className="topBar bg-gray-700 text-white lg:py-0 py-1">
          <div className="max-w-screen-xl m-auto">
            <div className="lg:flex row flex-wrap justify-between items-center">
              <div className="lg:w-7/12 px-5 text-left  hidden lg:block">
                <div className="h-full inline-flex items-center py-3 me-4">
                  <span className="text-sm font-medium flex">
                    <span className="text-yellow-300">
                      <svg
                        className="w-6 h-6"
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
                    St. Louis, Park, Minnesota 55416 , United States
                  </span>
                </div>
              </div>
              <div className="lg:w-5/12 px-5 text-right">
                <div className="flex items-center justify-end gap-2">
                  <a
                    href=" "
                    target="_blank"
                    className="flex items-center justify-center w-8 h-8   border rounded-lg text-dark hover:border-primary hover:bg-primary border-stroke  hover:text-white  "
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth={1}
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
                  <a
                    href=" "
                    target="_blank"
                    className="flex items-center justify-center w-8 h-8   border rounded-lg text-dark hover:border-primary hover:bg-primary border-stroke  hover:text-white   "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      fill="currentColor"
                      className="bi bi-twitter-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg>
                  </a>

                  {/* <Link href="/signin" passHref legacyBehavior>
                    <button className="text-gray-800 flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 font-medium rounded-lg text-sm lg:px-6 px-3 lg:py-2 py-1">
                      Sign In
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-white w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
            <Link href="/" passHref legacyBehavior>
              <a className="flex items-center space-x-3 rtl:space-x-reverse">
                <Image
                  className="lg:w-[200px] w-[130px]"
                  src={logo}
                  alt="logo"
                  crossOrigin="anonymous"
                />
              </a>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-2">
              {/* <Link href="/quiz" passHref legacyBehavior>
                <button className="text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm lg:px-6 px-3 lg:py-3 py-1">
                  Take test
                </button>
              </Link> */}
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isOpen ? "block" : "hidden"
              }`}
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                <li>
                  <Link href="/science" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-gray-900 md:p-0">
                      Science
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/solution" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0">
                      Solution
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/firsts" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0">
                      Firsts
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/partners" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0">
                      Partners
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0">
                      FAQ
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" passHref legacyBehavior>
                    <a className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-700 md:p-0">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
