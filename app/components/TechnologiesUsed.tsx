"use client";

import { useState } from "react";
import Image from "next/image";
import { technologies } from "../data/technologiesIcons";

const TILE = 112; // w-28
const GAP = 2;
const COLUMNS = 10;
const GRID_WIDTH = COLUMNS * TILE + (COLUMNS - 1) * GAP;

export default function TechnologiesSection() {
  const [activeId, setActiveId] = useState<number>(technologies[0].id);

  return (
    <section className="w-full bg-[#05060f] py-24">
      {/* CONTAINER */}
      <div className="max-w-[1440px] mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center text-[56px] leading-[74px] font-bold text-neutral-100 mb-16">
          Technologies & Tools
        </h2>

        {/* LEGEND / CATEGORY ROW */}
        <div className="flex justify-center mb-14">
          <div className="flex items-center gap-20 flex-wrap">

            <Legend color="bg-cyan-400" text="Blockchain" active />
            <Legend color="bg-yellow-300" text="Program" />
            <Legend color="bg-blue-500" text="Smart Contract" />
            <Legend color="bg-orange-500" text="Web3 & Backend" />
            <Legend color="bg-rose-500" text="AI Technology" />

          </div>
        </div>

        {/* ICON BOARD */}
<div className="relative min-h-[640px]">

  {technologies.map((tech, index) => {
    const isActive = tech.id === activeId;

    const col = index % COLUMNS;
    const row = Math.floor(index / COLUMNS);

    const left = `calc(50% - ${GRID_WIDTH / 2}px + ${
      col * (TILE + GAP)
    }px)`;
    const top = row * (TILE + GAP);

    return (
      <button
        key={tech.id}
        onClick={() => setActiveId(tech.id)}
        className={`
          absolute w-28 h-28 overflow-hidden
          bg-[#2A2A2A]
          transition-all duration-300
          ${isActive ? "outline outline-1 outline-cyan-400" : ""}
        `}
        style={{ left, top, backgroundColor: tech.bg }}
      >
        {/* ICON */}
        <div className="absolute top-[20px] left-1/2 -translate-x-1/2">
          <div
            className="w-8 h-8 flex items-center justify-center"
          >
            <img
              src={tech.icon}
              alt={tech.label}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>

        {/* LABEL */}
        <div className="absolute top-[68px] w-full text-center text-white/25 text-xs leading-4">
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

/* ------------------ */
/* LEGEND COMPONENT */
/* ------------------ */

function Legend({
  color,
  text,
  active = false,
}: {
  color: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-5 h-5 rounded-sm ${color}`} />
      <span
        className={`text-sm leading-4 ${
          active ? "text-cyan-400" : "text-white/50"
        }`}
      >
        {text}
      </span>
    </div>
  );
}
