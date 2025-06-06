import {
  ArrowDownIcon,
  CodeBracketIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-light to-white dark:from-dark dark:to-gray-900">
        <div className="text-center">
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
              <img
                src="https://placehold.co/400x400/007AFF/FFFFFF/png?text=W"
                alt="Profile"
                className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Walker!</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary mb-8">
            A passionate web developer crafting digital experiences
          </p>
          <div>
            <ArrowDownIcon className="h-8 w-8 mx-auto text-primary" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-gray-900">
        <div className="container">
          <h2 className="heading text-center">About Me</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-secondary mb-6">
              I'm a web developer that is all about creating beautiful,
              functional, and user-friendly websites. With a strong foundation
              in modern web technologies, I strive to build applications that
              make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-light dark:bg-dark">
        <div className="container">
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
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-gray-900">
        <div className="container">
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
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section bg-light dark:bg-dark">
        <div className="container">
          <h2 className="heading text-center">Get In Touch</h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg text-secondary mb-8">
              I'm always open to new opportunities and collaborations. Feel free
              to reach out!
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
