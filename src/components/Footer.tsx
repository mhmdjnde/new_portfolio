"use client";

import { ArrowUp, Mail, Zap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative overflow-hidden border-t border-[var(--border-subtle)] bg-[rgba(10,22,36,0.72)]">
      <div className="section-line absolute inset-x-0 top-0" />
      <div className="section-container relative py-12 md:py-16">
        <div className="card-elevated rounded-[2rem] px-6 py-8 md:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--power-blue),var(--automate-purple))] shadow-[0_14px_34px_rgba(71,164,255,0.2)]">
                  <Zap size={18} className="text-white" strokeWidth={2.4} />
                </div>
                <div>
                  <p className="text-lg font-semibold text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                    {PERSONAL.siteTitle}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                    Power Platform Developer
                  </p>
                </div>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                Designing useful digital systems with restraint, clarity, and technical depth.
              </h3>
              <p className="mt-4 max-w-xl text-[15.5px] leading-8 text-[var(--text-secondary)]">
                Built around enterprise automation, systems thinking, and cleaner user experiences for real teams.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center lg:flex-col lg:items-end">
              <div className="flex flex-wrap gap-2">
                {[
                  { href: PERSONAL.github, icon: GithubIcon, label: "GitHub" },
                  { href: PERSONAL.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
                  { href: `mailto:${PERSONAL.email}`, icon: Mail, label: "Email" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-2 rounded-full border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]"
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>

              <button onClick={scrollToTop} className="inline-flex items-center gap-2 rounded-full border border-[var(--border-mid)] px-4 py-3 text-sm text-[var(--text-secondary)] transition-all hover:border-[var(--border-bright)] hover:text-[var(--text-primary)]">
                Back to top
                <ArrowUp size={14} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 text-sm text-[var(--text-secondary)] md:flex-row md:items-center md:justify-between">
            <p>Mohammad Joundi · Beirut · CMA CGM · 42 Beirut · Lebanese University</p>
            <p style={{ fontFamily: "var(--font-mono)" }}>© {new Date().getFullYear()} {PERSONAL.siteTitle}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
