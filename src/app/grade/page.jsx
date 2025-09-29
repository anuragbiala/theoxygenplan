"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import React from "react";
import Image from "next/image";
import quizImg from "@/app/images/qq.jpg";

export default function Grade() {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  return (
    <>
      <PageHeadTitle
        title="The Oxygen Plan | Grade"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
      />
      <Header />
      <section className="w-full ">
        <div className="w-full bg-white lg:py-0 flex items-center justify-center ">
          <div className="max-w-screen-xl m-auto">
            <div className="lg:mb-8 mb-2 mt-4">
              <ul class="flex text-sm font-medium text-center justify-center">
                <li class="me-2">
                  <a
                    href="#"
                    class="text-white flex items-center   bg-green-600  font-medium rounded-lg text-sm px-6  py-3 active"
                    aria-current="page"
                  >
                    ALL
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center   bg-gray-200   font-medium rounded-lg text-sm px-6  py-3 active"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center  bg-gray-200 font-medium rounded-lg text-sm px-6  py-3 "
                  >
                    WORK
                  </a>
                </li>
                <li class="me-2">
                  <a
                    href="#"
                    class="text-gray-700 flex items-center   bg-gray-200 font-medium rounded-lg text-sm px-6  py-3 "
                  >
                    SOCIAL
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid lg:grid-cols-4 grid-cols-2 lg:px-0 px-4 mt-5 gap-2">
              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[red]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[red]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[red]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[#FACA15]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[#FACA15]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[#FACA15]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[#057A55]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>

              <div className="relative overflow-hidden  rounded-xl border-[4px] border-[#057A55]">
                <div class="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute z-30 top-2 left-1/2 transform -translate-x-1/2">
                  <h4 className="text-white text-center text-[18px]">
                    Exercise
                  </h4>
                </div>
                <div className="absolute z-30 top-1/2 left-1/2 transform -translate-x-1/2 text-white/70">
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
                <Image
                  className="w-full object-cover rounded-lg "
                  src={quizImg}
                  alt="quiz"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
