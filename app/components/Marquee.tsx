"use client";

import Marquee from "react-fast-marquee";

const TechTrendsMarquee = () => {
  return (
    <div className="w-full bg-black h-40 flex justify-center items-center overflow-hidden">
      <Marquee className="flex " speed={50} direction="right">
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center gap-20 mx-10 overflow-hidden">
            {/* <StarIcon /> */}

            <h1 className="text-6xl font-extrabold tracking-widest
              text-transparent bg-clip-text
              bg-[linear-gradient(90deg,#3CF2E5_0%,#00FFD1_50%,#2EF2FF_100%)]
              drop-shadow-[0_0_18px_rgba(0,255,220,0.6)]">
              GENERATIVE AI
            </h1>
{/* 
            <StarIcon /> */}

            <h1 className="text-6xl font-extrabold tracking-widest
              text-transparent bg-clip-text
              bg-[linear-gradient(90deg,#3CF2E5_0%,#00FFD1_50%,#2EF2FF_100%)]
              drop-shadow-[0_0_18px_rgba(0,255,220,0.6)]">
              TECH TRENDS
            </h1>

            {/* <StarIcon /> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechTrendsMarquee;
