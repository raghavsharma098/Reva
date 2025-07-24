// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//         {/* Left side */}
//         <div className="text-center md:text-left">
//           <p className="text-sm text-gray-400 mb-3">Featured by Apple</p>
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-6">
//             Foundations of <br />
//             beginning.{" "}
//             <span className="text-gray-400 block sm:inline">
//               Our fundamental principles and ethics.
//             </span>
//           </h1>

//           <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
//             <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-gray-200 transition">
//               <i className="fab fa-apple mr-2"></i> App Store
//             </button>
//             <button className="bg-white text-black px-5 py-3 rounded-xl text-sm font-semibold shadow-md hover:bg-gray-200 transition">
//               <i className="fab fa-google-play mr-2"></i> Google Play
//             </button>
//           </div>
//         </div>

//         {/* Right side - Phone Mockup with Animation */}
//         <div className="relative w-full h-[400px] sm:h-[500px] md:h-full flex justify-center items-center mt-12 md:mt-0">
//           <motion.div
//             className="absolute top-0 left-1/3 md:left-12 z-10"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ repeat: Infinity, duration: 3 }}
//           >
//             <img
//               src="/4.png"
//               alt="Phone Mockup"
//               width={220}
//               height={440}
//               className="drop-shadow-xl rounded-2xl"
//             />
//           </motion.div>

//           <motion.div
//             className="absolute top-0 left-1/4 md:left-0 z-0"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ repeat: Infinity, duration: 3, delay: 1 }}
//           >
//             <img
//               src="/5.png"
//               alt="Phone Mockup Back"
//               width={220}
//               height={440}
//               className="rounded-2xl opacity-70"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
