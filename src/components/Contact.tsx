"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle2, Loader2 } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: Connect to form provider (Formspree, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
  };

  return (
    <section id="contact" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-x-0 top-0 section-line" />

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-left mb-14"
        >
          <span className="tag tag-blue mb-5 inline-block">Contact</span>
          <h2
            className="text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s
            <span className="text-gradient-blue"> Connect</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            Interested in working together or just want to talk automation? Happy to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {status === "sent" ? (
              <div className="card-elevated rounded-2xl p-10 text-center flex flex-col items-center gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "var(--green-light)", border: "1px solid rgba(16,124,16,0.18)" }}
                >
                  <CheckCircle2 size={26} className="text-[var(--green-success)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                  Message sent!
                </h3>
                <p className="text-[var(--text-secondary)]" style={{ fontFamily: "var(--font-body)" }}>
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="btn-ghost mt-2"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card-elevated rounded-2xl p-7 space-y-4">
                {/* Form chrome */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]" />
                  </div>
                  <span className="text-[10px] text-[var(--text-muted)] ml-1" style={{ fontFamily: "var(--font-mono)" }}>
                    new_message.flow
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: "name", label: "NAME", placeholder: "Jane Doe", type: "text" },
                    { name: "email", label: "EMAIL", placeholder: "jane@example.com", type: "email" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label
                        className="block text-[11px] text-[var(--text-muted)] mb-2"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-[15px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all bg-[var(--surface-2)] border border-[var(--border-subtle)] focus:border-[var(--power-blue)] focus:bg-[var(--surface-2)] focus:shadow-sm"
                        style={{ fontFamily: "var(--font-body)" }}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label
                    className="block text-[11px] text-[var(--text-muted)] mb-2"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, challenge, or just say hello..."
                    className="w-full px-4 py-3 rounded-xl text-[15px] text-[var(--text-primary)] placeholder-[var(--text-muted)] outline-none transition-all resize-none bg-[var(--surface-2)] border border-[var(--border-subtle)] focus:border-[var(--power-blue)] focus:bg-[var(--surface-2)] focus:shadow-sm"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                </div>

                <button type="submit" disabled={status === "sending"} className="btn-primary w-full justify-center">
                  {status === "sending"
                    ? <><Loader2 size={14} className="animate-spin" />Sending...</>
                    : <><Send size={14} />Send message</>
                  }
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Direct email */}
            <div className="card-elevated rounded-2xl p-5">
              <span
                className="block text-[11px] text-[var(--text-muted)] mb-4 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Direct
              </span>
              <a
                href={`mailto:${PERSONAL.email}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--surface-2)] transition-all group"
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-[var(--power-blue-light)] border border-[rgba(0,120,212,0.18)]">
                  <Mail size={14} className="text-[var(--power-blue)]" />
                </div>
                <div>
                  <span className="block text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>Email</span>
                  <span
                    className="text-[14px] text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {PERSONAL.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="card-elevated rounded-2xl p-5">
              <span
                className="block text-[11px] text-[var(--text-muted)] mb-4 tracking-widest uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Social
              </span>
              <div className="space-y-2">
                {[
                  { icon: LinkedinIcon, label: "LinkedIn", sub: "mohammad-joundi", href: PERSONAL.linkedin, color: "#0A66C2" },
                  { icon: GithubIcon, label: "GitHub", sub: "mhmdjnde", href: PERSONAL.github, color: "#24292E" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-[var(--surface-2)] transition-all group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ background: `${social.color}10`, border: `1px solid ${social.color}18` }}
                    >
                      <social.icon size={15} style={{ color: social.color }} />
                    </div>
                    <div>
                      <span
                        className="block text-[14px] font-medium text-[var(--text-primary)] group-hover:text-[var(--power-blue)] transition-colors"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {social.label}
                      </span>
                      <span className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>{social.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Note */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "var(--power-blue-light)", border: "1px solid rgba(0,120,212,0.14)" }}
            >
              <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                I read every message and respond thoughtfully. Whether it&apos;s a project, a question, or a collaboration — feel free to reach out.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
