"use client";

import { useState } from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageHeadTitle from "@/components/PageHeadTitle";
import React from 'react';
import Image from 'next/image';
import quizImg from '@/app/images/s4.png'


 

export default function Quiz() {
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleAnswerClick = (answer) => {
        setSelectedAnswer(answer);
    };

    return (
        <>
        <PageHeadTitle
        title="The Oxygen Plan | Quiz"
        description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
/>
            <Header />
            <section className="w-full ">
               

            <div className="w-full bg-white lg:py-0 flex items-center justify-center lg:h-[calc(100vh-129.31px)] h-full">
                    <div className="max-w-screen-xl m-auto">
 
                        <div className="flex gap-4 flex-wrap lg:px-0 px-5">
                            <div className="lg:w-2/5 w-full lg:pt-0 pt-4">
                                <div className="bg-gray-100 border border-gray-200 lg:p-6 p-2 h-full flex items-center justify-center rounded-lg">
                                   <Image className='w-full rounded-lg' src={quizImg} alt='quiz-image'/>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="text-left border bg-gray-50 rounded-lg overflow-auto border-gray-200 h-full">
                                    <div className="bg-gray-300 lg:p-5 p-2">
                                        <p className="text-sm text-gray-500">STRESS NUMBER™️    1 of 30                                        </p>
                                        <h2 className="lg:font-[500] font-[400] lg:text-xl text-[18px]">I tend to react negatively to difficult situations?</h2>
                                    </div>

                                    <div className="answers grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center lg:gap-3 gap-2 mt-2 lg:p-5 p-2">
                                        {['Never', 'Occasionally', 'Often', 'Always'].map((answer, index) => (
                                            <div
                                                key={index}
                                                className={`w-full font-[400] lg:text-xl text=[15px] text-center border cursor-pointer border-gray-500 rounded-lg p-2 py-3 hover:bg-gray-500 hover:text-white ${
                                                    selectedAnswer === answer ? 'bg-gray-500 text-white' : ''
                                                }`}
                                                onClick={() => handleAnswerClick(answer)}
                                            >
                                                {answer}
                                            </div>
                                        ))}
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