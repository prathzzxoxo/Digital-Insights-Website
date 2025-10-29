"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export function ThreatIntelGlobe() {
  const globeConfig = {
    pointSize: 6,
    globeColor: "#000000",
    showAtmosphere: true,
    atmosphereColor: "#ff0000",
    atmosphereAltitude: 0.15,
    emissive: "#0a0a0a",
    emissiveIntensity: 0.2,
    shininess: 1,
    polygonColor: "rgba(255,0,0,0.4)",
    ambientLight: "#ff0000",
    directionalLeftLight: "#ff4444",
    directionalTopLight: "#ff6666",
    pointLight: "#C7462F",
    arcTime: 2000,
    arcLength: 0.95,
    rings: 2,
    maxRings: 4,
    initialPosition: { lat: 25.2048, lng: 55.2708 }, // Dubai coordinates
    autoRotate: true,
    autoRotateSpeed: 0.8,
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
    <div className="flex flex-col items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mb-8 relative z-10"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
            Global Threat Intelligence
          </span>
        </h3>
        <p className="text-gray-300 text-xl">
          Real-time monitoring of cyber threats worldwide
        </p>
      </motion.div>

      <div className="w-full h-[600px] md:h-[750px] relative">
        {/* Glow effect behind globe */}
        <div className="absolute inset-0 bg-gradient-radial from-red-950/40 via-transparent to-transparent blur-3xl" />

        {/* Globe container with enhanced styling */}
        <div className="relative w-full h-full rounded-3xl overflow-hidden border border-red-900/30 bg-black/50 backdrop-blur-sm shadow-2xl shadow-red-900/20">
          <World data={threatData} globeConfig={globeConfig} />
        </div>

        {/* Threat Stats Overlay - Enhanced */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute top-8 right-8 bg-black/90 backdrop-blur-xl border border-red-900/50 rounded-2xl p-6 space-y-4 shadow-xl shadow-red-900/30"
        >
          <div className="text-sm text-red-400 font-bold mb-3 uppercase tracking-wider">Threat Activity (24h)</div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-red-600 animate-pulse shadow-lg shadow-red-500/50"></div>
              <span className="text-white font-bold text-lg">1,247</span>
              <span className="text-gray-300 text-sm font-medium">Critical</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-orange-500 animate-pulse shadow-lg shadow-orange-500/50"></div>
              <span className="text-white font-bold text-lg">3,891</span>
              <span className="text-gray-300 text-sm font-medium">High</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-4 h-4 rounded-full bg-yellow-500 animate-pulse shadow-lg shadow-yellow-500/50"></div>
              <span className="text-white font-bold text-lg">8,523</span>
              <span className="text-gray-300 text-sm font-medium">Medium</span>
            </div>
          </div>
          <div className="pt-3 border-t border-red-900/50">
            <div className="text-xs text-gray-400 uppercase tracking-wide">Last Updated</div>
            <div className="text-sm text-red-400 font-semibold">Live</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
