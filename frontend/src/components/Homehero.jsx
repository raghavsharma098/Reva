import { motion } from "framer-motion";

export default function HomeHero() {
  return (
    <section className="relative bg-black text-white overflow-hidden py-20 px-4 sm:px-8 lg:px-24 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left px-4 sm:px-6 md:px-0 ml-10">
          <p className="text-sm text-gray-400 font-medium">✨ Featured by Apple</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Foundations of <span className="text-white">beginning.</span>
            <br />
            <span className="text-gray-400 block mt-2">Our fundamental principles and ethics.</span>
          </h1>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4 pt-6">
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition">
               App Store
            </button>
            <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition">
              ▶ Google Play
            </button>
          </div>
        </div>

        {/* Right Side - Phone Images */}
        <div className="relative flex justify-center items-center h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] ml-10">
          {/* Glow Background */}
          <div className="absolute w-[240px] sm:w-[300px] md:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] rounded-full bg-[#00B3B8] opacity-30 blur-3xl z-0 mt-10"></div>

          {/* Phone Back */}
          <motion.img
            src="/1.png"
            alt="Phone Back"
            className="absolute left-[10%] sm:left-[15%] top-0 z-0 drop-shadow-2xl w-[160px] sm:w-[200px] md:w-[240px] rotate-[-6deg]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />

          {/* Phone Front */}
          <motion.img
            src="/2.png"
            alt="Phone Front"
            className="relative z-10 drop-shadow-2xl w-[160px] sm:w-[200px] md:w-[240px] rotate-[2deg]"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
