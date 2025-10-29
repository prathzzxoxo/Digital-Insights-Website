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
    pointSize: 1,
    globeColor: "#1a4d8f",
    showAtmosphere: true,
    atmosphereColor: "#87CEEB",
    atmosphereAltitude: 0.2,
    emissive: "#0d3a6b",
    emissiveIntensity: 0.3,
    shininess: 1.2,
    polygonColor: "rgba(180,200,180,0.85)",
    ambientLight: "#ffffff",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 1,
    rings: 1,
    maxRings: 10,
    initialPosition: { lat: 25.2048, lng: 55.2708 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = [
    "#eae547", "#9347ea", "#d4ea47", "#ddea47", "#47ea70",
    "#eab447", "#eaa647", "#c747ea", "#52ea47", "#4754ea",
  ];

  const threatData = [
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.1, color: colors[0] },
    { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 3.139, endLng: 101.6869, arcAlt: 0.2, color: colors[1] },
    { order: 1, startLat: -19.885592, startLng: -43.951191, endLat: -1.303396, endLng: 36.852443, arcAlt: 0.5, color: colors[2] },
    { order: 2, startLat: 1.3521, startLng: 103.8198, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.2, color: colors[3] },
    { order: 2, startLat: 51.5072, startLng: -0.1276, endLat: 3.139, endLng: 101.6869, arcAlt: 0.3, color: colors[4] },
    { order: 2, startLat: -15.785493, startLng: -47.909029, endLat: 36.162809, endLng: -115.119411, arcAlt: 0.3, color: colors[5] },
    { order: 3, startLat: -33.8688, startLng: 151.2093, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[6] },
    { order: 3, startLat: 21.3099, startLng: -157.8581, endLat: 40.7128, endLng: -74.006, arcAlt: 0.3, color: colors[7] },
    { order: 3, startLat: -6.2088, startLng: 106.8456, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[8] },
    { order: 4, startLat: 11.986597, startLng: 8.571831, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.5, color: colors[9] },
    { order: 4, startLat: -34.6037, startLng: -58.3816, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.7, color: colors[0] },
    { order: 4, startLat: 51.5072, startLng: -0.1276, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.1, color: colors[1] },
    { order: 5, startLat: 14.5995, startLng: 120.9842, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[2] },
    { order: 5, startLat: 1.3521, startLng: 103.8198, endLat: -33.8688, endLng: 151.2093, arcAlt: 0.2, color: colors[3] },
    { order: 5, startLat: 34.0522, startLng: -118.2437, endLat: 48.8566, endLng: -2.3522, arcAlt: 0.2, color: colors[4] },
    { order: 6, startLat: -15.432563, startLng: 28.315853, endLat: 1.094136, endLng: -63.34546, arcAlt: 0.7, color: colors[5] },
    { order: 6, startLat: 37.5665, startLng: 126.978, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.1, color: colors[6] },
    { order: 6, startLat: 22.3193, startLng: 114.1694, endLat: 51.5072, endLng: -0.1276, arcAlt: 0.3, color: colors[7] },
    { order: 7, startLat: -19.885592, startLng: -43.951191, endLat: -15.595412, endLng: -56.05918, arcAlt: 0.1, color: colors[8] },
    { order: 7, startLat: 48.8566, startLng: -2.3522, endLat: 52.52, endLng: 13.405, arcAlt: 0.1, color: colors[9] },
    { order: 7, startLat: 52.52, startLng: 13.405, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[0] },
    { order: 8, startLat: -8.833221, startLng: 13.264837, endLat: -33.936138, endLng: 18.436529, arcAlt: 0.2, color: colors[1] },
    { order: 8, startLat: 49.2827, startLng: -123.1207, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.2, color: colors[2] },
    { order: 8, startLat: 1.3521, startLng: 103.8198, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[3] },
    { order: 9, startLat: 51.5072, startLng: -0.1276, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[4] },
    { order: 9, startLat: 22.3193, startLng: 114.1694, endLat: -22.9068, endLng: -43.1729, arcAlt: 0.7, color: colors[5] },
    { order: 9, startLat: 1.3521, startLng: 103.8198, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.5, color: colors[6] },
    { order: 10, startLat: -22.9068, startLng: -43.1729, endLat: 28.6139, endLng: 77.209, arcAlt: 0.7, color: colors[7] },
    { order: 10, startLat: 34.0522, startLng: -118.2437, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.3, color: colors[8] },
    { order: 10, startLat: -6.2088, startLng: 106.8456, endLat: 52.3676, endLng: 4.9041, arcAlt: 0.3, color: colors[9] },
    { order: 11, startLat: 41.9028, startLng: 12.4964, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.2, color: colors[0] },
    { order: 11, startLat: -6.2088, startLng: 106.8456, endLat: 31.2304, endLng: 121.4737, arcAlt: 0.2, color: colors[1] },
    { order: 11, startLat: 22.3193, startLng: 114.1694, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[2] },
    { order: 12, startLat: 34.0522, startLng: -118.2437, endLat: 37.7749, endLng: -122.4194, arcAlt: 0.1, color: colors[3] },
    { order: 12, startLat: 35.6762, startLng: 139.6503, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.2, color: colors[4] },
    { order: 12, startLat: 22.3193, startLng: 114.1694, endLat: 34.0522, endLng: -118.2437, arcAlt: 0.3, color: colors[5] },
    { order: 13, startLat: 52.52, startLng: 13.405, endLat: 22.3193, endLng: 114.1694, arcAlt: 0.3, color: colors[6] },
    { order: 13, startLat: 11.986597, startLng: 8.571831, endLat: 35.6762, endLng: 139.6503, arcAlt: 0.3, color: colors[7] },
    { order: 13, startLat: -22.9068, startLng: -43.1729, endLat: -34.6037, endLng: -58.3816, arcAlt: 0.1, color: colors[8] },
    { order: 14, startLat: -33.936138, startLng: 18.436529, endLat: 21.395643, endLng: 39.883798, arcAlt: 0.3, color: colors[9] },
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
