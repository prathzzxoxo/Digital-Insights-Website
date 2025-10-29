"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/VideoModal";
import { Vortex } from "@/components/ui/vortex";
import dynamic from "next/dynamic";
import NewsTicker from "@/components/NewsTicker";

const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const globeConfig = {
    pointSize: 6,
    globeColor: "#1a1a1a",
    showAtmosphere: true,
    atmosphereColor: "#ffffff",
    atmosphereAltitude: 0.15,
    emissive: "#2a2a2a",
    emissiveIntensity: 0.3,
    shininess: 1,
    polygonColor: "rgba(255,255,255,0.3)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 25.2048, lng: 55.2708 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const threatData = [
    { order: 1, startLat: 40.7128, startLng: -74.006, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.3, color: "#ef4444" },
    { order: 2, startLat: 51.5074, startLng: -0.1278, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2, color: "#f59e0b" },
    { order: 3, startLat: 35.6762, startLng: 139.6503, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.25, color: "#ef4444" },
    { order: 4, startLat: -33.8688, startLng: 151.2093, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.4, color: "#eab308" },
    { order: 5, startLat: 55.7558, startLng: 37.6173, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.15, color: "#ef4444" },
    { order: 6, startLat: 39.9042, startLng: 116.4074, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.2, color: "#f59e0b" },
    { order: 7, startLat: 1.3521, startLng: 103.8198, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.18, color: "#eab308" },
    { order: 8, startLat: 48.8566, startLng: 2.3522, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.22, color: "#ef4444" },
    { order: 9, startLat: 37.7749, startLng: -122.4194, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.35, color: "#f59e0b" },
    { order: 10, startLat: -23.5505, startLng: -46.6333, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.38, color: "#ef4444" },
    { order: 11, startLat: 19.4326, startLng: -99.1332, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.32, color: "#eab308" },
    { order: 12, startLat: 28.6139, startLng: 77.2090, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.12, color: "#f59e0b" },
    { order: 13, startLat: 52.5200, startLng: 13.4050, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.19, color: "#ef4444" },
    { order: 14, startLat: -1.2921, startLng: 36.8219, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.28, color: "#eab308" },
    { order: 15, startLat: 41.9028, startLng: 12.4964, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.21, color: "#f59e0b" },
    { order: 16, startLat: 34.0522, startLng: -118.2437, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.36, color: "#ef4444" },
    { order: 17, startLat: 22.3193, startLng: 114.1694, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.23, color: "#eab308" },
    { order: 18, startLat: 13.7563, startLng: 100.5018, endLat: 25.2048, endLng: 55.2708, arcAlt: 0.24, color: "#f59e0b" },
  ];

  return (
    <>
      <NewsTicker />
      {/* Hero Section with Vortex Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Vortex Background */}
        <div className="absolute inset-0 z-0">
          <Vortex
            backgroundColor="#000000"
            rangeY={800}
            particleCount={500}
            baseHue={200}
            rangeSpeed={2}
            className="w-full h-full"
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-white/10 border border-white/30 rounded-full mb-6"
              >
                <span className="text-white font-semibold text-sm">🛡️ AI-Powered Cybersecurity</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Keep Companies <br />
                Safe From Cyber Attacks
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 leading-relaxed"
              >
                Advanced cybersecurity solutions powered by AI. 24/7 threat detection,
                incident response, and cutting-edge security services for UAE businesses.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoOpen(true)}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Globe */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full h-[500px] lg:h-[600px]"
            >
              <World data={threatData} globeConfig={globeConfig} />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2"
          >
            <motion.div className="w-1 h-3 bg-white rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Core Services</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive cybersecurity solutions tailored for your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Digital Forensics & Incident Response",
                description: "Advanced evidence recovery and incident analysis",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
                href: "/services#forensics"
              },
              {
                title: "Security Operations Center (SOC)",
                description: "24/7 threat monitoring and rapid response",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
                href: "/services#soc"
              },
              {
                title: "Penetration Testing",
                description: "Identify vulnerabilities before attackers do",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
                href: "/services#pentest"
              },
              {
                title: "Security Assessments",
                description: "Risk analysis and compliance checks",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
                href: "/services#assessments"
              },
              {
                title: "Platform Engineering",
                description: "Cloud-native infrastructure and DevSecOps",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
                href: "/services#platform"
              },
              {
                title: "AI/ML Enhanced Workflows",
                description: "Automated threat detection and smart response",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
                href: "/services#ai-ml"
              },
            ].map((service, index) => (
              <Link key={index} href={service.href}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent z-10" />
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300">{service.description}</p>
                    <motion.div
                      initial={{ x: -10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      className="mt-4 flex items-center gap-2 text-primary-400"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold inline-flex items-center gap-2"
              >
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with actual video
      />
    </>
  );
}
