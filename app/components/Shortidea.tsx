const Shortidea = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#00020F] bg-cover bg-center" style={{ backgroundImage: "url('/Section.svg')" }}>
            <div className="w-[80%] h-[80%] flex justify-center items-center">
                <div className=" w-[70%] h-full flex flex-col justify-center items-start">
                    <h1 className="text-6xl">Enter a short idea such as:</h1>
                    <div className="w-full h-[50%]">
                        <div>
                            <img src="/image.svg" className="w-[500px]" />
                        </div>
                        <div className="w-[80%] flex gap-20 ml-20">

                            <div className="w-60 h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1]/125 to-black">
                                <div className="w-full h-full flex justify-center items-center p-4 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                    <h2 className="text-white text-sm font-medium text-start leading-tight drop-shadow-md">
                                        Decentralized marketplace for digital art
                                    </h2>
                                </div>
                            </div>
                            <div className="w-60 h-20 p-[2px] rounded-lg bg-gradient-to-r from-[#1BFFE1]/125 to-black">
                                <div className="w-full h-full flex justify-center items-center p-4 rounded-lg backdrop-blur-sm bg-[#1BFFE1]/15">
                                    <h2 className="text-white text-sm font-medium text-start leading-tight drop-shadow-md">
                                        A private blockchain for enterprise data verification.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-md font-bold">EVO AI analyzes your input and delivers a full project insight</p>
                        <h1 className="text-3xl font-bold bg-gradient-to-b 
              from-[#00A4AF] to-[#01eeff] bg-clip-text text-transparent">From one sentence → to complete project clarity.</h1>
                        <h1 className="text-lg font-bold">Perfect for founders, enterprises, and teams validating their next big Web3 idea</h1>
                    </div>
                </div>
                <div className=" w-[30%] h-full flex flex-col justify-center items-center">
                    <img src="/div.tabs-steps-content.svg" />
                </div>
            </div>


        </div>
    );
};

export default Shortidea;