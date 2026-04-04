"use client";

import { motion } from "framer-motion";
import { Mail, Zap, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-[var(--border-subtle)]" style={{ background: "var(--surface-0)" }}>
      <div className="section-line" />

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-[var(--power-blue)] to-[var(--automate-purple)] shadow-sm">
              <Zap size={14} className="text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="block font-bold text-sm text-[var(--text-primary)]" style={{ fontFamily: "var(--font-display)" }}>
                {PERSONAL.siteTitle}
              </span>
              <span className="block text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
                Mohammad Joundi · Power Platform Developer
              </span>
            </div>
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-5">
            {[
              ["About", "#about"],
              ["Journey", "#journey"],
              ["42 Beirut", "#forty-two"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-[13px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Socials + scroll up */}
          <div className="flex items-center gap-2">
            {[
              { href: PERSONAL.github, Icon: GithubIcon },
              { href: PERSONAL.linkedin, Icon: LinkedinIcon },
              { href: `mailto:${PERSONAL.email}`, Icon: Mail },
            ].map(({ href, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border-mid)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] hover:border-[var(--border-bright)] transition-all"
              >
                <Icon size={14} />
              </a>
            ))}
            <div className="w-px h-4 bg-[var(--border-mid)] mx-1" />
            <button
              onClick={scrollToTop}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-[var(--border-mid)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-2)] transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-7 pt-5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>
            © {new Date().getFullYear()} Mohammad Joundi · jnde.dev
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[var(--text-muted)]" style={{ fontFamily: "var(--font-mono)" }}>Built with</span>
            <div className="flex gap-1.5">
              {["Next.js", "Tailwind", "Framer Motion"].map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded-md pa-card"
                  style={{ fontFamily: "var(--font-mono)", color: "var(--power-blue)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
