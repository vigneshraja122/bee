"use client";

import { useState } from "react";
import Image from "next/image";
import GradientGlowButton from "./GradientGlowButton";

const Topnav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center relative z-50">
      {/* MAIN NAV */}
      <div className="w-[90%] md:w-[80%] h-16 flex justify-between items-center bg-black rounded-full px-6 mt-5">

        {/* LOGO */}
        <img src="/Group 10.svg" className="w-28" alt="Logo" />

        {/* DESKTOP CTA */}
        <div className="hidden md:block">
          <GradientGlowButton>Get Started</GradientGlowButton>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <Image
            src="/assets/images/menu-icon.png"
            alt="Menu"
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden absolute top-[88px] w-[90%]
          bg-black rounded-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <nav className="flex flex-col divide-y divide-white/10">

          {/* MENU ITEM 1 */}
          <button
            onClick={() => setMenuOpen(false)}
            className="px-6 py-4 text-white text-left hover:bg-white/5 transition"
          >
            Services
          </button>

          {/* MENU ITEM 2 */}
          <button
            onClick={() => setMenuOpen(false)}
            className="px-6 py-4 text-white text-left hover:bg-white/5 transition"
          >
            Contact Us
          </button>

          {/* MOBILE CTA */}
          <div className="p-4">
            <GradientGlowButton>Get Started</GradientGlowButton>
          </div>

        </nav>
      </div>
    </header>
  );
};

export default Topnav;
