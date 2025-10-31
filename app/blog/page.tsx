"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

const BlogPage = () => {
  const blogPosts = [
    {
      id: "ai-powered-threat-detection",
      title: "The Future of Cybersecurity: AI-Powered Threat Detection",
      excerpt: "Artificial intelligence is revolutionizing cybersecurity. Discover how AI and machine learning algorithms are now capable of detecting threats in real-time, analyzing patterns that would take human analysts hours to identify, and automating response protocols to contain breaches within seconds.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "AI & Security",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
      author: "Digital Insights Team"
    },
    {
      id: "zero-trust-architecture",
      title: "Implementing Zero Trust Architecture in Modern Enterprises",
      excerpt: "The traditional castle-and-moat approach to security is obsolete. Zero Trust Architecture operates on the principle of 'never trust, always verify.' Learn how leading organizations are implementing continuous verification, micro-segmentation, and least-privilege access to create resilient security frameworks.",
      date: "2025-01-12",
      readTime: "10 min read",
      category: "Enterprise Security",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      author: "Security Architects"
    },
    {
      id: "ransomware-protection",
      title: "Ransomware in 2025: Advanced Protection Strategies",
      excerpt: "Ransomware attacks have evolved into sophisticated, multi-stage operations. Modern ransomware groups use double and triple extortion tactics, targeting not just data encryption but also threatening to leak sensitive information. Explore comprehensive defense strategies including backup isolation, network segmentation, and incident response planning.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Threat Intelligence",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80",
      author: "Threat Research Team"
    },
    {
      id: "cloud-security-best-practices",
      title: "Cloud Security Best Practices for AWS and Azure",
      excerpt: "Securing cloud infrastructure requires a fundamentally different approach than traditional on-premise systems. From IAM policies and encryption at rest to network security groups and compliance frameworks, discover the essential configurations that protect your cloud assets across AWS, Azure, and multi-cloud environments.",
      date: "2025-01-08",
      readTime: "15 min read",
      category: "Cloud Security",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
      author: "Cloud Security Team"
    },
    {
      id: "incident-response-playbook",
      title: "Building an Effective Incident Response Playbook",
      excerpt: "When a security incident occurs, every second counts. A well-crafted incident response playbook can mean the difference between a minor disruption and a catastrophic breach. Learn how to build comprehensive runbooks that cover detection, containment, eradication, recovery, and post-incident analysis.",
      date: "2025-01-05",
      readTime: "11 min read",
      category: "Incident Response",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
      author: "DFIR Team"
    },
    {
      id: "phishing-awareness-training",
      title: "Why Employee Phishing Awareness Training is Critical",
      excerpt: "Despite billions invested in security technologies, human error remains the primary vector for successful cyberattacks. Phishing campaigns are becoming increasingly sophisticated, using social engineering, deepfakes, and personalized attacks. Discover how to build a security-conscious culture through effective training programs.",
      date: "2025-01-03",
      readTime: "7 min read",
      category: "Training",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&q=80",
      author: "Training Department"
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Hero Section */}
      <section className="relative pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/50 via-black to-black" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-red-800 mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6">
              Cybersecurity <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert analysis, threat intelligence, and best practices from our security research team
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="bg-black border border-red-900/30 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                  {/* Image */}
                  <div className="relative h-56 bg-black overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      loading={index < 3 ? "eager" : "lazy"}
                      quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                    <span className="absolute top-4 left-4 z-20 px-4 py-2 bg-gradient-to-r from-red-600 to-red-800 text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-red-500" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-red-500" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-gray-400 mb-4 line-clamp-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.author}</span>
                      <div className="flex items-center text-red-500 font-semibold group-hover:gap-2 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
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
