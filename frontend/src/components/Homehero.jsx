import { motion } from "framer-motion";
import { useCallback } from "react";

export default function HomeHero() {
  const handleAppClick = useCallback((e) => {
    e.preventDefault();
    alert("🚧 The app is launching soon. Stay tuned!");
  }, []);

  return (
    <section className="relative bg-black text-white overflow-hidden py-20 px-4 sm:px-8 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side - Text */}
        <div className="space-y-6 text-center md:text-left px-4 sm:px-6 md:px-0 ml-5">
          <p className="text-sm text-gray-300 font-medium">
            ✨ Featured by <span className="text-white font-semibold">Lexora Networks</span>
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            REVA – <span className="text-white">India’s First Verified</span><br />
            <span className="text-[#0054A5]">Real Estate Networking App</span>
          </h1>

          <p className="text-lg text-gray-200 font-medium">
            Agents, Developers, Professionals & Investors<br />
            <span className="text-white">on One Platform.</span>
          </p>

          <p className="text-base text-gray-300">
            Hybrid mobile app interface that helps people feel more connected – both online and offline.
            <br />
            <span className="text-white">Mobile-first with offline integration.</span>
          </p>

          <p className="text-lg font-semibold text-[#0054A5]">Connect. Collaborate. Grow with REVA.</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-5 w-full max-w-md mx-auto sm:mx-0">
            <a
              href="#"
              onClick={handleAppClick}
              className="flex-1 bg-[#0054A5] text-white text-sm font-semibold px-4 py-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <img src="/apple-logo.png" alt="Apple Store" className="w-4 h-4" />
              App Store
            </a>
            <a
              href="#"
              onClick={handleAppClick}
              className="flex-1 bg-white text-black text-sm font-semibold px-4 py-4 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <img src="/app.png" alt="Google Play" className="w-4 h-4" />
              Google Play
            </a>
          </div>
        </div>

        {/* Right Side - Phone Images */}
        <div className="relative flex justify-center items-center h-[360px] sm:h-[420px] md:h-[480px] lg:h-[540px] ml-10 mt-10">
          {/* Glow Background */}
          <div className="absolute w-[240px] sm:w-[300px] md:w-[360px] h-[240px] sm:h-[300px] md:h-[360px] rounded-full bg-[#0054A5] opacity-30 blur-3xl z-0 mt-10"></div>

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
            src="/3.png"
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
