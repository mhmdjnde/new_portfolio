"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, GitBranch, Layers, Link2, Zap } from "lucide-react";
import { SERVICES } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  workflow: Zap,
  apps: GitBranch,
  chart: Link2,
  architecture: Layers,
};

const serviceColors = [
  { accent: "#47A4FF", wash: "rgba(71,164,255,0.1)" },
  { accent: "#9A97FF", wash: "rgba(126,124,255,0.1)" },
  { accent: "#43D6C9", wash: "rgba(67,214,201,0.1)" },
  { accent: "#F4B860", wash: "rgba(244,184,96,0.12)" },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="dot-bg absolute inset-0 opacity-40" />
      <div className="section-line absolute inset-x-0 top-0" />

      <div className="section-container relative">
        <div className="section-heading">
          <span className="section-eyebrow">Services</span>
          <h2>
            Strategic automation,
            <span className="text-gradient-purple"> designed to stay usable</span>
          </h2>
          <p>
            I help turn operational friction into well-structured tools, guided workflows, and systems people can
            actually adopt without feeling overwhelmed.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] ?? Zap;
            const color = serviceColors[index % serviceColors.length];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="card-elevated relative overflow-hidden rounded-[1.9rem] p-7 md:p-8"
              >
                <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)` }} />

                <div className="relative flex h-full flex-col">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl" style={{ background: color.wash, border: `1px solid ${color.accent}30` }}>
                        <Icon size={20} style={{ color: color.accent }} />
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                          Service {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">{service.title}</h3>
                      </div>
                    </div>
                    <span className="rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.16em]" style={{ fontFamily: "var(--font-mono)", background: color.wash, color: color.accent, border: `1px solid ${color.accent}24` }}>
                      Built to fit the process
                    </span>
                  </div>

                  <p className="mb-6 max-w-xl text-[15.5px] leading-8 text-[var(--text-secondary)]">{service.description}</p>

                  <div className="space-y-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5">
                        <CheckCircle2 size={15} style={{ color: color.accent, flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm leading-6 text-[var(--text-secondary)]">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium" style={{ color: color.accent }}>
                    Solution design, delivery, and iteration
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="card-elevated mt-10 rounded-[2rem] px-7 py-8 text-center md:px-10"
        >
          <p className="section-eyebrow mx-auto w-fit">Workflow Fit</p>
          <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Good automation feels lighter, not louder.
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-8 text-[var(--text-secondary)]">
            The goal is not to add more screens or more steps. It&apos;s to reduce friction, make decisions clearer, and let
            teams move with confidence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
