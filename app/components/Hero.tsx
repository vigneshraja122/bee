import GradientGlowButton from "./GradientGlowButton";
import Topnav from "./Topnav";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center" style={{ backgroundImage: "url('/Desktop - 4.svg')" }}>
            <Topnav />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img src="/Group 2.svg" className="w-[350px]" />
                <div className="w-[80%] h-full flex flex-col justify-center items-center text-center space-y-6 z-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-semibold text-white">World’s First AI-Powered Blockchain &<br /> Gaming Development Engine</h1>
                        <p className="text-md text-white">Where Blockchain, Crypto, Metaverse, and AI-Automation come together<br /> to build the future</p>
                    </div>
                    <div className="w-[70%] flex justify-between items-center">
                        <GradientGlowButton>
                            Build Your Project
                        </GradientGlowButton>
                        <GradientGlowButton>
                           Explore the Techverse
                        </GradientGlowButton>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;