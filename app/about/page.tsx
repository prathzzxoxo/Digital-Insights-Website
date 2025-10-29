"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Target, Zap, Globe } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Users, value: "500+", label: "Clients Protected" },
    { icon: Shield, value: "24/7", label: "Security Monitoring" },
    { icon: Award, value: "99.9%", label: "Threat Prevention" },
    { icon: Zap, value: "<5min", label: "Response Time" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize your organization's security above all else, implementing industry-leading practices and technologies."
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description: "Every organization is unique. We customize our approach to meet your specific security needs and business objectives."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team holds internationally recognized certifications and brings years of real-world experience."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Operating across UK and UAE, we provide 24/7 support wherever you need us."
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Digital Insights</span>
            </h1>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Digital Insights Consultancy helps and supports organizations to build secure infrastructure and protect against cyber attacks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              "We are committed to deliver outstanding, cutting edge cyber solutions that add real value to your organisation and we strive to go beyond what is expected. We provide brilliant customer service and will look after you throughout to ensure you are entirely pleased with our work."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-8 text-center hover:border-primary-500/50 transition-all"
              >
                <stat.icon className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A trusted partner dedicated to your cybersecurity success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Complete Cybersecurity Solutions
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "24/7 Threat Visibility",
                    description: "Our in-house SOC monitors your organizational assets around the clock"
                  },
                  {
                    title: "Advanced Expertise",
                    description: "We understand that primitive measures like basic antivirus are not robust enough"
                  },
                  {
                    title: "Cost-Effective",
                    description: "Premium security services at competitive pricing for all organization sizes"
                  },
                  {
                    title: "Data Protection",
                    description: "Safeguarding your sensitive employee and customer information"
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Certifications & Expertise</h2>
            <p className="text-xl text-gray-400 mb-12">
              Our team holds internationally recognized professional certifications
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {["AWS Certified", "ISO 27001", "Kubernetes", "Azure Security", "CCSK", "HashiCorp"].map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-primary-500/50 transition-all"
                >
                  <div className="text-white font-semibold">{cert}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
