"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Shield, Bug, Lock, Globe } from "lucide-react";

interface NewsItem {
  iconName: string;
  text: string;
  severity: string;
  url?: string;
}

const NewsTicker = () => {
  const [newsItems] = useState<NewsItem[]>([
    {
      iconName: "AlertCircle",
      text: "10 npm Packages Caught Stealing Developer Credentials on Windows, macOS, and Linux",
      severity: "critical",
      url: "https://thehackernews.com/"
    },
    {
      iconName: "Shield",
      text: "Google Unveils Guide for Defenders to Monitor Privileged User Accounts",
      severity: "info",
      url: "https://cybersecuritynews.com/"
    },
    {
      iconName: "Bug",
      text: "Top 25 cyber threats in the world",
      severity: "high",
      url: "https://www.reuters.com/technology/cybersecurity/"
    },
    {
      iconName: "Globe",
      text: "Bleeping Computer | Cybersecurity & Technology News",
      severity: "medium",
      url: "https://www.bleepingcomputer.com/"
    },
  ]);

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

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "AlertCircle":
        return AlertCircle;
      case "Shield":
        return Shield;
      case "Bug":
        return Bug;
      case "Lock":
        return Lock;
      default:
        return Globe;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-black/95 backdrop-blur-md border-t border-gray-700 py-3 overflow-hidden z-40">
      <div className="max-w-full">
        <div className="flex items-center">
          {/* Breaking News Label */}
          <div className="flex-shrink-0 bg-primary px-6 py-2 mr-4">
            <span className="text-white font-bold text-sm uppercase tracking-wider">
              Live Security Feed
            </span>
          </div>

          {/* Scrolling News Container */}
          <div className="flex-1 overflow-hidden">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -3000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 80,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate news items for seamless loop */}
              {[...newsItems, ...newsItems, ...newsItems].map((item, index) => {
                const IconComponent = getIcon(item.iconName);
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 px-4 py-1.5 rounded-lg border ${getSeverityColor(item.severity)} flex-shrink-0 hover:opacity-80 transition-opacity cursor-pointer`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="text-sm whitespace-nowrap">{item.text}</span>
                  </a>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
