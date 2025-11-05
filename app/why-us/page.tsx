"use client";

import { motion } from "framer-motion";
import { Shield, Users, Clock, Award, Target, CheckCircle2, TrendingUp, Globe } from "lucide-react";
import Link from "next/link";

export default function WhyUsPage() {
  const reasons = [
    {
      icon: Shield,
      title: "24/7 Protection",
      description: "Round-the-clock monitoring and immediate incident response to protect your business at all times.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Certified cybersecurity professionals with decades of combined experience across UK and UAE.",
      color: "from-red-600 to-red-800"
    },
    {
      icon: Target,
      title: "Proven Track Record",
      description: "Successfully protected hundreds of organizations from cyber threats across multiple industries.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: TrendingUp,
      title: "Cutting-Edge Technology",
      description: "Advanced AI-powered threat detection and response systems to stay ahead of emerging threats.",
      color: "from-red-600 to-red-800"
    },
    {
      icon: Award,
      title: "Industry Certifications",
      description: "ISO 27001, AWS, Azure, Kubernetes, CompTIA Security+, and CISSP certified professionals.",
      color: "from-red-500 to-red-700"
    },
    {
      icon: Globe,
      title: "Global Reach, Local Presence",
      description: "Head office in UAE with UK operations, providing localized support with global expertise.",
      color: "from-red-600 to-red-800"
    },
  ];

  const benefits = [
    "Comprehensive threat intelligence and analysis",
    "Customized security solutions for your industry",
    "Rapid incident response and remediation",
    "Compliance support (ISO 27001, PCI DSS, GDPR)",
    "Regular security assessments and audits",
    "Dedicated account management",
    "Transparent reporting and communication",
    "Cost-effective security solutions"
  ];

  const stats = [
    { number: "500+", label: "Clients Protected" },
    { number: "24/7", label: "Support Available" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "< 15min", label: "Response Time" }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black to-black" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Digital Insights?</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              We combine advanced technology, expert knowledge, and unwavering commitment to deliver unparalleled cybersecurity protection for your organization.
            </p>
            <p className="text-2xl font-bold text-white">
              <span className="text-red-500">Triage. Investigate. Report.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What Sets Us <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Apart</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We deliver comprehensive cybersecurity solutions backed by expertise, technology, and dedication.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-black border border-red-500/30 rounded-2xl p-8 hover:border-red-500 hover:shadow-xl hover:shadow-red-500/20 transition-all"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reason.color} flex items-center justify-center mb-6`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-gray-400 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-red-950/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Digital Insights</span> Advantage
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              When you partner with us, you gain access to comprehensive cybersecurity services designed to protect your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-black border border-red-500/20 rounded-xl p-6 hover:border-red-500/50 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 text-center"
          >
            <Clock className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Protect Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of organizations that trust Digital Insights to safeguard their digital assets. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-red-600 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Get Started Today
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-black border-2 border-white text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
