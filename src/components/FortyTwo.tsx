"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu, Network, Box, Layers, CheckCircle2, Globe, Smartphone, ArrowUpRight } from "lucide-react";
import { FORTY_TWO_PROJECTS } from "@/lib/data";
import { GithubIcon } from "@/components/ui/SocialIcons";

const categoryConfig = {
  Core:        { icon: Box,        color: "#0078D4" },
  Systems:     { icon: Cpu,        color: "#742774" },
  Graphics:    { icon: Layers,     color: "#CA3CCA" },
  Concurrency: { icon: Cpu,        color: "#038387" },
  OOP:         { icon: Code2,      color: "#C4960E" },
  Network:     { icon: Network,    color: "#0078D4" },
  Web:         { icon: Globe,      color: "#43D6C9" },
  Mobile:      { icon: Smartphone, color: "#7F52FF" },
};

const CATEGORY_ORDER = ["Core", "Systems", "Graphics", "Concurrency", "OOP", "Network", "Web", "Mobile"];
const CATEGORIES = ["All", ...CATEGORY_ORDER.filter((c) => FORTY_TWO_PROJECTS.some((p) => p.category === c))];

/* ── 3D Tilt Card with specular highlight ── */
function TiltCard({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const cardRef  = useRef<HTMLDivElement>(null);
  const glowRef  = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * 5.5, y: -dx * 5.5 });
    if (glowRef.current) {
      const gx = ((e.clientX - rect.left) / rect.width)  * 100;
      const gy = ((e.clientY - rect.top)  / rect.height) * 100;
      glowRef.current.style.background =
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.085), transparent 62%)`;
    }
  }, []);

  const onLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
    if (glowRef.current) {
      glowRef.current.style.background =
        "radial-gradient(circle at 50% 50%, rgba(255,255,255,0), transparent 62%)";
    }
  }, []);

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
      style={{ transformStyle: "preserve-3d", ...style }}
      className={className}
    >
      {/* Specular light that tracks cursor */}
      <div
        ref={glowRef}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          pointerEvents: "none",
          zIndex: 2,
          background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0), transparent 62%)",
          transition: "background 0.08s",
        }}
      />
      {children}
    </motion.div>
  );
}

export default function FortyTwo() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? FORTY_TWO_PROJECTS
      : FORTY_TWO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="forty-two"
      className="relative py-32"
      style={{ marginTop: "clamp(4.5rem, 8vw, 7rem)" }}
    >
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative section-container">
        <div className="flex flex-col" style={{ paddingLeft: "0.35rem" }}>
          {/* Header */}
          <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] xl:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="tag tag-purple mb-5 inline-block">42 Beirut</span>
              <h2
                className="text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] mb-5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Original Curriculum
                <span className="text-gradient-purple block">Completed 2025</span>
              </h2>
              <p
                className="max-w-2xl text-[17px] leading-loose text-[var(--text-secondary)]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                42 Beirut trains through radical peer learning — no teachers, no lectures, only project-based challenges.
                I completed the <strong>original curriculum track</strong> in July 2025, and the grid below shows only
                repositories tied to 42 Beirut work.
              </p>
            </motion.div>

            {/* Timeline stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 justify-center py-1"
            >
              <div
                className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Timeline
              </div>

              <div className="relative">
                <div
                  className="absolute top-[13px] left-[13px] right-[13px] h-px"
                  style={{ background: "linear-gradient(90deg, #0078D4, #742774)" }}
                />
                <div className="flex justify-between">
                  {[
                    { value: "Jun 2024", label: "Joined",    color: "#0078D4" },
                    { value: "Jul 2025", label: "Graduated", color: "#742774" },
                  ].map((node) => (
                    <div key={node.label} className="flex flex-col items-center gap-3">
                      <div
                        className="relative z-10 w-[26px] h-[26px] rounded-full flex items-center justify-center"
                        style={{
                          background: `${node.color}18`,
                          border: `2px solid ${node.color}`,
                          boxShadow: `0 0 16px ${node.color}55`,
                        }}
                      >
                        <div className="w-[7px] h-[7px] rounded-full" style={{ background: node.color }} />
                      </div>
                      <div className="text-center">
                        <div
                          className="text-[1rem] font-bold leading-tight"
                          style={{ fontFamily: "var(--font-display)", color: node.color }}
                        >
                          {node.value}
                        </div>
                        <div
                          className="mt-0.5 text-[10px] uppercase tracking-[0.15em] text-[var(--text-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {node.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="flex items-center gap-5 pt-6"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
              >
                <div
                  className="text-[2rem] font-extrabold leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "#0099BC" }}
                >
                  {FORTY_TWO_PROJECTS.length}
                </div>
                <div>
                  <div
                    className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Repos Shown
                  </div>
                  <div
                    className="mt-0.5 text-[12px] text-[var(--text-secondary)]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    from 42 Beirut original track
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div aria-hidden="true" style={{ height: "0.5rem" }} />

          {/* Curriculum skills banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shimmer-card rounded-[1.9rem] p-8 md:p-9"
            style={{
              background: "linear-gradient(135deg, var(--automate-purple-light), var(--power-blue-light))",
              border: "1px solid rgba(116,39,116,0.12)",
            }}
          >
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                { label: "Low-level C Programming", icon: Code2 },
                { label: "Unix Systems & Processes", icon: Cpu },
                { label: "Network Protocols (IRC)",  icon: Network },
                { label: "Peer Code Review",         icon: CheckCircle2 },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon size={13} className="text-[var(--automate-purple-bright)] flex-shrink-0" />
                  <span className="text-[14px] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          <div aria-hidden="true" style={{ height: "0.5rem" }} />

          {/* Category filters */}
          <div className="flex flex-wrap gap-4">
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
                  transform: activeCategory === cat ? "scale(1.04)" : undefined,
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div aria-hidden="true" style={{ height: "0.5rem" }} />
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid gap-x-5 gap-y-7 md:gap-x-6 md:gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project, i) => {
              const catCfg = categoryConfig[project.category as keyof typeof categoryConfig];
              const CatIcon = catCfg?.icon ?? Code2;
              const color   = catCfg?.color ?? "#0078D4";

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="tilt-perspective"
                >
                  <TiltCard
                    className="card-elevated shimmer-card flex h-full flex-col rounded-[1.6rem] group transition-all"
                    style={{ position: "relative", overflow: "hidden" }}
                  >
                    {/* Top accent line */}
                    <div
                      className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `linear-gradient(90deg, transparent, ${color}80, transparent)` }}
                    />

                    {/* Card header zone */}
                    <div
                      className="flex items-start justify-between gap-4"
                      style={{ padding: "1.4rem 0.7rem 1.1rem", borderBottom: `1px solid ${color}14` }}
                    >
                      <div className="flex items-center gap-3.5">
                        <div
                          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-[0.9rem] transition-all group-hover:shadow-[0_0_22px_var(--icon-glow)]"
                          style={{
                            background: color,
                            "--icon-glow": `${color}60`,
                          } as React.CSSProperties}
                        >
                          <CatIcon size={17} className="text-white" />
                        </div>
                        <div>
                          <span
                            className="text-[9px] uppercase tracking-[0.18em] block mb-0.5"
                            style={{ fontFamily: "var(--font-mono)", color: `${color}cc` }}
                          >
                            {project.category}
                          </span>
                          <h3
                            className="text-[1.1rem] font-bold leading-tight text-[var(--text-primary)]"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {project.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2" style={{ minWidth: 0, flexShrink: 1 }}>
                        <span
                          className="inline-flex items-center rounded-full text-[9px] uppercase tracking-[0.12em]"
                          style={{
                            padding: "0.25rem 0.5rem",
                            fontFamily: "var(--font-mono)",
                            background: `${color}12`,
                            border: `1px solid ${color}28`,
                            color,
                            fontSize: "12px",
                          }}
                        >
                          {project.lang}
                        </span>
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--surface-2)] text-[var(--text-muted)] transition-all hover:bg-[var(--surface-3)] hover:text-[var(--text-primary)] hover:scale-110"
                            aria-label={`Open ${project.name} repository`}
                          >
                            <GithubIcon size={13} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col" style={{ padding: "1.1rem 0.7rem 1.4rem" }}>
                      <p
                        className="flex-1 text-[14px] leading-[1.75] text-[var(--text-secondary)]"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {project.description}
                      </p>

                      <div
                        className="mt-6 flex items-center justify-between gap-4 pt-5 border-t border-[var(--border-subtle)]"
                      >
                        <div className="flex items-center gap-2">
                          <CheckCircle2 size={11} style={{ color }} />
                          <span
                            className="text-[10px]"
                            style={{ fontFamily: "var(--font-mono)", color: `${color}aa` }}
                          >
                            42 Beirut repo
                          </span>
                        </div>

                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] transition-all hover:text-[var(--text-primary)] hover:gap-2.5"
                            style={{ fontFamily: "var(--font-mono)", color }}
                          >
                            View repo
                            <ArrowUpRight size={11} />
                          </a>
                        ) : (
                          <span
                            className="text-[11px]"
                            style={{ fontFamily: "var(--font-mono)", color: `${color}88` }}
                          >
                            Archive only
                          </span>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-[11px] text-[var(--text-muted)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Only repositories tied to 42 Beirut work are shown in this section.
        </motion.p>
      </div>
    </section>
  );
}
