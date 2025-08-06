import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Verified & Authentic Networking",
    description:
      "Connect confidently with verified, authentic users on the platform. E-KYC Verification ensures trust and security to build your real estate network with trusted professionals.",
    icon: "🔒",
  },
  {
    title: "Personalized Experience",
    description:
      "Tailored content and recommendations just for you. Use our Smart Contact Manager to organize and manage your real estate connections effortlessly.",
    icon: "✨",
  },
  {
    title: "Authentic Connections",
    description:
      "Build genuine relationships with like-minded individuals. Get event invitations based on your preferences for meetings & collaborations.",
    icon: "🤝",
  },
  {
    title: "Professional Recognition",
    description:
      "Earn digital badges, credibility, and certifications as you contribute, collaborate, and grow within the REVA community.",
    icon: "🏅",
  },
];

export default function WhyChooseCreonex() {
  return (
    <section className="bg-black text-white py-12 px-4">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <p className="text-sm bg-[#1C1C1C] px-4 py-2 rounded-full inline-block mb-3">
          ★ Discover REVA Benefits
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Unlock the World of Real Estate Networking
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          Unlock real estate's world of meaningful connections, tailored experiences, and seamless networking. Connect online through the unique hybrid experience with the REVA app and offline via exclusive real estate events in major Indian cities.
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
