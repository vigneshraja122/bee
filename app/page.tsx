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
import Teams from "./components/Teams";
import TechTrendsMarquee from "./components/Marquee";
import Aisolution from "./components/Aisolution";
import Whatweprovide from "./sections/Whatweprovide";
import Shortidea from "./components/Shortidea";
// import Chattest from "./components/Chattest";
export default function Home() {
  return (
    <div className="space-y-8 bg-[#00020F]">
      <Hero />
      <Statictis />
      <Teams />
      <Whychooseus />
      <TechTrendsMarquee />
      <Aisolution />
      <Aiblueprint />

      {/* <Whatwebuild/> */}
      <HowItWorksCards />
      <Whatweprovide />
      <ProcessSection />
      <TechnologiesSection />
      <AIProjectFinderSection />
      {/* <Chattest/> */}
      <Shortidea/>
      <FAQSection />
      <Footer />
    </div>
  );
}
