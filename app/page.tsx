
import Hero from "./components/Hero";
import Statictis from "./components/Statictis";
import Whatwebuild from "./components/Whatwebuild";
import Footer from "./components/footer";
import FAQSection from "./components/faq";
export default function Home() {
  return (
    <div>
      <Hero/>
      <Statictis/>
      <Whatwebuild/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
