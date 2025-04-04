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

const Skills = () => {
  return (
    <section className="py-16 bg-black text-white px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-red-500 text-center mb-10"
      >
        Skills
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-900 p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold text-red-400 mb-4">{skill.category}</h3>
            <ul className="space-y-2 text-gray-300">
              {skill.items.map((item, i) => (
                <li key={i} className="text-lg font-medium">{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
