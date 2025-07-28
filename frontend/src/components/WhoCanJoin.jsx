import { motion } from "framer-motion";
import {
  FaUserTie, FaBuilding, FaUniversity, FaChartLine, FaGavel,
  FaDraftingCompass, FaTools, FaBalanceScale, FaTruckMoving,
  FaLaptopHouse, FaHardHat, FaUsers
} from "react-icons/fa";

const roles = [
  {
    title: "Real Estate Agents",
    icon: <FaUserTie />,
    description: "Streamline listings and connect with clients."
  },
  {
    title: "Developers & Builders",
    icon: <FaBuilding />,
    description: "Showcase projects and find key collaborators."
  },
  {
    title: "Banking & Financial Services",
    icon: <FaUniversity />,
    description: "Offer home loans and real estate financing."
  },
  {
    title: "Investors & Asset Managers",
    icon: <FaChartLine />,
    description: "Explore and manage real estate investments."
  },
  {
    title: "Legal Professionals",
    icon: <FaGavel />,
    description: "Assist in legal matters and transactions."
  },
  {
    title: "Architects & Designers",
    icon: <FaDraftingCompass />,
    description: "Shape innovative and practical spaces."
  },
  {
    title: "Engineers & Consultants",
    icon: <FaTools />,
    description: "Support technical and structural solutions."
  },
  {
    title: "CAs & Auditors",
    icon: <FaBalanceScale />,
    description: "Ensure financial accuracy and compliance."
  },
  {
    title: "Material Suppliers",
    icon: <FaTruckMoving />,
    description: "Provide quality materials for construction."
  },
  {
    title: "PropTech Services",
    icon: <FaLaptopHouse />,
    description: "Deliver digital tools for real estate growth."
  },
  {
    title: "Construction Managers",
    icon: <FaHardHat />,
    description: "Lead and execute building projects."
  },
  {
    title: "Others",
    icon: <FaUsers />,
    description: "Any professional linked to real estate."
  },
];

export default function WhoCanJoinReva() {
  return (
    <section className="relative z-10 bg-black text-white py-20 px-4 sm:px-8 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          <span className="text-[#00A8E8]">Who Can Join</span> REVA?
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
          REVA brings together every key player in real estate — from agents to architects — on one powerful network.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {roles.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg hover:shadow-[#00A8E8]/30 transition duration-300 hover:-translate-y-1 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#0054A5]/40 to-transparent opacity-0 group-hover:opacity-100 blur-sm z-0 transition-all duration-300 rounded-xl" />

              <div className="relative z-10 flex flex-col items-center px-4 py-6 text-center">
                <div className="w-12 h-12 mb-3 flex items-center justify-center text-2xl rounded-full bg-[#0054A5]/30 text-yellow-400 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-white text-base font-semibold mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-xs leading-snug">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
