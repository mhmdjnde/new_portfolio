"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { POWER_PLATFORM_SKILLS } from "@/lib/data";

const connectorEmoji: Record<string, string> = {
  apps: "📱", automate: "⚡", dataverse: "🗄️", sharepoint: "📋",
};

const connectorGrad: Record<string, string> = {
  apps:       "linear-gradient(135deg,#742774,#8B2FC9)",
  automate:   "linear-gradient(135deg,#0078D4,#0E8EC7)",
  dataverse:  "linear-gradient(135deg,#0099BC,#00ACCA)",
  sharepoint: "linear-gradient(135deg,#038387,#00A88F)",
};

const badgeCls: Record<string, string> = {
  apps: "ac-badge ac-badge-p", automate: "ac-badge ac-badge-b",
  dataverse: "ac-badge ac-badge-t", sharepoint: "ac-badge ac-badge-g",
};

const extraSkills = [
  { name: "C / C++",      desc: "Low-level systems — memory, processes, sockets, raw performance.", emoji: "⚙️", grad: "linear-gradient(135deg,#3A3A5C,#5A5A8C)", badgeCls: "ac-badge ac-badge-gy", tags: ["Memory Mgmt","Threads","Sockets"] },
  { name: "TypeScript",   desc: "Full-stack web with type safety and modern JavaScript patterns.",  emoji: "🔷", grad: "linear-gradient(135deg,#2060A0,#3178C6)", badgeCls: "ac-badge ac-badge-b",  tags: ["React","Next.js","Node.js"] },
  { name: "JavaScript",   desc: "Frontend scripting, DOM manipulation, and rapid prototyping.",    emoji: "⚡", grad: "linear-gradient(135deg,#856A00,#C4960E)", badgeCls: "ac-badge ac-badge-yw", tags: ["ES2024","DOM","Async/Await"] },
  { name: "Java",         desc: "Object-oriented programming and algorithm fundamentals.",          emoji: "☕", grad: "linear-gradient(135deg,#B04010,#E84135)", badgeCls: "ac-badge ac-badge-yw", tags: ["OOP","Collections","University"] },
  { name: "Python",       desc: "Scripting, data processing, and automation tools.",               emoji: "🐍", grad: "linear-gradient(135deg,#4A8AB8,#5EA8E8)", badgeCls: "ac-badge ac-badge-b",  tags: ["Scripting","Data"] },
  { name: "Kotlin",       desc: "Android app development with Material 3 and bilingual support.",  emoji: "📱", grad: "linear-gradient(135deg,#6040A0,#7F52FF)", badgeCls: "ac-badge ac-badge-vi", tags: ["Android","Material 3"] },
];

function ConnectorCard({ name, desc, emoji, grad, badgeClsVal, tags, delay }:
  { name: string; desc: string; emoji: string; grad: string; badgeClsVal: string; tags: string[]; delay: number }
) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.16,1,0.3,1] }}
      className="shimmer-card"
      style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--rl)", padding: 24, transition: "all .3s" }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 13, marginBottom: 16 }}>
        <div style={{ width: 46, height: 46, borderRadius: 10, background: grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
          {emoji}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15 }}>{name}</div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text3)" }}>Connector</div>
        </div>
      </div>
      <div style={{ fontSize: 13, color: "var(--text2)", lineHeight: 1.6, marginBottom: 18 }}>{desc}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        {tags.map((t, i) => <span key={i} className={badgeClsVal} style={{ padding: "3px 9px", borderRadius: 5, fontSize: 10 }}>{t}</span>)}
      </div>
    </motion.div>
  );
}

export default function PowerPlatform() {
  return (
    <section id="power-platform" style={{ padding: "96px 80px", maxWidth: 1240, margin: "0 auto" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ display: "inline-block", width: 14, height: 1, background: "var(--text3)" }} />
        Connections Gallery
      </div>

      <motion.h2 initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 44 }}>
        Skills &amp;<br />Connectors
      </motion.h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(268px,1fr))", gap: 18, marginBottom: 18 }}>
        {POWER_PLATFORM_SKILLS.map((skill, i) => (
          <ConnectorCard key={skill.name}
            name={skill.name} desc={skill.description}
            emoji={connectorEmoji[skill.icon] ?? "🔌"}
            grad={connectorGrad[skill.icon] ?? "linear-gradient(135deg,var(--pa),var(--paut))"}
            badgeClsVal={badgeCls[skill.icon] ?? "ac-badge ac-badge-b"}
            tags={skill.tags} delay={i * 0.07}
          />
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(268px,1fr))", gap: 18 }}>
        {extraSkills.map((s, i) => (
          <ConnectorCard key={s.name}
            name={s.name} desc={s.desc}
            emoji={s.emoji} grad={s.grad}
            badgeClsVal={s.badgeCls} tags={s.tags} delay={i * 0.07}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) { #power-platform { padding: 72px 22px !important; } }
        .shimmer-card:hover { border-color: var(--border-a) !important; transform: translateY(-4px); box-shadow: 0 18px 44px rgba(0,0,0,0.32); }
      `}</style>
    </section>
  );
}
