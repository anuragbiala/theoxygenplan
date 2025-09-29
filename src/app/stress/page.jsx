import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import PageHeadTitle from "@/components/PageHeadTitle"
import stressOne from '@/app/images/pozadina00.webp'
import stressTwo from '@/app/images/2013-sia-Snapshot-Infographic-1024_tcm7-166597.webp'
import stressThree from '@/app/images/2013-sia-Eating-Infographic-1024_tcm7-166596.webp'
import stressFour from '@/app/images/2013-sia-Exercise-Infographic-1024_tcm7-166595.webp'
import stressFive from '@/app/images/2013-sia-Sleep-Infographic-1024_tcm7-166594.webp'
import stressSix from '@/app/images/nstress-Infographic-1024_tcm7-166591.webp'
export default function stress(){
    return(
        <>
         <PageHeadTitle
                title="The Oxygen Plan | Stress"
                description="In Collaboration With Mayo Clinic. Clinically Validated For Stress, Anxiety And Depression"
        />

        <Header/>
        <section className="w-full bg-green-700 lg:pt-20 pt-10 pb-0 text-center">
                <h2 className="font-[700] lg:text-4xl text-2xl text-white"> STRESS </h2>

                <div className="w-full bg-white lg:py-20 py-5 lg:mt-20 mt-10 lg:rounded-t-[55px] rounded-t-[15px] lg:px-0 px-4">
                    <div className="max-w-screen-xl m-auto">
                         <Image className="w-full" src={stressOne} alt=''/>
                       

                        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-100 p-2 rounded-lg">
                            <Image className="w-full" src={stressTwo} alt=''/>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg">
                            <Image className="w-full" src={stressThree} alt=''/>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg">
                            <Image className="w-full" src={stressFour} alt=''/>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg">
                            <Image className="w-full" src={stressFive} alt=''/>
                            </div>
                            <div className="bg-gray-100 p-2 rounded-lg">
                            <Image className="w-full" src={stressSix} alt=''/>
                            </div>
                        </div>
                        </div>
                        </div>
                        </section>

        <Footer/>
        </>
    )
}