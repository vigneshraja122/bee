const Aisolution = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-[#00020F]">
            <div className="w-[90%] h-full flex justify-center items-center gap-4">
                <div className="w-[50%] h-full flex justify-center items-center">
                    <img src="/Background+Border.svg" className="w-full h-screen"></img>
                </div>
                    <div className="w-[50%] text-white space-y-8">

                        {/* Badge */}
                        <div className="inline-flex items-center rounded-full px-4 py-1
          bg-cyan-400/15 border border-cyan-300/30">
                            <span className="text-cyan-300 font-semibold tracking-wide">
                                AI SOLUTIONS <span className="text-cyan-200">(Powered by EVO AI)</span>
                            </span>
                        </div>

                        {/* Main paragraph */}
                        <p className="text-md leading-relaxed text-white/90">
                            At the heart of <span className="font-semibold text-white">Beelockchain</span> lies{" "}
                            <span className="font-semibold text-cyan-300">EVO AI</span>, our autonomous
                            development engine that elevates every project with:
                        </p>

                        {/* Bullet list */}
                        <ul className="space-y-2 ml-5">
                            {[
                                "AI-driven blockchain architecture generation",
                                "AI-assisted smart contract optimization",
                                "Predictive analytics for network load & security threats",
                                "Automated testing & auditing",
                                "Cross-chain performance enhancement",
                                "Resource optimization & scalability recommendations",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="mt-2 w-2 h-2 rounded-full bg-cyan-300 flex-shrink-0" />
                                    <span className="text-white/85 text-lg leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Closing statement */}
                        <p className="text-lg leading-relaxed text-white/90">
                            <span className="font-semibold text-white">EVO AI</span> brings machine
                            intelligence into blockchain engineering enabling the world’s first truly<br/>
                            <span className="font-semibold text-cyan-300">
                                AI-centered blockchain workflows
                            </span>.
                        </p>

                    </div>
              

            </div>
        </div>
    );
}

export default Aisolution;