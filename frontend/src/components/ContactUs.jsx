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

export default function ContactUs() {
  return (
    <section
      className="flex items-center justify-center px-4 py-16 bg-black min-h-screen"
      id="contact"
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
          Contact Us
        </motion.h2>

        <motion.p
          className="text-lg text-center mb-8 font-medium"
          variants={itemVariants}
        >
          We’d love to hear from you! Whether you have a question about membership,
          partnerships, support, or anything else, our team is ready to answer all
          your questions.
        </motion.p>

        <motion.div className="mb-6 space-y-2 text-lg" variants={itemVariants}>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:reva@lilsindia.com" className="text-[#6EC1E4] underline">
              reva@lilsindia.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918123439678" className="text-[#6EC1E4] underline">
              +91 81234 39 678
            </a>
          </p>
        </motion.div>

        <motion.div className="mb-6 space-y-1 text-[17px]" variants={itemVariants}>
          <p className="font-semibold">Registered Office Address:</p>
          <p>LEXORA REVA Network.</p>
          <p>C/o. Lexora Intelligence & Legal Studies LLP</p>
          <p>Level 15, UB City,</p>
          <p>24, Vittal Mallya Road,</p>
          <p>Bangalore -560001.</p>
          <p>Karnataka, India</p>
        </motion.div>

        <motion.p className="mb-2" variants={itemVariants}>
          You can also connect with us on{" "}
          <span className="text-[#6EC1E4] font-medium">
            [LinkedIn], [Facebook], [Instagram], and [Twitter]
          </span>.
        </motion.p>

        <motion.p variants={itemVariants}>
          Or use our contact form below:
        </motion.p>
      </motion.div>
    </section>
  );
}
