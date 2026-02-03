import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Training.css";

const TRAINING_CERTS = [
  { title: "Java and SQL", org: "QSpider", date: "2025", img: "/certs/java_sql_qspider.png", description: "Completed intensive training in Java programming and SQL database management at QSpider. This program covered core Java concepts, advanced SQL queries, and database design principles, preparing for enterprise-level application development." },
  { title: "Full Stack Web Development", org: "LeadSoft", date: "2023-2025", img: "/certs/full_stack_leadsoft.png", description: "Completed comprehensive training in Full Stack Web Development at LeadSoft, covering frontend technologies like React and backend development with Node.js . Gained practical experience in building responsive web applications and API integrations." },
  { title: "Data Analyst", org: "Godrej Infotech", date: "2024", img: "/certs/data_analyst_godrej.png", description: "Received training as a Data Analyst at Godrej Infotech, focusing on data collection, cleaning, analysis, and visualization. Developed proficiency in tools and techniques for extracting insights from complex datasets and supporting business decision-making." },
];

export default function Training() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="training" className="training-section">
      <motion.div
        className="training-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <h2 className="training-title">
          <span className="bg-gradient-to-r from-blue-400 to-purpl
          -500 bg-clip-text text-transparent">
            Training
          </span>
        </h2>
        <p className="training-subtitle">
          My professional development and hands-on learning experiences.
        </p>

        <div className="training-grid">
          {TRAINING_CERTS.map((c, i) => (
            <motion.div
              key={c.title}
              className="training-card"
              style={{ ["--angle"]: `${Math.random() * 8 - 4}deg` }}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedCert(c)}
            >
              <img src={c.img} alt={c.title} className="training-img" />
              <strong>{c.title}</strong>
              <span className="training-meta">
                {c.org} • {c.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="training-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.img
              className="modal-img"
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />
            {selectedCert.description && (
              <motion.p
                className="modal-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedCert.description}
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}