"use client";

export const SvgWaveLinesSecondary = () => {
  return (
    <div className="absolute bottom-0 w-full h-full overflow-hidden z-[1]">
      <svg
        viewBox="0 0 1920 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full animate-wave-lines-secondary"
      >
        <g stroke="#ff2020" strokeWidth="0.6" fill="none" opacity="0.35">
          <path d="M0,250 C480,180 960,320 1440,250 S1920,180 1920,250" />
          <path d="M0,270 C480,200 960,340 1440,270 S1920,200 1920,270" />
          <path d="M0,290 C480,220 960,360 1440,290 S1920,220 1920,290" />
          <path d="M0,310 C480,240 960,380 1440,310 S1920,240 1920,310" />
          <path d="M0,330 C480,260 960,400 1440,330 S1920,260 1920,330" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes wave-lines-secondary {
          0% {
            transform: translateX(0) scaleX(1);
          }
          50% {
            transform: translateX(-10px) scaleX(1.02);
          }
          100% {
            transform: translateX(0) scaleX(1);
          }
        }

        .animate-wave-lines-secondary {
          animation: wave-lines-secondary 10s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};
