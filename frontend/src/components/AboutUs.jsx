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

export default function AboutUs() {
  return (
    <section
      className="flex items-center justify-center px-4 py-16 bg-black min-h-screen"
      id="about"
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
          About Us
        </motion.h2>

        <motion.p
          className="text-xl font-semibold text-center mb-4 text-blue-300"
          variants={itemVariants}
        >
          REVA - Real Estate Verified Alliances.
        </motion.p>

        <motion.p
          className="text-lg font-medium text-center mb-8 text-gray-200"
          variants={itemVariants}
        >
          India’s First Verified Real Estate Professional Networking App — Agents, Developers, Professionals & Investors on One Platform.
        </motion.p>

        <div className="space-y-5 text-[17px] font-medium leading-relaxed text-gray-300">
          <motion.p variants={itemVariants}>
            <strong className="text-white">REVA</strong> (Real Estate Verified Alliances) is India’s pioneering platform designed to bring together real estate agents, developers, professionals, and investors on a single, trusted network.
          </motion.p>

          <motion.p variants={itemVariants}>
            Our mission is to organize and empower the Indian real estate ecosystem by fostering authentic connections, streamlining collaboration, and enhancing business opportunities — both online and offline.
          </motion.p>

          <motion.p variants={itemVariants}>
            Founded by industry experts and featured by <strong className="text-white">LEXORA Intelligence & Legal Studies LLP</strong>, REVA leverages innovative technology and curated experiences to create a vibrant, secure, and growth-focused community for real estate stakeholders across India.
          </motion.p>

          <motion.p
            className="font-semibold italic text-blue-400"
            variants={itemVariants}
          >
            “Connecting Real Estate Professionals Like Never Before.”
          </motion.p>

          <motion.p variants={itemVariants}>
            REVA features a hybrid mobile app interface that helps people feel more connected — both online and offline.
          </motion.p>

          <motion.p variants={itemVariants}>
            At REVA, we redefine the way real estate professionals connect, collaborate, and grow!
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
