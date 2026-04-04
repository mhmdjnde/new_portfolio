"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Star, ArrowRight } from "lucide-react";
import { JOURNEY } from "@/lib/data";

const typeConfig = {
  education: { icon: GraduationCap, color: "#742774", bg: "#F5EAF5", label: "Education" },
  work: { icon: Briefcase, color: "#0078D4", bg: "#EEF6FC", label: "Work" },
  milestone: { icon: Star, color: "#0099BC", bg: "#EAF7FB", label: "Milestone" },
  current: { icon: ArrowRight, color: "#107C10", bg: "#ECF7EC", label: "Present" },
};

function TimelineItem({ item, index, total }: { item: (typeof JOURNEY)[0]; index: number; total: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cfg = typeConfig[item.type as keyof typeof typeConfig];
  const isLast = index === total - 1;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex gap-0 md:gap-0 items-start ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Content panel */}
      <div className={`flex-1 ${isEven ? "md:pr-10" : "md:pl-10"}`}>
        <div className="card-elevated rounded-2xl p-7 hover:shadow-md transition-all group">
          <div className={`flex items-start gap-3 mb-4 ${isEven ? "md:flex-row-reverse md:text-right" : ""}`}>
            <span
              className="tag flex-shrink-0"
              style={{ background: cfg.bg, border: `1px solid ${cfg.color}22`, color: cfg.color, fontFamily: "var(--font-mono)" }}
            >
              {cfg.label}
            </span>
            <span
              className="text-xl font-bold flex-shrink-0"
              style={{ fontFamily: "var(--font-mono)", color: cfg.color }}
            >
              {item.year}
            </span>
          </div>

          <h3
            className={`text-xl font-bold text-[var(--text-primary)] mb-3 ${isEven ? "md:text-right" : ""}`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            {item.title}
          </h3>
          <p
            className={`text-[15px] text-[var(--text-secondary)] leading-relaxed mb-4 ${isEven ? "md:text-right" : ""}`}
            style={{ fontFamily: "var(--font-body)" }}
          >
            {item.description}
          </p>

          <div className={`flex flex-wrap gap-1.5 ${isEven ? "md:justify-end" : ""}`}>
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-2.5 py-1 rounded-lg"
                style={{ fontFamily: "var(--font-mono)", background: cfg.bg, border: `1px solid ${cfg.color}18`, color: cfg.color }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Center spine — desktop */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute top-8 w-0.5 origin-top"
            style={{ height: "calc(100% + 2rem)", background: `linear-gradient(to bottom, ${cfg.color}35, ${typeConfig[JOURNEY[index + 1]?.type as keyof typeof typeConfig]?.color ?? "#0078D4"}18)` }}
          />
        )}
        {/* Node */}
        <div
          className="relative z-10 w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
          style={{ background: cfg.bg, border: `2px solid ${cfg.color}35` }}
        >
          <cfg.icon size={16} style={{ color: cfg.color }} />
          {item.type === "current" && (
            <span className="absolute inset-0 rounded-xl animate-ping opacity-20" style={{ border: `2px solid ${cfg.color}` }} />
          )}
        </div>
      </div>

      {/* Mobile icon */}
      <div className="md:hidden flex-shrink-0">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: cfg.bg, border: `2px solid ${cfg.color}35` }}
        >
          <cfg.icon size={15} style={{ color: cfg.color }} />
        </div>
        {!isLast && <div className="w-0.5 mx-auto mt-1" style={{ height: "2rem", background: `${cfg.color}25` }} />}
      </div>

      <div className="hidden md:block flex-1" />
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section id="journey" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-18"
        >
          <span className="tag tag-purple mb-5 inline-block">Timeline</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            My <span className="text-gradient-purple">Journey</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            From first CS lecture to enterprise automation engineer — a disciplined progression.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {JOURNEY.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} total={JOURNEY.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
