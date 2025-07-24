"use client";

import {
  CheckCircle,
  Smartphone,
  Calendar,
  Paintbrush,
  Smile,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AppStyleContactDemo() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({ type: 'error', message: result.message || 'Failed to send message' });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      className="min-h-screen bg-black text-white px-4 sm:px-8 py-16 overflow-hidden"
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

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="w-full lg:w-1/2 h-full flex justify-center items-center"
      >
        <img
          src="/3.png"
          alt="App UI Preview"
          className="w-full h-full max-h-[600px] object-contain rounded-2xl shadow-xl"
        />
      </motion.div>


        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full max-w-xl bg-[#1E1E1E] rounded-2xl p-6 sm:p-8 shadow-2xl"
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

          <form className="space-y-4" onSubmit={handleSubmit}>
            {submitStatus && (
              <div
                className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-900 text-green-200 border border-green-700'
                    : 'bg-red-900 text-red-200 border border-red-700'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={4}
              required
              className="w-full bg-[#2B2E33] text-white placeholder:text-gray-400 border border-[#0070B8] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#0070B8] transition"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#0070B8] to-[#2B2E33] text-white font-bold py-3 rounded-full hover:opacity-90 transition duration-300 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Notification box */}
      
    </motion.section>
  );
}
