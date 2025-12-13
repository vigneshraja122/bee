import Topnav from "./Topnav";

const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center" style={{ backgroundImage: "url('/Desktop - 4.svg')" }}>
            <Topnav />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img src="/Group 2.svg" className="w-[350px]" />
                <div className="w-[80%] h-full flex flex-col justify-center items-center text-center space-y-6 z-10">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-semibold">World’s First AI-Powered Blockchain &<br /> Gaming Development Engine</h1>
                        <p className="text-md">Where Blockchain, Crypto, Metaverse, and AI-Automation come together<br /> to build the future</p>
                    </div>
                    <div className="w-[70%] flex justify-between items-center">
                        <div
                            style={{
                                backgroundImage: "url('/Group 305.svg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                            }} className="w-40 h-20 flex justify-center items-center">
                            <button
                                className="flex items-center justify-center w-80 h-full text-white font-medium text-center mr-6"

                            >
                                Build Your Project
                            </button>
                        </div>
                        <div
                            style={{
                                backgroundImage: "url('/Group 305.svg')",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                            }} className="w-60 h-20 flex justify-center items-center">
                            <button
                                className="flex items-center justify-center w-full h-full text-white font-medium text-center mr-6"

                            >
                                Explore The Techverse
                            </button>
                        </div></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;