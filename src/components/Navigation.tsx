"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ArrowUpRight } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const navLinks = [
  { label: "About",    href: "#about",         idx: "01" },
  { label: "Journey",  href: "#journey",        idx: "02" },
  { label: "42",       href: "#forty-two",      idx: "03" },
  { label: "Platform", href: "#power-platform", idx: "04" },
  { label: "Projects", href: "#projects",       idx: "05" },
  { label: "Contact",  href: "#contact",        idx: "06" },
];

// ─── Individual nav link ───────────────────────────────────────
function NavLink({
  link,
  isActive,
  delay,
}: {
  link: (typeof navLinks)[0];
  isActive: boolean;
  delay: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={link.href}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg select-none"
      style={{ zIndex: 1 }}
    >
      {/* Sliding background pill — shared via layoutId */}
      {isActive && (
        <motion.span
          layoutId="nav-pill"
          className="absolute inset-0 rounded-lg pointer-events-none"
          style={{
            background: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.22)",
            boxShadow: "0 0 18px rgba(59,130,246,0.1)",
          }}
          transition={{ type: "spring", stiffness: 360, damping: 28 }}
        />
      )}

      {/* Hover glow (non-active) */}
      {!isActive && (
        <motion.span
          className="absolute inset-0 rounded-lg pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.18 }}
          style={{ background: "rgba(255,255,255,0.04)" }}
        />
      )}

      {/* Index number — slides in from left on hover/active */}
      <motion.span
        animate={{
          opacity: hovered || isActive ? 1 : 0,
          x: hovered || isActive ? 0 : -6,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="text-[10px] tracking-[0.14em] font-semibold relative shrink-0"
        style={{ fontFamily: "var(--font-mono)", color: "var(--power-blue)" }}
      >
        {link.idx}
      </motion.span>

      {/* Label */}
      <motion.span
        animate={{
          color: isActive
            ? "var(--text-primary)"
            : hovered
            ? "#C7D2F0"
            : "var(--text-secondary)",
        }}
        transition={{ duration: 0.18 }}
        className="text-[14.5px] font-medium relative tracking-[0.01em]"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {link.label}
      </motion.span>

      {/* Active glowing dot under label */}
      {isActive && (
        <motion.span
          layoutId="nav-dot"
          className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-0.5 rounded-full"
          style={{
            background: "var(--power-blue)",
            boxShadow: "0 0 6px rgba(59,130,246,1)",
          }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </motion.a>
  );
}

// ─── Main nav ──────────────────────────────────────────────────
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* ── Animated backdrop ───────────────────────── */}
        <motion.div
          className="absolute inset-0 transition-none"
          animate={{
            backgroundColor: scrolled ? "rgba(7,9,15,0.88)" : "rgba(7,9,15,0)",
          }}
          transition={{ duration: 0.35 }}
          style={{
            backdropFilter: scrolled ? "blur(28px) saturate(160%)" : "none",
            boxShadow: scrolled ? "0 8px 48px rgba(0,0,0,0.6)" : "none",
          }}
        />

        {/* ── Bottom gradient line ─────────────────────── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          animate={{ opacity: scrolled ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.55) 25%, rgba(6,182,212,0.65) 50%, rgba(139,92,246,0.45) 75%, transparent 100%)",
          }}
        />

        {/* ── Content row: logo | [centered links] | cta ── */}
        {/*  grid-cols-[auto_1fr_auto]: logo auto, links 1fr centered, col-start-3 pins CTA right
             even on mobile when links are display:none the col-start-3 keeps CTA far right */}
        <div className="relative max-w-7xl mx-auto px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center gap-6">

          {/* Col 1: Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 shrink-0 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--power-blue)] to-[var(--automate-purple)]" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--cyan-arc)] to-[var(--power-blue)]"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <Zap size={14} className="relative z-10 text-white" strokeWidth={2.5} />
            </div>
            <span
              className="font-bold text-[16.5px] tracking-wide text-[var(--text-primary)]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {PERSONAL.handle}
              <span className="text-gradient-blue">.dev</span>
            </span>
          </motion.a>

          {/* Col 2: Desktop links — centered within the 1fr column */}
          <div className="hidden md:flex items-center justify-center gap-1.5">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.href}
                link={link}
                isActive={active === link.href.slice(1)}
                delay={0.08 + i * 0.055}
              />
            ))}
          </div>

          {/* Col 3: CTA (desktop) + Toggle (mobile) — col-start-3 keeps it right always */}
          <div className="col-start-3 flex items-center justify-end">

            {/* Desktop CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:block"
            >
              {/* Gradient-border wrapper with shimmer sweep */}
              <motion.div
                className="relative p-px rounded-lg overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--power-blue), var(--automate-purple))",
                }}
                whileHover={{
                  boxShadow:
                    "0 0 28px rgba(59,130,246,0.5), 0 0 56px rgba(139,92,246,0.25)",
                }}
                animate={{
                  boxShadow: "0 0 16px rgba(59,130,246,0.18)",
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Shimmer sweep that runs every few seconds */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 50%, transparent 100%)",
                    width: "60%",
                  }}
                  initial={{ x: "-100%" }}
                  animate={{ x: "280%" }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                  }}
                />
                <a
                  href="#contact"
                  className="relative flex items-center gap-1.5 px-4 py-2 rounded-[7px] text-[14px] font-semibold text-white"
                  style={{
                    fontFamily: "var(--font-body)",
                    background: "var(--surface-0)",
                  }}
                >
                  Get in touch
                  <motion.span
                    className="inline-flex"
                    whileHover={{ x: 1, y: -1 }}
                    transition={{ duration: 0.15 }}
                  >
                    <ArrowUpRight size={13} />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-[var(--border-mid)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--power-blue)] transition-all"
            style={{ background: "var(--surface-1)" }}
          >
            <AnimatePresence mode="wait">
              {mobileOpen ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  <X size={16} />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.16 }}
                >
                  <Menu size={16} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          </div>{/* end col-start-3 */}
        </div>
      </motion.nav>

      {/* ── Mobile drawer ──────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="fixed inset-0 z-40 bg-black/55 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[72px] left-4 right-4 z-50 rounded-2xl overflow-hidden border border-[var(--border-mid)]"
              style={{
                background: "rgba(14,18,34,0.96)",
                backdropFilter: "blur(28px)",
                boxShadow:
                  "0 24px 64px rgba(0,0,0,0.65), 0 0 0 1px rgba(59,130,246,0.07)",
              }}
            >
              {/* Links */}
              <div className="p-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: i * 0.04,
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-colors group ${
                      active === link.href.slice(1)
                        ? "bg-[var(--surface-2)]"
                        : "hover:bg-[rgba(255,255,255,0.04)]"
                    }`}
                  >
                    <span
                      className="text-[9px] tracking-[0.18em] font-semibold w-6"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "var(--power-blue)",
                      }}
                    >
                      {link.idx}
                    </span>
                    <span
                      className={`text-[15px] font-medium transition-colors ${
                        active === link.href.slice(1)
                          ? "text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
                      }`}
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </span>
                    {active === link.href.slice(1) && (
                      <motion.span
                        layoutId="mobile-active-dot"
                        className="ml-auto w-1.5 h-1.5 rounded-full shrink-0"
                        style={{
                          background: "var(--power-blue)",
                          boxShadow: "0 0 8px rgba(59,130,246,0.8)",
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>

              {/* CTA */}
              <div className="px-4 pb-4 pt-1">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[14px] font-semibold text-white"
                  style={{
                    fontFamily: "var(--font-body)",
                    background:
                      "linear-gradient(135deg, var(--power-blue) 0%, var(--automate-purple) 100%)",
                    boxShadow: "0 4px 24px rgba(59,130,246,0.35)",
                  }}
                >
                  Get in touch
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
