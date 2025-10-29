"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Shield } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)',
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
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              24/7 Cyber Attack Helpline | Expert Support When You Need It Most
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* United Kingdom Office */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-10 hover:border-primary-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">United Kingdom</h2>
                  <p className="text-gray-400">Head Office</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    Address
                  </h3>
                  <p className="text-gray-300 pl-7">
                    Acorn House, 381 Midsummer Boulevard<br />
                    Milton Keynes MK9 3HP
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    Cyber Attack Helpline
                  </h3>
                  <a href="tel:+447771102970" className="text-red-400 text-xl font-bold pl-7 hover:text-red-300 transition-colors">
                    +44 777 110 2970
                  </a>
                  <p className="text-gray-400 text-sm pl-7 mt-1">24/7 Emergency Response</p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary-400" />
                    General Enquiries
                  </h3>
                  <a href="tel:+442031301723" className="text-primary-400 text-lg pl-7 hover:text-primary-300 transition-colors block">
                    +44 203 130 1723
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-400" />
                    Email
                  </h3>
                  <a href="mailto:contact@dic-uk.com" className="text-primary-400 pl-7 hover:text-primary-300 transition-colors block">
                    contact@dic-uk.com
                  </a>
                  <a href="mailto:cmo@digitalinsights-uae.com" className="text-primary-400 pl-7 hover:text-primary-300 transition-colors block">
                    cmo@digitalinsights-uae.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* UAE Office */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-10 hover:border-primary-500/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">United Arab Emirates</h2>
                  <p className="text-gray-400">Dubai Office</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary-400" />
                    Address
                  </h3>
                  <p className="text-gray-300 pl-7">
                    Office 211D & 211E<br />
                    Ibn Battuta Gate Offices<br />
                    Dubai, UAE<br />
                    P.O. Box: 128909
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-red-400" />
                    Cyber Attack Helpline
                  </h3>
                  <a href="tel:+97142415888" className="text-red-400 text-xl font-bold pl-7 hover:text-red-300 transition-colors">
                    +971 4 2415888
                  </a>
                  <p className="text-gray-400 text-sm pl-7 mt-1">24/7 Emergency Response</p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary-400" />
                    General Enquiries
                  </h3>
                  <a href="tel:+442031301723" className="text-primary-400 text-lg pl-7 hover:text-primary-300 transition-colors block">
                    +44 203 130 1723
                  </a>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary-400" />
                    Email
                  </h3>
                  <a href="mailto:info@digitalinsights-uae.com" className="text-primary-400 pl-7 hover:text-primary-300 transition-colors block">
                    info@digitalinsights-uae.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-3xl p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white mb-4">Send Us a Message</h2>
                <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Your Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Message *</label>
                  <textarea
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all resize-none"
                    placeholder="Tell us about your security needs..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" required className="mt-1" />
                  <label htmlFor="privacy" className="text-gray-400 text-sm">
                    I agree to the <a href="#" className="text-primary-400 hover:text-primary-300">Privacy Policy</a> and consent to Digital Insights storing and processing my data.
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-primary-500/30 transition-all"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Emergency Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-8 text-center"
          >
            <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Under Cyber Attack?</h3>
            <p className="text-gray-300 mb-4">Our 24/7 emergency response team is ready to help</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+447771102970" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5" />
                UK: +44 777 110 2970
              </a>
              <a href="tel:+97142415888" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-full font-bold text-lg inline-flex items-center justify-center gap-2 transition-all">
                <Phone className="w-5 h-5" />
                UAE: +971 4 2415888
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
