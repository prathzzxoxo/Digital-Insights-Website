"use client";

export const RedLineWave = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
      <svg
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full animate-wave-shift"
      >
        <g stroke="#ff1e1e" strokeWidth="0.6" fill="none" opacity="0.35">
          <path d="M0,400 C480,300 960,500 1440,400 S1920,300 1920,400" />
          <path d="M0,430 C480,330 960,530 1440,430 S1920,330 1920,430" />
          <path d="M0,460 C480,360 960,560 1440,460 S1920,360 1920,460" />
          <path d="M0,490 C480,390 960,590 1440,490 S1920,390 1920,490" />
          <path d="M0,520 C480,420 960,620 1440,520 S1920,420 1920,520" />
          <path d="M0,550 C480,450 960,650 1440,550 S1920,450 1920,550" />
          <path d="M0,580 C480,480 960,680 1440,580 S1920,480 1920,580" />
          <path d="M0,610 C480,510 960,710 1440,610 S1920,510 1920,610" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes waveShift {
          0% {
            transform: translateY(0px) scale(1);
          }
          50% {
            transform: translateY(10px) scale(1.02);
          }
          100% {
            transform: translateY(-10px) scale(1);
          }
        }

        .animate-wave-shift {
          animation: waveShift 12s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};
