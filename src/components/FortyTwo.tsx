"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Network, Box, Layers, CheckCircle2 } from "lucide-react";
import { FORTY_TWO_PROJECTS } from "@/lib/data";
import { GithubIcon } from "@/components/ui/SocialIcons";

const categoryConfig = {
  Core: { icon: Box, color: "#0078D4" },
  Systems: { icon: Cpu, color: "#742774" },
  Algorithms: { icon: Code2, color: "#0099BC" },
  Graphics: { icon: Layers, color: "#CA3CCA" },
  Concurrency: { icon: Cpu, color: "#038387" },
  OOP: { icon: Code2, color: "#C4960E" },
  Network: { icon: Network, color: "#0078D4" },
};

const CATEGORIES = ["All", ...Object.keys(categoryConfig)];

export default function FortyTwo() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? FORTY_TWO_PROJECTS : FORTY_TWO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="forty-two" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="tag tag-purple mb-5 inline-block">42 Beirut</span>
            <h2
              className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Original Curriculum
              <span className="text-gradient-purple block">Completed 2025</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-[17px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
              42 Beirut trains through radical peer learning — no teachers, no lectures, only project-based challenges.
              I completed the <strong>original curriculum track</strong> in July 2025 (not the 2026 restructured version).
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {[
              { value: "Jun 2024", label: "Joined", color: "#0078D4" },
              { value: "Jul 2025", label: "Graduated", color: "#742774" },
              { value: `${FORTY_TWO_PROJECTS.length}+`, label: "Projects", color: "#0099BC" },
            ].map((s) => (
              <div key={s.label} className="card-elevated rounded-xl p-5 text-center">
                <div className="text-xl font-extrabold mb-1.5 leading-tight" style={{ fontFamily: "var(--font-display)", color: s.color }}>
                  {s.value}
                </div>
                <div className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Curriculum skills banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl p-5 mb-10"
          style={{ background: "linear-gradient(135deg, var(--automate-purple-light), var(--power-blue-light))", border: "1px solid rgba(116,39,116,0.12)" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Low-level C Programming", icon: Code2 },
              { label: "Unix Systems & Processes", icon: Cpu },
              { label: "Network Protocols (IRC)", icon: Network },
              { label: "Peer Code Review", icon: CheckCircle2 },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2.5">
                <item.icon size={13} className="text-[var(--automate-purple-bright)] flex-shrink-0" />
                <span className="text-[14px] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="tag transition-all cursor-pointer"
              style={{
                fontFamily: "var(--font-mono)",
                background: activeCategory === cat ? "var(--automate-purple-light)" : "var(--surface-1)",
                border: `1px solid ${activeCategory === cat ? "rgba(116,39,116,0.28)" : "var(--border-mid)"}`,
                color: activeCategory === cat ? "var(--automate-purple-bright)" : "var(--text-muted)",
                padding: "6px 14px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const catCfg = categoryConfig[project.category as keyof typeof categoryConfig];
              const CatIcon = catCfg?.icon ?? Code2;
              const color = catCfg?.color ?? "#0078D4";

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="card-elevated rounded-xl p-5 group hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: color }}>
                      <CatIcon size={15} className="text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 flex items-center justify-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] transition-colors text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                        >
                          <GithubIcon size={13} />
                        </a>
                      )}
                      <span
                        className="text-[9px] px-2.5 py-1 rounded-lg"
                        style={{ fontFamily: "var(--font-mono)", background: `${color}12`, border: `1px solid ${color}18`, color }}
                      >
                        {project.lang}
                      </span>
                    </div>
                  </div>

                  <h3
                    className="font-bold text-[var(--text-primary)] mb-2"
                    style={{ fontFamily: "var(--font-display)", fontSize: "15px" }}
                  >
                    {project.name}
                  </h3>
                  <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {project.description}
                  </p>

                  <div className="mt-3.5 flex items-center gap-1.5">
                    <CheckCircle2 size={10} style={{ color }} />
                    <span className="text-[10px]" style={{ fontFamily: "var(--font-mono)", color: `${color}99` }}>{project.category}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] text-[var(--text-muted)] mt-8"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          42 Beirut · Original curriculum track · Not the 2026 restructured curriculum
        </motion.p>
      </div>
    </section>
  );
}
