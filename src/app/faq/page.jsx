"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first FAQ by default

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "What is Flowbite?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 text-left">
            Flowbite is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
        </>
      ),
    },
    {
      question: "Is there a Figma file available?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 text-left">
            Flowbite is first designed using Figma, so all components have a
            Figma equivalent.
          </p>
        </>
      ),
    },
    {
      question: "What are the differences between Flowbite and Tailwind UI?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 text-left">
            Flowbite is open-source under the MIT license, while Tailwind UI is
            a paid product.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | FAQ"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
      />
      <Header />

      <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0 text-center">
        <h2 className="font-[700] lg:text-4xl text-2xl text-white">FAQ</h2>
        <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
          <div className="max-w-screen-xl m-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="border border-gray-200">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className={`flex items-center justify-between w-full p-5 font-medium text-left text-white   focus:ring-4 focus:ring-gray-200 gap-3 bg-gray-700 ${
                    index === 0 ? "rounded-t-xl" : ""
                  }`}
                >
                  <span>{item.question}</span>
                  <svg
                    className={`w-3 h-3 transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="p-5 border-t border-gray-200 bg-gray-100">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
