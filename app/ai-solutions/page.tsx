"use client";

import { motion } from "framer-motion";
import { Brain, Eye, MessageSquare, Target, Network, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AISolutionsPage() {
  const aiServices = [
    {
      id: "ml",
      icon: Brain,
      title: "Machine Learning Security",
      description: "Deploy state-of-the-art ML models for automated threat detection and response",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "threat",
      icon: Target,
      title: "AI Threat Detection",
      description: "Real-time threat detection using advanced AI algorithms and behavioral analysis",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "analytics",
      icon: Network,
      title: "Predictive Analytics",
      description: "Forecast security incidents and vulnerabilities before they occur",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      color: "from-orange-500 to-red-500"
    },
    {
      id: "vision",
      icon: Eye,
      title: "Computer Vision",
      description: "Visual threat detection and analysis for physical and digital security",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "nlp",
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Analyze communications and detect social engineering attempts",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: "consulting",
      icon: Sparkles,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI-powered security solutions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      color: "from-pink-500 to-rose-500"
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black to-black" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Security Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to protect your organization from advanced cyber threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="absolute inset-0 z-20 p-8 flex flex-col justify-between">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center gap-2 text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-red-950/30 via-black to-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.2) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Security with AI?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us for a consultation</p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-red-500/50 transition-all"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}
