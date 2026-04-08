"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { JOURNEY } from "@/lib/data";

const typeStyle: Record<string, { nodeBg: string; badgeBg: string; badgeColor: string; label: string; emoji: string }> = {
  education: { nodeBg: "var(--pa)",   badgeBg: "rgba(139,47,201,.2)",  badgeColor: "rgba(180,100,240,1)", label: "Trigger",   emoji: "⚡" },
  work:      { nodeBg: "var(--paut)", badgeBg: "rgba(14,142,199,.2)",  badgeColor: "rgba(80,170,230,1)",  label: "Action",    emoji: "🚢" },
  milestone: { nodeBg: "var(--green)",badgeBg: "rgba(20,204,128,.2)",  badgeColor: "var(--green)",        label: "Milestone", emoji: "🎓" },
  current:   { nodeBg: "var(--cyan)", badgeBg: "rgba(0,229,255,.18)",  badgeColor: "var(--cyan)",         label: "Running",   emoji: "→" },
};

function TimelineItem({ item, index }: { item: (typeof JOURNEY)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const cfg = typeStyle[item.type] ?? typeStyle.work;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16,1,0.3,1] }}
      style={{ position: "relative", marginBottom: 36 }}
    >
      {/* Node */}
      <div style={{
        position: "absolute", left: -56, top: 18,
        width: 24, height: 24, borderRadius: "50%",
        background: cfg.nodeBg,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, border: "2px solid var(--bg-deep)",
        zIndex: 2,
      }}>
        {cfg.emoji}
      </div>

      {/* Card */}
      <div style={{
        background: "var(--bg-card)", border: "1px solid var(--border)",
        borderRadius: "var(--rl)", overflow: "hidden",
        transition: "border-color .3s",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 18px", background: "var(--bg-surface)",
          borderBottom: "1px solid var(--border)",
        }}>
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 10, padding: "3px 8px",
            borderRadius: 4, textTransform: "uppercase", letterSpacing: "0.1em",
            background: cfg.badgeBg, color: cfg.badgeColor,
          }}>
            {cfg.label}
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)" }}>
            {item.year}
          </span>
        </div>
        <div style={{ padding: 18 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, marginBottom: 4 }}>
            {item.title}
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", marginBottom: 10 }}>
            {item.tags.join(" · ")}
          </div>
          <div style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.65 }}>
            {item.description}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section id="journey" style={{ padding: "96px 80px", maxWidth: 1240, margin: "0 auto" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ display: "inline-block", width: 14, height: 1, background: "var(--text3)" }} />
        Flow History
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 44 }}
      >
        Education &amp;<br />Experience
      </motion.h2>

      {/* Flow timeline */}
      <div style={{ position: "relative", paddingLeft: 56 }}>
        {/* Spine */}
        <div style={{
          position: "absolute", left: 11, top: 0, bottom: 0, width: 2,
          background: "linear-gradient(180deg, var(--pa), var(--paut), var(--dv))",
        }} />

        {JOURNEY.map((item, i) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #journey { padding: 72px 22px !important; }
        }
      `}</style>
    </section>
  );
}
