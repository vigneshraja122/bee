
import Hero from "./components/Hero";
import Statictis from "./components/Statictis";
import Whatwebuild from "./components/Whatwebuild";
import Footer from "./components/footer";
import FAQSection from "./components/faq";
import AIProjectFinderSection from "./components/AIProjectFinderSection";
import Whychooseus from "./components/whychooseus";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Statictis/>
      <Whatwebuild/>
      <Whychooseus/>
      <AIProjectFinderSection/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
