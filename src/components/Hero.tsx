"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileDown, Zap, GitBranch, Layers, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

// ─── Power Automate–style action card ─────────────────────────
function PAActionCard({
  icon: Icon,
  iconBg,
  actionName,
  connectorLabel,
  status = "idle",
  delay = 0,
  isLast = false,
}: {
  icon: React.ElementType;
  iconBg: string;
  actionName: string;
  connectorLabel: string;
  status?: "idle" | "running" | "success";
  delay?: number;
  isLast?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center w-full"
    >
      {/* Card */}
      <div className="pa-card w-full flex items-center gap-3 px-4 py-3 group">
        {/* Connector icon block */}
        <div
          className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: iconBg }}
        >
          <Icon size={16} className="text-white" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-[var(--text-primary)] text-sm leading-tight truncate"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {actionName}
          </div>
          <div
            className="text-xs text-[var(--text-muted)] mt-0.5"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {connectorLabel}
          </div>
        </div>

        {/* Status */}
        {status === "success" && (
          <CheckCircle2 size={14} className="text-[var(--green-success)] flex-shrink-0" />
        )}
        {status === "running" && (
          <span className="w-3 h-3 rounded-full border-2 border-[var(--power-blue)] border-t-transparent animate-spin flex-shrink-0" />
        )}
      </div>

      {/* Connector line */}
      {!isLast && (
        <div className="pa-connector py-0.5">
          <div className="pa-connector-line" />
          <div className="pa-connector-dot animate-node-pulse" />
          <div className="pa-connector-line" />
          <div className="pa-connector-arrow" />
        </div>
      )}
    </motion.div>
  );
}

// ─── Main Hero ────────────────────────────────────────────────
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-mesh"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Ambient glow blobs — layered for depth */}
      <div
        className="absolute top-1/4 left-1/4 w-[700px] h-[700px] rounded-full opacity-[0.08] blur-[140px] pointer-events-none animate-float-slow"
        style={{ background: "radial-gradient(circle at 40% 40%, #0078D4, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/5 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle at 60% 60%, #742774, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full opacity-[0.05] blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(circle, #0099BC, transparent 70%)" }}
      />

      {/* Vignette fade at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--void))" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text content ────────────────────────── */}
          <div className="flex flex-col items-start">

            {/* Name & title */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className="text-6xl sm:text-7xl xl:text-[88px] font-extrabold leading-[1.0] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="block text-[var(--text-primary)]">Mohammad</span>
                <span className="block text-gradient-full">Joundi.</span>
              </h1>
            </motion.div>

            {/* Role chips */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2 mb-6"
            >
              <span className="tag tag-blue">Power Platform Developer</span>
              <span className="tag tag-purple">42 Beirut Graduate</span>
              <span className="tag tag-cyan">CMA CGM</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.46 }}
              className="text-[18px] text-[var(--text-secondary)] max-w-[520px] leading-relaxed mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              CS graduate from{" "}
              <span className="text-[var(--automate-purple-bright)] font-semibold">Lebanese University</span>{" "}
              and{" "}
              <span className="text-[var(--cyan-arc)] font-semibold">42 Beirut</span>,
              engineering enterprise automation at{" "}
              <span className="text-[var(--power-blue)] font-semibold">CMA CGM</span>.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.57 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary">
                <Layers size={14} />
                View Projects
              </a>
              <a href={PERSONAL.cvUrl} download className="btn-ghost">
                <FileDown size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.72 }}
              className="flex items-center gap-4"
            >
              <span
                className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Find me on
              </span>
              <div className="h-px w-6 bg-[var(--border-mid)]" />
              <div className="flex gap-2">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--surface-1)] border border-[var(--border-mid)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-bright)] hover:shadow-sm transition-all"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[var(--surface-1)] border border-[var(--border-mid)] text-[var(--text-secondary)] hover:text-[var(--power-blue)] hover:border-[var(--power-blue)] hover:bg-[var(--power-blue-light)] transition-all"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: Power Automate flow panel ─────────── */}
          <div className="hidden lg:flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-sm"
            >
              {/* Flow editor chrome */}
              <div
                className="rounded-2xl overflow-hidden shadow-xl border border-[var(--border-mid)]"
                style={{ background: "var(--surface-0)" }}
              >
                {/* Title bar */}
                <div className="border-b border-[var(--border-subtle)] px-4 py-3 flex items-center justify-between" style={{ background: "var(--surface-1)" }}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                    </div>
                  </div>
                  <span
                    className="text-[10px] text-[var(--text-muted)] font-medium"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    identity.flow
                  </span>
                  <span className="tag tag-green" style={{ padding: "2px 8px", fontSize: "9px" }}>
                    <span className="w-1 h-1 rounded-full bg-[var(--green-success)] animate-pulse inline-block" />
                    On
                  </span>
                </div>

                {/* Flow canvas */}
                <div className="p-6 flex flex-col items-center gap-0">
                  <PAActionCard
                    icon={Zap}
                    iconBg="#0078D4"
                    actionName="When request arrives"
                    connectorLabel="Manual trigger · Instant"
                    status="success"
                    delay={0.5}
                  />
                  <PAActionCard
                    icon={GitBranch}
                    iconBg="#742774"
                    actionName="Initialize — CS Engineer"
                    connectorLabel="Lebanese University · 42 Beirut"
                    status="success"
                    delay={0.65}
                  />
                  <PAActionCard
                    icon={Layers}
                    iconBg="#0099BC"
                    actionName="Apply to each — CMA CGM"
                    connectorLabel="Power Platform · Enterprise"
                    status="success"
                    delay={0.8}
                  />
                  <PAActionCard
                    icon={CheckCircle2}
                    iconBg="#107C10"
                    actionName="Respond to request"
                    connectorLabel="Output · Delivered"
                    status="idle"
                    delay={0.95}
                    isLast
                  />
                </div>

                {/* Run stats */}
                <div className="border-t border-[var(--border-subtle)] px-4 py-2.5 flex items-center justify-between" style={{ background: "var(--surface-1)" }}>
                  <span className="text-[10px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    Last run: 2.4s · 4 actions
                  </span>
                  <span className="tag tag-green" style={{ padding: "2px 8px", fontSize: "9px" }}>Succeeded</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span
            className="text-[10px] text-[var(--text-muted)] tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={13} className="text-[var(--text-muted)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
