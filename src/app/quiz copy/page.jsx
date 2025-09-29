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
            <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0 text-center">
                <h2 className="font-[700] lg:text-4xl text-2xl text-white">TAKE TEST</h2>

                <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px]">
                    <div className="max-w-screen-xl m-auto">
                        <div className="flex gap-4 flex-wrap lg:px-0 px-5">
                            <div className="lg:w-2/5 w-full ">
                                <div className="bg-gray-100 border border-gray-200 p-6 h-full flex items-center justify-center rounded-lg">
                                   <Image className='w-full rounded-lg' src={quizImg} alt='quiz-image'/>
                                </div>
                            </div>
                            <div className="lg:w-1/2 w-full">
                                <div className="text-left border bg-gray-50 rounded-lg overflow-auto border-gray-200 h-full">
                                    <div className="bg-gray-300 p-5">
                                        <p className="text-sm text-gray-500">Quiz Question 1 of 30</p>
                                        <h2 className="font-[500] text-xl">I tend to react negatively to difficult situations?</h2>
                                    </div>

                                    <div className="answers grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 items-center gap-4 mt-2 p-5">
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

            <Footer />
        </>
    );
}