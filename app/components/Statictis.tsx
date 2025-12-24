import NavLabel from "./NavLable";

const Statictis = () => {
    return (
        <div className="xl:h-[130vh] lg:h-[130vh] md:h-[110vh] w-full flex flex-col justify-center items-center bg-[#00020F] top-40 space-y-2">

            {/* ================= TOP TEXT ================= */}
            <div className="xl:w-[70%] lg:w-[70%] md:w-[80%] md:h-unset w-full mt-20">
                <div className="relative inline-flex items-center gap-1 rounded-xl 
          bg-linear-to-r from-[#0B0F1C] via-[#111827] to-[#0B0F1C]"
                >
                    <NavLabel label="Who we are" className="md:text-[15px]" />
                </div>

                <div className="hidden md:flex flex-col font-manrope">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-white">We combine deep expertise with</h1>
                        <img src="/assets/images/animation.svg" className="w-16 h-16" />
                        <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-white">EVO AI to enhance</h1>
                    </div>

                    <div className="flex items-center flex-wrap">
                        <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-white">
                            the development process, optimization, and
                        </h1>
                        <img src="/assets/images/Butterfly.gif" className="w-20 h-20" />
                        <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-white">scaling</h1>
                    </div>


                    <div className="flex items-center">
                        <h1 className="xl:text-4xl lg:text-4xl md:text-2xl text-white">of decentralized solutions.</h1>
                        <img src="/assets/images/Container (2).svg" className="w-60" />
                    </div>
                </div>

                {/* ================= MOBILE (EXACT IMAGE LAYOUT) ================= */}
                <div className="flex md:hidden flex-col gap-1 text-white text-[24px] xl:p-0 lg:p-0 md:p-0 sm:p-2 p-4">



                    <div className="flex justify-between items-center gap-3 ">
                        <div className="space-y-4 text-[28px]">
                            <h2 className="font-manrope">Create smart blockchain systems that think,EVO AI to enhance the development process,optimization, and scaling of decentralized solutions</h2>
                            <h2></h2>
                        </div>
                       
                    </div>

                    
                </div>
            </div>

            {/* ================= CARDS SECTION ================= */}
            <div className="flex flex-col md:flex-row justify-center items-center md:h-[60%] md:w-[80%] gap-4 w-full">

                {/* -------- CENTER (1st on mobile) -------- */}
                <div className="w-full md:w-[30%] order-1 md:order-2 h-full flex justify-center items-center">
                    <div className="relative w-[90%] md:w-full xl:h-full lg:h-full md:h-[400px] rounded-[32px] overflow-hidden h-[500px]
            bg-gradient-to-b from-[#00A4AF] to-black 
            border border-white/40 shadow-2xl"
                    >
                        <div className="pt-12 text-center md:px-6">
                            <p className="text-white/90 xl:text-3xl lg:text-3xl md:text-xl text-md font-poppins">Powered by</p>
                            <h1 className="mt-4 text-white xl:text-6xl lg:text-6xl md:text-xl text-6xl font-bold leading-none font-manrope">
                                EVO AI™
                            </h1>
                            <p className="mt-4 text-white/90 xl:text-4xl lg:text-4xl md:text-xl text-lg font-poppins">
                                Intelligence Engine
                            </p>
                        </div>

                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2  h-full
              md:w-full md:h-full flex justify-center items-end w-full"
                        >
                            <img
                                src="/assets/images/84b9d6946f21a30ebcea8ae14a70972e 1.svg"
                                alt="Phone UI"
                                className="h-[60%] md:w-[320px] "
                            />
                        </div>
                    </div>
                </div>

                {/* -------- LEFT COLUMN (2nd on mobile) -------- */}
                <div className="w-full  xl:w-[25%]  lg:w-[25%] md:w-[35%] order-2 md:order-1 h-full 
          flex flex-row md:flex-col justify-center items-center md:gap-10 gap-2"
                >
                    <div className="text-white xl:w-64 xl:h-64 lg:w-64 lg:h-64 md:w-50 md:h-45  rounded-[32px] 
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] 
            border border-white/10 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]
            flex flex-col justify-center items-center w-[50%] h-32"
                    >
                        <h1 className="xl:text-4xl lg:text-4xl md:text-sm text-md font-semibold text-center font-manrope">
                            Pioneers in Blockchain Engineering
                        </h1>
                    </div>

                    <div className="text-white w-[40%] h-32 xl:w-64 xl:h-64 lg:w-64 lg:h-64 md:w-50 md:h-45 rounded-[32px] 
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] 
            border border-white/10 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]
            flex flex-col justify-center items-center xl:gap-4 lg:gap-4 md:gap-4"
                    >
                        <img src="/assets/images/Frame 19.svg" />
                        <p className="text-center xl:text-2xl lg:text-2xl md:text-xl text-md font-manrope">
                            Predictive & <br /> Adaptive <br /> Architecture
                        </p>
                    </div>
                </div>

                {/* -------- RIGHT COLUMN (3rd on mobile) -------- */}
                <div className="w-full md:w-[30%] order-3 md:order-3 h-full 
          flex flex-row md:flex-col justify-center items-center md:items-end md:gap-10 gap-2"
                >
                    <div className="text-white md:w-full xl:h-64 lg:h-45 md:h-45 rounded-[32px] 
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] 
            border border-white/10 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]
            flex flex-col justify-center items-center md:gap-4 w-[40%] h-32"
                    >
                        <h1 className="xl:text-5xl lg:text-5xl md:text-xl text-md text-center bg-gradient-to-b 
              from-[#00A4AF] to-[#00FF97] bg-clip-text text-transparent font-manrope"
                        >
                            Automated & Optimized
                        </h1>
                        <p className="xl:text-2xl lg:text-2xl md:text-sm text-[15px] text-center font-Poppins">Development Workflows</p>
                    </div>

                    <div className="text-white md:w-full xl:h-64 lg:h-45 md:h-45 rounded-[32px] 
            bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] 
            border border-white/10 
            shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)]
            flex flex-col justify-center items-center w-[50%] h-32"
                    >
                        <h1 className="xl:text-5xl lg:text-5xl md:text-xl text-xl text-center font-manrope">
                            Accelerated<br />Time-to-<br />Market
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Statictis;
