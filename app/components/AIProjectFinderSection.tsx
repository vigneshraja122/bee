'use client';
import Image from "next/image";
import ProjectFinderBg from "../../public/assets/images/aiproject-finder-ui.png";

const AIProjectFinderSection = () => {
  return (
    <section className="w-full bg-[#00020f] text-white">

      {/* SECTION HEADER */}
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-[64px] font-bold mb-6">
          3x your reply rates with AI
        </h2>

        <p className="text-xl text-white/80 max-w-[640px] mx-auto leading-relaxed">
          Generate highly-personalized campaigns with AI.
          <br />
          Expert quality, no expertise required!
        </p>
      </div>

      {/* IMAGE CONTAINER */}
      <div className="relative max-w-[1140px] mx-auto">

        {/* BACKGROUND IMAGE */}
        <Image
          src={ProjectFinderBg}
          alt="AI Project Finder"
          className="w-full rounded-[48px]"
          priority
        />

        {/* OVERLAY CONTENT
        <div className="absolute inset-0 rounded-[48px] overflow-hidden backdrop-blur-[2px]">

          <div className="flex h-full">

            LEFT SIDEBAR
            <div className="w-[380px] border-r border-white/10 bg-black/40">
              <div className="p-6">
                <p className="text-xl font-semibold">
                  AI Project Finder
                </p>
              </div>
            </div>

            RIGHT CONTENT
            <div className="flex-1 p-8">

              SEARCH BAR
              <div className="flex items-center gap-4 px-4 py-3 rounded-full bg-[#2c2c2c]/90 border border-white/10 mb-8">
                <div className="w-9 h-9 rounded-full bg-white/10" />
                <p className="text-sm italic text-white/60 flex-1">
                  Select what you want to create...
                </p>

                <button className="px-6 py-2 rounded-full bg-gradient-to-b from-[#3ADCFF] to-[#1BFFE1] text-black font-semibold text-sm">
                  Generate
                </button>
              </div>

              FILTERS
              <div className="mb-6">
                <p className="text-sm font-semibold mb-3">
                  Design Type
                </p>

                <div className="flex gap-6 text-sm">
                  <span className="font-semibold">All</span>
                  <span className="text-white/50">Wireframes</span>
                  <span className="text-white/50">Mockups</span>
                  <span className="text-white/50">Inspiration</span>
                </div>
              </div>

              GRID
              <div className="grid grid-cols-4 gap-4">
                {[
                  "Signup / Login",
                  "Landing Page",
                  "Product Listing",
                  "Product Page",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg overflow-hidden bg-black/40"
                  >
                    <div className="h-[110px] bg-white/10" />
                    <div className="bg-[#2c2c2c]/90 py-2 text-center text-sm text-white/80">
                      {item}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div> */}
      </div>
    </section>
  );
};

export default AIProjectFinderSection;
