import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter"; // ✅ Correct Import

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-900 text-white px-4">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }} // ✅ Fixed animation typo
        transition={{ duration: 1 }}
      >
        Heyy, I am <span className="text-blue-500">Devansh</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-2xl font-semibold"
      >
        <Typewriter
          words={[
            "Crafting Seamless UI/UX Experiences 🚀",
            "Turning Ideas into Scalable Code 💡",
            "Building Dynamic & Responsive Websites 🌍",
          ]}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1500}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
