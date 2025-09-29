"use client";

import { useState } from 'react';
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import React from 'react';
import Accordions from '@/components/Accordions';




export default function Quiz() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    return (
        <>
            <PageHeadTitle
                title="The Oxygen Plan | Result"
                description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
            />
            <Header />
            <section className="w-full ">


                <div className="w-full bg-white lg:py-0 flex items-center justify-center  ">
                    <div className="max-w-screen-xl m-auto lg:min-w-[1200px] ">
                        <h2 className="font-[500] lg:text-2xl text-2xl text-gray-800 lg:py-6 py-3 text-center">February 21, 2025</h2>

                        <div className="lg:mb-8 mb-2">
                            <ul class="flex flex-wrap text-sm font-medium text-center justify-center">
                                <li class="me-2">
                                    <a href="#" class="text-white flex items-center gap-2 bg-green-600  font-medium rounded-lg text-sm px-6  py-3 active" aria-current="page">HOME</a>
                                </li>
                                <li class="me-2">
                                    <a href="#" class="text-gray-700 flex items-center gap-2 bg-gray-200 font-medium rounded-lg text-sm px-6  py-3 ">WORK</a>
                                </li>
                                <li class="me-2">
                                    <a href="#" class="text-gray-700 flex items-center gap-2 bg-gray-200 font-medium rounded-lg text-sm px-6  py-3 ">SOCIAL</a>
                                </li>

                            </ul>

                        </div>
                        <div className="flex lg:gap-4 gap-1 flex-wrap lg:px-0 px-2">
                            <div className="lg:w-2/5 w-full lg:pt-0">
                                <div className="bg-gray-500 border border-gray-200 lg:p-4 min-w-full p-2 w-full lg:min-h-[200px] min-h-[130px] text-center flex items-center justify-center rounded-lg">
                                    <div className="">
                                        <h3 className='text-white lg:text-2xl text-xl font-[500]'>The O2 Plan<sup>TM </sup>BreakDown</h3>
                                        <p className='text-white'>Your Results for Each Question</p>
                                        <div className="flex justify-center mt-2 lg:rotate-[-90deg] rotate-[0deg]">
                                            <svg className=""
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={30}
                                                height={30}
                                                fill="#ffffff"
                                                className="bi bi-arrow-down-circle"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                                                />
                                            </svg>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="text-left border bg-gray-50 rounded-lg overflow-auto border-gray-200 h-full">
                                    <div className="flex items-center">
                                        <div className="w-full h-[64px] flex relative mb-1">

                                            <div className="w-1/3 bg-red-500" />

                                            <div className="w-1/3 bg-yellow-400 relative">

                                                <div
                                                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 
          border-l-[18px] border-l-transparent 
          border-r-[18px] border-r-transparent 
          border-b-[20px] border-b-white"
                                                ></div>

                                                <div className="absolute w-full text-center top-1/4 text-white text-3xl font-bold">
                                                    43
                                                </div>
                                            </div>

                                            <div className="w-1/3 bg-green-500" />
                                        </div>

                                    </div>

                                    <Accordions />



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}