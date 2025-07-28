// Header.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 🧭 For navigation
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // 🔗

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (section) => {
  switch (section) {
    case 'About Us':
      navigate('/about');
      break;
    case 'Contact Us':
      navigate('/contact');
      break;
    case 'Terms':
      navigate('/terms');
      break;
    case 'Privacy Policy':
      navigate('/privacy');
      break;
    case 'Disclaimer':
      navigate('/disclaimer');
      break;
    default:
      const id = section.toLowerCase().replace(/\s+/g, '-');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
  }
  setIsMenuOpen(false);
};


  const navLinks = ['About Us', 'Contact Us', 'Terms', 'Privacy Policy', 'Disclaimer'];

  return (
    <header>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full flex justify-between items-center bg-black px-4 py-4 text-white shadow-md h-20 z-50"
      >
        {/* Logo */}
        <motion.div
          className="flex items-center ml-10 cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 100 }}
          onClick={() => handleNavClick('About Us')}
        >
          <img src="/logo.png" alt="Logo" className="h-10 rounded-sm " />
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-8 text-base font-medium text-white">
          {navLinks.map((link, index) => (
            <motion.li
              key={link}
              onClick={() => handleNavClick(link)}
              className="hover:text-[#F7931E] cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              {link}
            </motion.li>
          ))}
        </ul>

        {/* Join Button */}
        <motion.div
          className="hidden lg:flex"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9 }}
        >
          <button className="bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
            Join Waitlist
          </button>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white hover:text-[#F7931E]">
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 right-4 bg-[#0C1A30] text-white p-5 rounded-lg shadow-lg space-y-4 w-48"
          >
            {[...navLinks, 'Join Waitlist'].map((link, index) => (
              <motion.div
                key={link}
                className="cursor-pointer hover:text-[#F7931E]"
                onClick={() => handleNavClick(link)}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
              >
                {link}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}

