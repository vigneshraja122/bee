import GradientGlowButton from "./GradientGlowButton";
import Topnav from "./Topnav";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center" style={{
            backgroundImage: "url('/Desktop - 4 (1).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Topnav />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img src="/Group 2.svg" className="md:w-[350px] w-[250px]" />
                <div className="w-[80%] h-full flex flex-col justify-center items-center text-center space-y-6 z-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white md:w-[650px] w-full">The World’s First AI-Centered Blockchain Development Company</h1>
                        <p className="text-md text-white">Where Blockchain, Crypto, Metaverse, and AI-Automation come together<br /> to build the future</p>
                    </div>
                    <div className="md:w-[45%] w-full flex justify-between items-center">
                        <GradientGlowButton className="">
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