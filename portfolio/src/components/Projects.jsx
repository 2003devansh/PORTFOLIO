import { motion } from "framer-motion";
import { Github } from "lucide-react"; // Lucide icon for GitHub (assuming shadcn/ui is installed)

const projects = [
  {
    title: "Multiplayer Chess",
    description: "A real-time chess platform enabling multiplayer matches with socket-based communication.",
    tech: ["React", "Socket.io", "Node.js"],
    github: "https://github.com/2003devansh/chess",
  },
  {
    title: "CodeZen",
    description: "An AI-powered code assistant built to enhance developer productivity with live suggestions.",
    tech: ["React", "Express", "Google Gemini"],
    github: "https://github.com/2003devansh/CodeZen",
  },
  {
    title: "Portfolio Website",
    description: "A visually rich, animated portfolio blending aesthetics of calm rain and Fight Club.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/2003devansh/PORTFOLIO",
  },
  {
    title: "Memories",
    description: "A post-sharing web app with user authentication and CRUD functionality.",
    tech: ["MERN", "JWT", "Redux"],
    github: "https://github.com/2003devansh/https---github.com-2003devansh-Resume_project",
  },
  {
    title: "Commuto",
    description: "A feature-rich Uber-like platform for ride-sharing built using MERN stack.",
    tech: ["React", "Node.js", "MongoDB", "Google Maps API"],
    github: "https://github.com/2003devansh/COMMUTO",
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-[#0a0a0a] text-white scroll-mt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-red-500 text-center mb-16"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-red-600/50 transition-shadow"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-bold text-red-400 mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 text-lg">{project.description}</p>
            <ul className="flex flex-wrap gap-3 mb-4">
              {project.tech.map((tech, i) => (
                <li
                  key={i}
                  className="bg-red-600/10 text-red-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-red-400 transition-colors"
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
