"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Lock } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { PROJECTS } from "@/lib/data";

const colorMap = {
  blue:   { accent: "#47A4FF", bg: "rgba(71,164,255,0.08)",   border: "rgba(71,164,255,0.18)",  text: "#8FD5FF" },
  purple: { accent: "#9A97FF", bg: "rgba(126,124,255,0.08)",  border: "rgba(126,124,255,0.18)", text: "#C8C5FF" },
  cyan:   { accent: "#43D6C9", bg: "rgba(67,214,201,0.08)",   border: "rgba(67,214,201,0.18)",  text: "#8DF1E8" },
};

const SELECTED_COUNT = 3;

function FeaturedCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  const colors = colorMap[project.color as keyof typeof colorMap] ?? colorMap.blue;
  const num = String(index + 1).padStart(2, "0");
  const isConfidential = index === 0;

  const scopeItems = [
    { label: "Projects shipped", value: "5+" },
    { label: "Departments", value: "Multi" },
    { label: "Criticality", value: "High" },
    { label: "Disclosure", value: "Restricted" },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[2rem]"
      style={{
        background: "linear-gradient(155deg, rgba(11,21,36,0.98), rgba(5,11,22,0.99))",
        border: `1px solid ${colors.accent}22`,
      }}
    >
      {/* Top gradient line */}
      <div
        className="absolute inset-x-0 top-0 h-[1.5px]"
        style={{ background: `linear-gradient(90deg, ${colors.accent}, ${colors.accent}50, transparent)` }}
      />
      {/* Left edge accent */}
      <div
        className="absolute left-0 top-6 bottom-6 w-[2.5px] rounded-full"
        style={{ background: `linear-gradient(180deg, ${colors.accent}90, transparent)` }}
      />
      {/* Corner ambient glow */}
      <div
        className="absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl opacity-[0.07] transition-opacity duration-700 group-hover:opacity-[0.13]"
        style={{ background: colors.accent }}
      />

      <div className="relative" style={{ padding: "0.51rem" }}>
        {/* Eyebrow row */}
        <div className="mb-7 flex items-center gap-4">
          <span
            className="text-[2.8rem] font-extrabold leading-none"
            style={{ fontFamily: "var(--font-display)", color: colors.accent, opacity: 0.14 }}
          >
            {num}
          </span>
          <div className="h-px flex-1 opacity-20" style={{ background: colors.accent }} />
          <span
            className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {project.subtitle}
          </span>
          {isConfidential && (
            <span
              className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.12em]"
              style={{
                fontFamily: "var(--font-mono)",
                background: "rgba(255,110,100,0.1)",
                border: "1px solid rgba(255,120,110,0.28)",
                color: "rgba(255,155,145,0.95)",
              }}
            >
              <Lock size={8} />
              NDA
            </span>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-mid)] bg-[rgba(255,255,255,0.03)] text-[var(--text-muted)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]"
            >
              <GithubIcon size={14} />
            </a>
          )}
        </div>

        {/* Body grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          {/* Left: title + description + tags */}
          <div className="flex flex-col gap-5">
            <h3
              className="text-[1.7rem] font-extrabold leading-tight text-[var(--text-primary)] md:text-[1.9rem]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {project.title}
            </h3>
            <p
              className="text-[15.5px] leading-[1.85] text-[var(--text-secondary)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {project.description}
            </p>
            <div className="mt-auto flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3.5 py-1.5 text-[11px]"
                  style={{
                    fontFamily: "var(--font-mono)",
                    background: colors.bg,
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right: scope / impact panel */}
          <div
            className="flex flex-col rounded-[1.4rem] p-5"
            style={{
              background: `${colors.accent}07`,
              border: `1px solid ${colors.accent}1a`,
            }}
          >
            <span
              className="mb-3 block text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {isConfidential ? "Scope" : "Impact"}
            </span>

            {isConfidential ? (
              <div className="flex flex-col gap-0">
                {scopeItems.map((s, i) => (
                  <div
                    key={s.label}
                    className="flex items-center justify-between py-3"
                    style={{
                      borderBottom: i < scopeItems.length - 1 ? `1px solid ${colors.accent}14` : "none",
                    }}
                  >
                    <span
                      className="text-[11.5px] text-[var(--text-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {s.label}
                    </span>
                    <span
                      className="text-[12px] font-bold"
                      style={{ fontFamily: "var(--font-mono)", color: colors.text }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-0">
                {project.impact.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 py-3"
                    style={{
                      borderBottom: i < project.impact.length - 1 ? `1px solid ${colors.accent}14` : "none",
                    }}
                  >
                    <CheckCircle2
                      size={13}
                      style={{ color: colors.text, flexShrink: 0, marginTop: 2 }}
                    />
                    <span
                      className="text-[13px] leading-5 text-[var(--text-secondary)]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const selected = PROJECTS.slice(0, SELECTED_COUNT);

  return (
    <section id="projects" className="relative py-28 md:py-36">
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

        <div className="space-y-7">
          {selected.map((project, index) => (
            <FeaturedCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
