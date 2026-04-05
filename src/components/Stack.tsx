"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  Platform: "#742774",
  "Microsoft 365": "#0078D4",
  Systems: "#4A5568",
  Mobile: "#7F52FF",
  Web: "#C4960E",
  Scripting: "#2B6CB0",
  DevOps: "#C53030",
  Integration: "#742774",
  Data: "#0099BC",
};

export default function Stack() {
  const categories = [...new Set(TECH_STACK.map((t) => t.category))];

  return (
    <section id="stack" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative section-container">
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

        <div className="space-y-10 md:space-y-12">
          {categories.map((cat, ci) => {
            const items = TECH_STACK.filter((t) => t.category === cat);
            const catColor = CATEGORY_COLORS[cat] ?? "#0078D4";
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ci * 0.06 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="text-[11px] font-semibold tracking-widest uppercase"
                    style={{ fontFamily: "var(--font-mono)", color: catColor }}
                  >
                    {cat}
                  </span>
                  <div className="h-px flex-1 opacity-18" style={{ background: catColor, maxWidth: 80 }} />
                </div>
                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {items.map((tech, ti) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.32, delay: ti * 0.04 + ci * 0.04 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="relative group cursor-default"
                    >
                      <div
                        className="card rounded-xl px-4 py-2.5 text-[14px] font-medium transition-all"
                        style={{
                          fontFamily: "var(--font-body)",
                          color: tech.color,
                          borderColor: `${tech.color}18`,
                          background: `${tech.color}08`,
                        }}
                      >
                        {tech.name}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Power Automate connector catalog scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mt-16 overflow-hidden rounded-[2rem]"
        >
          <div className="border-b border-[var(--border-subtle)] p-5">
            <span
              className="text-[11px] text-[var(--text-muted)] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Power Automate · Connector Library
            </span>
          </div>
          <div className="relative overflow-hidden p-5" style={{ height: 60 }}>
            <motion.div
              animate={{ x: [0, -1600] }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
              className="flex items-center gap-3 absolute whitespace-nowrap"
            >
              {[
                "SharePoint", "Microsoft Teams", "Dataverse", "HTTP", "Office 365 Outlook",
                "SQL Server", "Excel Online", "OneDrive", "Approvals", "Notifications",
                "Custom Connector", "JSON", "XML", "FTP", "Power Apps Notification",
                "SharePoint", "Microsoft Teams", "Dataverse", "HTTP", "Office 365 Outlook",
                "SQL Server", "Excel Online", "OneDrive", "Approvals", "Notifications",
              ].map((name, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs pa-card"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--power-blue)", borderColor: "rgba(0,120,212,0.14)", flexShrink: 0 }}
                >
                  {name}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
