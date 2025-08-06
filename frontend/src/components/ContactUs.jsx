import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

import Header from "./Header";
import Footer from "./Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  return (
    <>
      <Header />

      <section
        id="contact"
        className=" bg-black px-4 py-20 text-white mt-10"
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-6"
            variants={itemVariants}
          >
            Let’s <span className="text-blue-500">Connect</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p
            className="text-center text-gray-400 text-lg mb-14 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Reach out to us for collaborations, support, or general inquiries.
            We're here to help and will respond shortly.
          </motion.p>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-10 mb-14 text-gray-300">
            <motion.div className="flex gap-4 items-start" variants={itemVariants}>
              <Mail className="text-blue-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a href="mailto:reva@lilsindia.com" className="text-blue-300 underline hover:text-blue-200">
                  reva@lilsindia.com
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start" variants={itemVariants}>
              <Phone className="text-green-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:+918123439678" className="text-blue-300 underline hover:text-blue-200">
                  +91 81234 39 678
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start" variants={itemVariants}>
              <MapPin className="text-yellow-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Address</p>
                <p>LEXORA REVA Network</p>
                <p>Level 15, UB City, Vittal Mallya Road</p>
                <p>Bangalore - 560001, Karnataka</p>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-10 shadow-xl"
  variants={itemVariants}
>
  <h3 className="text-2xl font-bold text-center text-white mb-6">
    Contact Form
  </h3>

  <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
    <input
      type="text"
      placeholder="Full Name"
      className="bg-black/70 border border-gray-700 text-white px-4 py-2.5 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
      required
    />
    <input
      type="email"
      placeholder="Email Address"
      className="bg-black/70 border border-gray-700 text-white px-4 py-2.5 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
      required
    />
    <input
      type="tel"
      placeholder="Phone Number"
      className="bg-black/70 border border-gray-700 text-white px-4 py-2.5 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
      required
    />
    <textarea
      placeholder="Your Message"
      rows={4}
      className="bg-black/70 border border-gray-700 text-white px-4 py-2.5 rounded-md sm:col-span-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
      required
    ></textarea>

    <div className="sm:col-span-2 flex justify-center">
      <button
        type="submit"
        className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium text-sm hover:scale-105 hover:shadow-lg transition"
      >
        Send Massage
      </button>
    </div>
  </form>
</motion.div>


          {/* Social Media Icons */}
          <motion.div
            className="text-center mt-16"
            variants={itemVariants}
          >
            <p className="text-gray-400 mb-4">Follow us</p>
            <div className="flex justify-center gap-8 text-2xl">
              <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 transition-all hover:scale-110">
                <Linkedin />
              </a>
              <a
                href="https://www.facebook.com/share/1758fThHsj/?mibextid=qi2Omg"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-all hover:scale-110"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/lexora.intelligence/profilecard/?igsh=MTBmZ3lweHJldTFxNg=="
                aria-label="Instagram"
                className="hover:text-pink-500 transition-all hover:scale-110"
              >
                <Instagram />
              </a>
            </div>
          </motion.div>

          {/* Footer Note */}
          <motion.p
            className="text-center text-sm text-gray-500 italic mt-6"
            variants={itemVariants}
          >
            We typically respond within 1–2 business days.
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
