"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const TechTrendsMarquee = () => {
  return (
    <div className="w-full md:h-40 h-20 flex justify-center items-center overflow-hidden bg-[#00020F]">
      <Marquee className="flex " speed={50} direction="right">
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center gap-20 mx-10 overflow-hidden">
            {/* <StarIcon /> */}

            <h1 className="
                md:text-6xl text-3xl font-extrabold tracking-widest
                text-transparent
                bg-clip-text
                [-webkit-text-fill-color:transparent]
                [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
                bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move"
            >
              GENERATIVE AI
            </h1>
            <img src="/assets/images/marquee-icon.png" alt="Plus Icon" className="w-10 h-10 md:w-40 md:h-40" />
            {/* 
            <StarIcon /> */}

            <h1 className="
    md:text-6xl  text-3xl font-extrabold tracking-widest
    text-transparent
    bg-clip-text
    [-webkit-text-fill-color:transparent]
    [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
    bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move"
            >
              TECH TRENDS
            </h1>
            <img src="/assets/images/marquee-icon.png" alt="Plus Icon" className="w-10 h-10 md:w-40 md:h-40"/>
            {/* <StarIcon /> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechTrendsMarquee;
