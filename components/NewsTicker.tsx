"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Shield, Bug, Lock, Globe } from "lucide-react";

interface NewsItem {
  iconName: string;
  text: string;
  severity: string;
  url?: string;
}

const NewsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [newsItems, setNewsItems] = useState<NewsItem[]>([
    {
      iconName: "Globe",
      text: "Loading latest cybersecurity news...",
      severity: "info"
    }
  ]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=cybersecurity OR hacking OR data breach OR cyber attack&sortBy=publishedAt&language=en&apiKey=373090c9d8fb4892af46b833b8a1b9c8&pageSize=20`
        );
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
          const formattedNews: NewsItem[] = data.articles.map((article: any) => {
            const title = article.title.toLowerCase();
            let severity = "info";
            let iconName = "Globe";

            if (title.includes("critical") || title.includes("zero-day") || title.includes("ransomware")) {
              severity = "critical";
              iconName = "AlertCircle";
            } else if (title.includes("breach") || title.includes("attack") || title.includes("vulnerability")) {
              severity = "high";
              iconName = "Bug";
            } else if (title.includes("security") || title.includes("patch") || title.includes("update")) {
              severity = "medium";
              iconName = "Lock";
            } else {
              iconName = "Shield";
            }

            return {
              iconName,
              text: article.title,
              severity,
              url: article.url
            };
          });

          setNewsItems(formattedNews);
          // Cache the news
          localStorage.setItem('securityNews', JSON.stringify({
            data: formattedNews,
            timestamp: Date.now()
          }));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
        // Try to load from cache
        const cached = localStorage.getItem('securityNews');
        if (cached) {
          const { data } = JSON.parse(cached);
          setNewsItems(data);
        }
      }
    };

    // Check if we have cached news from today
    const cached = localStorage.getItem('securityNews');
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      const age = Date.now() - timestamp;
      const ONE_DAY = 24 * 60 * 60 * 1000;

      if (age < ONE_DAY) {
        setNewsItems(data);
        return;
      }
    }

    fetchNews();

    // Fetch new news every 24 hours
    const interval = setInterval(fetchNews, 24 * 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

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
    <div className="fixed bottom-0 left-0 right-0 w-full bg-slate-900/95 backdrop-blur-md border-t border-slate-700 py-3 overflow-hidden z-40">
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
                x: isPaused ? 0 : [0, -3000],
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
