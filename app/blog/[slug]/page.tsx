"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug as string;

  // This would typically come from a CMS or markdown files
  const post = {
    title: slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
    date: "2025-01-15",
    readTime: "8 min read",
    category: "AI & Security",
    content: `
      This is where your blog post content would go. In a production environment, you would:

      1. Store blog posts as MDX files in the content/blog directory
      2. Use a library like gray-matter to parse frontmatter
      3. Use next-mdx-remote or @next/mdx to render the content
      4. Add syntax highlighting with prism or highlight.js

      For now, this is a placeholder demonstrating the blog post layout.
    `
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-32 pb-24">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/blog" className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-sm font-semibold mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-gray-300 whitespace-pre-line">
            {post.content}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Cybersecurity Assistance?
          </h3>
          <p className="text-gray-400 mb-6">
            Our team of experts is ready to help secure your organization
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </article>
    </div>
  );
};

export default BlogPost;
