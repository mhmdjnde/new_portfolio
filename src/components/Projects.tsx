"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/data";

/* ── Which projects to show, in order ── */
const FEATURED = ["Power Platform @ CMA CGM", "ft_transcendence", "MiniShell"];

/* ── Per-project accent config ── */
const ACCENT: Record<string, { color: string; glow: string; num: string }> = {
  "Power Platform @ CMA CGM": { color: "#8B2FC9", glow: "rgba(139,47,201,0.08)", num: "01" },
  "ft_transcendence":          { color: "#00E5FF", glow: "rgba(0,229,255,0.07)",   num: "02" },
  "MiniShell":                 { color: "#FFB020", glow: "rgba(255,176,32,0.08)",  num: "03" },
};

const TAG_CLS: Record<string, string> = {
  "Power Apps":     "ac-badge ac-badge-p",
  "Power Automate": "ac-badge ac-badge-b",
  "Dataverse":      "ac-badge ac-badge-t",
  "SharePoint":     "ac-badge ac-badge-g",
  "TypeScript":     "ac-badge ac-badge-b",
  "C":              "ac-badge ac-badge-gy",
  "Unix":           "ac-badge ac-badge-gy",
  "Shell":          "ac-badge ac-badge-gy",
  "42 Project":     "ac-badge ac-badge-vi",
};

function ProjectChapter({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const ac = ACCENT[project.title] ?? { color: "#8B2FC9", glow: "rgba(139,47,201,0.08)", num: `0${index + 1}` };
  const isNDA = !project.github;
  const isFirst = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.14, ease: [0.16, 1, 0.3, 1] }}
      className="proj-chapter"
      style={{
        position: "relative",
        padding: isFirst ? "0 0 52px" : "52px 0",
        borderBottom: "1px solid var(--border)",
        overflow: "hidden",
      }}
    >
      {/* Hover background fill — opacity controlled by CSS */}
      <div className="proj-bg-fill" style={{ background: ac.glow }} />

      {/* Top accent stripe */}
      {!isFirst && (
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "2px",
          background: `linear-gradient(90deg, ${ac.color} 0%, ${ac.color}50 35%, transparent 75%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Faded huge background ordinal */}
      <div
        aria-hidden
        className="proj-bg-num"
        style={{ color: ac.color }}
      >
        {ac.num}
      </div>

      {/* ── Header row ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 6, position: "relative", zIndex: 1 }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: 11, color: ac.color,
          letterSpacing: "0.22em", opacity: 0.9, flexShrink: 0,
        }}>
          {ac.num}
        </span>
        <div style={{ height: 1, width: 24, background: `${ac.color}60`, flexShrink: 0 }} />
        <h3 className="proj-title" style={{ color: "var(--text)", ["--proj-color" as string]: ac.color }}>
          {project.title}
        </h3>
        {isNDA && (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 5,
            fontFamily: "var(--font-mono)", fontSize: 10,
            padding: "3px 10px", borderRadius: 6, flexShrink: 0,
            background: "rgba(255,82,82,0.1)", border: "1px solid rgba(255,82,82,0.24)",
            color: "rgba(255,155,145,0.9)",
          }}>
            <Lock size={9} /> Enterprise NDA
          </span>
        )}
      </div>

      {/* Subtitle */}
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)",
        letterSpacing: "0.1em", marginBottom: 32, paddingLeft: 55,
        position: "relative", zIndex: 1,
      }}>
        {project.subtitle}
      </div>

      {/* ── Body: description + impact ── */}
      <div className="proj-body" style={{ position: "relative", zIndex: 1 }}>
        <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.82 }}>
          {project.description}
        </p>
        <div className="proj-impact">
          {project.impact.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{
                width: 5, height: 5, borderRadius: "50%", background: ac.color,
                marginTop: 8, flexShrink: 0,
                boxShadow: `0 0 7px ${ac.color}90`,
              }} />
              <span style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.65 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer: tags + CTA ── */}
      <div className="proj-footer" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={TAG_CLS[tag] ?? "ac-badge ac-badge-gy"}
              style={{ padding: "3px 9px", borderRadius: 5, fontSize: 10 }}
            >
              {tag}
            </span>
          ))}
        </div>

        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-cta"
            style={{
              border: `1px solid ${ac.color}45`,
              background: `${ac.color}0a`,
              color: ac.color,
              ["--cta-color" as string]: ac.color,
            } as React.CSSProperties}
          >
            View on GitHub
            <ArrowUpRight size={13} />
          </a>
        ) : (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text3)",
            border: "1px solid var(--border)", borderRadius: 8, padding: "7px 14px",
          }}>
            <Lock size={10} /> Source confidential
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = PROJECTS
    .filter((p) => FEATURED.includes(p.title))
    .sort((a, b) => FEATURED.indexOf(a.title) - FEATURED.indexOf(b.title));

  return (
    <section id="projects" style={{ padding: "96px 80px", maxWidth: 1240, margin: "0 auto" }}>
      {/* Eyebrow */}
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)",
        textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 18,
        display: "flex", alignItems: "center", gap: 8,
      }}>
        <span style={{ display: "inline-block", width: 14, height: 1, background: "var(--text3)" }} />
        Selected Work
      </div>

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{
          fontFamily: "var(--font-display)", fontSize: "clamp(30px,4vw,52px)",
          fontWeight: 800, lineHeight: 1.1, marginBottom: 12,
        }}
      >
        Featured<br />Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 15, color: "var(--text2)", maxWidth: 460,
          marginBottom: 52, lineHeight: 1.75,
        }}
      >
        Enterprise automation, full-stack web, and low-level systems — three projects across the full range.
      </motion.p>

      {/* Chapter list */}
      <div style={{ borderTop: "1px solid var(--border)" }}>
        {featured.map((p, i) => (
          <ProjectChapter key={p.title} project={p} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects { padding: 72px 22px !important; }
          .proj-body  { grid-template-columns: 1fr !important; }
          .proj-footer { flex-direction: column !important; align-items: flex-start !important; }
        }

        /* Hover background fill */
        .proj-bg-fill {
          position: absolute; inset: 0;
          opacity: 0; transition: opacity 0.45s ease;
          pointer-events: none; z-index: 0;
        }
        .proj-chapter:hover .proj-bg-fill { opacity: 1; }

        /* Big faded ordinal */
        .proj-bg-num {
          position: absolute; right: -6px; top: 50%; transform: translateY(-50%);
          font-family: var(--font-display);
          font-size: clamp(100px, 14vw, 190px);
          font-weight: 900; line-height: 1; letter-spacing: -0.04em;
          opacity: 0.04; pointer-events: none; user-select: none;
          transition: opacity 0.4s;
        }
        .proj-chapter:hover .proj-bg-num { opacity: 0.065; }

        /* Title */
        .proj-title {
          font-family: var(--font-display);
          font-size: clamp(24px, 3.8vw, 50px);
          font-weight: 800; line-height: 1; letter-spacing: -0.03em;
          transition: color 0.25s;
        }
        .proj-chapter:hover .proj-title { color: var(--proj-color, var(--text)) !important; }

        /* Body two-column */
        .proj-body {
          display: grid;
          grid-template-columns: 1fr 230px;
          gap: 52px;
          margin-bottom: 28px;
          align-items: start;
        }

        /* Impact list */
        .proj-impact {
          display: flex; flex-direction: column; gap: 10;
          padding-top: 3px;
        }

        /* Footer row */
        .proj-footer {
          display: flex; align-items: center;
          justify-content: space-between;
          flex-wrap: wrap; gap: 12;
        }

        /* CTA button */
        .proj-cta {
          display: inline-flex; align-items: center; gap: 7;
          font-family: var(--font-mono); font-size: 12px;
          text-decoration: none;
          border-radius: 8px; padding: 7px 14px;
          transition: filter 0.2s, gap 0.2s, transform 0.2s;
        }
        .proj-cta:hover {
          filter: brightness(1.25);
          transform: translateX(3px);
          gap: 11px !important;
        }
      `}</style>
    </section>
  );
}
