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

  // ── Comet trail — 5 spring positions with increasing lag ──
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

  const trail = [
    { x: t1x, y: t1y, size: 5.5, opacity: 0.48, color: "#47A4FF" },
    { x: t2x, y: t2y, size: 4.5, opacity: 0.30, color: "#5BBEFF" },
    { x: t3x, y: t3y, size: 3.5, opacity: 0.18, color: "#70CAFF" },
    { x: t4x, y: t4y, size: 2.8, opacity: 0.10, color: "#43D6C9" },
    { x: t5x, y: t5y, size: 2.0, opacity: 0.05, color: "#43D6C9" },
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

      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          opacity: visible ? 1 : 0,
          scale:  clicking ? 0.68 : hovering ? 1.72 : 1,
          width:  36,
          height: 36,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale:   { type: "spring", stiffness: 300, damping: 20 },
        }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: `1.5px solid rgba(71,164,255,${hovering ? 0.80 : 0.45})`,
            background: `rgba(71,164,255,${hovering ? 0.07 : 0.025})`,
            boxShadow: `0 0 ${hovering ? 24 : 10}px rgba(71,164,255,${hovering ? 0.40 : 0.14}), inset 0 0 ${hovering ? 10 : 3}px rgba(71,164,255,${hovering ? 0.10 : 0.02})`,
          }}
        />
      </motion.div>

      {/* Core dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width:  7,
          height: 7,
          background: "linear-gradient(135deg, #47A4FF, #43D6C9)",
          boxShadow: "0 0 10px rgba(71,164,255,0.75), 0 0 22px rgba(67,214,201,0.35)",
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
