"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function ThreatIntelGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#0a0a1f",
    showAtmosphere: true,
    atmosphereColor: "#C7462F",
    atmosphereAltitude: 0.1,
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(199,70,47,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 25.2048, lng: 55.2708 }, // Dubai coordinates
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const threatData = [
    // Threats to UAE from various locations
    {
      order: 1,
      startLat: 40.7128,
      startLng: -74.006, // New York
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.3,
      color: "#ef4444", // Red for critical
    },
    {
      order: 2,
      startLat: 51.5074,
      startLng: -0.1278, // London
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.2,
      color: "#f59e0b", // Orange for high
    },
    {
      order: 3,
      startLat: 35.6762,
      startLng: 139.6503, // Tokyo
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.25,
      color: "#ef4444",
    },
    {
      order: 4,
      startLat: -33.8688,
      startLng: 151.2093, // Sydney
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.4,
      color: "#eab308",
    },
    {
      order: 5,
      startLat: 55.7558,
      startLng: 37.6173, // Moscow
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.15,
      color: "#ef4444",
    },
    {
      order: 6,
      startLat: 39.9042,
      startLng: 116.4074, // Beijing
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.2,
      color: "#f59e0b",
    },
    {
      order: 7,
      startLat: 1.3521,
      startLng: 103.8198, // Singapore
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.18,
      color: "#eab308",
    },
    {
      order: 8,
      startLat: 48.8566,
      startLng: 2.3522, // Paris
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.22,
      color: "#ef4444",
    },
    {
      order: 9,
      startLat: -23.5505,
      startLng: -46.6333, // São Paulo
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.35,
      color: "#f59e0b",
    },
    {
      order: 10,
      startLat: 19.4326,
      startLng: -99.1332, // Mexico City
      endLat: 25.2048,
      endLng: 55.2708, // Dubai
      arcAlt: 0.38,
      color: "#eab308",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8"
      >
        <h3 className="text-3xl font-bold text-white mb-3">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
            Global Threat Intelligence
          </span>
        </h3>
        <p className="text-gray-400 text-lg">
          Real-time monitoring of cyber threats worldwide
        </p>
      </motion.div>

      <div className="w-full h-[600px] md:h-[700px] relative">
        <World data={threatData} globeConfig={globeConfig} />

        {/* Threat Stats Overlay */}
        <div className="absolute top-8 right-8 bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-xl p-6 space-y-4">
          <div className="text-sm text-gray-400 mb-2">Threat Activity (24h)</div>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
              <span className="text-white font-semibold">1,247</span>
              <span className="text-gray-400 text-sm">Critical</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
              <span className="text-white font-semibold">3,891</span>
              <span className="text-gray-400 text-sm">High</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse"></div>
              <span className="text-white font-semibold">8,523</span>
              <span className="text-gray-400 text-sm">Medium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
