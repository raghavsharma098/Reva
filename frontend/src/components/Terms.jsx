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

export default function TermsAndConditions() {
  return (
    <section
      className="flex items-center justify-center px-4 py-16 bg-black min-h-screen"
      id="terms"
    >
      <motion.div
        className="w-full max-w-6xl rounded-3xl p-8 md:p-12 text-white bg-gradient-to-r from-black via-[#1c1c1e] to-[#002c5b]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          variants={itemVariants}
        >
          Terms and Conditions
        </motion.h2>

        <motion.p
          className="text-xl font-semibold text-center mb-4 text-blue-300"
          variants={itemVariants}
        >
          Welcome to REVA (Real Estate Verified Alliances)
        </motion.p>

        <motion.p
          className="text-lg font-medium text-center mb-8 text-gray-200"
          variants={itemVariants}
        >
          By accessing or using our website/app and services, you agree to abide by the following terms and conditions:
        </motion.p>

        <div className="space-y-5 text-[17px] font-medium leading-relaxed text-gray-300">
          <motion.p variants={itemVariants}>
            <strong className="text-white">User Responsibilities:</strong> You agree to provide accurate information, use the platform ethically, and respect other users.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Account Security:</strong> Maintain the confidentiality of your account credentials. Report any unauthorized activity immediately.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Content Use:</strong> All platform content is for informational purposes only. Copyrights and intellectual property are owned by REVA unless otherwise stated.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Restrictions:</strong> You may not misuse, duplicate, or exploit any part of the platform without express written permission.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Limitation of Liability:</strong> REVA is not liable for any direct or indirect losses resulting from usage, transactions, or reliance on our content/services.
          </motion.p>

          <motion.p variants={itemVariants}>
            <strong className="text-white">Modifications:</strong> We reserve the right to update these terms at any time, with or without notice. Continued use constitutes acceptance.
          </motion.p>

          <motion.p
            className="pt-4 text-sm text-blue-400"
            variants={itemVariants}
          >
            For the full terms and conditions, please{" "}
            <a
              href="#"
              className="underline hover:text-blue-200"
            >
              download/view the full document here
            </a>.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
