"use client";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  // FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socials = [
    {
      icon: FaInstagram,
      name: "Instagram",
      href: "https://www.instagram.com/lexora.intelligence/profilecard/?igsh=MTBmZ3lweHJldTFxNg==",
    },
    {
      icon: FaLinkedinIn,
      name: "LinkedIn",
      href: "https://linkedin.com/company/reva-india",
    },
    {
      icon: FaFacebookF,
      name: "Facebook",
      href: "https://www.facebook.com/share/1758fThHsj/?mibextid=qi2Omg",
    },
    // {
    //   icon: FaXTwitter,
    //   name: "Twitter (X)",
    //   href: "https://twitter.com/revaindia",
    // },
    // {
    //   icon: FaYoutube,
    //   name: "YouTube",
    //   href: "https://youtube.com/@REVAIndia",
    // },
    {
      icon: FaWhatsapp,
      name: "WhatsApp Channel",
      href: "https://whatsapp.com/channel/your channel name", // Update with real URL
    },
    // {
    //   icon: FaTelegramPlane,
    //   name: "Telegram Channel",
    //   href: "https://t.me/yourtelegramchannel", // Update with real URL
    // },
  ];

  return (
    <motion.footer
      className="bg-black text-white py-1 px-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo & Tagline */}
        <motion.div
          className="flex flex-col items-center gap-3 mb-10"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <img src="/logo.png" alt="REVA Logo" className="h-20 rounded-md" />
          <p className="text-gray-400 text-sm leading-tight">
            Empower your real estate journey<br className="hidden sm:block" />
            with trusted alliances.
          </p>
        </motion.div>

        {/* Contact CTA */}
        <motion.a
          href="mailto:reva@lilsindia.com"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-200 transition mb-10 text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📩 lilsindiallp@gmail.com
        </motion.a>

        {/* Navigation Links */}
        <motion.div
          className="flex flex-wrap justify-center gap-x-6 gap-y-4 text-sm text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/contact" className="hover:underline">Contact Us</a>
          <a href="terms" className="hover:underline">Terms</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
          <a href="/disclaimer" className="hover:underline">Disclaimer</a>
          {/* <a href="/" className="hover:underline">Download App</a> */}
        </motion.div>

        {/* Social Media Section */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {socials.map(({ icon: Icon, name, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="bg-[#121212] p-3 rounded-xl hover:bg-[#1f1f1f] transition"
              whileHover={{ scale: 1.1 }}
            >
              <Icon className="text-white w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 border-t border-[#1f1f1f] pt-6 gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p>© {new Date().getFullYear()} REVA. All rights reserved.</p>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </motion.div>
      </div>
    </motion.footer>
  );
}
