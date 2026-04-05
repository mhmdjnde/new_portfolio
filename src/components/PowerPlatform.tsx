"use client";

import { motion } from "framer-motion";
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

function masteryDots(level: number) {
  if (level >= 85) return 5;
  if (level >= 75) return 4;
  if (level >= 65) return 3;
  if (level >= 55) return 2;
  return 1;
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
          style={{ marginBottom: "1.5rem" }}
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
          className="mx-auto max-w-2xl rounded-2xl p-8 text-center md:p-9"
          style={{
            marginBottom: "2.12rem",
            background: "linear-gradient(135deg, var(--power-blue-light), var(--cyan-light))",
            border: "1px solid rgba(0,120,212,0.16)",
          }}
        >
          <span className="text-[11px] font-semibold text-[var(--power-blue)] tracking-wider block" style={{ fontFamily: "var(--font-mono)", marginBottom: "0.51rem" }}>
            CURRENT ROLE
          </span>
          <h3 className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)", marginBottom: "0.51rem" }}>
            Power Platform Developer · CMA CGM Group
          </h3>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed" style={{ fontFamily: "var(--font-body)", marginBottom: "0.51rem" }}>
            One of the world&apos;s largest shipping & logistics companies. Building internal tools and automated workflows at enterprise scale. Since March 2025.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Power Apps", "Power Automate", "Dataverse", "SharePoint"].map((tag) => (
              <span key={tag} className="tag tag-blue">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="mb-10 flex items-center gap-5">
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,120,212,0.4), transparent)" }} />
          <span className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            Core Toolset
          </span>
          <div className="h-px flex-1" style={{ background: "linear-gradient(270deg, rgba(0,120,212,0.4), transparent)" }} />
        </div>

        {/* Primary skills — 2 large hero cards */}
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          {POWER_PLATFORM_SKILLS.slice(0, 2).map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Zap;
            const dots = masteryDots(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[1.75rem] transition-all hover:shadow-lg"
                style={{
                  padding: "0.79rem",
                  background: "linear-gradient(150deg, rgba(12,22,38,0.97), rgba(6,12,22,0.99))",
                  border: `1px solid ${skill.color}22`,
                }}
              >
                <div className="absolute inset-x-0 top-0 h-[1.5px]" style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}30, transparent)` }} />
                <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full blur-3xl opacity-10 transition-opacity duration-500 group-hover:opacity-18" style={{ background: skill.color }} />
                <div className="relative">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: skill.color }}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="mb-1 text-[1.35rem] font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    {skill.name}
                  </h3>
                  <div className="mb-4 flex items-center gap-1.5">
                    {[1,2,3,4,5].map((d) => (
                      <div key={d} className="h-[6px] w-[6px] rounded-full transition-all" style={{ background: d <= dots ? skill.color : `${skill.color}28` }} />
                    ))}
                    <span className="ml-1 text-[10px] uppercase tracking-[0.14em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>mastery</span>
                  </div>
                  <p className="mb-6 text-[15px] leading-relaxed text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-md px-3 py-1 text-[11px]" style={{ fontFamily: "var(--font-mono)", background: `${skill.color}10`, border: `1px solid ${skill.color}20`, color: skill.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Secondary skills — 2 compact cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {POWER_PLATFORM_SKILLS.slice(2).map((skill, i) => {
            const Icon = iconMap[skill.icon] ?? Zap;
            const dots = masteryDots(skill.level);
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-[1.5rem] transition-all hover:shadow-md"
                style={{
                  background: "linear-gradient(150deg, rgba(10,20,34,0.96), rgba(6,12,22,0.98))",
                  border: `1px solid ${skill.color}22`,
                  padding: "0.61rem",
                }}
              >
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, ${skill.color}80, ${skill.color}30, transparent)` }} />
                <div className="absolute inset-y-0 left-0 w-[2px] rounded-full" style={{ background: `linear-gradient(180deg, ${skill.color}60, transparent)` }} />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-20" style={{ background: skill.color }} />
                <div className="relative flex h-full flex-col gap-5">
                  {/* Header row */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl" style={{ background: skill.color }}>
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-[1.05rem] font-bold leading-tight text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                        {skill.name}
                      </h3>
                      <div className="mt-1.5 flex items-center gap-1">
                        {[1,2,3,4,5].map((d) => (
                          <div key={d} className="h-[5px] w-[5px] rounded-full" style={{ background: d <= dots ? skill.color : `${skill.color}28` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-[13.5px] leading-relaxed text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                    {skill.description}
                  </p>
                  {/* Tags */}
                  <div className="mt-auto flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span key={tag} className="rounded-lg px-3 py-1 text-[10px]" style={{ fontFamily: "var(--font-mono)", background: `${skill.color}10`, border: `1px solid ${skill.color}22`, color: skill.color }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
