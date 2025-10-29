"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DI</span>
              </div>
              <span className="text-white font-bold text-xl">Digital Insights</span>
            </div>
            <p className="text-gray-400 mb-4">
              Keep Companies Safe From Cyber Attacks
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/digitalinsightsuk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/digitalinsighuk" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/dicuk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/digital_insightsuk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Digital Forensics</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">SOC Services</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Penetration Testing</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Security Assessments</Link></li>
              <li><Link href="#services" className="text-gray-400 hover:text-primary-400 transition-colors">Training</Link></li>
            </ul>
          </div>

          {/* AI Services */}
          <div>
            <h3 className="text-white font-bold mb-4">AI Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="#ai-services" className="text-gray-400 hover:text-primary-400 transition-colors">AI Threat Detection</Link></li>
              <li><Link href="#ai-services" className="text-gray-400 hover:text-primary-400 transition-colors">Machine Learning</Link></li>
              <li><Link href="#ai-services" className="text-gray-400 hover:text-primary-400 transition-colors">Predictive Analytics</Link></li>
              <li><Link href="#ai-services" className="text-gray-400 hover:text-primary-400 transition-colors">AI Consulting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-primary-400 transition-colors">Blog</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-primary-400 transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © {currentYear} Digital Insights UAE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
