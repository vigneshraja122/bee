import Image from "next/image";
import Topnav from "./components/Topnav";
import Hero from "./components/Hero";
import Footer from "./components/footer";
import FAQSection from "./components/faq";
export default function Home() {
  return (
    <div>
     
      <Hero/>
      <FAQSection/>
      <Footer/>
    </div>
  );
}
