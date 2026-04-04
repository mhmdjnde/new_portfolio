"use client";

import { motion, type Variants } from "framer-motion";
import { Briefcase, GraduationCap, Code2, ArrowRight } from "lucide-react";
import { PERSONAL, METRICS } from "@/lib/data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-60" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-16"
        >
          <span className="tag tag-blue mb-5 inline-block">About</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Engineer
            <span className="text-gradient-blue"> Behind the Flows</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Where rigorous CS thinking meets enterprise automation craft.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — narrative */}
          <div className="space-y-4">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-elevated rounded-2xl p-7"
            >
              <p className="text-[var(--text-secondary)] text-[17px] leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                I&apos;m a Computer Science graduate from{" "}
                <span className="text-[var(--automate-purple-bright)] font-semibold">Lebanese University</span>{" "}
                and{" "}
                <span className="text-[var(--cyan-arc)] font-semibold">42 Beirut</span> —
                one of the most demanding peer-learning environments in the world. No teachers, no lectures:
                only project-based challenges that demand precision and persistence.
              </p>
              <p className="text-[var(--text-secondary)] text-[17px] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                Today I apply that discipline at{" "}
                <span className="text-[var(--power-blue)] font-semibold">CMA CGM</span>, one of
                the world&apos;s largest shipping groups, building intelligent automation with the full{" "}
                <span className="text-[var(--automate-purple-bright)] font-semibold">Power Platform</span> ecosystem.
              </p>
            </motion.div>

            {/* Quick facts */}
            <div className="space-y-2">
              {[
                { icon: Briefcase, label: "Current Role", value: "Power Platform Developer · CMA CGM", color: "#0078D4" },
                { icon: GraduationCap, label: "Education", value: "Lebanese University — CS · 42 Beirut (Original Curriculum)", color: "#742774" },
                { icon: Code2, label: "Core Focus", value: "Power Apps · Power Automate · Dataverse · SharePoint", color: "#0099BC" },
              ].map((fact, i) => (
                <motion.div
                  key={fact.label}
                  custom={i + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-center gap-3 p-4 rounded-xl bg-[var(--surface-1)] border border-[var(--border-subtle)] hover:border-[var(--border-mid)] hover:shadow-sm transition-all group"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${fact.color}12`, border: `1px solid ${fact.color}22` }}
                  >
                    <fact.icon size={15} style={{ color: fact.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] text-[var(--text-muted)] mb-0.5" style={{ fontFamily: "var(--font-mono)" }}>
                      {fact.label}
                    </span>
                    <span className="block text-sm font-medium text-[var(--text-primary)]" style={{ fontFamily: "var(--font-body)" }}>
                      {fact.value}
                    </span>
                  </div>
                  <ArrowRight size={13} className="text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — metrics + philosophy */}
          <div className="space-y-5">
            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-4">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  custom={i + 2}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="card-elevated rounded-xl p-6 text-center relative overflow-hidden group hover:shadow-md transition-all"
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: i % 2 === 0 ? "linear-gradient(135deg, rgba(0,120,212,0.04), transparent)" : "linear-gradient(135deg, rgba(116,39,116,0.04), transparent)" }}
                  />
                  <div
                    className="text-3xl font-extrabold mb-1.5"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: i % 2 === 0 ? "var(--power-blue)" : "var(--automate-purple-bright)",
                    }}
                  >
                    {m.value}{m.suffix}
                  </div>
                  <div className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    {m.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Philosophy */}
            <motion.div
              custom={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, var(--power-blue-light), var(--cyan-light))",
                border: "1px solid rgba(0,120,212,0.14)",
              }}
            >
              <span className="block text-[11px] text-[var(--power-blue)] mb-3 font-semibold tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                PHILOSOPHY
              </span>
              <blockquote className="text-[var(--text-primary)] text-lg font-semibold leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                &ldquo;The best automation is the one users don&apos;t notice — because it just works.&rdquo;
              </blockquote>
              <p className="text-[var(--text-secondary)] text-sm mt-3 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                I build invisible infrastructure that lets people focus on what they do best.
              </p>
            </motion.div>

            {/* Work approach */}
            <motion.div
              custom={7}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card rounded-xl p-5"
            >
              <span className="block text-[11px] text-[var(--text-muted)] mb-4 font-semibold tracking-wider" style={{ fontFamily: "var(--font-mono)" }}>
                APPROACH
              </span>
              <div className="space-y-3">
                {[
                  "Map the human process before touching any tool",
                  "Choose the right automation level for the problem",
                  "Design for the user who will live with the result",
                  "Measure impact — automate, validate, iterate",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[var(--power-blue)] mt-0.5 flex-shrink-0 font-bold" style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] text-[var(--text-secondary)] leading-snug" style={{ fontFamily: "var(--font-body)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
