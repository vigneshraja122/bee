
import Hero from "./components/Hero";
import Statictis from "./components/Statictis";
import Whatwebuild from "./components/Whatwebuild";
import Footer from "./components/footer";
import FAQSection from "./components/faq";
import AIProjectFinderSection from "./components/AIProjectFinderSection";
import Whychooseus from "./components/whychooseus";
import Aiblueprint from "./components/Aiblueprint";
import ProcessSection from "./components/ProcessSection";
import TechnologiesSection from "./components/TechnologiesUsed";
import HowItWorksCards from "./sections/HowItWorksCards";
import HowItworksSlide from "./sections/HowItworksSlide";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Statictis/>
      <Aiblueprint/>
      <Whatwebuild/>
      <Whychooseus/>
      <TechnologiesSection/>
      <AIProjectFinderSection/>
      <HowItWorksCards/>
      <HowItworksSlide/>
      <ProcessSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
