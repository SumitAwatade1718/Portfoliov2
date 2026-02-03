import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "👨‍🏫 Student Management System",
    desc: "Developed a full-stack web application for efficient student data management. Implemented features for student registration, course enrollment, grade tracking, and administrative functions. Utilized React for a dynamic and responsive frontend, Node.js for a robust backend API, and MongoDB for flexible data storage. Designed an intuitive user interface to streamline academic operations for both students and faculty.",
    ss: "/student.png", // Assuming you'll add an image for this
    tech: ["React", "Node.js", "MongoDB"],
    live: "#",
    code: "#",
  },
  {
    title: "📧 Bulk Email Service Provider",
    desc: "A Web application for sending bulk emails to many recipients quickly. Supports creating email content, managing contact lists, and keeping logs of sent emails. Useful for marketing, announcements, and notifications. Designing a user-friendly GUI for smooth and engaging user experiences.",
    ss: "/email.png", // Assuming you'll add an image for this
    tech: ["PHP", "MySQL", "SMTP", "PHP Mailer", "HTML", "CSS", "JavaScript"],
    live: "#",
    code: "#",
  },
  {
    title: "❤️ SmartHealth Monitoring System",
    desc: "Developed a full-stack AI/ML-based platform to predict and prevent water-borne disease outbreaks. Built RESTful APIs using Fast-API and SQL health report management, and alert generation. Implemented Random Forest–based disease prediction engine to classify outbreak risk levels with probability scores. Designed interactive dashboards using React.Js for real-time visualization of outbreak trends and hotspots.",
    ss: "/health.png", // Assuming you'll add an image for this
    tech: ["Python", "Fast-API", "React.Js", "SQL", "Machine Learning"],
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title Animation */}
        <motion.h2
                  initial={{ x: -200, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="projects-title"
                >
          🚀My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          A collection of my major works — blending research, and innovation.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              <motion.div
                className="project-image-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img src={p.ss} alt={p.title} className="project-image" />
              </motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
