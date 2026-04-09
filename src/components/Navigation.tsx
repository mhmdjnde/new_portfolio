"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const navItems = [
  {
    id: "hero",
    label: "Home",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    id: "about",
    label: "About",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "power-platform",
    label: "Skills",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    id: "journey",
    label: "Journey",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    id: "services",
    label: "Services",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
        <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
];

function BrandMark() {
  const gradientId = useId();

  return (
    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-cyan-400/20 bg-[#070b1a]/85 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-blue-500/10 to-purple-500/10" />
      <div className="absolute inset-0 shadow-[0_0_25px_rgba(34,211,238,0.10)]" />

      <svg
        viewBox="0 0 64 64"
        className="relative z-10 h-7 w-7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={gradientId} x1="8" y1="10" x2="56" y2="54" gradientUnits="userSpaceOnUse">
            <stop stopColor="#67E8F9" />
            <stop offset="0.5" stopColor="#3B82F6" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        <path
          d="M12 50V14L24 31L32 20L40 31L52 14V50"
          stroke={`url(#${gradientId})`}
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? window.scrollY / docH : 0);

      let current = "hero";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop - 120 <= window.scrollY) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct * 100}%`, transition: "width 0.1s linear" }}
      />

      {/* ── Desktop sidebar ── */}
      <nav
        style={{
          position: "fixed", left: 0, top: 0, bottom: 0, width: "var(--nav-w)",
          background: "rgba(7,7,26,0.88)", backdropFilter: "blur(24px)",
          borderRight: "1px solid var(--border)",
          zIndex: 100, flexDirection: "column",
          alignItems: "center", padding: "18px 0", gap: "6px",
        }}
        className="hidden md:flex"
      >
        {/* Brand */}
        <a
          href="#hero"
          style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            textDecoration: "none", marginBottom: 16,
            transition: "all .3s",
          }}
        >
          <BrandMark />
        </a>

        <div style={{ width: 28, height: 1, background: "var(--border)", margin: "6px 0" }} />

        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            title={item.label}
            style={{
              width: 42, height: 42, borderRadius: 10,
              display: "flex", alignItems: "center", justifyContent: "center",
              textDecoration: "none", position: "relative", transition: "all .25s",
              color: active === item.id ? "var(--cyan)" : "var(--text3)",
              background: active === item.id ? "var(--bg-surface)" : "transparent",
            }}
          >
            {item.icon}
            {/* Tooltip */}
            <span style={{
              position: "absolute", left: "calc(100% + 12px)", top: "50%",
              transform: "translateY(-50%)",
              background: "var(--bg-card)", border: "1px solid var(--border-lg)",
              padding: "5px 10px", borderRadius: "var(--r)",
              fontFamily: "var(--font-mono)", fontSize: 12, whiteSpace: "nowrap",
              color: "var(--text)",
              opacity: 0, pointerEvents: "none", transition: "opacity .2s",
            }}
              className="nav-tooltip"
            >
              {item.label}
            </span>
          </a>
        ))}

        {/* Status */}
        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
          <div style={{
            width: 7, height: 7, borderRadius: "50%",
            background: "var(--green)", animation: "statusPulse 2s ease-in-out infinite",
          }} />
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--green)",
            writingMode: "vertical-rl", textTransform: "uppercase", letterSpacing: "0.15em",
          }}>Running</span>
        </div>
      </nav>

      {/* ── Mobile top bar ── */}
      <div
        className="flex md:hidden"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          background: "rgba(7,7,26,0.92)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          alignItems: "center", justifyContent: "space-between",
          padding: "12px 20px",
        }}
      >
        <a href="#hero" style={{
          display: "flex", alignItems: "center", gap: 10, textDecoration: "none",
        }}>
          <BrandMark />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text)" }}>
            {PERSONAL.handle}<span style={{ color: "var(--cyan)" }}>.dev</span>
          </span>
        </a>
        <button
          onClick={() => setMobileOpen(v => !v)}
          style={{
            width: 40, height: 40, borderRadius: 10,
            border: "1px solid var(--border-lg)", background: "rgba(255,255,255,0.03)",
            color: "var(--text)", display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={mobileOpen ? "x" : "m"}
              initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: "fixed", inset: 0, zIndex: 98, background: "rgba(4,4,15,0.7)", backdropFilter: "blur(4px)" }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "fixed", top: "4.5rem", left: 12, right: 12, zIndex: 99,
                background: "rgba(10,10,32,0.96)", border: "1px solid var(--border-lg)",
                borderRadius: 20, padding: 10,
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)", backdropFilter: "blur(24px)",
              }}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "12px 16px", borderRadius: 12, textDecoration: "none",
                    background: active === item.id ? "rgba(255,255,255,0.04)" : "transparent",
                    color: active === item.id ? "var(--text)" : "var(--text2)",
                    transition: "all .2s",
                  }}
                >
                  {item.icon}
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 14 }}>{item.label}</span>
                  {active === item.id && (
                    <span style={{ marginLeft: "auto", width: 7, height: 7, borderRadius: "50%", background: "var(--cyan)" }} />
                  )}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="btn-primary"
                style={{ marginTop: 8, width: "100%", justifyContent: "center" }}
              >
                Start a project
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .nav-tooltip { opacity: 0; }
          nav a:hover .nav-tooltip { opacity: 1 !important; }
        }
      `}</style>
    </>
  );
}
