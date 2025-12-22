"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

const TechTrendsMarquee = () => {
  return (
    <div className="w-full bg-black h-40 flex justify-center items-center overflow-hidden">
      <Marquee className="flex " speed={50} direction="right">
        {[1, 2].map((_, i) => (
          <div key={i} className="flex items-center gap-20 mx-10 overflow-hidden">
            {/* <StarIcon /> */}

            <h1 className="
                text-6xl font-extrabold tracking-widest
                text-transparent
                bg-clip-text
                [-webkit-text-fill-color:transparent]
                [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
                bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move"
            >
              GENERATIVE AI
            </h1>
            <Image src="/assets/images/marquee-icon.png" alt="Plus Icon" height={200} width={144} />
            {/* 
            <StarIcon /> */}

            <h1 className="
    text-6xl font-extrabold tracking-widest
    text-transparent
    bg-clip-text
    [-webkit-text-fill-color:transparent]
    [-webkit-text-stroke:1.5px_rgba(46,242,227,0.9)]
    bg-gradient-to-r from-teal-400/0 to-teal-400/100 via-teal-400/60 bg-[length:200%_200%] bg-[position:0%_50%] animate-gradient-move"
            >
              TECH TRENDS
            </h1>
            <Image src="/assets/images/marquee-icon.png" alt="Plus Icon" height={200} width={144} />
            {/* <StarIcon /> */}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default TechTrendsMarquee;
