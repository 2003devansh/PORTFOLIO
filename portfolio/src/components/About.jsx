import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: false, threshold: 0.3 });

  const [text, setText] = useState("_");
  const fullText = "I build UI/UX and backend solutions.";

  useEffect(() => {
    if (!isInView) return; // Don't do anything if not in view

    setText("_"); // Reset text when it comes into view
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => fullText.substring(0, index) + "_");
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [isInView]); // Re-run effect when `isInView` changes

  return (
    <section
      ref={ref}
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-black text-white px-10"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1 }}
        className="w-72 h-72 rounded-full overflow-hidden border-4 border-red-500 shadow-lg mb-8 lg:mb-0"
      >
        <img
          src="/src/assets/WhatsApp Image 2025-04-03 at 10.13.32_b2966cc2.jpg"
          alt="Devansh Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Text Content */}
      <div className="lg:ml-12 max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-red-500"
        >
          Hey, I'm Devansh.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 text-2xl text-gray-300 leading-relaxed"
        >
          I specialize in crafting <span className="font-bold">modern digital experiences</span> that merge 
          <span className="font-bold"> design and technology</span> seamlessly.  
          From <span className="font-bold">intuitive UI/UX</span> that captivates users to 
          <span className="font-bold"> powerful backend systems</span> that drive functionality,  
          I bring ideas to life with <span className="font-bold">precision and purpose</span>.
        </motion.p>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
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
