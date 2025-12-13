'use client';

type GradientGlowButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const GradientGlowButton = ({ children, className = "" }: GradientGlowButtonProps) => {
  return (
    <div className={`relative inline-flex rounded-full p-[1px] ${className}`}>

      {/* GRADIENT BORDER */}
      <div
        className="
          absolute inset-0 rounded-full
          bg-[linear-gradient(200deg,#3ADCFF_0%,#050514_70%)]
          [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]
          [mask-composite:exclude]
        "
      />

      {/* TOP-RIGHT FADE SHADOW */}
      <div
        className="
          absolute
          -top-[4px]
          -right-[8px]
          w-[80%]
          h-[100%]
          rounded-full
          bg-[linear-gradient(255deg,#3ADCFF_0%,rgba(58,220,255,0.35)_30%,transparent_60%)]
          blur-[8px]
          opacity-90
          pointer-events-none
        "
      />

      {/* BUTTON */}
      <button
        className="
          relative z-10
          px-8 py-3
          rounded-full
          bg-[#090920]
          border border-white/10
          text-base text-white
        "
      >
        {children}
      </button>
    </div>
  );
};

export default GradientGlowButton;
