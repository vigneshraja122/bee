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
import Teams from "./components/Teams";
import TechTrendsMarquee from "./components/Marquee";
import Aisolution from "./components/Aisolution";
export default function Home() {
  return (
    <div className="space-y-10 bg-[#00020F]">
      <Hero />
      <Statictis />
      <Teams />
      <Whychooseus />
      <TechTrendsMarquee />
      <Aisolution />

      <Aiblueprint />
      {/* <Whatwebuild/> */}
      <HowItWorksCards />
      <HowItworksSlide />
      <ProcessSection />
      <TechnologiesSection />

      <AIProjectFinderSection />



      <FAQSection />
      <Footer />
    </div>
  );
}
