"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "./components/ContactForm";
import Projects from "./components/Projects";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-white dark:from-dark dark:to-gray-900">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <img
                src="https://placehold.co/400x400/007AFF/FFFFFF/png?text=W"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Walker!</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            A passionate web developer crafting digital experiences
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDownIcon className="h-8 w-8 mx-auto text-primary" />
          </motion.div>
          <div className="flex justify-center gap-6 mt-6">
            <a
              href="https://github.com/WalkerRyan1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/walker-ryan-794b901ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-primary transition-colors"
            >
              <svg
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900">
        <motion.div
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 className="heading text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-secondary mb-6">
              I'm a web developer that is all about creating beautiful,
              functional, and user-friendly websites. With a strong foundation
              in modern web technologies, I strive to build applications that
              make a difference.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-light dark:bg-dark">
        <motion.div
          ref={skillsRef}
          initial="hidden"
          animate={skillsInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 className="heading text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <CodeBracketIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-secondary">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <CommandLineIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-secondary">
                Node.js, Express, MongoDB, PostgreSQL
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              <DevicePhoneMobileIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Tools</h3>
              <p className="text-secondary">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-gray-900">
        <motion.div
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 className="heading text-center">Projects</h2>
          <Projects />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light dark:bg-dark">
        <motion.div
          ref={contactRef}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="container"
        >
          <h2 className="heading text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-secondary mb-8">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <ContactForm />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
