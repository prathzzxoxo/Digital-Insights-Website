"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Brain,
  Cpu,
  Zap,
  Network,
  Sparkles,
  Eye,
  MessageSquare,
  Target,
} from "lucide-react";

const AIServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  const aiServices = [
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      shortDesc: "Advanced ML models tailored to your business needs",
      description:
        "Deploy state-of-the-art machine learning models that learn from your data and continuously improve performance. From classification to regression, we build custom solutions.",
      features: [
        "Custom Model Development",
        "Model Training & Fine-tuning",
        "AutoML Solutions",
        "MLOps Implementation",
      ],
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      image: "🤖",
    },
    {
      icon: Eye,
      title: "Computer Vision",
      shortDesc: "See the world through AI-powered vision systems",
      description:
        "Harness the power of computer vision to analyze images and videos, detect objects, recognize faces, and extract valuable insights from visual data.",
      features: [
        "Object Detection & Recognition",
        "Facial Recognition Systems",
        "Image Classification",
        "Video Analytics",
      ],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      image: "👁️",
    },
    {
      icon: MessageSquare,
      title: "Natural Language Processing",
      shortDesc: "Understand and generate human language at scale",
      description:
        "Build intelligent applications that understand, interpret, and generate human language. From chatbots to sentiment analysis, we make machines understand text.",
      features: [
        "Chatbots & Virtual Assistants",
        "Sentiment Analysis",
        "Text Classification",
        "Language Translation",
      ],
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      image: "💬",
    },
    {
      icon: Target,
      title: "Predictive Analytics AI",
      shortDesc: "Forecast the future with AI-powered predictions",
      description:
        "Leverage advanced AI algorithms to predict future trends, customer behavior, and market dynamics. Make data-driven decisions with confidence.",
      features: [
        "Sales Forecasting",
        "Customer Churn Prediction",
        "Demand Forecasting",
        "Risk Assessment",
      ],
      gradient: "from-orange-500 via-red-500 to-pink-500",
      image: "🎯",
    },
    {
      icon: Network,
      title: "Deep Learning",
      shortDesc: "Neural networks for complex pattern recognition",
      description:
        "Implement sophisticated deep learning architectures including CNNs, RNNs, and Transformers to solve complex problems that traditional ML cannot handle.",
      features: [
        "Neural Network Design",
        "Transfer Learning",
        "GANs & Autoencoders",
        "Reinforcement Learning",
      ],
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      image: "🧠",
    },
    {
      icon: Sparkles,
      title: "AI Consulting & Strategy",
      shortDesc: "Expert guidance for your AI transformation journey",
      description:
        "Get strategic guidance from AI experts to identify opportunities, build roadmaps, and implement AI solutions that align with your business objectives.",
      features: [
        "AI Readiness Assessment",
        "Strategy Development",
        "ROI Analysis",
        "Implementation Support",
      ],
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      image: "✨",
    },
  ];

  const tabs = ["All Solutions", "Machine Learning", "Computer Vision", "NLP", "Consulting"];

  return (
    <section
      id="ai-services"
      ref={ref}
      className="py-24 bg-slate-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-full mb-4"
          >
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-semibold">AI Services</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Cutting-Edge <span className="gradient-text">AI Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Harness the power of artificial intelligence to automate processes,
            gain insights, and create intelligent applications
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === index
                  ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg"
                  : "bg-slate-800 text-gray-400 hover:text-white border border-slate-700"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* AI Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group relative"
            >
              {/* Card */}
              <div className="h-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-8 hover:border-primary-500/50 transition-all duration-500 relative overflow-hidden">
                {/* Animated Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                {/* Floating Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 mb-6"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl absolute -top-2 -right-2 opacity-50">
                    {service.image}
                  </div>
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-primary-400 font-semibold mb-4 relative z-10">
                  {service.shortDesc}
                </p>
                <p className="text-gray-400 mb-6 relative z-10">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 relative z-10">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center text-gray-300"
                    >
                      <Zap className="w-4 h-4 text-primary-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`mt-8 w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${service.gradient} text-white shadow-lg hover:shadow-xl transition-all relative z-10`}
                >
                  Explore Solution
                </motion.button>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent-500/20 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation and growth
              for your organization
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-primary-500/50 transition-all"
            >
              Schedule AI Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIServicesSection;
