"use client";
import { motion } from "framer-motion";
import { FiCopy, FiCheck, FiDownload } from "react-icons/fi";
import { useState } from "react";
import { profile } from "@/data/profile";

export default function About() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      {/* ===== Section heading ===== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-16 flex items-center gap-4"
      >
        <span className="font-mono text-xs text-muted">[ 02 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-cursed/60 to-transparent" />
        <span className="font-jp text-xs text-muted">術師 記録</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-14 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Sorcerer <span className="text-cursed">Profile</span>
      </motion.h2>

      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ========== LEFT — Photo Frame ========== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          {/* corner brackets */}
          <div className="absolute -left-2 -top-2 h-6 w-6 border-l-2 border-t-2 border-cursed" />
          <div className="absolute -right-2 -top-2 h-6 w-6 border-r-2 border-t-2 border-cursed" />
          <div className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-cursed" />
          <div className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-cursed" />

          {/* photo wrapper */}
          <div className="relative overflow-hidden border border-line bg-surface/40 p-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.name}
                className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />

              {/* grid overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-15 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(123,44,191,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(123,44,191,0.5) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* top label */}
              <div className="absolute left-2 top-2 border border-cursed/50 bg-black/70 px-2 py-0.5 font-mono text-[9px] tracking-widest text-cursed backdrop-blur">
                記録 001
              </div>
            </div>

            {/* bottom info strip */}
            <div className="flex items-center justify-between px-1 pt-3 font-mono text-[10px] text-muted">
              <span>{profile.location.toUpperCase()}</span>
              <span className="text-cursed">● VERIFIED</span>
            </div>
          </div>
        </motion.div>

        {/* ========== RIGHT — Bio ========== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-cursed">
              <span className="text-blood">&gt;</span> who_is_this_sorcerer
            </p>

            <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              Turning ideas into{" "}
              <span className="text-cursed">cursed techniques</span>.
            </h3>

            <p className="mt-6 text-sm leading-relaxed text-muted sm:text-base">
              {profile.bio1}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              {profile.bio2}
            </p>
          </motion.div>

          {/* ===== Facts grid ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {[
              { label: "EXP", value: "2+ YR" },
              { label: "PROJ", value: "20+" },
              { label: "LOC", value: "DHK" },
              { label: "OPEN", value: "YES" },
            ].map((f) => (
              <div
                key={f.label}
                className="relative border border-line bg-surface/40 p-3 text-center transition-all duration-300 hover:border-cursed/60"
                style={{
                  clipPath:
                    "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                <p className="font-mono text-[9px] tracking-widest text-muted">
                  {f.label}
                </p>
                <p className="mt-1 font-display text-lg text-cursed">{f.value}</p>
              </div>
            ))}
          </motion.div>

          {/* ===== Action buttons ===== */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={copyEmail}
              className="group inline-flex items-center gap-2 border border-line bg-surface/40 px-4 py-2.5 font-mono text-xs text-muted transition-all duration-200 hover:border-six-eyes/60 hover:text-six-eyes"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              {copied ? (
                <>
                  <FiCheck className="text-green-400" size={13} />
                  <span className="text-green-400">copied</span>
                </>
              ) : (
                <>
                  <FiCopy size={13} />
                  {profile.email}
                </>
              )}
            </button>

            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 border border-cursed bg-cursed/20 px-4 py-2.5 font-mono text-xs uppercase tracking-widest text-cursed transition-all duration-200 hover:bg-cursed hover:text-white"
              style={{
                clipPath:
                  "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
              }}
            >
              <FiDownload size={13} /> resume.pdf
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}