import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold mb-4 glow"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Your Name</span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          A <span className="text-primary">Frontend Developer</span> crafting futuristic web experiences.
        </motion.p>
        <motion.a
          href="#contact"
          className="inline-block px-8 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-white transition-all"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          Get In Touch
        </motion.a>
      </div>
    </section>
  );
}