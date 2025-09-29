import AppFeatures from "@/components/AppFeatures";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowitWork from "@/components/HowitWork";
import Slider from "@/components/Slider";
import Ourmission from "@/components/Ourmission";  
import AnnualEconomic from "@/components/Annualeconomic";
import EconomicImpact from "@/components/EconomicImpact ";
import StressRoot from "@/components/StressRoot";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header/>
      <Slider/>
      <HowitWork/>
      <AppFeatures/>
      <AnnualEconomic/>
      <EconomicImpact/>
      <StressRoot/>
      <Ourmission/>
      <Contact/>
      <Footer/>
    </>
  );
}
