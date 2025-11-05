"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Brain, Eye, MessageSquare, Target, Network, Sparkles, X, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function AISolutionsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const aiServices = [
    {
      id: "ml",
      icon: Brain,
      title: "Machine Learning Security",
      description: "Deploy state-of-the-art ML models for automated threat detection and response",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&q=80",
      color: "from-red-500 to-red-700",
      fullDescription: "Machine Learning Security leverages advanced algorithms to identify and respond to cyber threats in real-time. Our ML models continuously learn from new attack patterns, adapting to emerging threats and providing proactive defense mechanisms for your organization.",
      features: [
        "Automated threat classification and prioritization",
        "Behavioral anomaly detection",
        "Zero-day exploit prediction",
        "Adaptive defense mechanisms",
        "Real-time model training and updates"
      ],
      benefits: [
        "Reduce false positives by up to 90%",
        "Detect threats 10x faster than traditional methods",
        "24/7 autonomous threat hunting",
        "Scalable across enterprise infrastructure"
      ]
    },
    {
      id: "threat",
      icon: Target,
      title: "AI Threat Detection",
      description: "Real-time threat detection using advanced AI algorithms and behavioral analysis",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      color: "from-red-600 to-red-800",
      fullDescription: "Our AI-powered threat detection system combines machine learning, deep learning, and behavioral analytics to identify sophisticated attacks before they cause damage. The system analyzes millions of data points per second to detect anomalies and potential security breaches.",
      features: [
        "Multi-layered threat analysis",
        "Real-time alert generation",
        "Integration with existing SIEM platforms",
        "Threat intelligence correlation",
        "Automated incident response workflows"
      ],
      benefits: [
        "Detect advanced persistent threats (APTs)",
        "Minimize dwell time from weeks to minutes",
        "Reduce security analyst workload by 70%",
        "Prevent data breaches before they occur"
      ]
    },
    {
      id: "analytics",
      icon: Network,
      title: "Predictive Analytics",
      description: "Forecast security incidents and vulnerabilities before they occur",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      color: "from-red-500 to-red-700",
      fullDescription: "Predictive Analytics uses historical data, machine learning models, and threat intelligence to forecast potential security incidents. By identifying vulnerabilities and attack patterns before exploitation, organizations can take proactive measures to strengthen their security posture.",
      features: [
        "Risk scoring and prioritization",
        "Vulnerability trend analysis",
        "Attack surface mapping",
        "Threat forecast modeling",
        "Compliance risk prediction"
      ],
      benefits: [
        "Prevent incidents before they happen",
        "Optimize security resource allocation",
        "Reduce remediation costs by 60%",
        "Strategic security planning insights"
      ]
    },
    {
      id: "vision",
      icon: Eye,
      title: "Computer Vision",
      description: "Visual threat detection and analysis for physical and digital security",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      color: "from-red-600 to-red-800",
      fullDescription: "Computer Vision technology applies AI to analyze visual data for security purposes. From detecting unauthorized access in physical premises to identifying malicious patterns in network visualizations, our CV solutions provide comprehensive visual threat detection.",
      features: [
        "Facial recognition and access control",
        "Anomaly detection in surveillance feeds",
        "Visual malware analysis",
        "Document and image authenticity verification",
        "Network topology threat visualization"
      ],
      benefits: [
        "Enhanced physical security monitoring",
        "Automated visual threat identification",
        "Reduce manual review time by 80%",
        "Integration with existing camera systems"
      ]
    },
    {
      id: "nlp",
      icon: MessageSquare,
      title: "Natural Language Processing",
      description: "Analyze communications and detect social engineering attempts",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      color: "from-red-500 to-red-700",
      fullDescription: "Natural Language Processing analyzes text-based communications to identify phishing attempts, social engineering attacks, and insider threats. Our NLP models understand context, sentiment, and intent to detect malicious communications across email, chat, and social media.",
      features: [
        "Phishing email detection",
        "Social engineering pattern recognition",
        "Sentiment analysis for insider threat detection",
        "Multi-language support",
        "Real-time communication monitoring"
      ],
      benefits: [
        "Block 99% of phishing attempts",
        "Detect insider threats early",
        "Protect against business email compromise",
        "Reduce human error in threat identification"
      ]
    },
    {
      id: "consulting",
      icon: Sparkles,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI-powered security solutions",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      color: "from-red-600 to-red-800",
      fullDescription: "Our AI Consulting services help organizations develop and implement comprehensive AI-powered security strategies. We provide expert guidance on selecting the right AI tools, integrating them with existing infrastructure, and building internal AI security capabilities.",
      features: [
        "AI security strategy development",
        "Technology assessment and selection",
        "Implementation roadmap creation",
        "Team training and capability building",
        "ROI analysis and optimization"
      ],
      benefits: [
        "Accelerate AI security adoption",
        "Avoid costly implementation mistakes",
        "Maximize return on security investments",
        "Build sustainable AI security programs"
      ]
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
                onClick={() => setSelectedService(service.id)}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-black border-2 border-red-500 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {aiServices
                .filter((s) => s.id === selectedService)
                .map((service) => (
                  <div key={service.id}>
                    {/* Modal Header */}
                    <div className="sticky top-0 bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-t-3xl">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                      >
                        <X className="w-6 h-6 text-white" />
                      </button>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-red-100 text-lg">{service.description}</p>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                      {/* Overview */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-4">Overview</h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {service.fullDescription}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 bg-red-950/30 border border-red-500/30 rounded-xl p-4"
                            >
                              <Check className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                              <span className="text-gray-300">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <div className="mb-8">
                        <h3 className="text-2xl font-bold text-white mb-6">Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.benefits.map((benefit, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3 bg-gradient-to-r from-red-950/50 to-red-900/30 border border-red-500/50 rounded-xl p-4"
                            >
                              <div className="w-2 h-2 rounded-full bg-red-500 flex-shrink-0 mt-2" />
                              <span className="text-gray-200 font-medium">{benefit}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-red-500/30">
                        <Link href="/contact" className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-red-500/50 transition-all"
                          >
                            Get Started
                          </motion.button>
                        </Link>
                        <Link href="/contact" className="flex-1">
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full px-8 py-4 bg-black border-2 border-red-500 text-white rounded-xl font-semibold text-lg hover:bg-red-950/30 transition-all"
                          >
                            Contact Us
                          </motion.button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
