"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Shield, Bug, Lock } from "lucide-react";

const newsItems = [
  {
    icon: AlertCircle,
    text: "CRITICAL: New zero-day vulnerability discovered in widely-used encryption library",
    severity: "critical"
  },
  {
    icon: Shield,
    text: "UAE Cybersecurity Council issues new data protection guidelines for financial sector",
    severity: "info"
  },
  {
    icon: Bug,
    text: "ALERT: Ransomware campaign targeting healthcare institutions in the Middle East",
    severity: "high"
  },
  {
    icon: Lock,
    text: "Major cloud provider patches critical authentication bypass vulnerability",
    severity: "high"
  },
  {
    icon: AlertCircle,
    text: "Phishing campaign impersonating government agencies detected in UAE",
    severity: "medium"
  },
  {
    icon: Shield,
    text: "New AI-powered threat detection reduces incident response time by 70%",
    severity: "info"
  },
  {
    icon: Bug,
    text: "BREAKING: Supply chain attack affects thousands of organizations globally",
    severity: "critical"
  },
  {
    icon: Lock,
    text: "Security researchers discover critical flaw in popular VPN software",
    severity: "high"
  },
];

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "text-red-400 bg-red-500/10 border-red-500/30";
      case "high":
        return "text-orange-400 bg-orange-500/10 border-orange-500/30";
      case "medium":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/30";
      default:
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
    }
  };

  return (
    <div className="w-full bg-slate-900 border-t border-slate-700 py-3 overflow-hidden">
      <div className="max-w-full">
        <div className="flex items-center">
          {/* Breaking News Label */}
          <div className="flex-shrink-0 bg-primary px-6 py-2 mr-4">
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Live Security Feed
            </span>
          </div>

          {/* Scrolling News Container */}
          <div
            className="flex-1 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-8"
              animate={{
                x: isPaused ? 0 : [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 60,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate news items for seamless loop */}
              {[...newsItems, ...newsItems, ...newsItems].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 px-4 py-1.5 rounded-lg border ${getSeverityColor(item.severity)} flex-shrink-0`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
