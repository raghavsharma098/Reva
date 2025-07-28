import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Authentic Connections",
    description: "Build genuine relationships with like-minded individuals.",
    icon: "👥",
  },
  {
    title: "Personalized Experience",
    description: "Tailored content and recommendations just for you.",
    icon: "✨",
  },
  {
    title: "Global Reach",
    description: "Connect with people across 50+ countries effortlessly.",
    icon: "🌐",
  },
  {
    title: "Community Support",
    description: "Join thriving communities around your interests.",
    icon: "😊",
  },
];

export default function WhyChooseCreonex() {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-12 lg:px-32">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-sm bg-[#1C1C1C] px-4 py-2 rounded-full inline-block mb-3">
          ★ Our Benefits
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Discover Appit’s Benefits
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Unlock a world of meaningful connections, tailored experiences, and seamless social interaction.
        </p>
      </div>

      {/* Benefits Grid + Phone */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Left Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          {benefits.slice(0, 2).map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="bg-[#111111] p-5 sm:p-6 rounded-2xl shadow-md"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full max-w-[250px] sm:max-w-[300px]"
        >
          <img
            src="/4.png"
            alt="App Screenshot"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 w-full max-w-md">
          {benefits.slice(2).map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
              className="bg-[#111111] p-5 sm:p-6 rounded-2xl shadow-md"
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
