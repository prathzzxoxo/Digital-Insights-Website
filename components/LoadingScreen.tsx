"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return; // Safety for SSR

    // Get navigation entries safely and handle TypeScript
    const navigationEntries = performance.getEntriesByType?.("navigation") as
      | PerformanceNavigationTiming[]
      | undefined;
    const navEntry = navigationEntries?.[0];
    const navType = (navEntry as any)?.type;

    // Check if this is a page reload or first visit
    const isReload =
      (performance as any).navigation?.type === 1 ||
      navType === "reload";

    // Check if user has visited the home page in this session
    const hasVisitedInSession = sessionStorage.getItem("hasVisitedHome");

    // Show loading only if:
    // 1. First time visiting in this session (not set in sessionStorage)
    // 2. OR it's a manual reload
    if (!hasVisitedInSession || isReload) {
      setShowLoading(true);

      // Mark as visited for this session (only if not a reload)
      if (!isReload) {
        sessionStorage.setItem("hasVisitedHome", "true");
      }

      // Show loading screen for 3 seconds
      const timer = setTimeout(() => {
        setShowLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Logo or Brand */}
      <div className="mb-8 text-center">
        <div className="text-4xl font-bold text-white mb-2">
          Digital <span className="text-red-600">Insights</span>
        </div>
      </div>

      {/* Animated Loader */}
      <div className="loader-container">
        <div className="loader"></div>
      </div>

      <style jsx>{`
        .loader-container {
          position: relative;
          width: 80px;
          height: 80px;
          animation: fadeIn 0.3s ease-in;
        }

        .loader {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 60px;
          height: 60px;
          margin: -30px 0 0 -30px;
          border: 4px solid rgba(220, 38, 38, 0.2);
          border-radius: 50%;
          border-top-color: #dc2626;
          animation: spin 1s linear infinite;
        }

        .loader::before,
        .loader::after {
          content: "";
          position: absolute;
          border-radius: 50%;
        }

        .loader::before {
          top: 5px;
          left: 5px;
          right: 5px;
          bottom: 5px;
          border: 4px solid rgba(239, 68, 68, 0.2);
          border-top-color: #ef4444;
          animation: spin 2s linear infinite reverse;
        }

        .loader::after {
          top: 15px;
          left: 15px;
          right: 15px;
          bottom: 15px;
          border: 4px solid rgba(248, 113, 113, 0.2);
          border-top-color: #f87171;
          animation: spin 1.5s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
