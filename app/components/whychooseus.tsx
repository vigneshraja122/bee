"use client";

import Image from "next/image";
import React from "react";
import GradientGlowButton from "./GradientGlowButton";
import NavLabel from "./NavLable";

const Whychooseus = () => {
  return (
    <section className="w-full bg-[#00020F] py-20 flex justify-center text-white">

      <div className="relative w-full max-w-[1200px] xl:px-6 lg:px-6 md:px-1">
             <div className="mb-16 flex justify-center">
              <NavLabel label="Why Choose Us" />
            </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6 items-stretch">

          {/* LEFT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full translate-x-4">

            {/* ICON CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex items-center justify-center">
             
    <img
                  src="/assets/images/dark-btn.png"
                  alt="icon"
                />  
 
 
            </div>

            {/* EVO AI CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex flex-col items-center justify-center gap-3">
              <h2 className="xl:text-6xl lg:text-6xl md:text-3xl  font-semibold text-transparent bg-clip-text bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">EVO AI</h2>
              <img
                  src="/assets/images/core-approch-icon.png"
                  alt="icon"
                />  
            </div>

            {/* PROJECT CARD (bigger weight) */}
            <div className="flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-6 sm:p-4 p-4 flex flex-col justify-between">
              <h3 className="xl:text-2xl xl:text-2xl md:text-sm font-bold text-emerald-50">
                Project Ideation & Planning
              </h3>

              {/* Decorative floating elements */}
              <div className="relative xl:h-72 lg:h-72 md:h-unset">
              

            <div className="xl:w-64 xl:h-80 lg:w-64 lg:h-80 md:w-34 md:h-30 xl:right-6 lg:right-6 md:right-1 bottom-2 relative overflow-hidden bg-transparent">
                <Image
                  src="/assets/images/floting-text.png"
                  alt="Idea Light"
                  fill
                  className="xl:object-contain lg:object-contain md:object-unset"
                />

              </div>
              </div>
            </div>
          </div>

          {/* CENTER HUB (HEIGHT MASTER) */}
          <div className="col-span-6 flex justify-center">
            <div className="relative xl:w-[520px] lg:w-[520px] md:w-[350px] xl:w-[520px]  aspect-square">
              <Image
                src="/assets/images/whychoose-center-img.png"
                alt="AI Core"
                fill
                priority
                className="object-contain"
              />
              <div className="absolute inset-0 top-35 flex items-center justify-center z-10">
                <GradientGlowButton>
                  Know More
                </GradientGlowButton>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="col-span-3 flex flex-col gap-6 h-full -translate-x-4">

            {/* DESIGN CARD (bigger weight) */}
            <div className="flex-[2] rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 p-4 flex flex-col justify-between">
             <Image src="/assets/images/small-logo.svg" alt="Design Icon" width={64} height={64} className="w-16 h-16 mb-4" />
              <h3 className="xl:text-3xl lg:text-3xl md:text-lg font-semibold leading-tight">
                Design & UI/UX
              </h3>

              <div className="mt-8">
                <p className="xl:text-emerald-50 lg:text-emerald-50 md:text-[10px] text-[20px] font-bold">
                  Development Speed
                </p>
                <p className="text-cyan-400 xl:text-xl lg:text-xl md:text-[10px]">
                  3× faster with AI-assisted coding
                </p>
              </div>
            </div>

            {/* EXECUTION CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex flex-col items-center justify-center gap-2">
              <h4 className="text-[#66BAFF] text-center xl:text-3xl lg:text-3xl md:text-xl">
                Execution Consistency
              </h4>
              <p className="text-cyan-200 xl:text-xl lg:text-xl md:text-md">Time-to-Market</p>

              <img
                src="/assets/images/small-avatar-icon.png"
                alt="avatar"
                className="w-auto h-auto rounded-full"
              />
            </div>

            {/* MAINTENANCE CARD */}
            <div className="flex-1 rounded-[32px] border border-white/10 bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),_0_20px_40px_rgba(0,0,0,0.8)] xl:p-8 lg:p-8 md:p-4 sm:p-4 flex items-center justify-center">
              <button className="xl:text-2xl lg:text-2xl md:text-[10px] font-medium px-4 py-2 bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0] rounded-full">
                Maintenance & Upgrades
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Whychooseus;
