import GradientGlowButton from "./GradientGlowButton";
import Topnav from "./Topnav";

const Hero = () => {
    return (
        <div className="w-full xl:h-screen lg:h-screen md:h-full sm:h-screen h-[80vh] flex flex-col items-center" style={{
            backgroundImage: "url('/assets/images/Desktop - 4 (1).svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }}>
            <Topnav />
            <div className="w-full h-[80%] md:h-full flex flex-col justify-center items-center mt-10">
                <img src="/assets/images/Group 2.svg" className="xl:w-[350px] lg:w-[350px] md:w-[390px] w-[250px]" />
                <div className="w-[80%] xl:p-0 lg:p-0 md:p-5 h-full flex flex-col justify-center items-center text-center space-y-6 z-10">
                    <div className="space-y-4 flex flex-col justify-center items-center w-full">
                        <h1 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-white md:w-[650px] w-full">World’s First AI-Centric Blockchain Development Company</h1>
                        
                        <p className="xl:text-md lg:text-lg md:text-md sm:text-sm text-[10px] text-white md:w-[850px] w-full">Beelockchain empowers businesses with intelligent, scalable, next-generation blockchain ecosystems. By fusing advanced Artificial Intelligence with future-ready Web3 Solutions, we deliver frictionless, secure, and high-performance blockchain solutions built for real-world impact.</p>
                    </div>
                    <div className="xl:w-[45%] lg:w-[45%] md:w-[100%] sm:w-[100%] w-[100%]  w-full flex justify-around items-center">
                        <GradientGlowButton className="xl:text-sm lg:text-sm md:text-sm sm:text-[10px] text-[1px]">
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