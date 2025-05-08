import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A futuristic React dashboard with animations.",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/v12345/project1.jpg",
    link: "#",
  },
  {
    title: "Project 2",
    description: "An AI-powered portfolio website.",
    image: "https://res.cloudinary.com/your-cloud-name/image/upload/v12345/project2.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="bg-dark/50 rounded-lg overflow-hidden border border-primary/20 hover:border-primary/50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-primary hover:underline">
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}