import { motion } from "framer-motion";

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
  return (
    <section
      className="flex items-center justify-center px-4 py-16 bg-black min-h-screen"
      id="privacy"
    >
      <motion.div
        className="w-full max-w-6xl rounded-3xl p-8 md:p-12 text-white bg-gradient-to-r from-[#0055A5] via-[#1C1C1C]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Privacy Policy
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-8 font-medium text-blue-300"
          variants={itemVariants}
        >
          At REVA, we value your privacy and are committed to protecting your personal information.
        </motion.p>

        <div className="space-y-5 text-[17px] font-medium leading-relaxed text-gray-300">
          <motion.p variants={itemVariants}>
            <strong className="text-white">Information We Collect:</strong> Personal identification data (name, email, phone), professional details, E-KYC information, and usage data.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">How We Use Data:</strong> To create your account, verify users, personalize your experience, and enhance platform security and functionality.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Cookies & Tracking:</strong> We use cookies to improve user experience and analyse website usage.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Sharing & Disclosure:</strong> We do not sell or rent your personal data. Information may be shared with trusted partners for essential services, or as required by law.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Data Security:</strong> We employ industry-standard security protocols to protect your information.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">User Rights:</strong> You may access, modify, or request the deletion of your data at any time. For requests, contact us at{" "}
            <a href="mailto:reva@lilsindia.com" className="text-[#6EC1E4] underline">
              reva@lilsindia.com
            </a>.
          </motion.p>

          <motion.p
            className="pt-4 text-sm text-blue-400"
            variants={itemVariants}
          >
            Read our full privacy policy{" "}
            <a href="#" className="underline hover:text-blue-200">
              here
            </a>.
          </motion.p>

          <motion.p
            className="text-sm text-gray-400"
            variants={itemVariants}
          >
            If you have questions, please email:{" "}
            <a href="mailto:reva@lilsindia.com" className="text-[#6EC1E4] underline">
              reva@lilsindia.com
            </a>
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
