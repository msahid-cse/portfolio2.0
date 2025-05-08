import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://res.cloudinary.com/your-cloud-name/image/upload/v12345/your-profile-pic.jpg" 
              alt="Profile" 
              className="rounded-lg border-2 border-primary/30 shadow-lg shadow-primary/20"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg mb-4">
              I'm a passionate developer with expertise in <span className="text-primary">React, Tailwind CSS, and modern web technologies</span>.
            </p>
            <p className="text-lg mb-6">
              My goal is to build immersive, high-performance web applications with cutting-edge design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="px-6 py-2 border border-primary rounded-lg hover:bg-primary/10 transition-all">
                Download Resume
              </a>
              <a href="#projects" className="px-6 py-2 bg-primary text-dark rounded-lg hover:bg-white transition-all">
                See Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}