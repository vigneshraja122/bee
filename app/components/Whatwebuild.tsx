const Whatwebuild = () => {
    return (
        <div className="w-full h-[300vh] bg-[#00020F] flex flex-col items-center" style={{ backgroundImage: "" }}>
            <h1 className="text-4xl">What We Build</h1>
            <div className="w-full flex justify-center bg-[#00020F] py-10">
                <div className="relative w-[80%] max-w-7xl rounded-[28px] overflow-hidden
    bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
    border border-white/10">

                    {/* subtle noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

                    <div className="relative flex gap-12 px-12 py-14">

                        {/* LEFT SIDE */}
                        <div className="relative w-1/2">

                            {/* vertical glow line */}
                            <span className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400/0 via-cyan-400 to-cyan-400/0" />

                            {/* arrow icon */}
                            <div className="absolute -left-6 top-0 w-8 h-8 ml-2 rounded-full bg-cyan-400 flex flex-col items-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>

                            <h2 className="text-white text-3xl font-semibold mb-8 ml-6">
                                Blockchain Infrastructure
                            </h2>

                            <ul className="space-y-5 ml-6">
                                {[
                                    "Autonomous Smart Contracts",
                                    "AI-Secured Blockchains",
                                    "Token Development",
                                    "Wallet creation",
                                    "Smart contracts",
                                    "DeFi systems",
                                    "ICO/STO setups",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-white/80">
                                        <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3" >
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="relative w-1/2 flex items-center justify-center">

                            <img src="/Group 2 (1).svg" />

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-[#00020F] py-20">
                <div
                    className="relative w-[80%] max-w-7xl rounded-[32px] overflow-hidden
    bg-gradient-to-br from-[#0B0F1C] via-[#070A14] to-[#05070F]
    border border-white/10"
                >
                    {/* grain / noise */}
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />

                    <div className="relative flex items-center px-14 py-16 gap-16">

                        {/* LEFT – Cards */}
                        <div className="relative w-1/2 flex justify-center">
                            {/* back card */}
                            <div className="absolute top-6 left-14 w-[420px] h-[260px] rounded-2xl
          bg-gradient-to-br from-[#10263F] to-[#3A2532] opacity-70" />

                            {/* main card */}
                            <div className="relative w-[420px] h-[260px] rounded-2xl
          bg-gradient-to-br from-[#0B1325] to-[#2B2330]
          border border-white/10 shadow-2xl p-6">

                                <div className="h-4 w-2/3 rounded-full bg-white/80 mb-6" />
                                <div className="h-3 w-full rounded-full bg-white/30 mb-3" />
                                <div className="h-3 w-5/6 rounded-full bg-white/30 mb-6" />

                                <button className="px-4 py-2 rounded-full bg-red-500 text-white text-sm">
                                    Delete
                                </button>
                            </div>

                            {/* floating left icon */}
                            <div className="absolute left-0 bottom-28 w-16 h-16 rounded-xl
          bg-[#0B1325] border border-white/10 flex items-center justify-center">
                                <span className="w-8 h-8 rounded-lg border-2 border-cyan-400" />
                            </div>

                            {/* floating AI icon */}
                            <div className="absolute right-12 bottom-12 w-16 h-16 rounded-xl
          bg-[#0B1325] border border-white/10 flex items-center justify-center text-green-400 font-semibold">
                                AI
                            </div>
                        </div>

                        {/* CENTER – Vertical line */}
                        <div className="relative flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00121A" strokeWidth="2">
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </div>
                            <div className="mt-2 h-[260px] w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-400 to-transparent" />
                        </div>

                        {/* RIGHT – Content */}
                        <div className="w-1/2">
                            <h2 className="text-white text-3xl font-semibold mb-8">
                                AI-Driven Crypto Infrastructure
                            </h2>

                            <ul className="space-y-5">
                                {[
                                    "Automated smart contract generation",
                                    "Automated Token model optimization",
                                    "AI trading bots",
                                    "Automated Compliance & KYC",
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-4 text-white/80">
                                        <span className="w-6 h-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2EF2E2" strokeWidth="3">
                                                <path d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
}

export default Whatwebuild;