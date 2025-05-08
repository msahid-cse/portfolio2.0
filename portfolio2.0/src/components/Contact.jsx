import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
      "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
      form.current,
      "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
    )
    .then(() => alert("Message sent successfully!"))
    .catch(() => alert("Failed to send message."));
  };

  return (
    <section id="contact" className="py-20 bg-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center glow"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
            <p className="mb-6">
              Interested in working together? Drop me a message!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-full">
                  <FiMail className="text-primary" />
                </div>
                <span>your.email@example.com</span>
              </div>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full p-3 bg-dark border border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full p-3 bg-dark border border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                className="w-full p-3 bg-dark border border-primary/20 rounded-lg focus:border-primary focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-dark font-bold rounded-lg hover:bg-white transition-all"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}