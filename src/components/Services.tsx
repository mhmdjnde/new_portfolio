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
    <section id="services" className="relative py-28 md:py-36">
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

        <div className="grid gap-6 lg:grid-cols-2">
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
                className="shimmer-card grad-border-hover card-elevated group relative overflow-hidden rounded-[1.9rem] p-8 md:p-9"
              >
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${color.accent}, transparent)` }}
                />
                {/* Corner ambient glow */}
                <div
                  className="absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: `${color.accent}28` }}
                />

                <div className="relative flex h-full flex-col" style={{ padding: "0.42rem" }}>
                  <div className="mb-8 flex items-start justify-between gap-4">
                    <div className="flex items-center gap-5">
                      {/* ── Enhanced icon with animated ring ── */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                          style={{
                            background: `linear-gradient(135deg, ${color.wash}, ${color.accent}22)`,
                            border: `1px solid ${color.accent}35`,
                            boxShadow: `0 8px 24px ${color.accent}22`,
                          }}
                        >
                          <Icon size={28} style={{ color: color.accent }} />
                        </div>
                        {/* Spinning ring — appears on card hover */}
                        <div
                          className="absolute -inset-1.5 rounded-[1.35rem] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none"
                          style={{
                            background: `conic-gradient(from 0deg, ${color.accent}00 0deg, ${color.accent} 80deg, ${color.accent}00 160deg)`,
                            animation: "spin-orbit 5s linear infinite",
                          }}
                        />
                        <div
                          className="absolute -inset-1 rounded-[1.25rem] pointer-events-none"
                          style={{
                            background: "linear-gradient(160deg,rgba(12,22,38,0.97),rgba(6,12,22,0.97))",
                            zIndex: -1,
                          }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Service {String(index + 1).padStart(2, "0")}
                        </p>
                        <h3
                          className="mt-2 text-2xl font-bold text-[var(--text-primary)]"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mb-8 max-w-xl text-[15.5px] leading-9 text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  <div className="space-y-3.5">
                    {service.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-3.5 transition-all hover:border-[var(--border-mid)] hover:bg-[rgba(255,255,255,0.04)]"
                      >
                        <CheckCircle2 size={15} style={{ color: color.accent, flexShrink: 0, marginTop: 2 }} />
                        <span className="text-sm leading-6 text-[var(--text-secondary)]">{point}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3"
                    style={{ color: color.accent }}
                  >
                    Solution design, delivery, and iteration
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
