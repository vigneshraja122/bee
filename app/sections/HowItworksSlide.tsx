"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import Image from "next/image";

/* ================= CONFIG ================= */
const ACTIVE_WIDTH = 520;
const EASE = "power3.out";


/* ================= DATA ================= */
const CARD_DATA = [
  {
    title: "Blockchain Development",
    content: [
      "Web3 App Development",
      "Web3 Integration for Existing Systems",
      "Wallet Connect & Blockchain Authentication",
      "Web3 Identity & Access Management",
    ],
  },
  { title: "AI & Automation", content: ["Web3 App Development", "Automation", "ML Models", "Analytics"] },
  { title: "DApp Development", content: ["Ethereum", "Solana", "Web3 UI", "Gas Opt"] },
  { title: "Crypto Development", content: ["Coins", "Exchanges", "Web3 App Development", "Audits"] },
  { title: "Web3 Solutions", content: ["Web3 Apps", "Integration", "Web3 App Development Connect"] },
  { title: "Gaming & Metaverse", content: ["NFT Games", "Metaverse", "Web3 App Development", "Economies"] },
];

/* ================= COMPONENT ================= */
export default function HowItWorksSlide() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);
  const isAnimating = useRef(false);
const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  /* ---------- INITIAL ---------- */
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      gsap.set(card, { flexGrow: 1, flexBasis: 0 });
      gsap.set(card.querySelector(".collapsed-title"), { rotate: -90, opacity: 1 });
      gsap.set(card.querySelector(".active-title"), { opacity: 0, y: 20 });
      gsap.set(card.querySelector(".content"), { opacity: 0, y: 30 });
      gsap.set(card.querySelector(".arrow-collapsed"), { opacity: 1 });
      gsap.set(card.querySelector(".arrow-active"), { opacity: 0, x: -10 });
    });
  }, []);

  /* ---------- ACTIVATE ---------- */
const activateCard = (index: number) => {
  if (active === index) return;
  setActive(index);

  cardRefs.current.forEach((card, i) => {
    if (!card) return;

    const collapsedTitle = card.querySelector(".collapsed-title");
    const activeTitle = card.querySelector(".active-title");
    const content = card.querySelector(".content");
    const arrowCollapsed = card.querySelector(".arrow-collapsed");
    const arrowActive = card.querySelector(".arrow-active");

    // 🚨 Always kill running tweens first
    gsap.killTweensOf([
      card,
      collapsedTitle,
      activeTitle,
      content,
      arrowCollapsed,
      arrowActive,
    ]);

    /* ------------------ NON-ACTIVE CARDS ------------------ */
    if (i !== index) {
      gsap.to(card, {
        flexGrow: 1,
        flexBasis: 0,
        duration: 0.45,
        ease: EASE,
        overwrite: "auto",
      });

      gsap.to(collapsedTitle, {
        opacity: 1,
        rotate: -90,
        duration: 0.3,
        overwrite: "auto",
      });

      gsap.to(activeTitle, {
        opacity: 0,
        y: 20,
        duration: 0.2,
        overwrite: "auto",
      });

      gsap.to(content, {
        opacity: 0,
        y: 30,
        duration: 0.2,
        overwrite: "auto",
      });

      gsap.to(arrowCollapsed, {
        opacity: 1,
        duration: 0.25,
        overwrite: "auto",
      });

      gsap.to(arrowActive, {
        opacity: 0,
        x: -10,
        duration: 0.2,
        overwrite: "auto",
      });

      return; // ⬅️ VERY IMPORTANT
    }

    /* ------------------ ACTIVE CARD ------------------ */

    // 1️⃣ WIDTH EXPANDS IMMEDIATELY
    gsap.to(card, {
      flexGrow: 0,
      flexBasis: ACTIVE_WIDTH,
      duration: 0.45,
      ease: EASE,
      overwrite: "auto",
    });

    // 2️⃣ LOCK TEXT ANIMATION ONLY
    isAnimating.current = true;

    gsap.to(collapsedTitle, {
      opacity: 0,
      duration: 0.18,
      overwrite: "auto",
    });

    gsap.to(activeTitle, {
      opacity: 1,
      y: 0,
      delay: 0.12,
      overwrite: "auto",
    });

    gsap.to(content, {
      opacity: 1,
      y: 0,
      delay: 0.2,
      overwrite: "auto",
    });

    gsap.to(arrowCollapsed, {
      opacity: 0,
      duration: 0.2,
      overwrite: "auto",
    });

    gsap.to(arrowActive, {
      opacity: 1,
      x: 0,
      delay: 0.2,
      overwrite: "auto",
      onComplete: () => {
        isAnimating.current = false; // 🔓 unlock AFTER text settles
      },
    });
  });
};


  /* ---------- RESET ---------- */
const resetAll = () => {
  if (hoverTimeout.current) clearTimeout(hoverTimeout.current);

  hoverTimeout.current = setTimeout(() => {
    if (isAnimating.current) return;

    setActive(null);

    cardRefs.current.forEach((card) => {
      if (!card) return;

      const targets = [
        card,
        card.querySelector(".collapsed-title"),
        card.querySelector(".active-title"),
        card.querySelector(".content"),
        card.querySelector(".arrow-collapsed"),
        card.querySelector(".arrow-active"),
      ];

      gsap.killTweensOf(targets);

      gsap.to(card, {
        flexGrow: 1,
        flexBasis: 0,
        duration: 0.45,
        ease: EASE,
        overwrite: "auto",
      });

      gsap.to(card.querySelector(".collapsed-title"), {
        opacity: 1,
        rotate: -90,
        duration: 0.3,
        overwrite: "auto",
      });

      gsap.to(card.querySelector(".active-title"), {
        opacity: 0,
        y: 20,
        duration: 0.2,
        overwrite: "auto",
      });

      gsap.to(card.querySelector(".content"), {
        opacity: 0,
        y: 30,
        duration: 0.2,
        overwrite: "auto",
      });

      gsap.to(card.querySelector(".arrow-collapsed"), {
        opacity: 1,
        duration: 0.25,
        overwrite: "auto",
      });

      gsap.to(card.querySelector(".arrow-active"), {
        opacity: 0,
        x: -10,
        duration: 0.2,
        overwrite: "auto",
      });
    });
  }, 60); // 🧈 micro delay = smooth
};


  return (
    <section className="w-full h-[760px] bg-[#05060f] overflow-hidden flex flex-col">
      <h2 className="text-center text-transparent bg-clip-text bg-[linear-gradient(90deg,#00A993_0%,#57ADCD_54%,#FFFFFF_60%)]
      text-5xl md:text-6xl font-semibold mb-16">
        How It Works
      </h2>

      <div className="flex flex-1" onMouseLeave={resetAll}>
        {CARD_DATA.map((card, i) => (
          <div
            key={i}
            ref={(el) => {cardRefs.current[i] = el}}
            onMouseEnter={() => activateCard(i)}
            className="relative flex-grow basis-0 cursor-pointer overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#393939] via-[#0f244f] to-[#393939]" />

            {/* CONTENT */}
            <div className="relative z-10 h-full p-10 pointer-events-none">
              <h3 className="collapsed-title absolute inset-0 flex items-center justify-center text-white text-3xl whitespace-nowrap">
                {card.title}
              </h3>

              <div className="active-title absolute top-20 left-6 flex items-center gap-10 whitespace-nowrap">
                <span className="text-white text-3xl">{card.title}</span>
                <div className="arrow-active">
                  <Image src="/assets/images/active-arrow.png" alt="Arrow Right Active" width={50} height={50} />
                </div>
              </div>

              <ul className="content mt-28 space-y-4 text-[#1BFFE1] text-[20px] leading-7">
                {card.content.map((c, idx) => (
                  <li key={idx}>• {c}</li>
                ))}
              </ul>

              <div className="arrow-collapsed absolute bottom-6 left-1/2 -translate-x-1/2">
                <Image src="/assets/images/initial-arrow.png" alt="Arrow Right" width={50} height={50} />
              </div>
            </div>

            {i !== CARD_DATA.length - 1 && (
              <div className="absolute right-0 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#3FFFE1]/40 to-transparent z-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
