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
import Aisolution from "./components/Aisolution";
import Teams from "./components/Teams";
import TechTrendsMarquee from "./components/Marquee";

export default function Home() {
  return (
    <div className="bg-[#00020F]">
      <Hero />
      <Statictis />
      <Teams />
      <TechTrendsMarquee />
      <Aisolution />
      <Aiblueprint />
      {/* <Whatwebuild/> */}
      <Whychooseus />
      <TechnologiesSection />
      <AIProjectFinderSection />
      <ProcessSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
