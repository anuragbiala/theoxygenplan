import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import AboutSlider from "@/components/AboutSlider"
import PageHeadTitle from "@/components/PageHeadTitle"
import aboutOne from '@/app/images/about1.webp'
import aboutTwo from '@/app/images/about2.webp'
import aboutLogo from '@/app/images/about3.webp'
import top from "@/app/images/about4.jpg"
import aboutEight from '@/app/images/about8.webp'
import aboutNine from '@/app/images/about9.webp'

export default function about(){
    return(
        <>
             <PageHeadTitle
                            title="The Oxygen Plan | About"
                            description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
                    />

            <Header/>

            <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0 text-center">
                <h2 className="font-[700] lg:text-4xl text-2xl text-white"> ABOUT </h2>
                <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
                    <div className="max-w-screen-xl m-auto">

                       <div className="mx-auto lg:min-w-[500px] min-w-fit">
                       <h2 className="text-center lg:text-3xl text-2xl font-[500]">Initial Clinical Validation of The Oxygen Plan Stress Number</h2>
                       <div className="flex justify-center py-10">
                       <Image className="lg:w-[500px] w-[200px] text-center" src={aboutLogo} alt=""/>
                       </div>
                       </div>
                      <div className="max-w-[800px] mx-auto">
                      <div className="grid xl:grid-cols-2 mt-5 md:grid-cols-2 grid-cols-1 items-center gap-5 rounded-md overflow-hidden"> 
                            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm  "> 
                                 <Image className="w-full" src={aboutOne} alt='' /> 
                                      <div className="p-5">
                                         <a href="#">
                                            <h5 className="mb-2 text-2xl   tracking-tight text-center text-gray-900  ">
                                                 Promote STRESS NUMBER™ Awareness - Become Stress Assessment Standard
                                             </h5>
                    
                                         </a>
                                    </div>
                            </div>
                    
                    
                            <div className=" bg-white border border-gray-200 rounded-lg shadow-sm  ">
                                <Image className="w-full" src={aboutTwo} alt='' />
                                     <div className="p-5">
                                         <a href="#">
                                            <h5 className="mb-2 text-2xl   tracking-tight text-center text-gray-900  ">
                                                 Global Provider of Stress Number™ and The Oxygen Plan
                                             </h5>
                    
                                        </a>
                                    </div>
                            </div>
                    
                        </div>
                      </div>


                      <div className="my-20">
                      <div className="relative mx-auto border-gray-800  bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
  <div className="h-[32px] w-[3px] bg-gray-800  absolute -start-[17px] top-[72px] rounded-s-lg" />
  <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[17px] top-[124px] rounded-s-lg" />
  <div className="h-[46px] w-[3px] bg-gray-800  absolute -start-[17px] top-[178px] rounded-s-lg" />
  <div className="h-[64px] w-[3px] bg-gray-800  absolute -end-[17px] top-[142px] rounded-e-lg" />
  <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white ">
    <Image src={top} className="h-[426px] md:h-[654px]" alt="" /> 
    
  </div>
</div>
<h3 className="text-center mt-5 text-xl font-[500]">Initial Clinical Validation of The Oxygen Plan Stress Number</h3>

                      </div>


           <div className="bg-gray-200 lg:py-20 py-10 rounded-lg">
            <h2 className="text-center lg:text-3xl text-2xl font-[500] pb-10">The Program</h2>
           <div className="max-w-[950px] mx-auto">
                <AboutSlider/>
                <p className="text-center mt-10">The Oxygen Plan, is a revolutionary stress reduction program for combating work, home and social stress. The Oxygen Plan features patent-pending technology that helps companies identify, analyze, benchmark, track, and reduce sources of stress, including the ability to establish an aggregate STRESS NUMBER™ for their organization, and employees.</p>
            </div>
           
           </div>


           <div className="pt-20">
            <h2 className="text-center lg:text-3xl text-2xl font-[500] pb-10">Capabilities</h2>
           <>
  <div className="relative mx-auto border-gray-800  bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[530px]">
    <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white ">
      
       <Image src={aboutEight} alt="" className="h-[156px] md:h-[278px] w-full rounded-lg"/>
    </div>
  </div>
  <div className="relative mx-auto bg-gray-900  rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
    <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800" />
  </div>
</>
<div className="d">
    <h2 className="text-center text-2xl font-[400] pt-10">YOUR STRESS IS OUR BUSINESS™️</h2>
    <p className="text-center mt-1">Please contact us to learn about our programs:</p>
    <p className="text-center  ">STRESS NUMBER™</p>
    <p className="text-center ">STRESS STAT™</p>
    <p className="text-center ">STRESS SCORE™</p>
    <p className="text-center  ">STRESS #™</p>
</div>

<div className="max-w-[850px] mx-auto text-center pt-20">
   <div className="flex justify-center"> <Image className="w-[200px]" src={aboutNine} alt=""/></div>
    <p className="text-center">The Oxygen Plan Corporation is located in Medical Alley, giving us access to the unparalleled expertise and resources necessary to stay ahead of the curve in Mental & Behavioral Health.</p>
</div>
           </div>
                     


                    </div>

                </div>
            </section>

            <Footer/>
        </>
    )
}