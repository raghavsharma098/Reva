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

export default function Disclaimer() {
  return (
    <section
      className="flex items-center justify-center px-4 py-16 bg-black min-h-screen"
      id="disclaimer"
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
          Disclaimer
        </motion.h2>

        <motion.p
          className="text-xl font-semibold text-center mb-4 text-blue-300"
          variants={itemVariants}
        >
          Important Information Regarding REVA Platform
        </motion.p>

        <motion.p
          className="text-lg font-medium text-center mb-8 text-gray-200"
          variants={itemVariants}
        >
          Please read this disclaimer carefully before using our services.
        </motion.p>

        <div className="space-y-5 text-[17px] font-medium leading-relaxed text-gray-300">
          <motion.p variants={itemVariants}>
            The information provided on the REVA platform is for general informational purposes only. While we strive to ensure accuracy and timeliness, REVA and its affiliates make no representations or warranties regarding the completeness, reliability, or suitability of any information, products, or services.
          </motion.p>

          <motion.p variants={itemVariants}>
            REVA does not provide financial, legal, or professional advice. Users should conduct their own due diligence before making any real estate or business decisions.
          </motion.p>

          <motion.p variants={itemVariants}>
            REVA cannot be held liable for losses, damages, or disruptions arising from platform usage or third-party content.
          </motion.p>

          <motion.p
            className="pt-4 text-sm text-blue-400"
            variants={itemVariants}
          >
            For further clarity, please refer to our full disclaimer{" "}
            <a href="#" className="underline hover:text-blue-200">
              here
            </a>.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
