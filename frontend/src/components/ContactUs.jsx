import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

// ✅ Import Header & Footer
import Header from "./Header";
import Footer from "./Footer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ContactUs() {
  return (
    <>
      <Header /> {/* ✅ Header on Top */}

      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-6 py-32 bg-black" // py-32 to push below header
      >
        <motion.div
          className="w-full max-w-5xl bg-black p-10 md:p-16 text-white shadow-lg"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-8"
            variants={itemVariants}
          >
            Contact <span className="text-blue-400">Us</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-lg text-center mb-10 text-gray-300"
            variants={itemVariants}
          >
            We’d love to hear from you! Whether you have a question about membership,
            partnerships, support, or anything else, our team is ready to answer all your questions.
          </motion.p>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-10 text-gray-300">
            <motion.div className="flex items-start gap-3" variants={itemVariants}>
              <Mail className="text-blue-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <a
                  href="mailto:reva@lilsindia.com"
                  className="text-blue-300 underline hover:text-blue-200"
                >
                  reva@lilsindia.com
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3" variants={itemVariants}>
              <Phone className="text-green-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a
                  href="tel:+918123439678"
                  className="text-blue-300 underline hover:text-blue-200"
                >
                  +91 81234 39 678
                </a>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-3" variants={itemVariants}>
              <MapPin className="text-yellow-400 mt-1" />
              <div>
                <p className="font-semibold text-white">Registered Office Address</p>
                <p>LEXORA REVA Network.</p>
                <p>C/o. Lexora Intelligence & Legal Studies LLP</p>
                <p>Level 15, UB City</p>
                <p>24, Vittal Mallya Road</p>
                <p>Bangalore - 560001</p>
                <p>Karnataka, India</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.p
            className="text-center text-gray-300 mb-6"
            variants={itemVariants}
          >
            You can also connect with us on:
          </motion.p>
          <motion.div
            className="flex justify-center gap-6 text-[#6EC1E4] text-xl mb-6"
            variants={itemVariants}
          >
            <a href="#" aria-label="LinkedIn"><Linkedin className="hover:text-white" /></a>
            <a href="https://www.facebook.com/share/1758fThHsj/?mibextid=qi2Omg" aria-label="Facebook"><Facebook className="hover:text-white" /></a>
            <a href="https://www.instagram.com/lexora.intelligence/profilecard/?igsh=MTBmZ3lweHJldTFxNg==" aria-label="Instagram"><Instagram className="hover:text-white" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="hover:text-white" /></a>
          </motion.div>

          {/* Response Note */}
          <motion.p
            className="text-center text-sm text-gray-400 italic"
            variants={itemVariants}
          >
            Our team typically responds within 1-2 business days.
          </motion.p>
        </motion.div>
      </section>

      <Footer /> {/* ✅ Footer at the bottom */}
    </>
  );
}
