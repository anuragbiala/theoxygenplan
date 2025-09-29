"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import React from "react";
import Image from "next/image";
import quizImg from "@/app/images/qq.jpg";

export default function gradedetails() {
  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | gradedetails"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
      />
      <Header />
      <section className="w-full ">
        <div className="w-full bg-white lg:py-0 flex items-center justify-center  h-full">
          <div className="max-w-screen-xl m-auto">
            <div className="lg:mb-8 mb-2 mt-4">
              <ul class="flex text-sm font-medium text-center justify-center">
                <li class="me-2">
                  <a
                    href="#"
                    class="text-white flex items-center   bg-green-600  font-medium rounded-lg text-sm lg:px-6 px-6  py-3 active"
                    aria-current="page"
                  >
                    ALL
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center   bg-gray-200   font-medium rounded-lg text-sm lg:px-6 px-6  py-3 active"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center  bg-gray-200 font-medium rounded-lg text-sm lg:px-6 px-6 py-3 "
                  >
                    WORK
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center   bg-gray-200 font-medium rounded-lg text-sm lg:px-6 px-6  py-3 "
                  >
                    SOCIAL
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-4 flex-wrap lg:px-0 px-5">
              <div className="lg:w-2/5 w-full lg:pt-0 pt-4">
                <div className="   h-full   items-center justify-center rounded-lg">
                  <button className="text-white mb-2 items-center gap-2 w-full block bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm lg:px-6  py-3">
                    Exercise
                  </button>
                  <Image
                    className="w-full rounded-lg"
                    src={quizImg}
                    alt="quiz-image"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 w-full">
                <p className="text-gray-500 lg:mt-[50px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>

                <div className="grid grid-cols-3  items-center justify-center mt-4">
                  <div>
                    <button className="text-white mb-2 items-center gap-2 w-full block bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm lg:px-6  py-3">
                      Done
                    </button>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="h-[50px] w-[50px] bg-green-600 rounded-full flex items-center justify-center text-white">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        fill="currentColor"
                        className="bi bi-lightbulb"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <button className="text-white mb-2 items-center gap-2 w-full block bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm lg:px-6  py-3">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
