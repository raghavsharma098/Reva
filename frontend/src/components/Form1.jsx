"use client";

import {
  CheckCircle,
  // Smartphone,
  // Calendar,
  // Paintbrush,
  // Smile,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

export default function AppStyleContactDemo() {
  const features = [
  <p className="text-base sm:text-lg font-medium text-white">
    <span className="text-xl sm:text-2xl text-[#00B4D8] font-bold block mb-2">
      Are you passionate about real estate?
    </span>
    This is your chance to represent your city
  </p>,

  <p className="text-base text-gray-300">
    🚀 <strong>Host high-value networking events</strong> and earn big rewards
  </p>,

  <p className="text-base text-gray-300">
    🎯 Organize <strong>exclusive REVA Connect events</strong>
  </p>,

  <p className="text-base text-gray-300">
    🤝 Build <strong>powerful business connections</strong>
  </p>,

  <p className="text-base text-green-400 font-semibold">
    💰 Earning Potential: <span className="text-white">₹1 Lakh/month</span>
  </p>,

  <p className="text-base text-yellow-400 font-semibold">
    🔥 Apply Now – <span className="text-white">Limited Seats Per City!</span>
  </p>,

  <p className="text-base text-gray-300">
    🌐 Connect. Collaborate. <strong className="text-[#00B4D8]">Grow with REVA</strong>
  </p>,
];

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
      {/* <motion.div
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
      </motion.div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row items-center gap-12">
  {/* Image Section */}
  <motion.div
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 3, repeat: Infinity }}
    className="w-full lg:w-1/2 flex justify-center items-center"
  >
    <img
      src="/2.png"
      alt="App UI Preview"
      className="w-full max-w-md lg:max-w-full max-h-[600px] object-contain rounded-2xl shadow-2xl"
    />
  </motion.div>

  {/* Contact Form Section */}
  <motion.div
  initial={{ opacity: 0, scale: 0.95 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="w-full lg:w-1/2 bg-[#1E1E1E] rounded-2xl p-6 sm:p-10 shadow-2xl border border-[#2a2a2a]"
>
  {/* Heading Section */}
  <h3 className="text-[#00B4D8] font-semibold text-lg sm:text-xl mb-2 tracking-wide">
    🔥 Lead Your City’s Real Estate Network
  </h3>
  <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white leading-snug">
    Become a REVA Ambassador!
  </h2>

  {/* Features List */}
  <ul className="space-y-4 mb-8">
    {features.map((item, i) => (
      <li key={i} className="text-sm sm:text-base text-gray-300 leading-relaxed">
        {item}
      </li>
    ))}
  </ul>

  {/* Divider */}
  <div className="h-px w-full bg-[#2e2e2e] mb-6"></div>

  {/* Contact Buttons */}
  <div className="space-y-4">
    {/* Call & Email */}
    <div className="flex flex-col sm:flex-row gap-4">
      <a
        href="tel:+918123439678"
        className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#0070B8] to-[#005a91] text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
      >
        <Phone size={18} /> Call Us
      </a>
      <a
        href="mailto:lilsindiallp@gmail.com"
        className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#0070B8] to-[#005a91] text-white font-semibold py-3 rounded-xl shadow-md hover:scale-105 transition-transform"
      >
        <Mail size={18} /> Email Us
      </a>
    </div>

    {/* WhatsApp Button */}
    <a
      href="https://wa.me/918123439678"
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
