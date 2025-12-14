
import Hero from "./components/Hero";
import Statictis from "./components/Statictis";
import Whatwebuild from "./components/Whatwebuild";
import Footer from "./components/footer";
import FAQSection from "./components/faq";
import Aiblueprint from "./components/Aiblueprint";
import ProcessSection from "./components/ProcessSection";
import Airates from "./components/Airates";
export default function Home() {
  return (
    <div className="space-y-5 bg-[#00020F] ">
      <Hero/>
      <Statictis/>
      <Whatwebuild/>
      <Aiblueprint/>
      <ProcessSection/>
      <Airates/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
