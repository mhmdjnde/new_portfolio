"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Platform:        "#742774",
  "Microsoft 365": "#0078D4",
  Systems:         "#8A9FBA",
  Mobile:          "#7F52FF",
  Web:             "#38BDF8",
  Scripting:       "#5EA8E8",
  DevOps:          "#F07070",
  Data:            "#0099BC",
};

const CONNECTORS = [
  "SharePoint", "Dataverse", "HTTP", "Office 365 Outlook",
  "SQL Server", "Excel Online", "OneDrive", "Approvals", "Notifications",
  "Azure Blob", "JSON", "XML", "FTP", "Power Apps Notification", "Planner",
  "SharePoint", "Dataverse", "HTTP", "Office 365 Outlook",
  "SQL Server", "Excel Online", "OneDrive", "Approvals", "Notifications",
];

// Category display order — Platform first (full-width)
const CATEGORY_ORDER = ["Platform", "Microsoft 365", "Systems", "Web", "Mobile", "Scripting", "DevOps", "Data"];

export default function Stack() {
  const orderedCategories = CATEGORY_ORDER.filter((cat) =>
    TECH_STACK.some((t) => t.category === cat)
  );

  return (
    <section id="stack" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-heading text-left"
        >
          <span className="tag tag-purple mb-5 inline-block">Stack</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Tools &amp;
            <span className="text-gradient-purple"> Ecosystem</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            The full toolkit across automation, systems, mobile, and web.
          </p>
        </motion.div>

        {/* Category grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {orderedCategories.map((cat, ci) => {
            const items = TECH_STACK.filter((t) => t.category === cat);
            const catColor = CATEGORY_COLORS[cat] ?? "#0078D4";
            const isPrimary = cat === "Platform";

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.05 }}
                className={`relative overflow-hidden rounded-[1.5rem] ${isPrimary ? "md:col-span-2 lg:col-span-2" : ""}`}
                style={{
                  background: "linear-gradient(150deg, rgba(10,20,34,0.96), rgba(5,11,22,0.98))",
                  border: `1px solid ${catColor}20`,
                  padding: "1.4rem 1.6rem",
                }}
              >
                {/* Top gradient line */}
                <div
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${catColor}90, ${catColor}30, transparent)` }}
                />
                {/* Left accent bar */}
                <div
                  className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full"
                  style={{ background: `linear-gradient(180deg, ${catColor}, transparent)` }}
                />
                {/* Corner glow */}
                <div
                  className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl opacity-[0.08]"
                  style={{ background: catColor }}
                />

                <div className="relative pl-2">
                  {/* Category label */}
                  <div className="mb-4 flex items-center gap-2.5">
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                      style={{ fontFamily: "var(--font-mono)", color: catColor }}
                    >
                      {cat}
                    </span>
                    <div className="h-px flex-1 opacity-20" style={{ background: catColor, maxWidth: "3rem" }} />
                  </div>

                  {/* Tech chips */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((tech, ti) => (
                      <motion.span
                        key={tech.name}
                        initial={{ opacity: 0, scale: 0.88 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.28, delay: ti * 0.05 + ci * 0.03 }}
                        whileHover={{ scale: 1.06, y: -1 }}
                        className="cursor-default rounded-lg px-3 py-1.5 text-[12px] font-medium"
                        style={{
                          fontFamily: "var(--font-mono)",
                          background: `${tech.color}0e`,
                          border: `1px solid ${tech.color}28`,
                          color: tech.color,
                        }}
                      >
                        {tech.name}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Power Automate connector catalog */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="overflow-hidden rounded-[1.75rem]"
          style={{
            marginTop: "0.51rem",
            background: "linear-gradient(150deg, rgba(0,60,120,0.14), rgba(0,30,70,0.1))",
            border: "1px solid rgba(71,164,255,0.16)",
            padding: "0.41rem",
          }}
        >
          <div
            className="overflow-hidden rounded-[1.4rem]"
            style={{
              background: "rgba(0,10,25,0.6)",
              border: "1px solid rgba(71,164,255,0.1)",
            }}
          >
            {/* Header bar */}
            <div
              className="flex items-center justify-between px-5 py-3"
              style={{ borderBottom: "1px solid rgba(71,164,255,0.1)", background: "rgba(0,120,212,0.05)" }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-1.5 w-1.5 rounded-full bg-[#47A4FF] animate-pulse" />
                <span
                  className="text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Power Automate · Connector Library
                </span>
              </div>
              <span
                className="text-[9px] font-bold tracking-widest"
                style={{ fontFamily: "var(--font-mono)", color: "rgba(71,164,255,0.55)" }}
              >
                LIVE
              </span>
            </div>

            {/* Scrolling connectors */}
            <div className="relative overflow-hidden flex items-center" style={{ height: 52 }}>
              {/* Fade masks */}
              <div className="absolute left-0 top-0 bottom-0 w-14 z-10 pointer-events-none" style={{ background: "linear-gradient(90deg, rgba(0,10,25,0.9), transparent)" }} />
              <div className="absolute right-0 top-0 bottom-0 w-14 z-10 pointer-events-none" style={{ background: "linear-gradient(270deg, rgba(0,10,25,0.9), transparent)" }} />

              <motion.div
                animate={{ x: [0, -1680] }}
                transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
                className="flex items-center gap-2.5 absolute whitespace-nowrap pl-6"
              >
                {CONNECTORS.map((name, i) => (
                  <span
                    key={i}
                    className="rounded-full px-3.5 py-1.5 text-[11px]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "rgba(71,164,255,0.85)",
                      background: "rgba(71,164,255,0.07)",
                      border: "1px solid rgba(71,164,255,0.18)",
                      flexShrink: 0,
                    }}
                  >
                    {name}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
