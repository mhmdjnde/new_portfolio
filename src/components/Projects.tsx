"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { PROJECTS } from "@/lib/data";

const colorMap = {
  blue: { accent: "#0078D4", bg: "#EEF6FC", border: "rgba(0,120,212,0.18)", text: "#0078D4" },
  purple: { accent: "#742774", bg: "#F5EAF5", border: "rgba(116,39,116,0.18)", text: "#8B3489" },
  cyan: { accent: "#0099BC", bg: "#EAF7FB", border: "rgba(0,153,188,0.18)", text: "#0099BC" },
};

// ─── Featured card for Selected Projects ──────────────────────
function FeaturedCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const colors = colorMap[project.color as keyof typeof colorMap] ?? colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex rounded-2xl overflow-hidden group"
      style={{
        background: "var(--surface-1)",
        border: `1px solid ${hovered ? colors.border : "var(--border-mid)"}`,
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "border-color 0.25s, box-shadow 0.25s",
        minHeight: 220,
      }}
    >
      {/* Left accent stripe */}
      <div
        className="w-1 flex-shrink-0 transition-all duration-300"
        style={{ background: hovered ? colors.accent : `${colors.accent}60` }}
      />

      <div className="flex-1 p-7">
        {/* Meta row */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className="text-[11px] font-semibold tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)", color: colors.text }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[var(--border-mid)]">·</span>
              <span className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                {project.subtitle}
              </span>
            </div>
            <h3
              className="text-xl font-bold text-[var(--text-primary)] leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
          </div>

          {/* GitHub link */}
          <div className="flex gap-2 flex-shrink-0 ml-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <GithubIcon size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
          {project.description}
        </p>

        {/* Impact row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-5">
          {project.impact.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <CheckCircle2 size={11} style={{ color: colors.text, flexShrink: 0 }} />
              <span className="text-[12.5px] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2.5 py-1 rounded-lg"
              style={{ fontFamily: "var(--font-mono)", background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Compact card for All Projects grid ───────────────────────
function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const colors = colorMap[project.color as keyof typeof colorMap] ?? colorMap.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-xl overflow-hidden group"
      style={{
        background: "var(--surface-1)",
        border: `1px solid ${hovered ? colors.border : "var(--border-subtle)"}`,
        boxShadow: hovered ? "0 4px 16px rgba(0,0,0,0.08)" : "0 1px 3px rgba(0,0,0,0.04)",
        transition: "border-color 0.22s, box-shadow 0.22s",
      }}
    >
      <div className="h-0.5 w-full" style={{ background: colors.accent }} />
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <div className="text-[11px] text-[var(--text-muted)] mb-1" style={{ fontFamily: "var(--font-mono)" }}>
              {project.subtitle}
            </div>
            <h3 className="text-base font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
              {project.title}
            </h3>
          </div>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center rounded-lg bg-[var(--surface-2)] hover:bg-[var(--surface-3)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all flex-shrink-0"
            >
              <GithubIcon size={13} />
            </a>
          )}
        </div>

        <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[9.5px] px-2 py-0.5 rounded-md"
              style={{ fontFamily: "var(--font-mono)", background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main section ─────────────────────────────────────────────
const SELECTED_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const selected = PROJECTS.slice(0, SELECTED_COUNT);
  const remaining = PROJECTS.slice(SELECTED_COUNT);
  const displayedRemaining = showAll ? remaining : remaining.slice(0, 3);

  return (
    <section id="projects" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <span className="tag tag-cyan mb-5 inline-block">Work</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Projects &amp;
            <span className="text-gradient-blue"> Work</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Enterprise automation at CMA CGM alongside systems, mobile, and open-source projects from 42 Beirut.
          </p>
        </motion.div>

        {/* ── SELECTED PROJECTS ──────────────────────────── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span
              className="text-[11px] font-bold tracking-widest uppercase text-[var(--power-blue)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Selected Projects
            </span>
            <div className="h-px flex-1 bg-[var(--border-mid)] max-w-[48px]" />
            <span className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
              Curated
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {selected.map((project, i) => (
              <FeaturedCard key={project.title} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* ── ALL PROJECTS ───────────────────────────────── */}
        {remaining.length > 0 && (
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="text-[11px] font-bold tracking-widest uppercase text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                All Projects
              </span>
              <div className="h-px flex-1 bg-[var(--border-subtle)] max-w-[48px]" />
              <a
                href="https://github.com/mhmdjnde"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] text-[var(--text-muted)] hover:text-[var(--power-blue)] transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                <GithubIcon size={11} />
                mhmdjnde
                <ArrowUpRight size={10} />
              </a>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AnimatePresence>
                {displayedRemaining.map((project, i) => (
                  <ProjectCard key={project.title} project={project} index={i} />
                ))}
              </AnimatePresence>
            </div>

            {remaining.length > 3 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center mt-6"
              >
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="btn-ghost flex items-center gap-2"
                >
                  {showAll ? "Show less" : `Show ${remaining.length - 3} more`}
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${showAll ? "rotate-90" : ""}`}
                  />
                </button>
              </motion.div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
