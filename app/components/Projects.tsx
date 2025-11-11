"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  video?: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "Space Dodge Game",
    description:
      "A simple space dodge game built with Python3. The player controls a spaceship and must dodge flying obstacles.",
    technologies: ["Python3", "Pygames"],

    image: "/portfolio-preview.png",
    video: "/videos/space.mp4",
    githubUrl: "https://github.com/WalkerRyan1/Space_Dodge.git",
  },
  {
    title: "Task Manager App",
    description:
      "A task management application that allows users to create, edit, and delete tasks. Built with React and Node.js.",
    technologies: ["React", "Expo", "TypeScript"],
    image: "/videos/images/taskManager.png",
    video: "/videos/taskManager.mp4",
    githubUrl: "https://github.com/WalkerRyan1/ProductivityApp.git",
  },
  {
    title: "Spotify Clone",
    description:
      "A Spotify clone application that accesses the Spotify API to display music information.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    image: "/videos/images/spotify.png",
    video: "/videos/spotifyclone.mp4",
    githubUrl: "https://github.com/WalkerRyan1/SpotifyClone.git",
  },
];

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState<string | null>(null);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  // Refs to the inline videos so we can pause them when opening the modal
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const openModal = (index: number, src?: string) => {
    if (!src) return;
    // pause any playing inline videos
    videoRefs.current.forEach((v) => v && v.pause());
    setModalIndex(index);
    setModalSrc(src);
    setModalOpen(true);
    // let the modal mount, then play from start
    setTimeout(() => {
      if (!modalVideoRef.current) return;
      try {
        modalVideoRef.current.currentTime = 0;
        void modalVideoRef.current.play();
      } catch (e) {
        // ignore play errors (autoplay policies)
      }
    }, 50);
  };

  const closeModal = () => {
    try {
      modalVideoRef.current?.pause();
    } catch (e) {}
    setModalOpen(false);
    setModalSrc(null);
    setModalIndex(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-light dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
        >
          <div className="relative aspect-video">
            {project.video ? (
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                className="w-full h-full object-cover cursor-pointer"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={project.image}
                onClick={() => openModal(index, project.video)}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-secondary mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <span>GitHub</span>
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Modal: magnified video */}
      {modalOpen && modalSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={closeModal}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close video"
              className="absolute top-2 right-2 z-50 rounded bg-black/50 text-white px-3 py-1"
            >
              Close
            </button>

            <video
              ref={modalVideoRef}
              src={modalSrc}
              controls
              autoPlay
              className="max-w-[90vw] max-h-[90vh] rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
}
