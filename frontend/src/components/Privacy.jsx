import { motion } from "framer-motion";
import { useEffect } from "react";

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

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section
      id="privacy"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black"
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
          Privacy <span className="text-blue-400">Policy</span>
        </motion.h2>

        {/* Description */}
        <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
          At <strong>REVA</strong>, we value your privacy and are committed to protecting your personal information.
        </motion.p>

        {/* Policy Points */}
        <motion.ul className="list-disc pl-6 space-y-4 text-base text-gray-300 mb-8" variants={itemVariants}>
          <li>
            <strong>Information We Collect:</strong> Personal identification data (name, email, phone), professional details, E-KYC information, and usage data.
          </li>
          <li>
            <strong>How We Use Data:</strong> To create your account, verify users, personalize your experience, and enhance platform security and functionality.
          </li>
          <li>
            <strong>Cookies & Tracking:</strong> We use cookies to improve user experience and analyse website usage.
          </li>
          <li>
            <strong>Sharing & Disclosure:</strong> We do not sell or rent your personal data. Information may be shared with trusted partners for essential services, or as required by law.
          </li>
          <li>
            <strong>Data Security:</strong> We employ industry-standard security protocols to protect your information.
          </li>
          <li>
            <strong>User Rights:</strong> You may access, modify, or request the deletion of your data at any time. For requests, contact us at{" "}
            <a
              href="mailto:reva@lilsindia.com"
              className="text-blue-300 underline hover:text-blue-200"
            >
              reva@lilsindia.com
            </a>.
          </li>
        </motion.ul>

        {/* Footer Link */}
        <motion.p className="text-center text-gray-300 mb-4" variants={itemVariants}>
          Read our full privacy policy{" "}
          <a href="#" className="text-blue-400 underline hover:text-blue-200">
            here
          </a>.
        </motion.p>

        <motion.p className="text-center text-gray-400 text-sm" variants={itemVariants}>
          If you have questions, please email:{" "}
          <a
            href="mailto:reva@lilsindia.com"
            className="text-blue-300 underline hover:text-blue-200"
          >
            reva@lilsindia.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
