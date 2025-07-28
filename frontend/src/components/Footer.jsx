"use client";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <motion.footer
      className="bg-black text-white py-14 px-4 sm:px-10 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo + Tagline */}
        <motion.div
          className="flex flex-col items-center gap-2 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src="/logo.jpg" alt="Company Logo" className="h-10" />
          <h1 className="text-2xl font-semibold">Reva</h1>
          <p className="text-gray-400 text-sm">
            Empower Your Social Connections
            <br className="hidden sm:block" />
            with Appit Social
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:hello@appit.com"
          className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition mb-10 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📩 hello@appit.com
        </motion.a>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="#" className="hover:underline">Benefits</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Testimonials</a>
          <a href="#" className="hover:underline">FAQ’s</a>
          <a href="#" className="hover:underline">Waitlist</a>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {[FaLinkedinIn, FaXTwitter, FaInstagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              className="bg-[#121212] p-3 rounded-xl hover:bg-[#1f1f1f] transition"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="text-white" />
            </motion.a>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 border-t border-[#1f1f1f] pt-6 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>Template by Praha</p>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
