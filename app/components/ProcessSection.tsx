const ProcessSection = () => {
  return (
    <section className="w-full bg-black py-24 flex justify-center">
      <div
        className="relative w-[90%] max-w-7xl rounded-3xl
        bg-gradient-to-b from-[#0b0f1a] via-[#121212] to-[#085967]
        border border-white/10
        shadow-[0_0_80px_rgba(0,255,255,0.08)]
        px-10 py-16"
      >
        {/* TOP BADGE */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full
            bg-white/5 border border-white/10 text-sm text-white">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            Simple Process
          </div>
        </div>

        {/* TITLE */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-white leading-tight mb-12">
          Process Often Includes <br /> The Following Key Stages
        </h2>

        {/* VIDEO / IMAGE BLOCK */}
        <div className="relative w-full rounded-t-2xl overflow-hidden mb-10">
          <img
            src="/Background (2).svg" // replace with your image
            alt="Process visual"
            className="w-full h-[380px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* TAGS */}
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {[
            "WEB3",
            "IT Services",
            "Tech Solutions",
            "Apps Mobile",
            "Program Development",
            "Blockchain",
            "Exchange",
            "Telecommunication",
            "Technology",
            "Finance Application",
            "SEO",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full text-sm text-[#085967]
              bg-white/5 border border-white/10 backdrop-blur"
            >
              #<span className="text-white">{tag}</span>
            </span>
          ))}
        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              step: "STEP 01",
              title: "Discussion",
              desc: "Communication, collaboration, & knowledge sharing through structured.",
            },
            {
              step: "STEP 02",
              title: "Ideas & Concept",
              desc: "Leveraging technology for business innovation and problem-solving.",
            },
            {
              step: "STEP 03",
              title: "Testing & Trying",
              desc: "Process of evaluating and verifying that IT systems and integrated solutions.",
            },
            {
              step: "STEP 04",
              title: "Execute & Install",
              desc: "Planned and developed IT solutions are actually put into practical operation.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative rounded-2xl p-6
              bg-gradient-to-b from-[#1b1f2a] to-[#0b0f1a]
              border border-white/10
              shadow-[inset_0_0_0.5px_rgba(255,255,255,0.2)]
              text-white"
            >
              {/* STEP BADGE */}
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-400/20 text-cyan-300">
                  {item.step}
                </span>
                <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  ↗
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
