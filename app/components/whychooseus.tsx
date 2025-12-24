"use client";

import Image from "next/image";
import React from "react";
import GradientGlowButton from "./GradientGlowButton";
import NavLabel from "./NavLable";

const Whychooseus = () => {
  return (
    <section className="w-full bg-[#00020F] py-16 md:py-20 flex justify-center text-white">
      <div className="relative w-full max-w-[1200px] px-4 md:px-6">

        {/* TITLE */}
        <div className="mb-12 md:mb-16 flex justify-center">
          <NavLabel label="Why Choose Us" />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-stretch">

          {/* LEFT STACK */}
          <div
            className="
              col-span-1 md:col-span-3
              grid grid-cols-2 gap-4
              md:flex md:flex-col md:gap-4
              h-full md:translate-x-4
            "
          >
            {/* ICON CARD */}
            <div className="rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex items-center justify-center">
              <img
                src="/assets/images/dark-btn.png"
                alt="icon"
                className="w-16 md:w-20"
              />
            </div>

            {/* EVO AI CARD */}
            <div className="rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col items-center justify-center gap-2">
              <h2 className="text-2xl md:text-4xl font-semibold text-transparent bg-clip-text
                bg-[linear-gradient(90deg,#FFFFFF_10%,#00A993_60%,#00A993_45%)]">
                EVO AI
              </h2>
              <img
                src="/assets/images/core-approch-icon.png"
                alt="icon"
                className="w-20 md:w-24"
              />
            </div>

            {/* PROJECT CARD – FULL WIDTH ON MOBILE */}
            <div className="col-span-2 rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col justify-between">
              <h3 className="text-base md:text-xl font-bold text-emerald-50">
                Project Ideation & Planning
              </h3>

              <div className="relative h-28 md:h-40">
                <Image
                  src="/assets/images/floting-text.png"
                  alt="Idea"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CENTER HUB */}
          <div className="col-span-1 md:col-span-6 flex justify-center items-center">
            <div
              className="
                relative
                w-full
                h-[540px]
                sm:h-[520px]
                md:w-[520px]
              "
            >
              {/* DESKTOP / TABLET IMAGE */}
              <Image
                src="/assets/images/whychoose-center-img.png"
                alt="AI Core"
                fill
                priority
                className="hidden md:block object-contain"
              />

              {/* MOBILE IMAGE */}
              <Image
                src="/assets/images/whychoose-center-imgmobile.png"
                alt="AI Core Mobile"
                fill
                priority
                className="block md:hidden object-contain"
              />

              {/* CTA */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <GradientGlowButton>
                  Know More
                </GradientGlowButton>
              </div>
            </div>
          </div>

          {/* RIGHT STACK */}
          <div className="col-span-1 md:col-span-3 flex flex-col gap-4 h-full md:-translate-x-4">

            {/* DESIGN CARD */}
            <div className="flex-[1.8] rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col justify-between">
              <Image
                src="/assets/images/small-logo.svg"
                alt="Design"
                width={64}
                height={64}
                className="w-10 md:w-12"
              />
              <h3 className="text-lg md:text-2xl font-semibold">
                Design & UI/UX
              </h3>
              <div>
                <p className="text-xs md:text-sm font-bold text-emerald-50">
                  Development Speed
                </p>
                <p className="text-xs md:text-lg text-cyan-400">
                  3× faster with AI-assisted coding
                </p>
              </div>
            </div>

            {/* EXECUTION CARD */}
            <div className="flex-[1] rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex flex-col items-center justify-center gap-1">
              <h4 className="text-sm md:text-xl text-[#66BAFF] text-center">
                Execution Consistency
              </h4>
              <p className="text-xs md:text-base text-cyan-200">
                Time-to-Market
              </p>
              <img
                src="/assets/images/small-avatar-icon.png"
                alt="avatar"
                className="w-10 rounded-full"
              />
            </div>

            {/* MAINTENANCE CARD */}
            <div className="flex-[1] rounded-2xl md:rounded-[28px] border border-white/10
              bg-gradient-to-br from-[#2A2A2A] via-[#151515] to-[#050505]
              shadow-[inset_0_1px_1px_rgba(255,255,255,0.12),_0_16px_30px_rgba(0,0,0,0.7)]
              p-3 md:p-5 flex items-center justify-center">
              <button className="text-xs md:text-lg px-4 py-1.5 rounded-full font-medium
                bg-gradient-to-r from-[#7ee8ec] to-[#50a7b0]">
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
