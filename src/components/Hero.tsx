"use client";

import { motion, type Transition } from "framer-motion";
import { ArrowDown, FileDown, Layers, Send } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } as Transition,
});

// Three rings = three layers of expertise, orbiting the developer at the center
// Outer: Language Foundations — the skills learned before the enterprise world
// Middle: Enterprise Platform — daily tools at CMA CGM, counter-rotating (opposing force)
// Inner: Data Infrastructure — the backbone of every system built (fastest, most essential)
const orbitSkills = [
  { label: "C++",  color: "#8AADCE", r: 280, speed: 22, angle:   0, dir:  1 as const },
  { label: "TS",   color: "#4B8EF5", r: 280, speed: 22, angle: 120, dir:  1 as const },
  { label: "PY",   color: "#FFD27A", r: 280, speed: 22, angle: 240, dir:  1 as const },
  { label: "APPS", color: "#BE4BDB", r: 195, speed: 15, angle:  30, dir: -1 as const },
  { label: "AUTO", color: "#0EA5E9", r: 195, speed: 15, angle: 210, dir: -1 as const },
  { label: "DVS",  color: "#00C8B4", r: 122, speed:  9, angle:  60, dir:  1 as const },
  { label: "SQL",  color: "#F97316", r: 122, speed:  9, angle: 240, dir:  1 as const },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "0 80px", position: "relative", overflow: "hidden",
      }}
    >
      {/* Ambient blobs */}
      <div className="animate-float-slow" style={{
        position: "absolute", left: -80, top: 120,
        width: 360, height: 360, borderRadius: "50%",
        background: "rgba(139,47,201,0.12)", filter: "blur(80px)", pointerEvents: "none",
      }} />
      <div className="animate-float" style={{
        position: "absolute", right: -60, top: 80,
        width: 300, height: 300, borderRadius: "50%",
        background: "rgba(14,142,199,0.1)", filter: "blur(80px)", pointerEvents: "none",
      }} />

      {/* Particle field */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        {Array.from({ length: 20 }).map((_, i) => {
          const colors = ["#8B2FC9","#0E8EC7","#00E5FF","#14CC80"];
          return (
            <div key={i} className="particle" style={{
              left: `${((i * 47 + 11) % 100).toFixed(0)}%`,
              top:  `${((i * 31 + 7)  % 80 + 5).toFixed(0)}%`,
              width: i % 3 === 0 ? 3 : 2, height: i % 3 === 0 ? 3 : 2,
              background: colors[i % 4],
              boxShadow: `0 0 7px ${colors[i % 4]}`,
              ["--dur"  as string]: `${(5 + ((i * 1.3) % 7)).toFixed(1)}s`,
              ["--delay" as string]: `${((i * 0.73) % 5).toFixed(1)}s`,
              ["--drift" as string]: `${(i % 2 === 0 ? 1 : -1) * (6 + (i * 3) % 22)}px`,
            } as React.CSSProperties} />
          );
        })}
      </div>

      {/* Two-column grid: text left, photo right */}
      <div className="hero-grid" style={{ position: "relative", zIndex: 2, width: "100%", display: "grid", gridTemplateColumns: "1fr 760px", alignItems: "center", gap: 40 }}>

        {/* Left: text content */}
        <div style={{ maxWidth: 620 }}>
          {/* Trigger badge */}
          <motion.div {...fadeUp(0)}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "var(--pa-dim)", border: "1px solid rgba(139,47,201,0.4)",
              borderRadius: 100, padding: "7px 16px", marginBottom: 28,
              fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(180,100,240,1)",
            }}>
              <span style={{
                width: 20, height: 20, background: "var(--pa)", borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11,
              }}>⚡</span>
              Trigger: When a visitor arrives
            </div>
          </motion.div>

          <motion.p {...fadeUp(0.1)} style={{
            fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--cyan)", marginBottom: 14,
          }}>
            // Power Platform Developer · CMA CGM
          </motion.p>

          <motion.h1 {...fadeUp(0.2)} style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 100px)",
            fontWeight: 800, lineHeight: 0.92,
            letterSpacing: "-0.03em", marginBottom: 22,
          }}>
            {PERSONAL.firstName}<br />
            <span style={{
              background: "linear-gradient(135deg, var(--pa) 0%, var(--cyan) 50%, var(--paut) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              display: "inline-block",
            }}>
              {PERSONAL.lastName}
            </span>
          </motion.h1>

          <motion.p {...fadeUp(0.3)} style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(16px,2.2vw,22px)",
            fontWeight: 400, color: "var(--text2)", marginBottom: 28,
          }}>
            Turning Chaos Into Enterprise-Grade Systems
          </motion.p>

          <motion.p {...fadeUp(0.4)} style={{
            fontSize: 16, lineHeight: 1.75, color: "var(--text2)",
            maxWidth: 520, marginBottom: 44,
          }}>
            CS graduate from <strong style={{ color: "var(--text)" }}>Lebanese University</strong> and{" "}
            <strong style={{ color: "var(--text)" }}>42 Beirut</strong>, currently designing internal tools,
            flows, and process architecture at{" "}
            <strong style={{ color: "var(--paut)" }}>CMA CGM</strong>.
          </motion.p>

          <motion.div {...fadeUp(0.5)} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" className="btn-primary">
              <Layers size={15} />
              View projects
            </a>
            <a href="#contact" className="btn-ghost">
              <Send size={15} />
              Let&apos;s work together
            </a>
            <a href={PERSONAL.cvUrl} download className="btn-ghost">
              <FileDown size={15} />
              Download CV
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div {...fadeUp(0.62)} style={{
            display: "flex", alignItems: "center", gap: 14, marginTop: 32, flexWrap: "wrap",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--text3)" }}>
              Find me on
            </span>
            <div style={{ height: 1, width: 40, background: "var(--border-lg)" }} />
            <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer"
              style={{
                width: 38, height: 38, borderRadius: 10,
                border: "1px solid var(--border-lg)", background: "rgba(255,255,255,0.03)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text2)", textDecoration: "none", transition: "all .2s",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer"
              style={{
                width: 38, height: 38, borderRadius: 10,
                border: "1px solid var(--border-lg)", background: "rgba(255,255,255,0.03)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--text2)", textDecoration: "none", transition: "all .2s",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: Photo — portrait with dual-spectrum creative frame */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 48, scale: 0.94 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.95, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0, width: 420, height: 520 }}
        >
          {/* Dual ambient glows — echoing the photo's own studio lighting */}
          {/* Teal: left-bottom (cool light side) */}
          <div style={{
            position: "absolute", bottom: -50, left: -20, width: 280, height: 280,
            borderRadius: "50%", filter: "blur(52px)", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(0,200,210,0.26) 0%, transparent 68%)",
          }} />
          {/* Amber: top-right (warm light side) */}
          <div style={{
            position: "absolute", top: -30, right: -30, width: 220, height: 220,
            borderRadius: "50%", filter: "blur(44px)", pointerEvents: "none",
            background: "radial-gradient(circle, rgba(255,128,48,0.18) 0%, transparent 68%)",
          }} />

          {/* Outer rotating arc — teal → purple → amber gradient, clockwise */}
          <motion.div
            style={{ position: "absolute", width: 430, height: 530, pointerEvents: "none", zIndex: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
          >
            <svg width="430" height="530" viewBox="0 0 430 530" fill="none" style={{ position: "absolute", inset: 0 }}>
              <defs>
                <linearGradient id="arc1" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#00C8D2" stopOpacity="0.95" />
                  <stop offset="55%"  stopColor="#7B4FE0" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FF8830" stopOpacity="0.90" />
                </linearGradient>
              </defs>
              <rect x="1" y="1" width="428" height="528" rx="26"
                stroke="url(#arc1)" strokeWidth="1.5"
                strokeDasharray="210 1000" strokeLinecap="round" fill="none"
              />
            </svg>
          </motion.div>

          {/* Inner counter-rotating arc — purple, slower */}
          <motion.div
            style={{ position: "absolute", width: 408, height: 508, pointerEvents: "none", zIndex: 1 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 19, repeat: Infinity, ease: "linear" }}
          >
            <svg width="408" height="508" viewBox="0 0 408 508" fill="none" style={{ position: "absolute", inset: 0 }}>
              <rect x="1" y="1" width="406" height="506" rx="22"
                stroke="rgba(139,47,201,0.38)" strokeWidth="1"
                strokeDasharray="85 960" strokeLinecap="round" fill="none"
              />
            </svg>
          </motion.div>

          {/* Third arc — very thin amber, mid-speed */}
          <motion.div
            style={{ position: "absolute", width: 446, height: 546, pointerEvents: "none", zIndex: 1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
          >
            <svg width="446" height="546" viewBox="0 0 446 546" fill="none" style={{ position: "absolute", inset: 0 }}>
              <rect x="1" y="1" width="444" height="544" rx="30"
                stroke="rgba(255,128,48,0.22)" strokeWidth="0.75"
                strokeDasharray="50 1100" strokeLinecap="round" fill="none"
              />
            </svg>
          </motion.div>

          {/* Corner ornaments — L-brackets in dual accent colors */}
          {/* Top-left — teal */}
          <div style={{ position: "absolute", top: -2, left: -2, zIndex: 10, pointerEvents: "none" }}>
            <div style={{ width: 34, height: 2, background: "linear-gradient(to right, #00C8D2, transparent)", borderRadius: 1 }} />
            <div style={{ width: 2, height: 34, background: "linear-gradient(to bottom, #00C8D2, transparent)", borderRadius: 1, marginTop: -2 }} />
          </div>
          {/* Top-right — amber */}
          <div style={{ position: "absolute", top: -2, right: -2, zIndex: 10, pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <div style={{ width: 34, height: 2, background: "linear-gradient(to left, #FF8830, transparent)", borderRadius: 1 }} />
            <div style={{ width: 2, height: 34, background: "linear-gradient(to bottom, #FF8830, transparent)", borderRadius: 1, marginTop: -2 }} />
          </div>
          {/* Bottom-left — purple */}
          <div style={{ position: "absolute", bottom: -2, left: -2, zIndex: 10, pointerEvents: "none", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ width: 2, height: 34, background: "linear-gradient(to top, #8B2FC9, transparent)", borderRadius: 1 }} />
            <div style={{ width: 34, height: 2, background: "linear-gradient(to right, #8B2FC9, transparent)", borderRadius: 1, marginTop: -2 }} />
          </div>
          {/* Bottom-right — teal dim */}
          <div style={{ position: "absolute", bottom: -2, right: -2, zIndex: 10, pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end" }}>
            <div style={{ width: 2, height: 34, background: "linear-gradient(to top, rgba(0,200,210,0.48), transparent)", borderRadius: 1 }} />
            <div style={{ width: 34, height: 2, background: "linear-gradient(to left, rgba(0,200,210,0.48), transparent)", borderRadius: 1, marginTop: -2 }} />
          </div>

          {/* Ruler ticks — left edge */}
          <div style={{ position: "absolute", left: -18, top: 90, zIndex: 10, pointerEvents: "none", display: "flex", flexDirection: "column", gap: 13 }}>
            {[10, 6, 6, 10, 6, 6, 10, 6, 6, 10, 6, 6].map((w, i) => (
              <div key={i} style={{ width: w, height: 1, background: `rgba(0,200,210,${w === 10 ? 0.55 : 0.22})` }} />
            ))}
          </div>

          {/* Photo */}
          <div style={{
            position: "relative", zIndex: 2,
            borderRadius: "4px 22px 4px 22px",
            overflow: "hidden",
            width: 375, height: 490,
            boxShadow: "0 32px 80px rgba(0,0,0,0.82), 0 0 0 1px rgba(0,200,210,0.10), 0 0 55px rgba(0,200,210,0.09)",
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/profile.png"
              alt="Mohamad Joundi"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 18%", display: "block" }}
            />
            {/* Bottom fade */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, height: "28%",
              background: "linear-gradient(to top, rgba(7,7,28,0.72) 0%, transparent 100%)",
              pointerEvents: "none",
            }} />
            {/* Subtle left teal wash — mirrors the photo's cool side lighting */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(0,200,210,0.06) 0%, transparent 38%)",
              pointerEvents: "none",
            }} />
          </div>

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.88, duration: 0.5 }}
            style={{
              position: "absolute", bottom: 14, left: -28, zIndex: 12,
              background: "rgba(7,7,28,0.90)", border: "1px solid rgba(0,200,210,0.28)",
              borderRadius: 12, padding: "9px 15px",
              fontFamily: "var(--font-mono)", fontSize: 11, color: "#00C8D2",
              display: "flex", alignItems: "center", gap: 8,
              backdropFilter: "blur(18px)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,200,210,0.07)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", animation: "statusPulse 2s infinite", flexShrink: 0 }} />
            Available for selected work
          </motion.div>

          {/* Role badge — amber accent to match the photo's warm side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.02, duration: 0.45, type: "spring", stiffness: 280 }}
            style={{
              position: "absolute", top: 14, right: -28, zIndex: 12,
              background: "rgba(7,7,28,0.90)", border: "1px solid rgba(255,128,48,0.30)",
              borderRadius: 10, padding: "7px 13px",
              fontFamily: "var(--font-mono)", fontSize: 10, color: "rgba(255,160,80,1)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)",
            }}
          >
            CMA CGM · Dev
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        style={{
          position: "absolute", bottom: 40, left: 80,
          display: "inline-flex", alignItems: "center", gap: 8,
          fontFamily: "var(--font-mono)", fontSize: 11,
          textTransform: "uppercase", letterSpacing: "0.18em",
          color: "var(--text3)", textDecoration: "none", transition: "color .2s",
        }}
      >
        Scroll to explore <ArrowDown size={13} />
      </motion.a>

      <style>{`
        @media (max-width: 1180px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .hero-photo { display: none !important; }
        }
        @media (max-width: 900px) {
          #hero { padding: 80px 24px 60px !important; }
        }
      `}</style>
    </section>
  );
}
