import { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiX, FiMaximize2 } from "react-icons/fi";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "D.A.V.I.D.",
      description:
        "An intelligent virtual assistant and information retrieval platform designed to provide conversational answers and useful information through AI.",
      image: "/projects/david.png",
      technologies: ["React", "JavaScript", "AI", "Gemini API"],
      live: "https://david-omi.vercel.app/",
      github: "https://github.com/OshioneOmiogbemi/clone1",
    },

    {
      title: "Advice Generator",
      description:
        "A responsive web application that generates personalized advice and motivational guidance based on user input, built with a clean and interactive interface.",
      image: "/projects/advice.png",
      technologies: ["React", "JavaScript", "CSS" , "API"],
      live: "https://adviceapp-gamma.vercel.app/",
      github: "https://github.com/OshioneOmiogbemi/adviceapp",
    },

    {
      title: "Portfolio Website",
      description:
        "A modern, responsive developer portfolio designed to showcase my projects, technical skills, experience and software engineering journey through an interactive digital experience",
      image: "/projects/portfolio.png",
      technologies: ["TailwindCSS", "JavaScript", "Framer Motion", "React"],
      live: "https://portfolio-davidomi.vercel.app/",
      github: "https://github.com/OshioneOmiogbemi/portfolio",
    },
  ];

  return (
    <>
      <section id="projects" className="projects-section">
        <div className="projects-glow projects-glow-one"></div>
        <div className="projects-glow projects-glow-two"></div>

        <div className="projects-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="projects-heading"
          >
            <p className="projects-label">What I've built</p>

            <h2 className="orbitron">
              Projects
            </h2>

            <div className="projects-line"></div>

            <p className="projects-intro">
              A collection of projects I've built while exploring
              software development, artificial intelligence and
              modern web technologies.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="project-card"
              >
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-image-overlay">
                    <button
                      onClick={() => setSelectedImage(project.image)}
                      className="project-preview-button"
                    >
                      <FiMaximize2 size={16} />
                      Preview
                    </button>
                  </div>
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-live-button"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="project-github-button"
                    >
                      <FiGithub size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="project-modal"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="project-modal-close"
            onClick={() => setSelectedImage(null)}
          >
            <FiX size={25} />
          </button>

          <img
            src={selectedImage}
            alt="Project Preview"
            className="project-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export default Projects;