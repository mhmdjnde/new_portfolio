"use client";

import { motion } from "framer-motion";
import { Zap, GitBranch, Link2, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  workflow: Zap,
  apps: GitBranch,
  chart: Link2,
  architecture: Layers,
};

export default function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 dot-bg opacity-50" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <span className="tag tag-purple mb-5 inline-block">Services</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What I
            <span className="text-gradient-purple"> Build</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            From idea to deployed automation — end-to-end Power Platform expertise.
          </p>
        </motion.div>

        {/* Action cards — styled like Power Automate action blocks */}
        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Zap;
            const colors = [
              { accent: "#0078D4", bg: "#EEF6FC", border: "rgba(0,120,212,0.18)" },
              { accent: "#742774", bg: "#F5EAF5", border: "rgba(116,39,116,0.18)" },
              { accent: "#0099BC", bg: "#EAF7FB", border: "rgba(0,153,188,0.18)" },
              { accent: "#CA3CCA", bg: "#FCF0FD", border: "rgba(202,60,202,0.18)" },
            ][i % 4];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="pa-card p-7 relative overflow-hidden group hover:shadow-md transition-all"
              >
                {/* Background index number */}
                <span
                  className="absolute top-5 right-6 text-6xl font-extrabold opacity-[0.035]"
                  style={{ fontFamily: "var(--font-display)", color: colors.accent }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon — PA action style */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: colors.accent }}
                  >
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                      {service.title}
                    </h3>
                    <span className="text-[10px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                      Power Platform · Action
                    </span>
                  </div>
                </div>

                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-5" style={{ fontFamily: "var(--font-body)" }}>
                  {service.description}
                </p>

                <div className="space-y-2 mb-5">
                  {service.points.map((point, pi) => (
                    <div key={pi} className="flex items-center gap-2">
                      <CheckCircle2 size={11} style={{ color: colors.accent, flexShrink: 0 }} />
                      <span className="text-[13.5px] text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  <span className="text-[12px] font-semibold" style={{ fontFamily: "var(--font-mono)", color: colors.accent }}>
                    Learn more
                  </span>
                  <ArrowRight size={12} style={{ color: colors.accent }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, var(--power-blue-light), var(--cyan-light))",
            border: "1px solid rgba(0,120,212,0.16)",
          }}
        >
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2" style={{ fontFamily: "var(--font-display)" }}>
            Have a process that needs automating?
          </h3>
          <p className="text-[var(--text-secondary)] text-[16px] mb-5 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Let&apos;s talk about how Power Platform can transform your workflow.
          </p>
          <a href="#contact" className="btn-primary inline-flex">
            Start a conversation
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
