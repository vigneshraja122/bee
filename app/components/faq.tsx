'use client';

import { useState } from "react";
import GradientGlowButton from "./GradientGlowButton";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: "What is outreach AI?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "What is AI personalization?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "What's the impact of AI on prospecting?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "Can AI replace human interaction in outreach?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "How does AI improve outreach effectiveness?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "What are the benefits of using AI in outreach?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "Can AI help in optimizing outreach campaigns?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
    { q: "How to generate personalized campaigns with lemlist AI?", a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi." },
  ];

  return (
    <section className="w-full bg-[#00020f] py-20">
      <div className="w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row gap-16 md:gap-[120px] text-white">

        {/* MOBILE TITLE */}
        <h3 className="md:hidden text-xl  text-center font-semibold text-white mb-6">
          FAQs
        </h3>

        {/* LEFT SIDE — Desktop only */}
        <div className="hidden md:flex md:w-[40%] flex-col gap-10">
          <h2 className="text-[64px] font-bold leading-tight">
            Frequently <br /> Asked <br /> Questions
          </h2>

          <div className="flex flex-col items-start gap-2">
            <GradientGlowButton>
              Try For Free
            </GradientGlowButton>
            <p className="text-sm text-white/40 ml-4">
              No card required.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE — FAQ */}
        <div className="w-full md:w-[60%] flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-[14px] p-[0.8px] bg-[linear-gradient(160deg,#3ADCFF_0%,#050514_65%)]"
              >
                <div className="bg-[#050514] rounded-[13px] px-5 py-4">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center gap-6 text-left"
                  >
                    <p className="text-sm sm:text-base font-medium">
                      {item.q}
                    </p>

                    {isOpen ? (
                      <svg width="16" height="3" viewBox="0 0 16 3">
                        <path d="M1 1H15" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16">
                        <path d="M8 1V15M1 8H15" stroke="white" strokeOpacity="0.6" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-white/60 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
