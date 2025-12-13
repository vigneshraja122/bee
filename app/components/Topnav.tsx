const Topnav = () => {
    return (
        <div className="w-full h-14 flex justify-center items-center">
            <div className="w-[80%] h-full  flex justify-between items-center bg-black rounded-full p-4 mt-5">
                <img src="/Group 10.svg" className="w-28 " />
                <div 
                style={{
                    backgroundImage: "url('/Group 305.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                }} className="w-40 h-20 flex justify-center items-center">
                    <button
                        className="flex items-center justify-center w-full h-full text-white font-medium text-center mr-6"

                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Topnav;