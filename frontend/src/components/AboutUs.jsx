import { motion } from "framer-motion";
import { Users, Building2, Handshake } from "lucide-react";
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

export default function AboutUs() {
  return (
    <>
    <Header/>
    <section
      id="about"
      className="min-h-screen bg-black text-white py-20 px-6 md:px-12 flex items-center justify-center"
    >
      <motion.div
        className="max-w-5xl w-full p-10 md:p-16 rounded-3xl shadow-lg"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          variants={itemVariants}
        >
          About <span className="text-blue-400">REVA</span>
        </motion.h2>

        <motion.p
          className="text-center text-xl md:text-2xl font-medium text-blue-300 mb-10"
          variants={itemVariants}
        >
          Real Estate Verified Alliances
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8 mb-12 text-gray-300">
          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <Users className="w-10 h-10 mb-3 text-blue-400" />
            <h4 className="text-lg font-semibold text-white mb-1">Professionals</h4>
            <p>Agents, developers, and investors — all on one trusted platform.</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <Building2 className="w-10 h-10 mb-3 text-green-400" />
            <h4 className="text-lg font-semibold text-white mb-1">Verified Network</h4>
            <p>Authentic connections with real estate stakeholders across India.</p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <Handshake className="w-10 h-10 mb-3 text-yellow-400" />
            <h4 className="text-lg font-semibold text-white mb-1">Collaboration</h4>
            <p>Offline & online synergy to boost business and visibility.</p>
          </motion.div>
        </div>

        <div className="space-y-5 text-[17px] leading-relaxed text-gray-300">
          <motion.p variants={itemVariants}>
            <strong className="text-white">REVA</strong> is India’s first verified real estate networking platform that bridges the gap between agents, developers, and investors through powerful tools and genuine connections.
          </motion.p>

          <motion.p variants={itemVariants}>
            Powered by <strong className="text-white">LEXORA Intelligence & Legal Studies LLP</strong>, REVA is built on innovation, trust, and a deep understanding of the real estate industry.
          </motion.p>

          <motion.p
            className="italic font-semibold text-blue-400"
            variants={itemVariants}
          >
            “Connecting Real Estate Professionals Like Never Before.”
          </motion.p>

          <motion.p variants={itemVariants}>
            From AI-powered matchmaking to hybrid event networking, REVA is redefining how the Indian real estate community connects, collaborates, and grows.
          </motion.p>
        </div>
      </motion.div>
      
    </section>
    <Footer/>
    </>
  );
}
