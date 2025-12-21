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
              text-transparent bg-clip-text bg-[linear-gradient(90deg,#2EF2E3_0%,#22CFC2_30%,#0FAFA2_50%,#0B7F78_100%)]
  drop-shadow-[0_0_12px_rgba(46,242,227,0.6)]
  [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]" >
              GENERATIVE AI
            </h1>
{/* 
            <StarIcon /> */}

            <h1 className="text-6xl font-extrabold tracking-widest
              text-transparent bg-clip-text bg-[linear-gradient(90deg,#2EF2E3_0%,#22CFC2_30%,#0FAFA2_50%,#0B7F78_100%)]
  drop-shadow-[0_0_12px_rgba(46,242,227,0.6)]
  [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]">
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
