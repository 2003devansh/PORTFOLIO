import { motion } from "framer-motion";

const skills = [
  {
    category: "UI/UX",
    items: ["HTML", "CSS", "React/Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "Docker", "Postman", "Vite"],
  },
  {
    category: "Programming Languages",
    items: ["C", "Java", "JavaScript", "Python", "Linux"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 px-6 bg-gradient-to-br from-black via-[#0a0a0a] to-[#111] text-white scroll-mt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold text-red-500 text-center mb-16"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#1a1a1a] border border-red-500/30 rounded-2xl p-6 shadow-md hover:shadow-red-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          >
            <h3 className="text-2xl font-bold text-red-400 mb-4 tracking-wide underline underline-offset-4 decoration-red-600">
              {skill.category}
            </h3>
            <ul className="space-y-2 text-gray-300 text-lg">
              {skill.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white transition duration-200 tracking-wide"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
