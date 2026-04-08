"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [visible, setVisible]   = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch]   = useState(false);
  const isTouchRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Main ring — moderate lag
  const ringX = useSpring(mouseX, { stiffness: 110, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 110, damping: 22, mass: 0.6 });

  // Dot — snappy
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 35 });

  // ── Comet trail — 7 spring positions with increasing lag ──
  const t1x = useSpring(mouseX, { stiffness: 210, damping: 26, mass: 0.85 });
  const t1y = useSpring(mouseY, { stiffness: 210, damping: 26, mass: 0.85 });
  const t2x = useSpring(mouseX, { stiffness: 150, damping: 24, mass: 1.25 });
  const t2y = useSpring(mouseY, { stiffness: 150, damping: 24, mass: 1.25 });
  const t3x = useSpring(mouseX, { stiffness: 105, damping: 22, mass: 1.65 });
  const t3y = useSpring(mouseY, { stiffness: 105, damping: 22, mass: 1.65 });
  const t4x = useSpring(mouseX, { stiffness: 75,  damping: 20, mass: 2.05 });
  const t4y = useSpring(mouseY, { stiffness: 75,  damping: 20, mass: 2.05 });
  const t5x = useSpring(mouseX, { stiffness: 52,  damping: 18, mass: 2.45 });
  const t5y = useSpring(mouseY, { stiffness: 52,  damping: 18, mass: 2.45 });
  const t6x = useSpring(mouseX, { stiffness: 36,  damping: 17, mass: 2.85 });
  const t6y = useSpring(mouseY, { stiffness: 36,  damping: 17, mass: 2.85 });
  const t7x = useSpring(mouseX, { stiffness: 24,  damping: 16, mass: 3.25 });
  const t7y = useSpring(mouseY, { stiffness: 24,  damping: 16, mass: 3.25 });

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
    isTouchRef.current = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isTouchRef.current);
    if (isTouchRef.current) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onDown  = () => setClicking(true);
    const onUp    = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onOver  = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setHovering(!!el.closest("a, button, [role='button'], input, textarea, select, label"));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

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
            opacity: visible ? t.opacity : 0,
            scale: clicking ? 0.35 : 1,
          }}
          transition={{ opacity: { duration: 0.22 } }}
        />
      ))}

      {/* Rotating dashed ring — follows cursor, rotates via CSS */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9997]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", width: 64, height: 64 }}
        animate={{ opacity: visible ? (hovering ? 0.7 : 0.22) : 0 }}
        transition={{ opacity: { duration: 0.2 } }}
      >
        <div
          className="animate-spin-orbit w-full h-full rounded-full"
          style={{
            border: `1px dashed rgba(71,164,255,${hovering ? 0.75 : 0.5})`,
            transition: "border-color 0.2s",
          }}
        />
      </motion.div>

      {/* Outer glow ring + hover label */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%", position: "relative" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:  clicking ? 0.65 : hovering ? 1.9 : 1,
          width:  40,
          height: 40,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale:   { type: "spring", stiffness: 320, damping: 22 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: `1.5px solid rgba(71,164,255,${hovering ? 0.85 : 0.48})`,
            background: `rgba(71,164,255,${hovering ? 0.09 : 0.025})`,
            boxShadow: `0 0 ${hovering ? 28 : 12}px rgba(71,164,255,${hovering ? 0.45 : 0.16}), inset 0 0 ${hovering ? 12 : 4}px rgba(71,164,255,${hovering ? 0.12 : 0.02})`,
            transition: "border-color 0.15s, background 0.15s, box-shadow 0.15s",
          }}
        />
        {/* Hover label */}
        <motion.span
          animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.3 }}
          transition={{ duration: 0.15 }}
          style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-mono)", fontSize: 7, fontWeight: 700,
            letterSpacing: "0.08em", color: "rgba(71,164,255,0.95)",
            textTransform: "uppercase", pointerEvents: "none",
            userSelect: "none",
          }}
        >
          OPEN
        </motion.span>
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  8,
          height: 8,
          background: clicking ? "linear-gradient(135deg, #FF6B8A, #FF4466)" : "linear-gradient(135deg, #47A4FF, #43D6C9)",
          boxShadow: clicking ? "0 0 14px rgba(255,107,138,0.9)" : "0 0 12px rgba(71,164,255,0.85), 0 0 26px rgba(67,214,201,0.4)",
          transition: "background 0.1s, box-shadow 0.1s",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:  clicking ? 0.5 : hovering ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale:   { type: "spring", stiffness: 400, damping: 25 },
        }}
      />
    </>
  );
}
