"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowRight,
  FiDownload,
} from "react-icons/fi";
import { SiVercel } from "react-icons/si";
import { profile } from "@/data/profile";
import useTypewriter from "@/hooks/useTypewriter";

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const socials = [
    { icon: FiGithub, href: profile.socials.github, label: "GitHub" },
    { icon: FiLinkedin, href: profile.socials.linkedin, label: "LinkedIn" },
    { icon: SiVercel, href: profile.socials.vercel, label: "Vercel" },
    { icon: FiMail, href: profile.socials.email, label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-5 pb-16 pt-32 sm:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* ============================== LEFT ============================== */}
        <div>
          {/* status line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6 flex items-center gap-3 font-mono text-[11px]"
          >
            <span className="flex items-center gap-1.5 border border-cursed/40 bg-cursed/10 px-2 py-1 text-cursed">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-cursed" />
              SPECIAL GRADE
            </span>
            <span className="text-muted">//</span>
            <span className="text-muted">{profile.location}</span>
          </motion.div>

          {/* prefix */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="font-mono text-sm text-muted"
          >
            <span className="text-blood">&gt;</span> sorcerer,
            <span className="ml-1 text-ink">i am</span>
          </motion.p>

          {/* name */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-3 font-display text-[42px] leading-[1.02] tracking-tight sm:text-6xl lg:text-[78px]"
          >
            {profile.name}
            <span className="text-cursed">.</span>
          </motion.h1>

          {/* typing line */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="mt-5 flex items-center font-mono text-base text-muted sm:text-lg"
          >
            <span className="text-cursed">const technique</span>
            <span className="mx-2 text-muted">=</span>
            <span className="text-six-eyes">&quot;</span>
            <span className="text-ink">{typed}</span>
            <span className="text-six-eyes">&quot;</span>
            <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-six-eyes sm:h-5" />
          </motion.div>

          {/* bio */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base"
          >
            {profile.bio1}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 border border-cursed bg-cursed/20 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-white transition-all duration-200 hover:bg-cursed"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              召喚 · Summon Me
              <FiArrowRight className="transition-transform group-hover:translate-x-1" size={14} />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 border border-line bg-surface/60 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-ink transition-all duration-200 hover:border-six-eyes/60 hover:text-six-eyes"
              style={{
                clipPath:
                  "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              }}
            >
              任務 · Missions
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-muted transition-colors hover:text-six-eyes"
            >
              <FiDownload size={14} /> resume.pdf
            </a>
          </motion.div>

          {/* socials */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-10 flex items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
              connect
            </span>
            <div className="h-px w-10 bg-line" />
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center border border-line text-muted transition-all duration-200 hover:border-cursed hover:text-cursed"
                  style={{
                    clipPath:
                      "polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%)",
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ============================== RIGHT — ID CARD ============================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[380px]"
        >
          {/* corner brackets */}
          <div className="absolute -left-3 -top-3 h-8 w-8 border-l-2 border-t-2 border-cursed" />
          <div className="absolute -right-3 -top-3 h-8 w-8 border-r-2 border-t-2 border-cursed" />
          <div className="absolute -bottom-3 -left-3 h-8 w-8 border-b-2 border-l-2 border-cursed" />
          <div className="absolute -bottom-3 -right-3 h-8 w-8 border-b-2 border-r-2 border-cursed" />

          {/* card */}
          <div className="relative border border-line bg-surface/60 backdrop-blur-md p-4">
            {/* top bar */}
            <div className="flex items-center justify-between border-b border-line pb-3 font-mono text-[10px] text-muted">
              <span className="text-cursed">[ ID_CARD ]</span>
              <span>v1.0</span>
            </div>

            {/* photo */}
            <div className="relative mt-4 aspect-[4/5] overflow-hidden border border-line bg-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover grayscale-[0.15] transition-all duration-500 hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(123,44,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,44,191,0.5) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />

              {/* scanning bar */}
              <motion.div
                className="pointer-events-none absolute inset-x-0 h-[2px] bg-cursed/80"
                style={{
                  boxShadow: "0 0 18px 3px rgba(123,44,191,0.7)",
                }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              {/* REC tag */}
              <div className="absolute left-3 top-3 border border-cursed/50 bg-black/60 px-2 py-1 font-mono text-[10px] tracking-widest text-cursed backdrop-blur">
                ◉ REC
              </div>

              {/* counter */}
              <div className="absolute bottom-3 right-3 border border-line bg-black/60 px-2 py-1 font-mono text-[10px] tracking-widest text-muted backdrop-blur">
                001 / 001
              </div>
            </div>

            {/* data rows */}
            <div className="mt-4 space-y-2 font-mono text-xs">
              <Row k="name" v={profile.name} />
              <Row k="role" v={profile.title} />
              <Row k="loc" v={profile.location} />
              <Row k="status" v="ACTIVE" accent />
            </div>

            {/* bottom bar */}
            <div className="mt-4 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] text-muted">
              <span>© {new Date().getFullYear()}</span>
              <span className="flex items-center gap-1.5 text-six-eyes">
                <span className="inline-block h-1 w-1 animate-pulse rounded-full bg-six-eyes" />
                online
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Row({ k, v, accent }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-dashed border-line/60 pb-1.5">
      <span className="text-muted">{k}</span>
      <span className={accent ? "text-six-eyes" : "text-ink"}>{v}</span>
    </div>
  );
}