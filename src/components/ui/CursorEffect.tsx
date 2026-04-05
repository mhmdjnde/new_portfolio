"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorEffect() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const isTouchRef = useRef(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ring — lags behind for "magnetic" feel
  const ringX = useSpring(mouseX, { stiffness: 110, damping: 22, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 110, damping: 22, mass: 0.6 });

  // Dot — snaps tight
  const dotX = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const dotY = useSpring(mouseY, { stiffness: 400, damping: 35 });

  useEffect(() => {
    isTouchRef.current = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(isTouchRef.current);
    if (isTouchRef.current) return;

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Hover detection on interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, label");
      setHovering(!!interactive);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onMouseOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onMouseOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.7 : hovering ? 1.6 : 1,
          width: 36,
          height: 36,
        }}
        transition={{ opacity: { duration: 0.2 }, scale: { type: "spring", stiffness: 300, damping: 20 } }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: `1px solid rgba(71,164,255,${hovering ? 0.7 : 0.4})`,
            background: `rgba(71,164,255,${hovering ? 0.06 : 0.03})`,
            boxShadow: `0 0 ${hovering ? 18 : 10}px rgba(71,164,255,${hovering ? 0.28 : 0.12})`,
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
          width: 7,
          height: 7,
          background: "#47A4FF",
          boxShadow: "0 0 10px rgba(71,164,255,0.6)",
        }}
        animate={{
          opacity: visible ? 1 : 0,
          scale: clicking ? 0.5 : hovering ? 0 : 1,
        }}
        transition={{ opacity: { duration: 0.15 }, scale: { type: "spring", stiffness: 400, damping: 25 } }}
      />
    </>
  );
}
