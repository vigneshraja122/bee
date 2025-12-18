import NavLabel from "./NavLable";
const Statictis = () => {
    return (
        <div className="h-[130vh] w-full flex flex-col justify-center items-center bg-[#00020F] space-y-2">
            <div className="w-[70%] h-[20%]">


                <div className="relative inline-flex items-center gap-1 rounded-xl 
  bg-linear-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]
  shadow-[0_0_40px_rgba(0,255,255,0.15)]">
                    <span className="absolute inset-0 rounded-xl bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.15),transparent_40%)] pointer-events-none"></span>


                    <div className="relative flex items-center justify-center w-10 h-10 rounded-full 
   ">
                        <img src="/Group 2.svg" className="w-5 h-5"></img>
                    </div>


                    {/* <h2 className="relative text-white font-semibold tracking-wide ">
                        Who we are
                    </h2> */}
                    <NavLabel label="Who we are" />
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2"><h1 className="text-3xl text-white">Create smart blockchain</h1><img src="/animation.svg" className="w-10 h-10"></img>
                        <h1 className="text-3xl text-white"> systems that think, </h1></div><div className="flex items-center">
                        <h1 className="text-3xl text-white">adapt, and evolve just like the businesses </h1><span><img src="/animation (1).svg" className="w-10 h-10"></img></span>
                        <h1 className="text-3xl text-white"> that use</h1></div><div className="flex "><h1 className="text-3xl text-white">them.</h1><img src="/Container (2).svg" className="w-40" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center h-[60%] w-[80%] gap-4">
                <div className="w-[25%] h-full  flex flex-col justify-center items-center gap-10">
                    <div className="text-white w-64 h-64 rounded-[32px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] gap-4 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] flex flex-col justify-center items-center">
                        <h1 className="text-4xl text-center">Pioneers in Blockchain Engineering</h1>
                    </div>
                    <div className="text-white w-64 h-64 gap-4 rounded-[32px] bg-gradient-to-br flex flex-col justify-center items-center from-[#2A2A2A] via-[#151515] to-[#050505] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]">
                        <p className="text-center text-3xl">Predictive & Adaptive Architecture</p>
                    </div>
                </div>
                <div className="w-[30%] h-full  flex justify-center items-center">
                    <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gradient-to-b from-cyan-300 via-cyan-400 to-cyan-500 border border-white/40 shadow-2xl">

                        {/* Top text */}
                        <div className="pt-12 text-center px-6">
                            <p className="text-white/90 text-lg text-white">
                                Powered by
                            </p>

                            <h1 className="mt-4 text-white text-5xl font-bold leading-none text-white">
                                EVO AI™
                            </h1>

                            <p className="mt-4 text-white/90 text-xl text-white">
                                Intelligence Engine
                            </p>
                        </div>

                        {/* Phone image */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                            <img
                                src="/84b9d6946f21a30ebcea8ae14a70972e 1.svg"
                                alt="Phone UI"
                                className="w-[460px] h-[200px]"
                            />
                        </div>
                    </div>

                </div>
                <div className="w-[30%] h-full flex flex-col justify-center items-end gap-10">
                    <div className="text-white w-full h-64 rounded-[32px] bg-gradient-to-br gap-4 flex flex-col justify-center items-center from-[#2A2A2A] via-[#151515] to-[#050505] border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]">

                        <h1 className="text-4xl text-center"> Automated & Optimized</h1>
                        <p>Machine learning suggestions</p>
                    </div>
                    <div className="text-white w-full h-64 gap-4 flex flex-col justify-center items-center rounded-[32px] bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]f border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_20px_40px_rgba(0,0,0,0.8)]">
                        <h1 className="text-4xl text-center">Accelerated Time-to-Market</h1>
                    </div>
                </div>
            </div >


        </div >
    );
}

export default Statictis;