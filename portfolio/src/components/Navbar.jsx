import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-lg z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Devansh</h1>
        
        <div className="hidden md:flex space-x-6">
          <a href="#hero" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#skills" className="hover:text-gray-400">Skills</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      
      {isOpen && (
        <motion.div 
          className="md:hidden bg-gray-800 text-center p-4 space-y-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a href="#hero" className="block hover:text-gray-400" onClick={toggleMenu}>Home</a>
          <a href="#about" className="block hover:text-gray-400" onClick={toggleMenu}>About</a>
          <a href="#projects" className="block hover:text-gray-400" onClick={toggleMenu}>Projects</a>
          <a href="#skills" className="block hover:text-gray-400" onClick={toggleMenu}>Skills</a>
          <a href="#contact" className="block hover:text-gray-400" onClick={toggleMenu}>Contact</a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
