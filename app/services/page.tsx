"use client";

import { motion } from "framer-motion";
import { Shield, Search, Lock, FileSearch, Users, GraduationCap, Cloud, Bot } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      id: "forensics",
      icon: FileSearch,
      title: "Digital Forensics & Incident Response",
      description: "We use the most advanced cloning techniques to recover all forms of digital evidence; we accurately recreate past events to support investigations.",
      fullDescription: "Our digital forensics team uses cutting-edge tools and methodologies to preserve, collect, analyze, and present digital evidence. Available 24/7 for incident management.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      features: [
        "Advanced evidence recovery techniques",
        "24/7 incident response",
        "Court-admissible evidence collection",
        "Comprehensive forensic analysis",
        "Event reconstruction capabilities"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      id: "soc",
      icon: Shield,
      title: "Security Operations Centre (SOC)",
      description: "WatchTower365 is our SOC platform that prevents, detects, and responds to cybersecurity threats 24/7.",
      fullDescription: "Our state-of-the-art SOC provides continuous monitoring, threat detection, and rapid incident response to keep your organization protected around the clock.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
      features: [
        "24/7/365 security monitoring",
        "Real-time threat detection",
        "SIEM tools integration",
        "Compliance reporting",
        "Integrated threat intelligence"
      ],
      color: "from-red-600 to-red-800"
    },
    {
      id: "pentest",
      icon: Search,
      title: "Penetration Testing",
      description: "Combining Penetration Testing with Vulnerability Assessment to identify and validate threats or weaknesses that could compromise IT security.",
      fullDescription: "Our ethical hackers simulate real-world attacks to identify vulnerabilities before malicious actors can exploit them.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
      features: [
        "Comprehensive vulnerability scanning",
        "Manual penetration testing",
        "Web application testing",
        "Network security testing",
        "Detailed remediation reports"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      id: "assessments",
      icon: Lock,
      title: "Security Assessments",
      description: "We identify and quantify security vulnerabilities in your environment with in-depth assessments and actionable recommendations.",
      fullDescription: "Comprehensive security assessments that provide a clear picture of your organization's security posture and compliance status.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
      features: [
        "Risk analysis and evaluation",
        "Compliance gap analysis",
        "Security architecture review",
        "Policy and procedure assessment",
        "Action plan development"
      ],
      color: "from-red-600 to-red-800"
    },
    {
      id: "consultancy",
      icon: Users,
      title: "Cybersecurity Consultancy",
      description: "Expert cybersecurity consulting services tailored for organizations with limited cybersecurity expertise or small IT teams.",
      fullDescription: "Strategic guidance and hands-on support to help you build and maintain a robust security program aligned with your business objectives.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
      features: [
        "SOC readiness assessments",
        "Security strategy development",
        "Compliance consulting (ISO 27001, PCI DSS)",
        "GDPR data protection advisory",
        "Tailored security roadmaps"
      ],
      color: "from-red-500 to-red-700"
    },
    {
      id: "training",
      icon: GraduationCap,
      title: "Cybersecurity Training",
      description: "Comprehensive training programs including AWS, Cisco certifications, and cybersecurity awareness for all employee levels.",
      fullDescription: "Empower your team with the knowledge and skills to defend against cyber threats. From executive awareness to technical certifications.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      features: [
        "Phishing awareness training",
        "Management training",
        "First responder training",
        "AWS & Cisco certification courses",
        "Customized security awareness programs"
      ],
      color: "from-red-600 to-red-800"
    },
    {
      id: "platform",
      icon: Cloud,
      title: "Platform Engineering",
      description: "Modern infrastructure solutions and cloud-native platform engineering services to build secure, scalable, and resilient systems.",
      fullDescription: "Build secure, scalable, and reliable infrastructure with our expert platform engineering team. We provide DevSecOps, Kubernetes management, and cloud-native solutions.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      features: [
        "Cloud infrastructure design and implementation",
        "DevSecOps as a Service",
        "Managed Kubernetes & Service Mesh",
        "Container security",
        "CI/CD pipeline implementation"
      ],
      color: "from-red-500 to-red-700"
    },
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Cybersecurity Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to protect your organization from evolving cyber threats
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center scroll-mt-32 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`relative h-96 rounded-2xl overflow-hidden group ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent z-10" />
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className={`absolute top-6 left-6 w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center z-20`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                  >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <p className="text-gray-400 mb-6">
                      {service.fullDescription}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.2 + 0.4 + idx * 0.1 }}
                          className="flex items-center text-gray-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-4 bg-gradient-to-r ${service.color} text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all`}
                      >
                        Get Started
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our team for a consultation and see how we can protect your business
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-red-500/50 transition-all"
              >
                Contact Us Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
