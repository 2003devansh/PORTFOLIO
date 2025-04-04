import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [text, setText] = useState("_");
  const [hasAnimated, setHasAnimated] = useState(false);
  const fullText = "I build UI/UX and backend solutions.";

  const startTyping = () => {
    if (hasAnimated) return;

    setHasAnimated(true);
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index) + "_");
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
  };

  return (
    <motion.section
      id="about"
      className="relative flex flex-col lg:flex-row items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-10 py-20 scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      onViewportEnter={startTyping}
    >
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:ml-12 max-w-3xl"
      >
        <h2 className="text-5xl font-extrabold text-red-500 mb-4">
          Hey, I'm Devansh.
        </h2>

        <p className="text-2xl text-gray-300 leading-relaxed">
          I specialize in crafting <strong>modern digital experiences</strong> that merge{" "}
          <strong>design and technology</strong> seamlessly. From <strong>intuitive UI/UX</strong> to{" "}
          <strong>powerful backend systems</strong>, I bring ideas to life with precision and purpose.
        </p>

        {/* Typing Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-6 text-2xl font-semibold text-gray-100 border-l-4 border-red-500 pl-4"
        >
          {text}
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
