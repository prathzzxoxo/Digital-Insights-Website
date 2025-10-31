"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if user has visited before (in this session)
    const hasVisited = sessionStorage.getItem('hasVisitedHome');

    if (hasVisited) {
      // If already visited in this session, don't show initial loading
      setIsLoading(false);
      setShowLoading(false);
      return;
    }

    // Mark as visited for this session
    sessionStorage.setItem('hasVisitedHome', 'true');

    // Show loading screen for 3 seconds on first visit
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Also show loading when page is still loading (slow network)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleLoad = () => {
        // Page fully loaded, can hide loading if timer is done
        if (!isLoading) {
          setShowLoading(false);
        }
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    }
  }, [isLoading]);

  if (!showLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      {/* Logo or Brand */}
      <div className="mb-8">
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

        /* Fade out animation */
        .loader-container {
          animation: fadeIn 0.3s ease-in;
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
