"use client";

import { motion } from "framer-motion";
import { Shield, Users, Target, Eye, CheckCircle, Lightbulb, TrendingUp, HeadphonesIcon, Award } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  const benefits = [
    {
      icon: Eye,
      title: "Cyber Threats",
      description: "Our in-house SOC monitors your organizational assets 24x7, providing you with a complete view of any threats and attacks within your organization."
    },
    {
      icon: Shield,
      title: "Expertise",
      description: "We understand that primitive measures like basic antivirus software and firewalls are not robust enough to deal with the advanced cybersecurity measures of today."
    },
    {
      icon: TrendingUp,
      title: "Competitive Pricing",
      description: "We offer premium cybersecurity services at competitive prices, making enterprise-grade security accessible to organizations of all sizes."
    },
    {
      icon: CheckCircle,
      title: "Protect",
      description: "We'll help you protect your organization's most sensitive employee and customer information from today's constantly evolving cyber threats."
    },
  ];

  const whyChooseUs = [
    {
      icon: Lightbulb,
      title: "Advisory",
      description: "Strategic cybersecurity guidance tailored to your business objectives. We help you build comprehensive security roadmaps and make informed decisions about your security investments."
    },
    {
      icon: Users,
      title: "Consultancy",
      description: "Expert consulting services for organizations with limited cybersecurity expertise or small IT teams. We bridge the gap between your business needs and security requirements."
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Success",
      description: "Dedicated support throughout your security journey. We ensure you're entirely pleased with our work and provide ongoing assistance to maintain your security posture."
    },
  ];

  const partners = [
    { name: "Elastic", logo: "/partners/elastic.png" },
    { name: "LevelBlue", logo: "/partners/levelblue.png" },
    { name: "CrowdStrike", logo: "/partners/crowdstrike.png" },
    { name: "FireCompass", logo: "/partners/firecompass.png" },
    { name: "Swimlane", logo: "/partners/swimlane.png" },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(199, 70, 47, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(199, 70, 47, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
              We Defend Companies from <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Cyber Threats</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Digital Insights Consultancy helps and supports organizations to build secure infrastructure and protect against cyber attacks
            </p>

            {/* Stats - 3 Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl px-10 py-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-white mb-2">50+</div>
                  <div className="text-lg text-red-100 font-semibold">Clients Served</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl px-10 py-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-white mb-2">24/7</div>
                  <div className="text-lg text-red-100 font-semibold">SOC Monitoring</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl px-10 py-6 border border-red-500/30 text-center">
                  <div className="text-5xl font-bold text-white mb-2">99.9%</div>
                  <div className="text-lg text-red-100 font-semibold">Threat Prevention</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Expertise</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a team of Cyber Security enthusiasts based in the UK and UAE. We love what we do, and always go beyond what's expected of us to ensure we deliver exceptional, world-class service. Our goal is for you to have complete peace of mind knowing that your organization is expertly protected from all cyber-attacks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 bg-gradient-to-br from-red-950/50 via-black to-black border-y border-red-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Philosophy</span>
            </h2>
            <div className="bg-black/50 backdrop-blur-sm border border-red-900/30 rounded-2xl p-10">
              <p className="text-2xl text-gray-200 leading-relaxed font-light">
                "We are committed to deliver outstanding, cutting edge cyber solutions that add real value to your organisation and we strive to go beyond what is expected. We provide brilliant customer service and will look after you throughout to ensure you are entirely pleased with our work."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits - 4 Blocks */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Key <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Benefits</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Why organizations trust Digital Insights for their cybersecurity needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-gradient-to-br from-slate-950 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-all group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Digital Insights? - 3 Columns */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/background_1.jpg"
            alt="Background"
            fill
            className="object-cover opacity-60"
            quality={95}
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Digital Insights?</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive support across every stage of your cybersecurity journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.15 }}
                whileHover={{ y: -10 }}
                className="bg-black/60 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 hover:bg-black/70 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Partners */}
      <section className="py-20 bg-black border-t border-red-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Official <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Partners</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted partnerships with industry-leading technology providers
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-red-900/30 rounded-2xl p-6 flex items-center justify-center hover:border-red-500/50 hover:bg-white/10 transition-all group"
              >
                <div className="relative w-full h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain filter brightness-100 group-hover:brightness-110 transition-all"
                    style={{ mixBlendMode: 'lighten' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Expertise</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Our team holds internationally recognized professional certifications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {["AWS Certified", "ISO 27001", "Kubernetes", "Azure Security", "CompTIA Security+", "CISSP"].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="bg-black border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all"
                >
                  <Award className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <div className="text-white font-semibold text-sm">{cert}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-950 to-black border-t border-red-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get in touch with our team for a consultation and see how we can protect your business
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-red-500/50 transition-all"
            >
              Contact Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
