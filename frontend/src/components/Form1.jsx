"use client";

import {
  CheckCircle,
  Smartphone,
  Calendar,
  Paintbrush,
  Smile,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AppStyleContactDemo() {
  const features = [
    "Face ID check before consultation",
    "Instant calendar sync & reminders",
    "Live chat and support enabled",
    "Color theme customization",
    "Real-time system preview",
  ];

  const icons = [Smile, Paintbrush, Calendar, Smartphone];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
        },
      }}
      className="min-h-screen bg-black text-white px-4 sm:px-8 py-8 overflow-hidden relative"
    >
      {/* Floating icons - only on large screens */}
      <motion.div
        animate={{ x: [-10, 0, -10] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="hidden lg:flex flex-col items-center space-y-2 absolute left-2 top-1/2 -translate-y-1/2 z-10"
      >
        {icons.map((Icon, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-[#1E1E1E] p-3 rounded-xl shadow-lg hover:bg-[#0070B8] transition"
          >
            <Icon size={20} className="text-white" />
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-0">
        {/* Image Section */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="w-full lg:w-1/2 h-full flex justify-center items-center"
        >
          <img
            src="/2.png"
            alt="App UI Preview"
            className="w-full h-full max-h-[600px] object-contain rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Contact Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-xl bg-[#1E1E1E] rounded-2xl p-6 sm:p-16 shadow-2xl mt-3"
        >
          <h3 className="text-[#0070B8] font-semibold text-lg mb-1">
            Get in Touch
          </h3>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 leading-snug">
            Book Your Free IT Consultation
          </h2>

          <ul className="space-y-3 text-sm sm:text-base mb-8 text-gray-300">
            {features.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle size={18} className="text-[#0070B8] mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          {/* Contact Buttons */}
          <div className="space-y-4">
            {/* Call & Email Row */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#0070B8] to-[#005a91] text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <Phone size={18} /> Call Us
              </a>
              <a
                href="mailto:info@yourdomain.com"
                className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#0070B8] to-[#005a91] text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
              >
                <Mail size={18} /> Email Us
              </a>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-black font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
