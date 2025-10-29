"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Digital Insights transformed our security posture. Their SOC services and AI-powered threat detection have been invaluable in protecting our infrastructure.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO, FinanceHub",
      content: "The incident response team is exceptional. They handled our security breach with professionalism and restored our operations quickly.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "IT Director, HealthPlus",
      content: "Their penetration testing revealed critical vulnerabilities we weren't aware of. The detailed reports and remediation guidance were excellent.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See what our clients say about our cybersecurity services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-primary-500/50 transition-all"
            >
              <Quote className="w-12 h-12 text-primary-400 mb-4" />
              <p className="text-gray-300 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
