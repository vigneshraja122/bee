import GradientGlowButton from "./GradientGlowButton";

const Topnav = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center">
            <div className="w-[80%] h-full  flex justify-between items-center bg-black rounded-full p-4 mt-5">
                <img src="/Group 10.svg" className="w-28 " />
                <GradientGlowButton>
                           Get Started
                        </GradientGlowButton>
            </div>
        </div>
    );
}

export default Topnav;