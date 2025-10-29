"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "ai-powered-threat-detection",
      title: "The Future of Cybersecurity: AI-Powered Threat Detection",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we detect and respond to cyber threats in real-time.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI & Security",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
    },
    {
      id: "zero-trust-architecture",
      title: "Implementing Zero Trust Architecture in Modern Enterprises",
      excerpt: "A comprehensive guide to transitioning from traditional perimeter-based security to a zero-trust security model.",
      date: "2025-01-12",
      readTime: "10 min read",
      category: "Enterprise Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
    },
    {
      id: "ransomware-protection",
      title: "Ransomware in 2025: Advanced Protection Strategies",
      excerpt: "Learn about the latest ransomware trends and how to protect your organization with multi-layered defense strategies.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Threat Intelligence",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    },
    {
      id: "cloud-security-best-practices",
      title: "Cloud Security Best Practices for AWS and Azure",
      excerpt: "Essential security configurations and best practices for securing your cloud infrastructure on major platforms.",
      date: "2025-01-08",
      readTime: "15 min read",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    },
    {
      id: "incident-response-playbook",
      title: "Building an Effective Incident Response Playbook",
      excerpt: "Step-by-step guide to creating a comprehensive incident response plan that minimizes damage and recovery time.",
      date: "2025-01-05",
      readTime: "11 min read",
      category: "Incident Response",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
    },
    {
      id: "phishing-awareness-training",
      title: "Why Employee Phishing Awareness Training is Critical",
      excerpt: "Discover why human error remains the weakest link in cybersecurity and how to build a security-aware culture.",
      date: "2025-01-03",
      readTime: "7 min read",
      category: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Cybersecurity <span className="gradient-text">Insights & News</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest trends, threats, and best practices in cybersecurity
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-slate-700 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                    <span className="absolute top-4 left-4 z-20 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary-400 font-semibold group-hover:gap-2 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
