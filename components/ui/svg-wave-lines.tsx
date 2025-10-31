"use client";

export const SvgWaveLines = () => {
  return (
    <div className="absolute bottom-0 w-full h-full overflow-hidden z-0">
      <svg
        viewBox="0 0 1920 1080"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full animate-wave-lines"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "#dc2626", stopOpacity: 0.6 }} />
            <stop offset="50%" style={{ stopColor: "#ef4444", stopOpacity: 0.6 }} />
            <stop offset="100%" style={{ stopColor: "#f97316", stopOpacity: 0.6 }} />
          </linearGradient>
        </defs>
        <g stroke="url(#waveGradient)" strokeWidth="0.8" fill="none" opacity="0.4">
          {/* Wave line 1 */}
          <path d="M0,540 C480,440 960,640 1440,540 S2400,440 2880,540" />

          {/* Wave line 2 */}
          <path d="M0,570 C480,470 960,670 1440,570 S2400,470 2880,570" />

          {/* Wave line 3 */}
          <path d="M0,600 C480,500 960,700 1440,600 S2400,500 2880,600" />

          {/* Wave line 4 */}
          <path d="M0,630 C480,530 960,730 1440,630 S2400,530 2880,630" />

          {/* Wave line 5 */}
          <path d="M0,660 C480,560 960,760 1440,660 S2400,560 2880,660" />

          {/* Wave line 6 - more subtle */}
          <path d="M0,690 C480,590 960,790 1440,690 S2400,590 2880,690" opacity="0.6" />

          {/* Wave line 7 - more subtle */}
          <path d="M0,720 C480,620 960,820 1440,720 S2400,620 2880,720" opacity="0.4" />

          {/* Wave line 8 - very subtle */}
          <path d="M0,750 C480,650 960,850 1440,750 S2400,650 2880,750" opacity="0.3" />
        </g>
      </svg>

      <style jsx>{`
        @keyframes wave-lines {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(5px) scale(1.01);
          }
          100% {
            transform: translateY(-5px) scale(1);
          }
        }

        .animate-wave-lines {
          animation: wave-lines 12s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};
