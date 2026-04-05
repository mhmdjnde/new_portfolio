"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

function LiveTime() {
  const [time, setTime] = useState("--:--:--");
  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <>{time}</>;
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((c) => ({ ...c, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <>
      <style>{`
        @keyframes orbit-cw  { to { transform: rotate(360deg);  } }
        @keyframes orbit-ccw { to { transform: rotate(-360deg); } }
        @keyframes beacon-p  { 0%,100%{opacity:.5;transform:scale(1);}50%{opacity:1;transform:scale(1.07);} }
        @keyframes cur-blink { 0%,100%{opacity:1;}50%{opacity:0;} }

        .ci-wrap { position: relative; }
        .ci-wrap::after {
          content: ''; position: absolute; bottom: 0; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, var(--power-blue), var(--cyan-arc));
          transition: width .4s cubic-bezier(.4,0,.2,1);
        }
        .ci-wrap:focus-within::after { width: 100%; }

        .ci, .ca {
          width: 100%; background: transparent;
          border: none; border-bottom: 1px solid rgba(173,201,255,.1);
          color: var(--text-primary); font-family: var(--font-body); font-size: 15px;
          outline: none; transition: border-color .3s;
        }
        .ci  { padding-bottom: 10px; }
        .ca  { padding-bottom: 10px; resize: none; }
        .ci:focus, .ca:focus { border-bottom-color: var(--power-blue); }
        .ci::placeholder, .ca::placeholder { color: var(--text-muted); font-size: 14px; }

        .slink {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 15px;
          border: 1px solid rgba(173,201,255,.08); border-radius: 14px;
          background: rgba(255,255,255,.02); color: var(--text-secondary);
          text-decoration: none; transition: all .25s;
        }
        .slink:hover {
          border-color: rgba(71,164,255,.22); color: var(--text-primary);
          transform: translateX(5px); background: rgba(71,164,255,.04);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 22rem;
          gap: 2.5rem;
          align-items: start;
        }
        @media (max-width: 1024px) {
          .contact-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section id="contact" className="relative overflow-hidden" style={{ paddingTop: "7rem", paddingBottom: "7rem" }}>

        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0" style={{ opacity: 0.22 }} />
          {/* Beacon orb */}
          <div style={{ position: "absolute", right: "-8%", top: "50%", transform: "translateY(-50%)", width: "640px", height: "640px" }}>
            <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle,rgba(71,164,255,.08) 0%,rgba(67,214,201,.04) 45%,transparent 70%)", animation: "beacon-p 5s ease-in-out infinite" }} />
            <div style={{ position: "absolute", inset: "90px", borderRadius: "50%", border: "1px solid rgba(71,164,255,.1)", animation: "orbit-cw 24s linear infinite" }}>
              <div style={{ position: "absolute", top: "-5px", left: "50%", transform: "translateX(-50%)", width: "9px", height: "9px", borderRadius: "50%", background: "var(--power-blue)", boxShadow: "0 0 14px rgba(71,164,255,.9),0 0 28px rgba(71,164,255,.4)" }} />
            </div>
            <div style={{ position: "absolute", inset: "170px", borderRadius: "50%", border: "1px solid rgba(126,124,255,.07)", animation: "orbit-ccw 38s linear infinite" }}>
              <div style={{ position: "absolute", top: "-4px", left: "50%", transform: "translateX(-50%)", width: "7px", height: "7px", borderRadius: "50%", background: "var(--automate-purple)", boxShadow: "0 0 10px rgba(126,124,255,.9)" }} />
            </div>
          </div>
        </div>

        <div className="section-line absolute inset-x-0 top-0" />

        <div className="section-container-narrow relative">

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.72 }}
            style={{ marginBottom: "4rem" }}
          >
            <span className="section-eyebrow">Contact</span>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              marginTop: "1.4rem",
              marginBottom: "1.4rem",
            }}>
              Let&apos;s build<br />
              <span className="text-gradient-blue">something.</span>
              <span style={{
                display: "inline-block",
                width: "3px",
                height: "0.75em",
                background: "var(--power-blue)",
                marginLeft: "6px",
                verticalAlign: "middle",
                animation: "cur-blink 1.1s step-end infinite",
              }} />
            </h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem", maxWidth: "36rem", lineHeight: 1.85 }}>
              Need better automation, cleaner internal tooling, or a second brain on a workflow problem?
              I&apos;m here.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="contact-grid">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                {status === "sent" ? (
                  <motion.div key="sent"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                      minHeight: "24rem",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center", textAlign: "center",
                      background: "linear-gradient(180deg,rgba(19,31,47,.92),rgba(12,21,33,.98))",
                      border: "1px solid rgba(79,210,159,.2)",
                      borderRadius: "2rem",
                      padding: "3rem",
                    }}
                  >
                    <div style={{ width: "60px", height: "60px", borderRadius: "18px", background: "var(--green-light)", border: "1px solid rgba(79,210,159,.24)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.4rem" }}>
                      <CheckCircle2 size={26} style={{ color: "var(--green-success)" }} />
                    </div>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.65rem" }}>
                      Signal received.
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "15px", lineHeight: 1.75, maxWidth: "28rem" }}>
                      Thanks for reaching out. The real contact integration can be wired in next.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                      className="btn-ghost"
                      style={{ marginTop: "1.75rem" }}
                    >
                      Send another
                    </button>
                  </motion.div>

                ) : (
                  <motion.form key="form" onSubmit={handleSubmit}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    style={{
                      background: "linear-gradient(160deg,rgba(21,35,52,.95),rgba(12,21,33,.98))",
                      border: "1px solid rgba(173,201,255,.1)",
                      borderRadius: "2rem",
                      padding: "2.5rem",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top accent line */}
                    <div style={{ position: "absolute", inset: "0 0 auto 0", height: "1px", background: "linear-gradient(90deg,transparent,rgba(71,164,255,.28),rgba(67,214,201,.18),transparent)" }} />

                    {/* Header */}
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "2.5rem" }}>
                      <div>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "6px" }}>
                          New transmission
                        </p>
                        <h3 style={{ fontSize: "1.35rem", fontWeight: 700, color: "var(--text-primary)" }}>
                          Tell me what you&apos;re solving
                        </h3>
                      </div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--power-blue)", background: "rgba(71,164,255,.06)", border: "1px solid rgba(71,164,255,.14)", borderRadius: "8px", padding: "6px 12px", flexShrink: 0, letterSpacing: "0.06em" }}>
                        <LiveTime />
                      </div>
                    </div>

                    {/* Name + Email */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
                      {[
                        { name: "name",  label: "Name",  placeholder: "Jane Doe",           type: "text"  },
                        { name: "email", label: "Email", placeholder: "jane@example.com",    type: "email" },
                      ].map((f) => (
                        <label key={f.name} style={{ display: "block" }}>
                          <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: focused === f.name ? "var(--power-blue)" : "var(--text-muted)", marginBottom: "10px", transition: "color .3s" }}>
                            {f.label}
                          </span>
                          <div className="ci-wrap">
                            <input
                              type={f.type} name={f.name}
                              value={form[f.name as keyof typeof form]}
                              onChange={handleChange}
                              onFocus={() => setFocused(f.name)}
                              onBlur={() => setFocused(null)}
                              required placeholder={f.placeholder}
                              className="ci"
                            />
                          </div>
                        </label>
                      ))}
                    </div>

                    {/* Message */}
                    <label style={{ display: "block", marginBottom: "2rem" }}>
                      <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: focused === "message" ? "var(--power-blue)" : "var(--text-muted)", marginBottom: "10px", transition: "color .3s" }}>
                        Message
                      </span>
                      <div className="ci-wrap">
                        <textarea
                          name="message" value={form.message}
                          onChange={handleChange}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                          required rows={5}
                          placeholder="A project, a process problem, a collaboration idea, or just a hello."
                          className="ca"
                        />
                      </div>
                    </label>

                    {/* Footer row */}
                    <div style={{ borderTop: "1px solid rgba(173,201,255,.07)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
                      <p style={{ color: "var(--text-muted)", fontSize: "11px", fontFamily: "var(--font-mono)", letterSpacing: "0.06em", lineHeight: 1.65 }}>
                        Short briefs are fine.<br />A rough outline is enough.
                      </p>
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="btn-primary"
                        style={{ minWidth: "11rem", justifyContent: "center" }}
                      >
                        {status === "sending"
                          ? <><Loader2 size={14} className="animate-spin" /> Sending</>
                          : <><Send size={14} /> Send message</>
                        }
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {/* Email */}
              <div style={{ background: "linear-gradient(180deg,rgba(19,31,47,.92),rgba(12,21,33,.98))", border: "1px solid rgba(173,201,255,.1)", borderRadius: "1.5rem", padding: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.9rem" }}>
                  Direct line
                </p>
                <a href={`mailto:${PERSONAL.email}`} className="slink">
                  <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: "var(--power-blue-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={16} style={{ color: "var(--power-blue)" }} />
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontSize: "9px", fontFamily: "var(--font-mono)", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "3px" }}>Email</p>
                    <p style={{ fontSize: "13px", color: "var(--text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{PERSONAL.email}</p>
                  </div>
                  <ArrowUpRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0 }} />
                </a>
              </div>

              {/* Socials */}
              <div style={{ background: "linear-gradient(180deg,rgba(19,31,47,.92),rgba(12,21,33,.98))", border: "1px solid rgba(173,201,255,.1)", borderRadius: "1.5rem", padding: "1.4rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.9rem" }}>
                  Elsewhere
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                  {[
                    { href: PERSONAL.linkedin, label: "LinkedIn", sub: "Professional updates", Icon: LinkedinIcon },
                    { href: PERSONAL.github,   label: "GitHub",   sub: "Code & repositories",  Icon: GithubIcon  },
                  ].map(({ href, label, sub, Icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="slink">
                      <div style={{ width: "38px", height: "38px", borderRadius: "11px", background: "rgba(255,255,255,.04)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p style={{ fontSize: "14px", fontWeight: 500, color: "var(--text-primary)", marginBottom: "1px" }}>{label}</p>
                        <p style={{ fontSize: "11.5px", color: "var(--text-secondary)" }}>{sub}</p>
                      </div>
                      <ArrowUpRight size={14} style={{ color: "var(--text-muted)", flexShrink: 0, marginLeft: "auto" }} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div style={{ borderRadius: "1.5rem", border: "1px solid rgba(71,164,255,.14)", background: "linear-gradient(135deg,rgba(71,164,255,.07),rgba(67,214,201,.04))", padding: "1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "0.65rem" }}>
                  <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--green-success)", boxShadow: "0 0 8px rgba(79,210,159,.7)", animation: "beacon-p 2s ease-in-out infinite", flexShrink: 0 }} />
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--power-blue-bright)" }}>
                    Available
                  </p>
                </div>
                <p style={{ fontSize: "13.5px", lineHeight: 1.75, color: "var(--text-secondary)" }}>
                  I like practical conversations, clear scope, and systems that make the end-user&apos;s life easier.
                </p>
              </div>
            </motion.aside>

          </div>
        </div>
      </section>
    </>
  );
}
