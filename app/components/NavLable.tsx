type NavLabelProps = {
  label: string;
  className?: string;
};

const NavLabel = ({ label, className = "" }: NavLabelProps) => {
  return (
    <div
      className={`
        flex items-center w-[180px] relative overflow-hidden
        pl-2 pr-[11.83px] py-2 rounded-lg
        border border-[#0B2A44]
        bg-[url('/assets/div.label-wip.png')]
        ${className}
      `}
    >
     
      {/* TEXT */}
      <p className="text-[20px] text-white whitespace-nowrap">
        {label}
      </p>

      {/* RIGHT FADE */}
      <div
        className="
          absolute right-0 top-0 h-full w-[160px]
          rounded-tr-lg rounded-br-lg
          bg-gradient-to-l from-white/[0.12] to-transparent
          pointer-events-none
        "
      />
    </div>
  );
};

export default NavLabel;
