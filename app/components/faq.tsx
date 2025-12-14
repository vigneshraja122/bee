'use client'
import { useState } from "react";
import GradientGlowButton from "./GradientGlowButton";

const FAQSection = () => {
const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is outreach AI?",
      a: "Lorem ipsum dolor sit amet consectetur. At morbi arcu feugiat est tristique risus ipsum maecenas morbi. Elementum eu non eleifend dolor. Erat fermentum id nisl diam rhoncus proin purus duis."
    },
    { q: "What is AI personalization?" },
    { q: "What's the impact of AI on prospecting?" },
    { q: "Can AI replace human interaction in outreach?" },
    { q: "How does AI improve outreach effectiveness?" },
    { q: "What are the benefits of using AI in outreach?" },
    { q: "Can AI help in optimizing outreach campaigns?" },
    { q: "How to generate personalized campaigns with lemlist AI?" },
  ];

  return (
    <section className="w-full h-screen bg-[#00020f] py-10">
      <div className="w-[80%] mx-auto flex gap-[120px] text-white">

        {/* LEFT SIDE */}
        <div className="w-[40%] flex flex-col gap-12">
          <h2 className="text-[64px] font-bold leading-tight">
            Frequently <br /> Asked <br /> Questions
          </h2>

  <div className="flex flex-col items-start gap-2">
  <GradientGlowButton>
    Try For Free
  </GradientGlowButton>

  <p className="text-center ml-4 text-sm text-white/40">
    No card required.
  </p>
</div>


        </div>

        {/* RIGHT SIDE */}
        <div className="w-[60%] flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="relative rounded-[14px] p-[0.8px] bg-[linear-gradient(160deg,#3ADCFF_0%,#050514_65%)]"
                
              >
                <div className="bg-[#050514] rounded-[13px] px-5 py-3">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center"
                  >
                    <p className="text-base font-medium text-left">
                      {item.q}
                    </p>

                    {isOpen ? (
                      /* MINUS */
                      <svg width="16" height="3" viewBox="0 0 16 3" fill="none">
                        <path
                          d="M1 1H15"
                          stroke="white"
                          strokeOpacity="0.6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      /* PLUS */
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M8 1V15M1 8H15"
                          stroke="white"
                          strokeOpacity="0.6"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </button>

                  {/* ANSWER */}
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
