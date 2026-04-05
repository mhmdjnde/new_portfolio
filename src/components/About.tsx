"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const highlights = [
  {
    kicker: "42 Beirut",
    detail: "Original curriculum",
    color: "var(--power-blue)",
    glow: "rgba(71, 164, 255, 0.18)",
  },
  {
    kicker: "Lebanese University",
    detail: "CS degree",
    color: "var(--automate-purple-bright)",
    glow: "rgba(126, 124, 255, 0.16)",
  },
  {
    kicker: "12+",
    detail: "Projects done",
    color: "var(--cyan-arc)",
    glow: "rgba(67, 214, 201, 0.16)",
  },
  {
    kicker: "CMA CGM",
    detail: "Power Platform",
    color: "var(--power-blue-bright)",
    glow: "rgba(143, 213, 255, 0.16)",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32"
      style={{ paddingBottom: "clamp(1rem, 1vw, 1rem)" }}
    >
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading"
        >
          <span className="section-eyebrow">About</span>
          <h2>
            The Engineer
            <span className="text-gradient-blue"> Behind the Flows</span>
          </h2>
          <p>Where rigorous CS thinking meets enterprise automation craft.</p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start xl:gap-14">
          {/* ── Left: narrative + quick facts ── */}
          <div className="flex h-full flex-col gap-5">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-elevated min-h-[15.25rem] rounded-2xl p-7"
            >
              <p className="text-[17px] leading-relaxed text-[var(--text-secondary)] mb-5">
                I&apos;m a Computer Science graduate from{" "}
                <span className="font-semibold text-[var(--automate-purple-bright)]">Lebanese University</span>{" "}
                and{" "}
                <span className="font-semibold text-[var(--cyan-arc)]">42 Beirut</span> —
                one of the most demanding peer-learning environments in the world. No teachers, no lectures:
                only project-based challenges that demand precision and persistence.
              </p>
              <p className="text-[17px] leading-relaxed text-[var(--text-secondary)]">
                Today I apply that discipline at{" "}
                <span className="font-semibold text-[var(--power-blue)]">CMA CGM</span>, one of
                the world&apos;s largest shipping groups, building intelligent automation with the full{" "}
                <span className="font-semibold text-[var(--automate-purple-bright)]">Power Platform</span> ecosystem.
              </p>
            </motion.div>

            {/* Quick facts */}
            <div className="grid gap-3 content-start">
              {[
                { icon: Briefcase, label: "Current Role", value: "Power Platform Developer · CMA CGM", color: "var(--power-blue)" },
                { icon: GraduationCap, label: "Education", value: "Lebanese University — CS · 42 Beirut (Original Curriculum)", color: "var(--automate-purple-bright)" },
                { icon: Code2, label: "Core Focus", value: "Power Apps · Power Automate · Dataverse · SharePoint", color: "var(--cyan-arc)" },
              ].map((fact, i) => (
                <motion.div
                  key={fact.label}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-1)] p-5 transition-all hover:border-[var(--border-mid)]"
                >
                  <div
                    className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid var(--border-mid)",
                    }}
                  >
                    <fact.icon size={16} style={{ color: fact.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="mb-1 block text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                      {fact.label}
                    </span>
                    <span className="block text-[15px] font-medium text-[var(--text-primary)] leading-snug">
                      {fact.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Right: summary + philosophy + approach ── */}
          <div
            className="flex flex-col"
            style={{ gap: "clamp(0.5rem, 0.75vw, 0.7rem)" }}
          >
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative w-full overflow-hidden rounded-[2rem] border border-[var(--border-mid)] bg-[linear-gradient(160deg,rgba(16,28,43,0.96),rgba(8,15,24,0.98))] p-7 md:p-8 shadow-[0_24px_60px_rgba(0,0,0,0.26)]"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(143,213,255,0.7)] to-transparent" />
              <div className="absolute -right-16 top-8 h-36 w-36 rounded-full blur-3xl bg-[rgba(71,164,255,0.12)]" />
              <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full blur-3xl bg-[rgba(126,124,255,0.1)]" />

              <div className="relative">
                <div className="content-inset">
                  <span
                    className="mb-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    <span className="h-px w-10 bg-gradient-to-r from-[var(--power-blue)] to-transparent" />
                    Snapshot
                  </span>
                </div>

                <div
                  className="flex flex-col"
                  style={{ gap: "clamp(0.3rem, 1vw, 0.55rem)" }}
                >
                  {highlights.map((item, i) => (
                    <motion.div
                      key={item.kicker}
                      custom={i + 3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="group relative overflow-hidden rounded-[1.45rem] border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.025)] px-6 py-6 transition-all hover:border-[var(--border-mid)]"
                    >
                      <div
                        className="absolute inset-y-3.5 left-0 w-[3px] rounded-full"
                        style={{ background: `linear-gradient(180deg, ${item.color}, transparent)` }}
                      />
                      <div
                        className="absolute right-0 top-0 h-full w-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                        style={{ background: item.glow }}
                      />

                      <div className="relative flex items-center justify-between gap-4">
                        <div className="content-inset-sm">
                          <div
                            className="text-[1.1rem] font-semibold leading-tight"
                            style={{ fontFamily: "var(--font-display)", color: item.color }}
                          >
                            {item.kicker}
                          </div>
                          <div
                            className="mt-1 text-[12px] uppercase tracking-[0.12em] text-[var(--text-secondary)]"
                            style={{ fontFamily: "var(--font-mono)" }}
                          >
                            {item.detail}
                          </div>
                        </div>

                        <span
                          className="flex h-8 min-w-8 items-center justify-center rounded-full px-2 text-[10px] font-semibold"
                          style={{
                            fontFamily: "var(--font-mono)",
                            color: item.color,
                            border: `1px solid ${item.color}33`,
                            background: `${item.color}14`,
                          }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div
              className="flex flex-col"
              style={{ gap: "clamp(0.5rem, 0.75vw, 0.7rem)" }}
            >
              {/* Philosophy */}
              <motion.div
                custom={6}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="relative overflow-hidden rounded-2xl p-8 md:p-9"
                style={{
                  background: "linear-gradient(135deg, var(--power-blue-light), var(--cyan-light))",
                  border: "1px solid rgba(71,164,255,0.16)",
                }}
              >
                <div className="content-inset">
                  <span
                    className="mb-4 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--power-blue)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Philosophy
                  </span>
                  <blockquote className="text-lg font-semibold leading-snug text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    &ldquo;The best automation is the one users don&apos;t notice — because it just works.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-[14px] leading-relaxed text-[var(--text-secondary)]">
                    I build invisible infrastructure that lets people focus on what they do best.
                  </p>
                </div>
              </motion.div>

              {/* Work approach */}
              <motion.div
                custom={7}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="card rounded-2xl p-8 md:p-9"
              >
                <div className="content-inset">
                  <span
                    className="mb-5 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    Approach
                  </span>
                  <div className="space-y-4">
                    {[
                      "Map the human process before touching any tool",
                      "Choose the right automation level for the problem",
                      "Design for the user who will live with the result",
                      "Measure impact — automate, validate, iterate",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <span
                          className="mt-0.5 flex-shrink-0 font-bold text-[var(--power-blue)]"
                          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[15px] leading-relaxed text-[var(--text-secondary)]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
