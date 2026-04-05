"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((current) => ({ ...current, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="grid-bg absolute inset-0 opacity-35" />
      <div className="section-line absolute inset-x-0 top-0" />

      <div className="section-container-narrow relative">
        <div className="section-heading max-w-3xl">
          <span className="section-eyebrow">Contact</span>
          <h2>
            Let&apos;s build something
            <span className="text-gradient-blue"> thoughtful</span>
          </h2>
          <p>
            If you need better automation, cleaner internal tooling, or a second brain on a workflow problem, I&apos;m happy
            to talk.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_22rem]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "sent" ? (
              <div className="card-elevated flex min-h-[24rem] flex-col items-center justify-center rounded-[2rem] p-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-[rgba(79,210,159,0.24)] bg-[var(--green-light)]">
                  <CheckCircle2 size={28} className="text-[var(--green-success)]" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">Message ready</h3>
                <p className="mt-3 max-w-md text-[15.5px] leading-8 text-[var(--text-secondary)]">
                  Thanks for reaching out. This placeholder flow worked, and the real contact integration can be plugged in next.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="btn-ghost mt-8"
                >
                  Send another one
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated rounded-[2rem] p-7 md:p-8">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                      New message
                    </p>
                    <h3 className="mt-2 text-2xl font-bold text-[var(--text-primary)]">Tell me what you&apos;re solving</h3>
                  </div>
                  <span className="tag tag-cyan">Reply-friendly</span>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    { name: "name", label: "Name", placeholder: "Jane Doe", type: "text" },
                    { name: "email", label: "Email", placeholder: "jane@example.com", type: "email" },
                  ].map((field) => (
                    <label key={field.name} className="block">
                      <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                        {field.label}
                      </span>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3.5 text-[15px] text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--power-blue)]"
                      />
                    </label>
                  ))}
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    Message
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="A project, a process problem, a collaboration idea, or just a hello."
                    className="w-full resize-none rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-2)] px-4 py-3.5 text-[15px] text-[var(--text-primary)] outline-none transition-all placeholder:text-[var(--text-muted)] focus:border-[var(--power-blue)]"
                  />
                </label>

                <div className="mt-6 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-sm text-sm leading-6 text-[var(--text-secondary)]">
                    Short briefs are totally fine. A rough outline is enough to start a useful conversation.
                  </p>
                  <button type="submit" disabled={status === "sending"} className="btn-primary justify-center sm:min-w-[12rem]">
                    {status === "sending" ? (
                      <>
                        <Loader2 size={15} className="animate-spin" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send message
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-4"
          >
            <div className="card-elevated rounded-[2rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                Direct line
              </p>
              <a href={`mailto:${PERSONAL.email}`} className="mt-4 flex items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-4 transition-all hover:border-[var(--border-mid)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--power-blue-light)] text-[var(--power-blue)]">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    Email
                  </p>
                  <p className="mt-1 text-sm text-[var(--text-primary)]">{PERSONAL.email}</p>
                </div>
              </a>
            </div>

            <div className="card-elevated rounded-[2rem] p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                Elsewhere
              </p>
              <div className="mt-4 space-y-3">
                {[
                  { href: PERSONAL.linkedin, label: "LinkedIn", sub: "Professional updates", icon: LinkedinIcon },
                  { href: PERSONAL.github, label: "GitHub", sub: "Code and repositories", icon: GithubIcon },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-[var(--border-subtle)] bg-[rgba(255,255,255,0.02)] px-4 py-4 transition-all hover:border-[var(--border-mid)]">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[rgba(255,255,255,0.04)] text-[var(--text-primary)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[var(--text-primary)]">{item.label}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{item.sub}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[rgba(71,164,255,0.16)] bg-[linear-gradient(135deg,rgba(71,164,255,0.1),rgba(67,214,201,0.08))] p-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--power-blue-bright)]" style={{ fontFamily: "var(--font-mono)" }}>
                Working Style
              </p>
              <p className="mt-3 text-[15px] leading-7 text-[var(--text-secondary)]">
                I like practical conversations, clear scope, and systems that make the end-user&apos;s life easier.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
