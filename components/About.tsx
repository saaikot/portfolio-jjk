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
        <div className="h-px flex-1 bg-gradient-to-r from-blood/60 to-transparent" />
        <span className="font-jp text-xs text-muted">術師 記録</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-14 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Sorcerer <span className="text-blood">Profile</span>
      </motion.h2>

      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        {/* ========== LEFT — Cursed Scroll ========== */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          {/* Vertical kanji strip — left side */}
          <div className="absolute -left-8 top-0 z-20 flex h-full flex-col items-center justify-center">
            <div
              className="flex flex-col items-center gap-1 px-2 py-4"
              style={{
                writingMode: "vertical-rl",
                textOrientation: "upright",
              }}
            >
              <span className="font-jp text-lg tracking-[0.3em] text-blood">
                呪術師
              </span>
              <span className="font-jp text-xs tracking-[0.4em] text-muted">
                特別記録
              </span>
            </div>
            {/* Vertical gradient line */}
            <div
              className="absolute -right-1 top-0 h-full w-px"
              style={{
                background:
                  "linear-gradient(180deg, transparent 0%, #e63946 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Main scroll body */}
          <div
            className="relative border border-blood/30 bg-gradient-to-br from-[#0f0508] via-[#0a0a0f] to-[#05060a] p-1"
            style={{
              boxShadow:
                "0 0 60px -20px rgba(230, 57, 70, 0.6), inset 0 0 40px rgba(230, 57, 70, 0.08)",
            }}
          >
            {/* Top seal band */}
            <div
              className="flex items-center justify-between px-3 py-2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(230,57,70,0.25) 0%, rgba(230,57,70,0.08) 100%)",
                borderBottom: "1px solid rgba(230,57,70,0.4)",
              }}
            >
              <div className="flex items-center gap-2">
                <span className="font-jp text-sm text-blood">封</span>
                <span className="font-mono text-[9px] tracking-[0.3em] text-blood">
                  SEALED
                </span>
              </div>
              <span className="font-mono text-[9px] text-blood/70">
                no.001
              </span>
            </div>

            {/* Photo with cursed energy border */}
            <div className="relative p-3">
              <div className="relative aspect-[4/5] overflow-hidden border border-blood/40 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={profile.aboutImage}
                  alt={profile.name}
                  className="h-full w-full object-cover contrast-110 saturate-[0.85] transition-all duration-700 hover:saturate-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />

                {/* Cursed energy corners */}
                <div className="pointer-events-none absolute inset-0">
                  {/* top-left */}
                  <div className="absolute left-0 top-0 h-8 w-8 border-l-2 border-t-2 border-blood" />
                  {/* top-right */}
                  <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-blood" />
                  {/* bottom-left */}
                  <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-blood" />
                  {/* bottom-right */}
                  <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-blood" />
                </div>

                {/* Dark vignette */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 40%, transparent 40%, rgba(15, 5, 8, 0.7) 100%)",
                  }}
                />

                {/* Floating cursed particles */}
                <motion.div
                  className="pointer-events-none absolute left-4 top-6 h-1 w-1 rounded-full bg-blood"
                  style={{
                    boxShadow: "0 0 12px 3px rgba(230,57,70,0.7)",
                  }}
                  animate={{
                    y: [0, -10, 0],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="pointer-events-none absolute right-6 bottom-10 h-1 w-1 rounded-full bg-cursed"
                  style={{
                    boxShadow: "0 0 12px 3px rgba(123,44,191,0.7)",
                  }}
                  animate={{
                    y: [0, 10, 0],
                    opacity: [1, 0.4, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                />

                {/* Sukuna-like markings — subtle vertical strokes */}
                <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-40">
                  <div className="h-4 w-[2px] bg-blood" />
                  <div className="h-2 w-[2px] bg-blood" />
                  <div className="h-3 w-[2px] bg-blood" />
                </div>

                {/* Top-left record tag */}
                <div className="absolute left-3 top-3 flex items-center gap-1.5 border border-blood/60 bg-black/80 px-2 py-0.5 backdrop-blur">
                  <span className="font-mono text-[9px] text-blood">
                    呪物
                  </span>
                  <span className="font-mono text-[9px] text-muted">
                    / 001
                  </span>
                </div>
              </div>

              {/* Cursed energy dashes around photo */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="h-[2px] w-3 bg-blood/60"
                      style={{
                        width: `${4 + Math.random() * 6}px`,
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-muted/60">
                  // 封印
                </span>
              </div>
            </div>

            {/* Bottom data strip */}
            <div className="border-t border-blood/30 px-3 py-3">
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="text-blood">血</span>
                <div className="flex-1 mx-3">
                  <div className="flex items-center justify-between">
                    <span className="text-muted">sorcerer</span>
                    <span className="text-ink">
                      {profile.name.toLowerCase().replace(" ", "_")}
                    </span>
                  </div>
                </div>
                <span className="text-blood">封</span>
              </div>
            </div>

            {/* Bottom seal band */}
            <div
              className="flex items-center justify-between px-3 py-2"
              style={{
                background:
                  "linear-gradient(90deg, rgba(230,57,70,0.08) 0%, rgba(230,57,70,0.25) 100%)",
                borderTop: "1px solid rgba(230,57,70,0.4)",
              }}
            >
              <span className="font-mono text-[9px] tracking-[0.3em] text-blood/70">
                grade
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] tracking-[0.3em] text-blood">
                  SPECIAL
                </span>
                <span className="font-jp text-sm text-blood">特</span>
              </div>
            </div>
          </div>

          {/* Corner brackets — outer decorative */}
          <div className="absolute -left-2 -top-2 h-8 w-8 border-l-2 border-t-2 border-blood/60" />
          <div className="absolute -right-2 -bottom-2 h-8 w-8 border-r-2 border-b-2 border-blood/60" />
        </motion.div>

        {/* ========== RIGHT — Bio ========== */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-blood">
              <span className="text-cursed">&gt;</span> who_is_this_sorcerer
            </p>

            <h3 className="mt-4 font-display text-2xl leading-snug tracking-tight sm:text-3xl">
              Turning ideas into{" "}
              <span className="text-blood">cursed techniques</span>.
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
                className="relative border border-line bg-surface/40 p-3 text-center transition-all duration-300 hover:border-blood/60"
                style={{
                  clipPath:
                    "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
                }}
              >
                <p className="font-mono text-[9px] tracking-widest text-muted">
                  {f.label}
                </p>
                <p className="mt-1 font-display text-lg text-blood">
                  {f.value}
                </p>
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