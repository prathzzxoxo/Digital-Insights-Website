"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Search,
  Lock,
  FileSearch,
  Users,
  GraduationCap,
  Cloud,
  Bot,
} from "lucide-react";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: FileSearch,
      title: "Digital Forensics & Incident Response",
      description:
        "We use the most advanced cloning techniques to recover all forms of digital evidence; we accurately recreate past events to support investigations.",
      gradient: "from-blue-500 to-cyan-500",
      features: ["24/7 Incident Response", "Evidence Recovery", "Investigation Support"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80"
    },
    {
      icon: Shield,
      title: "Security Operations Center (SOC)",
      description:
        "WatchTower365 SOC that intends to prevent and detect cybersecurity threats and respond to any incidents 24/7.",
      gradient: "from-purple-500 to-pink-500",
      features: ["24/7 Monitoring", "Threat Detection", "Rapid Response"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80"
    },
    {
      icon: Search,
      title: "Penetration Testing",
      description:
        "Combining Penetration Testing with Vulnerability Assessment to identify and validate threats or weaknesses that could compromise IT security.",
      gradient: "from-orange-500 to-red-500",
      features: ["Vulnerability Scanning", "Threat Validation", "Security Reports"],
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80"
    },
    {
      icon: Lock,
      title: "Security Assessments",
      description:
        "Identify and quantify security vulnerabilities in your environment with in-depth assessments and actionable recommendations.",
      gradient: "from-green-500 to-emerald-500",
      features: ["Risk Analysis", "Compliance Checks", "Action Plans"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80"
    },
    {
      icon: Users,
      title: "Consultancy",
      description:
        "Expert cybersecurity consulting services including SOC readiness assessments, assurance advisory, and strategic security planning.",
      gradient: "from-indigo-500 to-purple-500",
      features: ["SOC Readiness", "Advisory Services", "Strategic Planning"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
    },
    {
      icon: GraduationCap,
      title: "Cyber Security Training",
      description:
        "Comprehensive training programs including AWS, Cisco, phishing awareness, and cybersecurity best practices for your team.",
      gradient: "from-pink-500 to-rose-500",
      features: ["AWS Training", "Cisco Certification", "Phishing Awareness"],
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=80"
    },
    {
      icon: Cloud,
      title: "Platform Engineering",
      description:
        "Modern infrastructure solutions and cloud-native platform engineering services to build secure, scalable, and resilient systems.",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Cloud Infrastructure", "DevSecOps", "Container Security"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80"
    },
    {
      icon: Bot,
      title: "AI/ML Enhanced Workflows",
      description:
        "Leverage artificial intelligence and machine learning to enhance security operations, automate threat detection, and improve incident response.",
      gradient: "from-violet-500 to-purple-500",
      features: ["Automated Threat Detection", "Predictive Analysis", "Smart Response"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 font-semibold mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Comprehensive <span className="gradient-text">Cybersecurity Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            End-to-end security services designed to protect your organization
            from evolving cyber threats and ensure business continuity
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 to-accent-500/0 group-hover:from-primary-500/5 group-hover:to-accent-500/5 transition-all duration-300 rounded-2xl" />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 relative z-10`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center text-gray-300 text-sm"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-2`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  className="mt-6 text-primary-400 font-semibold flex items-center space-x-2 relative z-10"
                >
                  <span>Learn More</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
