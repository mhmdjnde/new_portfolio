"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X, Zap } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Platform", href: "#power-platform" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? window.scrollY / docH : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["hero", ...navLinks.map((link) => link.href.slice(1))];

    const updateActive = () => {
      const offset = 100;
      const scrollY = window.scrollY;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= scrollY) {
          current = id;
        }
      }
      setActive(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollPct * 100}%`, transition: "width 0.1s linear" }}
      />

      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="section-container py-4">
          <div
            className="mx-auto flex max-w-5xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-300 md:px-4"
            style={{
              background: scrolled ? "rgba(10, 22, 36, 0.78)" : "rgba(10, 22, 36, 0.42)",
              border: scrolled ? "1px solid rgba(173, 201, 255, 0.14)" : "1px solid rgba(173, 201, 255, 0.08)",
              boxShadow: scrolled ? "0 20px 60px rgba(0,0,0,0.28)" : "none",
              backdropFilter: "blur(22px)",
            }}
          >
            <a href="#hero" className="flex items-center gap-3 rounded-full px-2 py-1.5 text-[var(--text-primary)] transition-opacity hover:opacity-90">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--power-blue),var(--automate-purple))] shadow-[0_10px_30px_rgba(71,164,255,0.2)]">
                <Zap size={15} className="text-white" strokeWidth={2.5} />
              </div>
              <div className="hidden sm:block">
                <p className="text-[0.95rem] font-semibold tracking-[0.01em]" style={{ fontFamily: "var(--font-display)" }}>
                  {PERSONAL.handle}<span className="text-gradient-blue">.dev</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                  Portfolio
                </p>
              </div>
            </a>

            <div className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => {
                const isActive = active === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative rounded-full px-7 py-3.5 text-[15px] transition-colors"
                    style={{
                      color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1.5px solid rgba(173, 201, 255, 0.24)",
                        }}
                        transition={{ type: "spring", stiffness: 340, damping: 28 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="hidden md:block">
              <a href="#contact" className="btn-primary !rounded-full !px-5 !py-3">
                Start a project
                <ArrowUpRight size={14} />
              </a>
            </div>

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-mid)] bg-[rgba(255,255,255,0.03)] text-[var(--text-primary)] md:hidden"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={mobileOpen ? "close" : "menu"}
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileOpen ? <X size={17} /> : <Menu size={17} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[rgba(2,6,12,0.72)] backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-4 right-4 top-[5.5rem] z-50 rounded-[1.75rem] border border-[var(--border-mid)] bg-[rgba(11,22,34,0.94)] p-3 shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:hidden"
            >
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = active === link.href.slice(1);
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-2xl px-5 py-3.5 text-[15px]"
                      style={{
                        background: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                        color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                      }}
                    >
                      <span>{link.label}</span>
                      {isActive ? <span className="h-2 w-2 rounded-full bg-[var(--power-blue)]" /> : null}
                    </a>
                  );
                })}
              </div>

              <a href="#contact" onClick={() => setMobileOpen(false)} className="btn-primary mt-3 flex w-full justify-center">
                Start a project
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
