"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { POWER_PLATFORM_SKILLS } from "@/lib/data";
import { Zap, GitBranch, Database, FolderOpen, Users, Link2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  apps: GitBranch,
  automate: Zap,
  dataverse: Database,
  sharepoint: FolderOpen,
  teams: Users,
  connector: Link2,
};

function SkillBar({ level, color, delay = 0 }: { level: number; color: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className="h-1.5 rounded-full bg-[var(--surface-3)] overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: `${level}%` } : {}}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full rounded-full"
        style={{ background: color }}
      />
    </div>
  );
}

// Power Automate–style flow diagram (light mode)
function FlowDiagram() {
  const steps = [
    { label: "Trigger", sub: "Manual · HTTP · Schedule", color: "#0078D4", icon: Zap },
    { label: "Condition", sub: "Apply to each · Switch", color: "#742774", icon: GitBranch },
    { label: "Action A", sub: "SharePoint · Teams · Email", color: "#0099BC", icon: FolderOpen },
    { label: "Action B", sub: "Dataverse · SQL · HTTP", color: "#038387", icon: Database },
    { label: "Respond", sub: "Output · Notification", color: "#107C10", icon: Zap },
  ];

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[var(--border-mid)] shadow-xl" style={{ background: "var(--surface-0)" }}>
      {/* Editor title bar */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-6 py-4" style={{ background: "var(--surface-1)" }}>
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-semibold text-[var(--text-secondary)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            enterprise_automation.flow
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="tag tag-green" style={{ padding: "2px 8px", fontSize: "9px" }}>
            <span className="w-1 h-1 rounded-full bg-[var(--green-success)] animate-pulse inline-block" />
            Running
          </span>
        </div>
      </div>

      {/* Flow canvas */}
      <div className="flex items-start gap-6 overflow-x-auto p-7 md:p-8">
        {steps.map((step, i) => {
          const Icon = step.icon;
          return (
            <div key={step.label} className="flex flex-shrink-0 items-center gap-4">
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="pa-card flex w-56 items-center gap-3 px-5 py-4"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: step.color }}
                >
                  <Icon size={14} className="text-white" />
                </div>
                <div>
                  <div
                    className="text-sm font-semibold text-[var(--text-primary)] leading-tight"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.label}
                  </div>
                  <div className="text-[10px] text-[var(--text-muted)] mt-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                    {step.sub}
                  </div>
                </div>
              </motion.div>

              {/* Horizontal connector */}
              {i < steps.length - 1 && (
                <div className="flex items-center gap-0 flex-shrink-0">
                  <div className="w-5 h-0.5 bg-[var(--pa-connector-line)]" />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      borderLeft: `6px solid var(--pa-connector-line)`,
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer stats */}
      <div className="flex items-center gap-6 border-t border-[var(--border-subtle)] px-6 py-3" style={{ background: "var(--surface-1)" }}>
        {["Duration: 1.8s", "5 actions", "0 errors", "Connections: 6"].map((s, i) => (
          <span key={i} className="text-[10px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PowerPlatform() {
  return (
    <section id="power-platform" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative section-container">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-left"
          style={{ marginBottom: "3.75rem" }}
        >
          <span className="tag tag-blue mb-5 inline-block">Expertise</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Power Platform
            <span className="text-gradient-blue"> Ecosystem</span>
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
            Deep expertise across the full Microsoft Power Platform stack —
            from canvas apps to complex cloud flows and enterprise data architecture.
          </p>
        </motion.div>

        {/* Current role card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-12 max-w-2xl rounded-2xl p-7 text-center md:p-8"
          style={{
            background: "linear-gradient(135deg, var(--power-blue-light), var(--cyan-light))",
            border: "1px solid rgba(0,120,212,0.16)",
          }}
        >
          <span className="text-[11px] font-semibold text-[var(--power-blue)] tracking-wider block mb-2" style={{ fontFamily: "var(--font-mono)" }}>
            CURRENT ROLE
          </span>
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Power Platform Developer · CMA CGM Group
          </h3>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
            One of the world&apos;s largest shipping & logistics companies. Building internal tools and automated workflows at enterprise scale. Since March 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Power Apps", "Power Automate", "Dataverse", "SharePoint"].map((tag) => (
              <span key={tag} className="tag tag-blue">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <FlowDiagram />
        </motion.div>

        {/* Skills grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POWER_PLATFORM_SKILLS.map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Zap;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="card-elevated rounded-[1.5rem] p-7 group hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: skill.color }}
                  >
                    <Icon size={19} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-[var(--text-primary)] text-[16px]" style={{ fontFamily: "var(--font-display)" }}>
                        {skill.name}
                      </h3>
                      <span className="text-[13px] font-semibold" style={{ fontFamily: "var(--font-mono)", color: skill.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <SkillBar level={skill.level} color={skill.color} delay={i * 0.1 + 0.3} />
                  </div>
                </div>
                <p className="mb-5 text-[15px] leading-relaxed text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-1 rounded-md"
                      style={{ fontFamily: "var(--font-mono)", background: `${skill.color}10`, border: `1px solid ${skill.color}18`, color: skill.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
