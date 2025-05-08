import { motion } from "framer-motion";
import { FaReact, FaJs, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiFigma } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-4xl text-primary" /> },
  { name: "JavaScript", icon: <FaJs className="text-4xl text-yellow-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-500" /> },
  { name: "Figma", icon: <SiFigma className="text-4xl text-purple-500" /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Experience
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center p-6 bg-dark/50 rounded-lg border border-primary/20 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {skill.icon}
              <p className="mt-4">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}