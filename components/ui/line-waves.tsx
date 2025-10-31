"use client";
import { useEffect, useRef } from "react";

interface LineWavesProps {
  variant?: "minimal" | "layered";
}

export const LineWaves = ({ variant = "minimal" }: LineWavesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationFrame: number;
    let offset = 0;

    // Configuration based on variant
    const config =
      variant === "minimal"
        ? {
            numLines: 8,
            baseOpacity: 0.08,
            lineWidth: 0.6,
            verticalSpacing: 25,
            verticalOffset: 80, // Position below center
          }
        : {
            numLines: 15,
            baseOpacity: 0.15,
            lineWidth: 0.8,
            verticalSpacing: 20,
            verticalOffset: 60,
          };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerY = canvas.height / 2 + config.verticalOffset;
      const amplitude = 100;
      const frequency = 0.0015;

      for (let i = 0; i < config.numLines; i++) {
        ctx.beginPath();

        const lineOffset = (i - config.numLines / 2) * config.verticalSpacing;
        const phaseShift = (i * Math.PI) / 6;

        for (let x = 0; x <= canvas.width; x += 2) {
          // Horizontal fade at edges
          const edgeFadeLeft = Math.min(x / 400, 1);
          const edgeFadeRight = Math.min((canvas.width - x) / 400, 1);
          const horizontalFade = edgeFadeLeft * edgeFadeRight;

          // Vertical fade - fade out toward bottom
          const verticalPosition = centerY + lineOffset;
          const bottomFade = Math.max(
            0,
            1 - Math.max(0, verticalPosition - canvas.height * 0.6) / (canvas.height * 0.4)
          );

          const y =
            centerY +
            lineOffset +
            Math.sin(x * frequency + offset + phaseShift) * amplitude;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }

          // Apply combined fade
          const combinedFade = horizontalFade * bottomFade;
          ctx.globalAlpha = config.baseOpacity * combinedFade;
        }

        // Gradient from red to orange
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, "#dc2626");
        gradient.addColorStop(0.5, "#ef4444");
        gradient.addColorStop(1, "#f97316");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = config.lineWidth;
        ctx.stroke();
      }

      offset += 0.005; // Very slow, elegant animation
      animationFrame = requestAnimationFrame(drawWaves);
    };

    drawWaves();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: variant === "minimal" ? 0.5 : 0.7 }}
    />
  );
};
