"use client";

import { useState } from "react";
import Image from "next/image";
import { technologies } from "../data/technologiesIcons";

const TILE = 112; // w-28
const GAP = 8;
const COLUMNS = 10;
const GRID_WIDTH = (COLUMNS * TILE) + ((COLUMNS - 1) * GAP);

export default function TechnologiesSection() {
  const [activeId, setActiveId] = useState(null);

  return (
    <section className="w-full bg-[#05060f] py-24">
      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-[56px] leading-[74px] font-bold text-neutral-100 mb-20">
          Technologies & Tools
        </h2>

        {/* ICON BOARD */}
        <div className="relative min-h-[640px] rounded-2xl">

          {technologies.map((tech, index) => {
            const isActive = tech.id === activeId;

            const col = index % COLUMNS;
            const row = Math.floor(index / COLUMNS);

            const left = `calc(50% - ${GRID_WIDTH / 2}px + ${col * (TILE + GAP)}px)`;
            const top = row * (TILE + GAP);

            return (
              <button
                key={tech.id}
                onClick={() => setActiveId(tech.id)}
                className={`
                  w-29 h-29 absolute rounded-sm cursor-pointer
                  transition-all duration-300
${isActive ? "scale-105 border border-[#3ADCFF]" : "border border-transparent"}
                `}
                style={{
                  left,
                  top,
                  backgroundColor: tech.bg,
                }}
              >
                {/* ICON */}
                <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
                  <Image
                    src={tech.icon}
                    alt={tech.label}
                    width={40}
                    height={40}
                  />
                </div>

                {/* LABEL */}
                <div className="absolute top-[68px] left-0 w-full text-center text-white/50 text-xs">
                  {tech.label}
                </div>
              </button>
            );
          })}

        </div>
      </div>
    </section>
  );
}
