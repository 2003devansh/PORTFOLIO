import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["Hero", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-white text-xl font-bold">Devansh</div>

        <ul className="hidden md:flex gap-12 text-lg text-gray-300">
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              className="relative cursor-pointer uppercase"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <motion.a
                href={`#${item.toLowerCase()}`}
                className="relative"
                animate={
                  hovered === index
                    ? {
                        scale: 1.1,
                        textShadow: "0px 0px 8px rgba(255, 0, 0, 0.8)",
                      }
                    : { scale: 1 }
                }
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item}
              </motion.a>
              <motion.div
                className="absolute left-0 bottom-[-4px] h-[2px] bg-red-600"
                initial={{ width: 0 }}
                animate={hovered === index ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.li>
          ))}
        </ul>

        <div className="md:hidden text-gray-200">
          {menuOpen ? (
            <X size={28} onClick={() => setMenuOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setMenuOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {menuOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 text-gray-200 bg-black"
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="uppercase text-lg hover:text-red-400"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
