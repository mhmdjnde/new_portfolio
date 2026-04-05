"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { PROJECTS } from "@/lib/data";

const colorMap = {
  blue: { accent: "#47A4FF", bg: "rgba(71,164,255,0.1)", border: "rgba(71,164,255,0.22)", text: "#8FD5FF" },
  purple: { accent: "#9A97FF", bg: "rgba(126,124,255,0.1)", border: "rgba(126,124,255,0.22)", text: "#C8C5FF" },
  cyan: { accent: "#43D6C9", bg: "rgba(67,214,201,0.1)", border: "rgba(67,214,201,0.22)", text: "#8DF1E8" },
};

function FeaturedCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const colors = colorMap[project.color as keyof typeof colorMap] ?? colorMap.blue;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-elevated relative overflow-hidden rounded-[2rem] p-7 md:p-8"
    >
      <div
        className="absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl"
        style={{ background: `${colors.accent}18`, transform: "translate(35%, -35%)" }}
      />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-3">
              <span className="tag tag-blue">Featured</span>
              <span className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                {project.subtitle}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] md:text-[2rem]">{project.title}</h3>
          </div>

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-mid)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]"
            >
              <GithubIcon size={16} />
            </a>
          ) : null}
        </div>

        <p className="max-w-2xl text-[15.5px] leading-8 text-[var(--text-secondary)] md:text-[1rem]">{project.description}</p>

        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {project.impact.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={15} style={{ color: colors.text, flexShrink: 0, marginTop: 2 }} />
                <span className="text-sm leading-6 text-[var(--text-secondary)]">{item}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3.5 py-2 text-[11px]"
              style={{ fontFamily: "var(--font-mono)", background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const colors = colorMap[project.color as keyof typeof colorMap] ?? colorMap.blue;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="card relative overflow-hidden rounded-[1.75rem] p-6"
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            {project.subtitle}
          </p>
          <h3 className="mt-3 text-xl font-bold text-[var(--text-primary)]">{project.title}</h3>
        </div>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition-all hover:text-[var(--text-primary)]"
          >
            <GithubIcon size={15} />
          </a>
        ) : null}
      </div>

      <p className="text-[15px] leading-7 text-[var(--text-secondary)]">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1.5 text-[11px]"
            style={{ fontFamily: "var(--font-mono)", background: colors.bg, border: `1px solid ${colors.border}`, color: colors.text }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

const SELECTED_COUNT = 3;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const selected = PROJECTS.slice(0, SELECTED_COUNT);
  const remaining = PROJECTS.slice(SELECTED_COUNT);
  const displayedRemaining = showAll ? remaining : remaining.slice(0, 3);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="dot-bg absolute inset-0 opacity-40" />
      <div className="section-line absolute inset-x-0 top-0" />

      <div className="section-container relative">
        <div className="section-heading">
          <span className="section-eyebrow">Projects</span>
          <h2>
            Selected work with
            <span className="text-gradient-blue"> practical impact</span>
          </h2>
          <p>
            A mix of enterprise automation, systems programming, and product experiments that show how I think through
            workflows, constraints, and execution quality.
          </p>
        </div>

        <div className="space-y-6">
          {selected.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {remaining.length > 0 && (
          <div className="mt-16 md:mt-20">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="section-eyebrow">Archive</p>
                <h3 className="mt-3 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">More builds, experiments, and 42 projects</h3>
              </div>
              <a
                href="https://github.com/mhmdjnde"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border-mid)] px-4 py-2 text-[13px] text-[var(--text-secondary)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                github.com/mhmdjnde
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              <AnimatePresence>
                {displayedRemaining.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </AnimatePresence>
            </div>

            {remaining.length > 3 && (
              <div className="mt-8 flex justify-center">
                <button onClick={() => setShowAll((v) => !v)} className="btn-ghost">
                  {showAll ? "Show less" : `Show ${remaining.length - 3} more`}
                  <ChevronRight size={14} className={`transition-transform ${showAll ? "rotate-90" : ""}`} />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
