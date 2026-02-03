import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Certificates.css";

const CERTS = {
  tech: [
    { title: "NPTEL Java", org: "NPTEL", date: "2024", img: "/certs/Nptel-Programming in java.jpg", description: "Completed a comprehensive NPTEL course in Java programming, enhancing skills in object-oriented programming, data structures, and algorithms. This certification validates a strong foundation in Java development." },
    { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", org: "Oracle", date: "2025", img: "/certs/Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate.png", description: "Achieved Oracle Cloud Infrastructure (OCI) AI Foundations Associate certification, demonstrating foundational knowledge in AI services on OCI. This includes understanding machine learning concepts, AI services, and their application within the Oracle Cloud environment." },
    { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", org: "Oracle", date: "2025", img: "/certs/Oracle Cloud Infrastructure 2025 Certified Foundations Associate.png", description: "Obtained Oracle Cloud Infrastructure (OCI) Foundations Associate certification, proving a solid understanding of core OCI services. This covers networking, compute, storage, and identity and access management, essential for cloud deployments." },
  ],
  other: [
    { title: "Project Presentation", org: "(Runner-up)", date: "2024", img: "/certs/project presentation.jpg", description: "Awarded runner-up in a competitive project presentation, showcasing strong presentation skills and the ability to articulate complex project ideas effectively. This achievement highlights teamwork and innovative problem-solving." },
    { title: "NSS Camp 2023-2024", org: "NSS", date: "2024", img: "/certs/nss_camp_2023-2024.jpg", description: "Participated actively in the NSS Camp 2023-2024, engaging in community service and social development activities. This experience fostered leadership, teamwork, and a sense of social responsibility." },
    { title: "NSS Camp 2024-2025", org: "NSS", date: "2025", img: "/certs/NSS_Camp_2024-2025.jpg", description: "Continued participation in the NSS Camp 2024-2025, further contributing to community welfare projects and personal development. This reinforces a commitment to social service and collaborative efforts." },
    { title: "NSS", org: "NSS", date: "2024", img: "/certs/nss.jpeg", description: "This is a certificate for best NSS Coordinator of NSS Batch 2023-25." },
    { title: "NSS Police Mitra", org: "NSS", date: "2024", img: "/certs/nss_police_mitra.jpg", description: "Certified as a NSS Police Mitra, contributing to public safety and community policing efforts. This role involved assisting local law enforcement and promoting community harmony through volunteer work." },
    { title: "First Year College Ranker", org: "College", date: "2023", img: "/certs/First_year.jpg", description: "Awarded 1st rank in the first year of college, demonstrating exceptional academic performance and dedication to studies." },
  ],
};

export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certificates" className="cert-section">
      {/* SECTION ENTERS WHEN SCROLLED TO */}
      <motion.div
        className="cert-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }} // triggers closer to when you reach it
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* TITLE */}
        <h2 className="cert-title">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>
        <p className="cert-subtitle">
          Explore my achievements — both technical & beyond.
        </p>

        {/* TABS */}
        <div className="cert-tabs">
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`cert-tab ${tab === t ? "active" : ""}`}
            >
              {t === "tech" ? "Technical" : "Other"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="certs-grid">
          {CERTS[tab].map((c, i) => (
            <motion.div
              key={c.title}
              className="cert-card"
              style={{ ["--angle"]: `${Math.random() * 8 - 4}deg` }}
              initial={{ opacity: 0, y: 40, rotate: -4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }} // each card animates when it comes in view
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              onClick={() => setSelectedCert(c)}
            >
              <img src={c.img} alt={c.title} className="cert-img" />
              <strong>{c.title}</strong>
              <span className="cert-meta">
                {c.org} • {c.date}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* MODAL PREVIEW */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
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