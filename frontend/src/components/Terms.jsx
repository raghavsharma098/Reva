import { motion } from "framer-motion";
import { useEffect } from "react";
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

export default function TermsAndConditions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header/>
    <section
      id="terms"
      className=" flex items-center justify-center mt-10 bg-black"
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
          Terms & <span className="text-blue-400">Conditions</span>
        </motion.h2>

        {/* Description */}
        <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
          Welcome to <strong>REVA (Real Estate Verified Alliances)</strong>. By accessing or using our website/app and services, you agree to abide by the following terms and conditions:
        </motion.p>

        <motion.ul className="list-disc pl-6 space-y-4 text-base text-gray-300 mb-8" variants={itemVariants}>
          <li>
            <strong>User Responsibilities:</strong> You agree to provide accurate information, use the platform ethically, and respect other users.
          </li>
          <li>
            <strong>Account Security:</strong> Maintain the confidentiality of your account credentials. Report any unauthorized activity immediately.
          </li>
          <li>
            <strong>Content Use:</strong> All platform content is for informational purposes only. Copyrights and intellectual property are owned by REVA unless otherwise stated.
          </li>
          <li>
            <strong>Restrictions:</strong> You may not misuse, duplicate, or exploit any part of the platform without express written permission.
          </li>
          <li>
            <strong>Limitation of Liability:</strong> REVA is not liable for any direct or indirect losses resulting from usage, transactions, or reliance on our content/services.
          </li>
          <li>
            <strong>Modifications:</strong> We reserve the right to update these terms at any time, with or without notice. Continued use constitutes acceptance.
          </li>
        </motion.ul>

        {/* Download link */}
        <motion.p className="text-center text-gray-300" variants={itemVariants}>
          For the full terms and conditions, please{" "}
          <a
            href="#"
            className="text-blue-400 underline hover:text-blue-200"
          >
            download/view the full document here
          </a>.
        </motion.p>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
}
