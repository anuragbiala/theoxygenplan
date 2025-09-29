import { useState } from 'react';
import Image from 'next/image';
import resultImg from '@/app/images/girl.jpg'

export default function Accordions() {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">

      <div className="mb-1">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full py-2 px-3 font-medium rtl:text-right bg-red-500 text-white border border-b-0 gap-3"
            onClick={() => toggleAccordion(1)}
            aria-expanded={openAccordion === 1}
            aria-controls="accordion-collapse-body-1"
          >
            <span className='flex gap-2 items-center'>  <h2 className='text-xl text-white font-[400]'>Lorem Ipsum? </h2>  </span>
            <div className='border-2 p-3 rounded-full border-white'>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${openAccordion === 1 ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
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
            </div>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          className={`${openAccordion === 1 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div className=" bg-red-500 border border-b-0 border-gray-200  ">
            <div className="flex lg:gap-4 gap-1 flex-wrap lg:px-0 px-0">
              <div className="w-2/5 lg:pt-0">
                <Image className='object-cover w-full' src={resultImg} alt='' />
              </div>
              <div className="lg:w-1/2 w-[58%]  p-2">
                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
                <div className="text-white text-[17px] font-[300]">21 Feb 2025:</div>

                <div className="bg-white/80 w-full h-[0.2px] lg:my-5 my-2"></div>

                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-1">
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full py-2 px-3 font-medium rtl:text-right bg-yellow-400 text-white border border-b-0 gap-3"
            onClick={() => toggleAccordion(2)}
            aria-expanded={openAccordion === 2}
            aria-controls="accordion-collapse-body-2"
          >
            <span className='flex gap-2 items-center'>  <h2 className='text-xl text-white font-[400]'>Lorem Ipsum? </h2>   </span>
            <div className='border-2 p-3 rounded-full border-white'>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${openAccordion === 2 ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
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
            </div>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          className={`${openAccordion === 2 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div className=" bg-yellow-400 border border-b-0 border-gray-200  ">
          <div className="flex lg:gap-4 gap-1 flex-wrap lg:px-0 px-0">
              <div className="w-2/5 lg:pt-0">
                <Image className='object-cover w-full' src={resultImg} alt='' />
              </div>
              <div className="lg:w-1/2 w-[58%]  p-2">
                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
                <div className="text-white text-[17px] font-[300]">21 Feb 2025:</div>

                <div className="bg-white/80 w-full h-[0.2px] lg:my-5 my-2"></div>

                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-1">
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full py-2 px-3 font-medium rtl:text-right bg-green-500 text-white border border-b-0 gap-3"
            onClick={() => toggleAccordion(3)}
            aria-expanded={openAccordion === 3}
            aria-controls="accordion-collapse-body-3"
          >
            <span className='flex gap-2 items-center'> <h2 className='text-xl text-white font-[400]'>Lorem Ipsum? </h2>  </span>
            <div className='border-2 p-3 rounded-full border-white'>
              <svg
                data-accordion-icon=""
                className={`w-3 h-3 ${openAccordion === 3 ? 'rotate-180' : ''} shrink-0`}
                aria-hidden="true"
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
            </div>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          className={`${openAccordion === 3 ? '' : 'hidden'}`}
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div className=" bg-green-500 border border-b-0 border-gray-200  ">
          <div className="flex lg:gap-4 gap-1 flex-wrap lg:px-0 px-0">
              <div className="w-2/5 lg:pt-0">
                <Image className='object-cover w-full' src={resultImg} alt='' />
              </div>
              <div className="lg:w-1/2 w-[58%]  p-2">
                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
                <div className="text-white text-[17px] font-[300]">21 Feb 2025:</div>

                <div className="bg-white/80 w-full h-[0.2px] lg:my-5 my-2"></div>

                <div className="text-white text-[17px] font-[300]">Lorem ipsum is placeholder.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}