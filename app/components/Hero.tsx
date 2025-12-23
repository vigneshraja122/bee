import GradientGlowButton from "./GradientGlowButton";
import Topnav from "./Topnav";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center" style={{
            backgroundImage: "url('/assets/images/Desktop - 4 (1).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Topnav />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img src="/assets/images/Group 2.svg" className="xl:w-[350px] lg:w-[350px] md:w-[390px] w-[250px]" />
                <div className="w-[80%] h-full flex flex-col justify-center items-center text-center space-y-6 z-10">
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-white md:w-[650px] w-full">The World’s First AI-Centered Blockchain Development Company</h1>
                        <p className="text-md text-white">From custom blockchain development to AI-driven dApps, decentralized ecosystems,<br/> and digital asset infrastructures- we build what tomorrow demands.</p>
                    </div>
                    <div className="xl:w-[45%] lg:w-[45%] md:w-[100%]  w-full flex justify-around items-center">
                        <GradientGlowButton className="md:text-sm">
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