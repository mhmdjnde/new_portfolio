"use client";

import { ArrowUp, Mail, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

const TAPE_ITEMS = [
  "Power Apps", "Power Automate", "Dataverse", "SharePoint", "Process Automation",
  "Canvas Apps", "Model-Driven", "TypeScript", "C / C++", "Systems Engineering",
  "42 Beirut", "CMA CGM", "Workflow Design", "Digital Transformation", "Enterprise Tools",
];

function MarqueeTape({ reversed = false }: { reversed?: boolean }) {
  const doubled = [...TAPE_ITEMS, ...TAPE_ITEMS];
  const anim = reversed ? "tape-scroll-rev 32s linear infinite" : "tape-scroll 30s linear infinite";
  const rowColors = reversed
    ? [(ci: number) => ci % 4 === 0 ? "var(--cyan-arc)" : ci % 4 === 1 ? "rgba(173,201,255,.28)" : ci % 4 === 2 ? "var(--automate-purple-bright)" : "rgba(173,201,255,.18)"]
    : [(ci: number) => ci % 4 === 0 ? "var(--power-blue-bright)" : ci % 4 === 1 ? "var(--text-muted)" : ci % 4 === 2 ? "var(--cyan-arc)" : "rgba(173,201,255,.3)"];
  const colorFn = rowColors[0];

  return (
    <div style={{ overflow: "hidden", borderTop: "1px solid rgba(173,201,255,.06)", borderBottom: reversed ? "none" : "1px solid rgba(173,201,255,.06)", background: reversed ? "rgba(67,214,201,.008)" : "rgba(71,164,255,.015)", position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "8rem", background: "linear-gradient(90deg,rgba(7,17,28,1),transparent)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "8rem", background: "linear-gradient(270deg,rgba(7,17,28,1),transparent)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ display: "flex", width: "max-content", animation: anim, padding: "11px 0" }}>
        {doubled.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", padding: "0 1.75rem", whiteSpace: "nowrap" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10.5px",
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: colorFn(i),
            }}>
              {item}
            </span>
            <span style={{ color: "rgba(173,201,255,.15)", marginLeft: "1.75rem", fontSize: "18px", lineHeight: "1" }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes tape-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .ftr-icon {
          width: 40px; height: 40px; border-radius: 11px;
          border: 1px solid rgba(173,201,255,.1);
          background: rgba(255,255,255,.03);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-secondary);
          transition: all .2s; text-decoration: none;
        }
        .ftr-icon:hover {
          border-color: rgba(71,164,255,.28); color: var(--text-primary);
          background: rgba(71,164,255,.07); transform: translateY(-2px);
        }
        .ftr-top {
          display: flex; align-items: center; gap: 8px;
          background: transparent; border: 1px solid rgba(173,201,255,.1);
          border-radius: 10px; color: var(--text-muted);
          font-family: var(--font-mono); font-size: 10.5px;
          letter-spacing: 0.12em; text-transform: uppercase;
          padding: 8px 14px; cursor: pointer; transition: all .2s;
        }
        .ftr-top:hover {
          border-color: rgba(71,164,255,.22); color: var(--text-secondary);
          transform: translateY(-2px);
        }
        .footer-main-grid {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 2rem;
        }
        @media (max-width: 640px) {
          .footer-main-grid { flex-direction: column; }
        }
      `}</style>

      {/* Dual marquee tape — forward + reverse */}
      <MarqueeTape />
      <MarqueeTape reversed />

      {/* Main content */}
      <div style={{ background: "linear-gradient(180deg,rgba(10,22,36,.98),rgba(7,17,28,1))", borderTop: "1px solid rgba(173,201,255,.05)", position: "relative" }}>

        {/* Ambient glow */}
        <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "500px", height: "1px", background: "linear-gradient(90deg,transparent,rgba(71,164,255,.28),rgba(67,214,201,.18),transparent)", filter: "blur(1px)" }} />

        <div className="section-container" style={{ paddingTop: "3.5rem", paddingBottom: "2.5rem" }}>
          <div className="footer-main-grid">

            {/* Brand */}
            <div style={{ maxWidth: "26rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.25rem" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "13px", background: "linear-gradient(135deg,var(--power-blue),var(--automate-purple))", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 22px rgba(71,164,255,.2)" }}>
                  <Zap size={16} style={{ color: "white" }} strokeWidth={2.4} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 600, color: "var(--text-primary)" }}>
                    {PERSONAL.siteTitle}
                  </p>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "9.5px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-muted)" }}>
                    Power Platform Developer
                  </p>
                </div>
              </div>
              <p style={{ fontSize: "13.5px", lineHeight: 1.8, color: "var(--text-secondary)", maxWidth: "22rem" }}>
                Building enterprise automation with clarity, technical depth, and systems that real teams actually adopt.
              </p>
            </div>

            {/* Social + back to top */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                <a href={PERSONAL.github} target="_blank" rel="noopener noreferrer" title="GitHub" className="ftr-icon">
                  <GithubIcon size={16} />
                </a>
                <a href={PERSONAL.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn" className="ftr-icon">
                  <LinkedinIcon size={16} />
                </a>
                <a href={`mailto:${PERSONAL.email}`} title="Email" className="ftr-icon">
                  <Mail size={16} />
                </a>
              </div>
              <button onClick={scrollToTop} className="ftr-top">
                <ArrowUp size={12} />
                Back to top
              </button>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ borderTop: "1px solid rgba(173,201,255,.05)", marginTop: "2.5rem", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
            <p style={{ fontSize: "11.5px", color: "var(--text-muted)" }}>
              Mohamad Joundi · Beirut · CMA CGM · 42 Beirut · Lebanese University
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "10.5px", color: "var(--text-muted)", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
              © {new Date().getFullYear()} {PERSONAL.siteTitle}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
