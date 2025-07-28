import { motion } from "framer-motion";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Main() {
  return (
    <div className="bg-black text-white min-h-screen px-4 sm:px-6 md:px-10 py-10 font-sans mt-0">

      {/* Trusted Logos Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 grayscale opacity-90"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
        </motion.div>
      </motion.div>

      {/* Logo and Tagline Section */}
      <motion.div 
        className="text-center my-14 px-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="w-[120px] sm:w-[140px] md:w-[150px] h-[120px] sm:h-[140px] md:h-[150px] rounded-full mx-auto bg-white flex items-center justify-center mb-8 shadow-lg"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          <img src="logo3.jpg" className="rounded-md w-[80px] sm:w-[90px] md:w-[100px]" alt="Logo" />
        </motion.div>
        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-snug md:leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering authentic connections for a <br className="hidden sm:block" />
          vibrant vibrant professional Networking experience.
        </motion.h1>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto text-center text-white/90 mt-16 px-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
      >
        {[
          { count: "10k+", text: "Shared Real estate Requirement online every day on REVA App." },
          { count: "5k+", text: "Thriving across 12 Key Real estate Stakeholders Building Connections." },
          { count: "9+", text: "Cities across 5 states, fostering real, impactful relationships." },
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="p-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">{item.count}</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-400">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
