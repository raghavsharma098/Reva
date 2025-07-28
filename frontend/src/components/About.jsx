import {
  FaUserCheck,
  FaBell,
  FaCogs,
  FaChartBar,
  FaComments,
  FaCalendarCheck,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Features() {
  const cards = [
    {
      icon: <FaCogs className="text-[#0061AA] text-xl sm:text-2xl mt-4" />,
      title: "Customizable Profiles",
      description:
        "Personalize your REVA profile with layouts and themes that reflect your brand.",
    },
    {
      icon: <FaUserCheck className="text-[#0061AA] text-xl sm:text-2xl" />,
      title: "Verified Users",
      description:
        "Connect confidently with authentic professionals through e-KYC verified profiles.",
    },
    {
      icon: <FaBell className="text-[#0061AA] text-xl sm:text-2xl" />,
      title: "Smart Notifications",
      description: "Stay updated with real-time alerts for events, messages, and deals.",
    },
    {
      icon: <FaChartBar className="text-[#0061AA] text-xl sm:text-2xl" />,
      title: "Account Insights",
      description:
        "Track engagement, deal metrics & profile views to boost your presence.",
    },
    {
      icon: <FaComments className="text-[#0061AA] text-xl sm:text-2xl" />,
      title: "Seamless Messaging",
      description:
        "Chat easily with your connections and groups using our real estate-specific interface.",
    },
    {
      icon: <FaCalendarCheck className="text-[#0061AA] text-xl sm:text-2xl" />,
      title: "Post Scheduling",
      description:
        "Plan and schedule updates or property listings at your convenience.",
    },
  ];

  return (
    <section className="bg-black text-white py-20 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0061AA]">
          Elevate your real estate presence with REVA!
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#ffffff0d] text-white border border-[#2a2a2a] p-8 rounded-3xl shadow-2xl mt-10 text-left"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-center text-white">
            How REVA Works?
          </h3>
          <ol className="list-decimal list-inside space-y-4 text-base text-gray-300 font-medium">
            <li>
              <span className="font-semibold text-white">Download the REVA India App:</span> Available on Android and iOS for seamless, anytime access.
            </li>
            <li>
              <span className="font-semibold text-white">Register & Complete E-KYC:</span> Ensure trust and security across all connections.
            </li>
            <li>
              <span className="font-semibold text-white">Build Your Professional Profile:</span> Showcase your expertise, specialties, and real estate services.
            </li>
            <li>
              <span className="font-semibold text-white">Start Connecting:</span> Join communities, find collaborators, and discover new business opportunities (Digital + Offline networking Events).
            </li>
          </ol>
        </motion.div>
      </div>

      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16 mt-20"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
          The Premier Real Estate Networking App in India
        </h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
          <strong>REVA (Real Estate Verified Alliance)</strong> is India’s first verified networking platform for real estate stakeholders. Whether you're an agent, developer, architect, legal or finance expert, REVA connects you on one trusted platform.
        </p>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          Enjoy a hybrid experience—online and offline—that fosters meaningful connections, boosts deal closures, and elevates your professional reputation.
        </p>
      </motion.div>

      {/* Features Overview */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#0061AA] mb-4">
            ✨ Features at a Glance
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 pl-2 sm:pl-4">
            <li> Verified Profiles – Build trust with real credentials.</li>
            <li> Networking Hub – Connect with real estate pros across India.</li>
            <li> Hybrid Model – Digital + Offline networking events integration.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-[#0061AA] mb-4">
            🔧 Powerful Networking Tools
          </h3>
          <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base space-y-2 pl-2 sm:pl-4">
            <li> Digital NFC Business Cards & Smart Contact Manager</li>
            <li> Dedicated Meeting Spaces & Events for Collaboration</li>
            <li> Community Forums & Private Group Chats</li>
          </ul>
        </motion.div>
      </div>

      {/* Special Offer Section */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-[#121212] border border-[#0061AA] rounded-2xl px-6 sm:px-10 py-10 mb-20 max-w-4xl mx-auto text-center shadow-xl"
      >
        <h4 className="text-2xl sm:text-3xl font-bold text-[#0061AA] mb-3">
          🎁 Get Your REVA Professional Kit FREE!
        </h4>
        <p className="text-gray-300 text-base sm:text-lg mb-2">
          <strong>Complete your profile</strong> to claim your exclusive starter pack.
        </p>
        <p className="text-gray-400 text-sm sm:text-base">
          Includes a <strong>NFC Business Card, Logo Pin, Premium Diary, Organizer</strong>, and branded REVA merchandise to boost your professional visibility.*
        </p>
      </motion.div>

      {/* Feature Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
            className="bg-[#121212] border border-[#2a2a2a] rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-[#1f1f1f] p-3 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-white font-semibold text-lg sm:text-xl">
                {card.title}
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
