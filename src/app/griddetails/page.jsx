"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import React from "react";
import Image from "next/image";
import quizImg from "@/app/images/s4.png";
import Link from "next/link";

export default function Quiz() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Grid Details"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
      />
      <Header />
      <section className="w-full ">
        <div className="w-full bg-white lg:py-0 flex items-center justify-center lg:h-[calc(100vh-129.31px)] h-full">
          <div className="max-w-[500px] w-full m-auto p-4">
            <div className="bg-green-50 shadow-lg rounded-[30px]">
              <Image
                className="w-full rounded-[30px] rounded-b-none"
                src={quizImg}
                alt="quizImg"
              />
              <div className="p-10">
                <h2 className="text-center text-2xl font-semibold">
                  10-Minute Supercharger
                </h2>

                <h4 className="text-center text-xl text-gray-800 pt-3">
                  Lorem ipsum is placeholder text commonly used
                </h4>
                <div className="text-center pt-4">
                  <span className="text-gray-500  text-xl"> 10 min</span>{" "}
                  <span className="px-2 text-xl">|</span>{" "}
                  <span className="text-green-700 text-xl">
                    Paul R. Scheels, Phd
                  </span>
                </div>

                <p className="text-gray-500 pt-5 font-[300]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>

                <div className="flex items-center justify-between gap-5 my-8">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-heart-fill text-gray-400 w-[30px] h-[30px]"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      className="text-gray-400 w-[50px] h-[50px]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.516 6.743c-.41-.368-.443-1-.077-1.41a.99.99 0 0 1 1.405-.078l5.487 4.948.007.006A2.047 2.047 0 0 1 22 11.721a2.06 2.06 0 0 1-.662 1.51l-5.584 5.09a.99.99 0 0 1-1.404-.07 1.003 1.003 0 0 1 .068-1.412l5.578-5.082a.05.05 0 0 0 .015-.036.051.051 0 0 0-.015-.036l-5.48-4.942Zm-6.543 9.199v-.42a4.168 4.168 0 0 0-2.715 2.415c-.154.382-.44.695-.806.88a1.683 1.683 0 0 1-2.167-.571 1.705 1.705 0 0 1-.279-1.092V15.88c0-3.77 2.526-7.039 5.967-7.573V7.57a1.957 1.957 0 0 1 .993-1.838 1.931 1.931 0 0 1 2.153.184l5.08 4.248a.646.646 0 0 1 .012.011l.011.01a2.098 2.098 0 0 1 .703 1.57 2.108 2.108 0 0 1-.726 1.59l-5.08 4.25a1.933 1.933 0 0 1-2.929-.614 1.957 1.957 0 0 1-.217-1.04Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <svg
                      className="text-gray-400 w-[50px] h-[50px]"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={32}
                      height={32}
                      x={0}
                      y={0}
                      viewBox="0 0 464 464"
                      style={{ enableBackground: "new 0 0 512 512" }}
                      xmlSpace="preserve"
                      className=""
                    >
                      <g>
                        <path
                          d="M416.483 265.441a14.29 14.29 0 0 0-10.295-4.321h-75.52c-5.891 0-10.667-4.776-10.667-10.667V14.293C320.001 6.399 313.602 0 305.708 0H158.721c-7.894 0-14.293 6.399-14.293 14.293v236.16c0 5.891-4.776 10.667-10.667 10.667H58.028c-7.893-.149-14.412 6.128-14.561 14.02a14.295 14.295 0 0 0 4.321 10.513l174.08 174.08A14.298 14.298 0 0 0 231.895 464a14.294 14.294 0 0 0 10.24-4.267l174.08-174.08c5.655-5.507 5.775-14.556.268-20.212z"
                          fill="#9ca3af"
                          opacity={1}
                          data-original="#9ca3af"
                          className=""
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                <button className="text-white flex items-center gap-2 bg-green-600 hover:bg-green-700 font-medium rounded-3xl text-sm  px-6   py-3  w-full text-center justify-center">
                  Play Now
                </button>
              </div>
            </div>

            <div className="py-8">
              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="text-gray-900 flex items-center gap-2 border-green-100 hover:border-green-700
                   border bg-green-100 font-medium rounded-3xl text-sm lg:px-6 px-3 lg:py-3 py-1 hover:text-green-700 cursor-pointer"
                >
                  Before Listing
                </div>

                <div
                  className="text-gray-900 flex items-center gap-2 border-green-100 hover:border-green-700
                   border bg-green-100 font-medium rounded-3xl text-sm lg:px-6 px-3 lg:py-3 py-1 hover:text-green-700 cursor-pointer"
                >
                  Benefits
                </div>
              </div>
            </div>

            <p className="text-gray-500  font-[300] pb-5">
              From its medieval origins to the digital era, learn everything
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
