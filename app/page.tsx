"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Award, Users } from "lucide-react";
import Link from "next/link";
import VideoModal from "@/components/VideoModal";
import { Vortex } from "@/components/ui/vortex";
import { ThreatIntelGlobe } from "@/components/ThreatIntelGlobe";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {/* Hero Section with Vortex Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Vortex Background */}
        <Vortex
          backgroundColor="black"
          rangeY={800}
          particleCount={500}
          baseHue={220}
          className="absolute inset-0 z-0"
          containerClassName="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/80 z-10" />
        </Vortex>

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
                className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full mb-6"
              >
                <span className="text-primary-400 font-semibold text-sm">🛡️ AI-Powered Cybersecurity</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Keep Companies <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                  Safe From Cyber Attacks
                </span>
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
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(14, 165, 233, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full font-semibold text-lg flex items-center justify-center gap-2 shadow-xl"
                  >
                    <span>Get Protected Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

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

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { icon: Shield, value: "99.9%", label: "Threat Prevention", color: "from-blue-500 to-cyan-500" },
                { icon: Zap, value: "<5min", label: "Response Time", color: "from-purple-500 to-pink-500" },
                { icon: Users, value: "500+", label: "Clients Protected", color: "from-orange-500 to-red-500" },
                { icon: Award, value: "24/7", label: "SOC Monitoring", color: "from-green-500 to-emerald-500" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-primary-500/50 transition-all group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <stat.icon className={`w-8 h-8 mb-3 text-transparent bg-clip-text bg-gradient-to-r ${stat.color}`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
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
      <section className="py-24 bg-slate-900">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Digital Forensics",
                description: "Advanced evidence recovery and incident analysis",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
                href: "/services#forensics"
              },
              {
                title: "Security Operations Centre",
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

      {/* Threat Intelligence Globe Section */}
      <section className="py-24 bg-gradient-to-b from-slate-900 via-black to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThreatIntelGlobe />
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
