"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";

const ACTIVE_GROW = 8;
const INACTIVE_GROW = 0.2;
const NORMAL_GROW = 1;

/* ---------- ARROW ---------- */
const ArrowSVG = () => (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="50" height="50" rx="25" fill="#00020F" fillOpacity="0.2"/>
<path d="M32.8474 16.4549L15.7891 30.9111L17.6248 33.0773L34.6831 18.6211L32.8474 16.4549Z" fill="white"/>
<path d="M21.1114 15.2346L18.9453 17.0703L20.781 19.2364L22.9472 17.4007L21.1114 15.2346Z" fill="white"/>
<path d="M25.1114 15.5647L22.9453 17.4004L24.781 19.5665L26.9472 17.7308L25.1114 15.5647Z" fill="white"/>
<path d="M29.1193 15.8948L26.9531 17.7305L28.7888 19.8966L30.955 18.0609L29.1193 15.8948Z" fill="white"/>
<path d="M32.7911 20.2268L30.625 22.0625L32.4607 24.2286L34.6268 22.3929L32.7911 20.2268Z" fill="white"/>
<path d="M32.4552 24.2287L30.2891 26.0645L32.1248 28.2306L34.2909 26.3949L32.4552 24.2287Z" fill="white"/>
<path d="M32.1271 28.2307L29.9609 30.0664L31.7966 32.2325L33.9628 30.3968L32.1271 28.2307Z" fill="white"/>
</svg>

  </div>
);

/* ---------- DATA ---------- */
const CARD_DATA = [
  {
    title: "Blockchain Development",
    content: [
      "Smart Contract Development",
      "Private & Public Blockchains",
      "Token Development",
      "Blockchain Consulting",
    ],
  },
  {
    title: "AI & Automation",
    content: [
      "AI Chatbots",
      "Process Automation",
      "ML Model Integration",
      "Predictive Analytics",
    ],
  },
  {
    title: "DApp Development",
    content: [
      "Ethereum & Solana DApps",
      "Frontend + Web3 Integration",
      "Gas Optimization",
      "Decentralized Storage",
    ],
  },
  {
    title: "Cryptocurrency Development",
    content: [
      "Coin Creation",
      "Exchange Development",
      "Wallet Development",
      "Crypto Security Audits",
    ],
  },
  {
    title: "Web3 Solutions",
    content: [
      "Web3 App Development",
      "Wallet Connect",
      "Blockchain Authentication",
      "Web3 Identity Systems",
    ],
  },
  {
    title: "Gaming & Metaverse",
    content: [
      "Blockchain Games",
      "NFT Integration",
      "Metaverse Platforms",
      "Play-to-Earn Systems",
    ],
  },
];

const HowItworksSlide = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<number | null>(null);

  /* ---------- INITIAL STATE ---------- */
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;

      const title = card.querySelector(".panel-title") as HTMLElement;
      const content = card.querySelector(".panel-content") as HTMLElement;

      gsap.set(card, { flexGrow: NORMAL_GROW });

      gsap.set(title, {
        rotate: -90,
        x: 0,
        y: 0,
        transformOrigin: "center center",
      });

      gsap.set(content, {
        opacity: 0,
        y: 30,
      });
    });
  }, []);

  /* ---------- CLICK HANDLER ---------- */
  const onCardClick = (index: number) => {
    const reset = active === index;
    setActive(reset ? null : index);

    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      const title = card.querySelector(".panel-title") as HTMLElement;
      const content = card.querySelector(".panel-content") as HTMLElement;

      gsap.killTweensOf([card, title, content]);

      if (reset) {
        // 🔄 RESET ALL
        gsap.to(card, {
          flexGrow: NORMAL_GROW,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(title, { rotate: -90, x: 0, y: 0, duration: 0.5 });
        gsap.to(content, { opacity: 0, y: 30, duration: 0.3 });
        return;
      }

      if (i === index) {
        // ✅ ACTIVE CARD
        gsap.to(card, {
          flexGrow: ACTIVE_GROW,
          duration: 0.65,
          ease: "power3.out",
        });

        gsap.to(title, {
          rotate: 0,
          x: -140,
          y: -260,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(content, {
          opacity: 1,
          y: 0,
          delay: 0.25,
          duration: 0.5,
          ease: "power3.out",
        });
      } else {
        // ❌ INACTIVE CARDS
        gsap.to(card, {
          flexGrow: INACTIVE_GROW,
          duration: 0.6,
          ease: "power3.out",
        });

        gsap.to(title, { rotate: -90, x: 0, y: 0, duration: 0.5 });
        gsap.to(content, { opacity: 0, y: 30, duration: 0.25 });
      }
    });
  };

  /* ---------- RENDER ---------- */
  return (
    <section className="relative w-full h-[760px] overflow-hidden">
      <div className="flex w-full h-full overflow-hidden select-none">

        {CARD_DATA.map((card, i) => (
          <div
            key={i}
            ref={(el) => {cardRefs.current[i] = el}}
            onClick={() => onCardClick(i)}
            className="relative h-full flex-grow cursor-pointer overflow-hidden will-change-[flex-grow]"
          >
            {/* Background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, #393939 0%, #0f244f 60%, #393939 100%)",
              }}
            />

            {/* Glass shine */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(110deg, rgba(255,255,255,0.18), rgba(255,255,255,0))",
              }}
            />

            {/* Content */}
            <div className="relative z-10 h-full p-16">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h3 className="panel-title text-white text-4xl font-semibold whitespace-nowrap">
                  {card.title}
                </h3>
              </div>

              <ul className="panel-content mt-28 max-w-xl space-y-6 text-[#3FFFE1] text-2xl">
                {card.content.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span>•</span>
                    {item}
                  </li>
                ))}
              </ul>

              <ArrowSVG />
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default HowItworksSlide;
