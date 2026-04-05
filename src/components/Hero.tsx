"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  CheckCircle2,
  FileDown,
  GitBranch,
  Layers,
  Sparkles,
  Zap,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

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
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex w-full flex-col items-center"
    >
      <div className="pa-card flex w-full items-center gap-4 px-6 py-4">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl flex-shrink-0"
          style={{ background: iconBg }}
        >
          <Icon size={17} className="text-white" />
        </div>

        <div className="min-w-0 flex-1 content-inset-sm">
          <div className="truncate text-sm font-semibold text-[var(--text-primary)]">
            {actionName}
          </div>
          <div
            className="mt-0.5 text-[11px] text-[var(--text-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {connectorLabel}
          </div>
        </div>

        {status === "success" && (
          <CheckCircle2 size={15} className="text-[var(--green-success)] flex-shrink-0" />
        )}
        {status === "running" && (
          <span className="h-3.5 w-3.5 rounded-full border-2 border-[var(--power-blue)] border-t-transparent animate-spin flex-shrink-0" />
        )}
      </div>

      {!isLast && (
        <div className="pa-connector py-1">
          <div className="pa-connector-line" />
          <div className="pa-connector-dot animate-node-pulse" />
          <div className="pa-connector-line" />
          <div className="pa-connector-arrow" />
        </div>
      )}
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-mesh relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="grid-bg absolute inset-0 opacity-45" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgba(7,17,28,0.88)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[var(--void)] to-transparent" />

      <div
        className="animate-float-slow absolute -left-24 top-28 h-[22rem] w-[22rem] rounded-full blur-3xl"
        style={{ background: "rgba(71, 164, 255, 0.12)" }}
      />
      <div
        className="animate-float absolute right-[-4rem] top-20 h-[18rem] w-[18rem] rounded-full blur-3xl"
        style={{ background: "rgba(126, 124, 255, 0.1)" }}
      />

      <div className="section-container relative z-10 w-full pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_28rem] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_30rem]">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <span className="tag tag-blue">Available for selected work</span>
              <span className="tag tag-cyan">Enterprise automation</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="section-eyebrow">Mohammad Joundi · Power Platform Developer</p>
              <h1 className="mt-5 max-w-3xl text-[2.6rem] font-extrabold leading-[1.06] sm:text-5xl lg:text-[3rem] xl:text-[3.6rem]">
                Turning chaos into
                <br />
                <span className="text-gradient-full">enterprise-grade systems</span>
                <br />
                people actually enjoy using.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-secondary)] md:text-[1.18rem]"
            >
              CS graduate from <span className="font-semibold text-[var(--text-primary)]">Lebanese University</span> and
              <span className="font-semibold text-[var(--text-primary)]"> 42 Beirut</span>, currently designing internal
              tools, flows, and process architecture at <span className="font-semibold text-[var(--power-blue-bright)]">CMA CGM</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.36 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary">
                <Layers size={15} />
                View projects
              </a>
              <a href="#contact" className="btn-ghost">
                <Sparkles size={15} />
                Let&apos;s work together
              </a>
              <a href={PERSONAL.cvUrl} download className="btn-ghost">
                <FileDown size={15} />
                Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.48 }}
              className="mt-10 grid gap-3 sm:grid-cols-3"
            >
              {[
                ["Focus", "Power Apps, cloud flows, practical automation"],
                ["Style", "Systems thinking with clean user-facing execution"],
                ["Base", "Beirut, shipping tech, enterprise constraints"],
              ].map(([label, value]) => (
                <div key={label} className="card rounded-2xl px-6 py-5">
                  <div className="content-inset-sm">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {label}
                    </p>
                    <p className="mt-2.5 text-[14px] leading-6 text-[var(--text-secondary)]">{value}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                Find me on
              </span>
              <div className="h-px w-10 bg-[var(--border-mid)]" />
              <div className="flex gap-2">
                <a
                  href={PERSONAL.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-mid)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href={PERSONAL.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--border-mid)] bg-[rgba(255,255,255,0.03)] text-[var(--text-secondary)] transition-all hover:border-[var(--power-blue)] hover:text-[var(--power-blue-bright)]"
                >
                  <LinkedinIcon size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[30rem]"
          >
            <div className="card-elevated noise-overlay relative overflow-hidden rounded-[2rem] p-7 sm:p-8">
              <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(143,213,255,0.8)] to-transparent" />

              <div className="mb-8 flex items-start justify-between gap-4">
                <div className="content-inset">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    Current Workflow Snapshot
                  </p>
                  <p className="mt-3 text-xl font-semibold text-[var(--text-primary)]">identity.flow</p>
                </div>
                <span className="tag tag-green flex-shrink-0">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[var(--green-success)] animate-pulse" />
                  Shipping
                </span>
              </div>

              <div className="mb-8 flex flex-col items-center">
                <PAActionCard
                  icon={Zap}
                  iconBg="linear-gradient(135deg, #47A4FF, #43D6C9)"
                  actionName="Trigger business request"
                  connectorLabel="Intake · Forms · Teams"
                  status="success"
                  delay={0.35}
                />
                <PAActionCard
                  icon={GitBranch}
                  iconBg="linear-gradient(135deg, #7E7CFF, #A49EFF)"
                  actionName="Apply approval logic"
                  connectorLabel="Rules · Routing · Ownership"
                  status="success"
                  delay={0.48}
                />
                <PAActionCard
                  icon={Layers}
                  iconBg="linear-gradient(135deg, #2CB4A6, #43D6C9)"
                  actionName="Deliver app + flow experience"
                  connectorLabel="Power Apps · Dataverse · SharePoint"
                  status="running"
                  delay={0.6}
                  isLast
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ["Role", "Power Platform Developer"],
                  ["Company", "CMA CGM Group"],
                  ["Background", "CS + 42 systems training"],
                  ["Priority", "Automation that feels simple"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] px-6 py-4">
                    <div className="content-inset-sm">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                        {label}
                      </p>
                      <p className="mt-2 text-[14px] text-[var(--text-secondary)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-14 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Scroll to explore
          <ArrowDown size={13} />
        </motion.a>
      </div>
    </section>
  );
}
