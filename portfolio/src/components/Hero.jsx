import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, setText] = useState("_");
  const fullText = "I build digital experiences.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index) + "_");
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">
      <div className="relative z-10 flex flex-col items-start max-w-2xl">
        <motion.h1
          className="text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-red-500">You are not your job.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg text-gray-300"
        >
          But if I were, I'd be a{" "}
          <span className="font-bold text-white">Full-Stack Developer</span>{" "}
          building{" "}
          <span className="font-bold text-red-400">
            seamless, high-impact digital experiences.
          </span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-2 text-xl font-semibold text-gray-100 border-l-4 border-red-500 pl-4"
        >
          {text}
        </motion.p>

        <a href="#projects">
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="mt-6 px-6 py-2 bg-red-500 text-white font-bold rounded-lg shadow-lg hover:bg-red-600 transition-all duration-300 ease-in-out"
          >
            See My Work
          </motion.button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
