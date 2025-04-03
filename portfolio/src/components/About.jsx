import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [text, setText] = useState("_");
  const fullText = "I build UI/UX and backend solutions.";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => fullText.substring(0, index) + "_");
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-10">
      
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-72 h-72 rounded-full overflow-hidden border-4 border-red-500 shadow-lg mb-8 lg:mb-0"
      >
        <img
          src="\src\assets\WhatsApp Image 2025-04-03 at 10.13.32_b2966cc2.jpg" // Replace with your actual image path
          alt="Devansh Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <div className="lg:ml-12 max-w-3xl">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }} 
          className="text-5xl font-extrabold text-red-500"
        >
          Hey, I'm Devansh.
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }} 
          className="mt-6 text-2xl text-gray-300 leading-relaxed"
        >
          I specialize in crafting **modern digital experiences** that merge **design and technology** seamlessly.  
          From **intuitive UI/UX** that captivates users to **powerful backend systems** that drive functionality,  
          I bring ideas to life with **precision and purpose**.
        </motion.p>

        {/* Typing Effect */}
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1, delay: 1 }} 
          className="mt-4 text-2xl font-semibold text-gray-100 border-l-4 border-red-500 pl-4"
        >
          {text}
        </motion.p>
      </div>

    </section>
  );
};

export default About;
