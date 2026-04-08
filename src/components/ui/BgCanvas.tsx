"use client";

import { useEffect, useRef } from "react";

const G    = 56;
const PAL  = ["rgba(139,47,201,","rgba(14,142,199,","rgba(0,229,255,","rgba(20,204,128,"];
const DIRS: [number,number][] = [[G,0],[-G,0],[0,G],[0,-G]];

export default function BgCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d")!;

    let W = 0, H = 0, cols = 0, rows = 0, frame = 0;
    let rafId = 0;

    function resize() {
      W = cvs!.width  = window.innerWidth;
      H = cvs!.height = window.innerHeight;
      cols = Math.ceil(W / G) + 2;
      rows = Math.ceil(H / G) + 2;
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    // Lit nodes
    const litNodes = new Set<string>();
    for (let i = 0; i < 14; i++) litNodes.add(`${Math.floor(Math.random()*40)},${Math.floor(Math.random()*30)}`);

    // Particles
    const pts = Array.from({ length: 20 }, () => {
      const d = DIRS[Math.floor(Math.random() * 4)];
      return {
        x: Math.floor(Math.random() * 36) * G,
        y: Math.floor(Math.random() * 24) * G,
        dx: d[0], dy: d[1], t: 0,
        spd: 0.007 + Math.random() * 0.012,
        col: PAL[Math.floor(Math.random() * PAL.length)],
        a: 0.35 + Math.random() * 0.5,
        sz: 1.8 + Math.random() * 2.2,
      };
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const sy = -(window.scrollY * 0.08) % G;

      // Grid lines
      ctx.strokeStyle = "rgba(255,255,255,0.022)";
      ctx.lineWidth = 1;
      for (let x = 0; x <= W + G; x += G) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = sy; y <= H + G; y += G) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Dots
      for (let c = 0; c <= cols; c++) {
        for (let r = -1; r <= rows; r++) {
          const px = c * G, py = r * G + sy;
          if (py < -G || py > H + G) continue;
          if (litNodes.has(`${c},${r}`)) {
            const pulse = Math.sin(frame * 0.038 + c * 0.6 + r * 0.4) * 0.5 + 0.5;
            ctx.beginPath(); ctx.arc(px, py, 2.5 + pulse, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(139,47,201,${0.18 + pulse * 0.38})`; ctx.fill();
            if (pulse > 0.65) {
              ctx.beginPath(); ctx.arc(px, py, (2.5 + pulse) * 2.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(139,47,201,${0.04 * pulse})`; ctx.fill();
            }
          } else {
            ctx.beginPath(); ctx.arc(px, py, 0.9, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(255,255,255,0.055)"; ctx.fill();
          }
        }
      }

      // Particles
      pts.forEach(p => {
        p.t += p.spd;
        if (p.t >= 1) {
          p.t = 0; p.x += p.dx; p.y += p.dy;
          if (p.x < 0 || p.x > W) { p.dx = -p.dx; p.x += p.dx * 2; }
          if (p.y < 0 || p.y > H) { p.dy = -p.dy; p.y += p.dy * 2; }
          if (Math.random() < 0.28) {
            const d = DIRS[Math.floor(Math.random() * 4)];
            p.dx = d[0]; p.dy = d[1];
          }
        }
        const nx = p.x + p.dx * p.t;
        const ny = p.y + p.dy * p.t;
        const alpha = Math.sin(p.t * Math.PI) * p.a;
        const g2 = ctx.createRadialGradient(nx, ny, 0, nx, ny, p.sz * 4);
        g2.addColorStop(0, p.col + alpha + ")");
        g2.addColorStop(1, p.col + "0)");
        ctx.beginPath(); ctx.arc(nx, ny, p.sz * 4, 0, Math.PI * 2);
        ctx.fillStyle = g2; ctx.fill();
        ctx.beginPath(); ctx.arc(nx, ny, p.sz, 0, Math.PI * 2);
        ctx.fillStyle = p.col + alpha + ")"; ctx.fill();
      });

      frame++;
      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
        width: "100%", height: "100%",
      }}
    />
  );
}
