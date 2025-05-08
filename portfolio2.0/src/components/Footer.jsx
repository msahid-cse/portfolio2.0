import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://github.com/yourusername" className="text-white hover:text-primary transition-colors">
            <FiGithub className="text-xl" />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-white hover:text-primary transition-colors">
            <FiLinkedin className="text-xl" />
          </a>
          <a href="https://twitter.com/yourusername" className="text-white hover:text-primary transition-colors">
            <FiTwitter className="text-xl" />
          </a>
        </div>
        <p className="text-sm text-white/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}