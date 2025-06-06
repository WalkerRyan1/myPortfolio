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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Project 1</h3>
                <p className="text-secondary mb-4">
                  Description of your amazing project goes here.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Node.js
                  </span>
                </div>
              </div>
            </div>
          </div>
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
