"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

function CountUp({ target, suffix = "+" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useCountState(0, inView ? target : 0);
  return <span ref={ref}>{count}{suffix}</span>;
}

function useCountState(initial: number, target: number): [number, React.Dispatch<React.SetStateAction<number>>] {
  const [val, setVal] = [useRef(initial), useRef<ReturnType<typeof setInterval> | null>(null)];
  const [display, setDisplay] = require("react").useState(initial);

  require("react").useEffect(() => {
    if (target === 0) return;
    let cur = 0;
    const step = Math.ceil(target / 22);
    const id = setInterval(() => {
      cur = Math.min(cur + step, target);
      setDisplay(cur);
      if (cur >= target) clearInterval(id);
    }, 55);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  return [display, setDisplay];
}

const dataRows = [
  { label: "displayName", value: "Mohamad Joundi", bold: true },
  { label: "jobTitle",    value: "Power Platform Developer" },
  { label: "company",     value: "CMA CGM Group" },
  { label: "city",        value: "Beirut, Lebanon" },
  { label: "mail",        value: "me@mhmdjnde.dev", link: "mailto:me@mhmdjnde.dev" },
  {
    label: "expertise",
    tags: [
      { label: "Power Apps",    cls: "ac-badge ac-badge-p" },
      { label: "Power Automate",cls: "ac-badge ac-badge-b" },
      { label: "Dataverse",     cls: "ac-badge ac-badge-t" },
    ],
  },
  {
    label: "education",
    tags: [
      { label: "Lebanese University", cls: "ac-badge ac-badge-gy" },
      { label: "42 Beirut",           cls: "ac-badge ac-badge-gy" },
    ],
  },
  {
    label: "availability",
    tags: [{ label: "● Available for selected work", cls: "ac-badge ac-badge-g" }],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{ padding: "96px 80px", maxWidth: 1240, margin: "0 auto" }}
    >
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 18, display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ display: "inline-block", width: 14, height: 1, background: "var(--text3)" }} />
        Get Profile
      </div>

      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44, alignItems: "start" }}
      >

        {/* ── Action card ── */}
        <motion.div
          initial={{ opacity: 0, x: -22 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16,1,0.3,1] }}
          style={{
            background: "var(--bg-card)", border: "1px solid var(--border)",
            borderRadius: "var(--rl)", overflow: "hidden",
            transition: "border-color .3s",
          }}
        >
          {/* Header */}
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "14px 18px", borderBottom: "1px solid var(--border)",
            background: "var(--bg-surface)",
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 8, background: "var(--pa-dim)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17,
            }}>👤</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.15em" }}>Power Apps · Profile</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14 }}>Get User Profile</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontFamily: "var(--font-mono)", fontSize: 11 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "statusPulse 2s infinite" }} />
              <span style={{ color: "var(--green)" }}>Succeeded</span>
            </div>
          </div>

          {/* Body rows */}
          <div style={{ padding: "0 18px" }}>
            {dataRows.map((row, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: 12,
                padding: "10px 0", borderBottom: i < dataRows.length - 1 ? "1px solid var(--border)" : "none",
              }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text3)", minWidth: 95, paddingTop: 3 }}>
                  {row.label}
                </span>
                {"tags" in row && row.tags ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {row.tags.map((t, j) => (
                      <span key={j} className={t.cls} style={{ padding: "2px 7px", borderRadius: 4, fontSize: 10 }}>{t.label}</span>
                    ))}
                  </div>
                ) : "link" in row ? (
                  <a href={row.link} style={{ fontSize: 13, color: "var(--cyan)", textDecoration: "none" }}>{row.value}</a>
                ) : (
                  <span style={{ fontSize: 13, color: "var(--text)", fontWeight: row.bold ? 700 : 400 }}>{row.value}</span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* ── Text side ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16,1,0.3,1] }}
        >
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px,2.5vw,32px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
            I build automation<br />people actually enjoy.
          </h3>
          <p style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
            With a Computer Science degree from Lebanese University and a systems engineering
            background from 42 Beirut, I bridge the gap between complex business processes
            and elegant digital solutions.
          </p>
          <p style={{ color: "var(--text2)", lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
            At CMA CGM — one of the world&apos;s largest shipping groups — I architect and ship
            enterprise-grade Power Platform solutions that automate critical workflows across departments.
          </p>
          <blockquote style={{
            fontStyle: "italic", color: "rgba(180,100,240,1)",
            fontFamily: "var(--font-mono)", fontSize: 13,
            marginTop: 22, paddingLeft: 16,
            borderLeft: "2px solid var(--pa)", lineHeight: 1.6,
          }}>
            &ldquo;The best automation is the one users don&apos;t notice — because it just works.&rdquo;
          </blockquote>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginTop: 28 }}>
            {[
              { target: 12, label: "42 Projects" },
              { target: 5,  label: "Enterprise Apps" },
              { target: 2,  label: "Degrees", suffix: "" },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.07 }}
                style={{
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  borderRadius: "var(--rm)", padding: 18, textAlign: "center",
                  transition: "border-color .3s, transform .3s",
                }}
              >
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 800,
                  background: "linear-gradient(135deg, var(--pa), var(--cyan))",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>
                  {inView ? `${s.target}${s.suffix ?? "+"}` : "0"}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text3)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 4 }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          #about { padding: 72px 22px !important; }
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
