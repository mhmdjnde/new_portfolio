"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [visible,  setVisible]  = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [isTouch] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(pointer: coarse)").matches;
  });

  // Refs so event handlers never hold stale closures, and never re-register
  const visibleRef     = useRef(false);
  const lastTargetRef  = useRef<Element | null>(null);
  const lastXRef       = useRef(-200);
  const lastYRef       = useRef(-200);
  const scrollingRef   = useRef(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Ring and dot both use the exact same live pointer coordinates.
  // This avoids the visible split where the center dot moves but the larger ring lags behind.
  const ringX = mouseX;
  const ringY = mouseY;

  // Comet trail — faster cascade, still shows motion
  const t1x = useSpring(mouseX, { stiffness: 580, damping: 30, mass: 0.55 });
  const t1y = useSpring(mouseY, { stiffness: 580, damping: 30, mass: 0.55 });
  const t2x = useSpring(mouseX, { stiffness: 400, damping: 27, mass: 0.85 });
  const t2y = useSpring(mouseY, { stiffness: 400, damping: 27, mass: 0.85 });
  const t3x = useSpring(mouseX, { stiffness: 275, damping: 25, mass: 1.15 });
  const t3y = useSpring(mouseY, { stiffness: 275, damping: 25, mass: 1.15 });
  const t4x = useSpring(mouseX, { stiffness: 185, damping: 23, mass: 1.45 });
  const t4y = useSpring(mouseY, { stiffness: 185, damping: 23, mass: 1.45 });
  const t5x = useSpring(mouseX, { stiffness: 122, damping: 21, mass: 1.75 });
  const t5y = useSpring(mouseY, { stiffness: 122, damping: 21, mass: 1.75 });
  const t6x = useSpring(mouseX, { stiffness:  80, damping: 19, mass: 2.05 });
  const t6y = useSpring(mouseY, { stiffness:  80, damping: 19, mass: 2.05 });
  const t7x = useSpring(mouseX, { stiffness:  50, damping: 17, mass: 2.35 });
  const t7y = useSpring(mouseY, { stiffness:  50, damping: 17, mass: 2.35 });

  const trail = [
    { x: t1x, y: t1y, size: 6,   opacity: 0.52, color: "#47A4FF" },
    { x: t2x, y: t2y, size: 5,   opacity: 0.35, color: "#5BBEFF" },
    { x: t3x, y: t3y, size: 4,   opacity: 0.22, color: "#70CAFF" },
    { x: t4x, y: t4y, size: 3.2, opacity: 0.13, color: "#43D6C9" },
    { x: t5x, y: t5y, size: 2.4, opacity: 0.07, color: "#43D6C9" },
    { x: t6x, y: t6y, size: 1.8, opacity: 0.04, color: "#8B2FC9" },
    { x: t7x, y: t7y, size: 1.2, opacity: 0.02, color: "#8B2FC9" },
  ];

  useEffect(() => {
    if (isTouch) return;

    const syncHoverTarget = () => {
      const el = document.elementFromPoint(lastXRef.current, lastYRef.current);
      lastTargetRef.current = el;
      setHovering(!!el?.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    const onMove = (e: MouseEvent) => {
      lastXRef.current = e.clientX;
      lastYRef.current = e.clientY;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (scrollingRef.current) {
        scrollingRef.current = false;
        setScrolling(false);
      }
      // Use ref — no stale closure, no re-render-triggered re-registration
      if (!visibleRef.current) {
        visibleRef.current = true;
        setVisible(true);
      }
      syncHoverTarget();
    };

    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);

    const onLeave = () => { visibleRef.current = false; setVisible(false); };
    const onEnter = () => { visibleRef.current = true;  setVisible(true);  };

    // Skip re-running closest() when the hovered element hasn't changed
    const onOver = (e: MouseEvent) => {
      const el = e.target as Element;
      if (el === lastTargetRef.current) return;
      lastTargetRef.current = el;
      setHovering(!!el.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    const onViewportChange = () => {
      scrollingRef.current = true;
      setScrolling(true);
      setHovering(false);
      lastTargetRef.current = null;
      syncHoverTarget();
    };

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("mousedown",  onDown,  { passive: true });
    window.addEventListener("mouseup",    onUp,    { passive: true });
    window.addEventListener("mouseover",  onOver,  { passive: true });
    window.addEventListener("scroll",     onViewportChange, { passive: true });
    window.addEventListener("hashchange", onViewportChange);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("scroll",     onViewportChange);
      window.removeEventListener("hashchange", onViewportChange);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [isTouch, mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Comet trail particles */}
      {trail.map((t, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9996] rounded-full"
          style={{
            x: t.x,
            y: t.y,
            translateX: "-50%",
            translateY: "-50%",
            width:  t.size,
            height: t.size,
            background: t.color,
            boxShadow: `0 0 ${t.size * 2.8}px ${t.color}`,
          }}
          animate={{
            opacity: visible && !scrolling ? t.opacity : 0,
            scale:   clicking ? 0.35 : 1,
          }}
          transition={{ opacity: { duration: 0.18 } }}
        />
      ))}

      {/* Rotating dashed ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", width: 64, height: 64 }}
        animate={{ opacity: visible && !scrolling ? (hovering ? 0.7 : 0.22) : 0 }}
        transition={{ opacity: { duration: 0.15 } }}
      >
        <div
          className="animate-spin-orbit w-full h-full rounded-full"
          style={{
            border: `1px dashed rgba(71,164,255,${hovering ? 0.75 : 0.5})`,
            transition: "border-color 0.15s",
          }}
        />
      </motion.div>

      {/* Outer glow ring + hover label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible && !scrolling ? 1 : 0,
          scale:   clicking ? 0.65 : hovering ? 1.9 : 1,
          width:   40,
          height:  40,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale:   { type: "spring", stiffness: 420, damping: 24 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: `1.5px solid rgba(71,164,255,${hovering ? 0.85 : 0.48})`,
            background: `rgba(71,164,255,${hovering ? 0.09 : 0.025})`,
            boxShadow: `0 0 ${hovering ? 28 : 12}px rgba(71,164,255,${hovering ? 0.45 : 0.16}), inset 0 0 ${hovering ? 12 : 4}px rgba(71,164,255,${hovering ? 0.12 : 0.02})`,
            transition: "border-color 0.12s, background 0.12s, box-shadow 0.12s",
          }}
        />
        <motion.span
          animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.3 }}
          transition={{ duration: 0.12 }}
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-mono)", fontSize: 7, fontWeight: 700,
            letterSpacing: "0.08em", color: "rgba(71,164,255,0.95)",
            textTransform: "uppercase", pointerEvents: "none", userSelect: "none",
          }}
        >
          OPEN
        </motion.span>
      </motion.div>

      {/* Core dot — directly on mouseX/mouseY, zero lag */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width:  8,
          height: 8,
          background: clicking
            ? "linear-gradient(135deg, #FF6B8A, #FF4466)"
            : "linear-gradient(135deg, #47A4FF, #43D6C9)",
          boxShadow: clicking
            ? "0 0 14px rgba(255,107,138,0.9)"
            : "0 0 12px rgba(71,164,255,0.85), 0 0 26px rgba(67,214,201,0.4)",
          transition: "background 0.08s, box-shadow 0.08s",
        }}
        animate={{
          opacity: visible && !scrolling ? 1 : 0,
          scale:   clicking ? 0.5 : hovering ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.12 },
          scale:   { type: "spring", stiffness: 500, damping: 28 },
        }}
      />
    </>
  );
}
