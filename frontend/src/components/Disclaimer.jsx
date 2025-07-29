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

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Header/>
    <section
      id="disclaimer"
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
          Legal <span className="text-blue-400">Disclaimer</span>
        </motion.h2>

        {/* Disclaimer Text */}
        <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
          The information provided on the <strong>REVA</strong> platform is for general informational purposes only. While we strive to ensure accuracy and timeliness, REVA and its affiliates make no representations or warranties regarding the completeness, reliability, or suitability of any information, products, or services.
        </motion.p>

        <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
          REVA does not provide financial, legal, or professional advice. Users should conduct their own due diligence before making any real estate or business decisions. REVA cannot be held liable for losses, damages, or disruptions arising from platform usage or third-party content.
        </motion.p>

        {/* Footer Link */}
        <motion.p className="text-center text-gray-300" variants={itemVariants}>
          For further clarity, please{" "}
          <a href="#" className="text-blue-400 underline hover:text-blue-200">
            refer to our full disclaimer here
          </a>.
        </motion.p>
      </motion.div>
    </section>
    <Footer/>
    </>
  );
}
