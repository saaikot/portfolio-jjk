"use client";
import { motion } from "framer-motion";
import { skillBars, services } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
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
        <span className="font-mono text-xs text-muted">[ 03 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-blood/60 to-transparent" />
        <span className="font-jp text-xs text-muted">呪術 一覧</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-14 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Cursed <span className="text-blood">Techniques</span>
      </motion.h2>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* ========== LEFT — Skill bars ========== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="border border-line bg-surface/40 p-6 backdrop-blur-sm sm:p-8"
          style={{
            clipPath:
              "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
          }}
        >
          <div className="mb-6 flex items-center justify-between border-b border-line pb-3">
            <span className="font-mono text-[11px] tracking-widest text-cursed">
              [ techniques.log ]
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-muted">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              active
            </span>
          </div>

          <div className="space-y-5">
            {skillBars.map((s, i) => (
              <div key={s.name}>
                <div className="mb-2 flex items-center justify-between font-mono text-xs">
                  <span className="text-ink">
                    <span className="text-blood">&gt;</span>{" "}
                    {s.name.toLowerCase()}
                  </span>
                  <span className="text-cursed">{s.level}%</span>
                </div>

                {/* progress bar */}
                <div className="relative h-2 overflow-hidden border border-line/60 bg-black/40">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 1.2,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #7b2cbf 0%, #e63946 100%)",
                      boxShadow: "0 0 12px rgba(123,44,191,0.7)",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* bottom bar */}
          <div className="mt-6 flex items-center justify-between border-t border-line pt-3 font-mono text-[10px] text-muted">
            <span>TOTAL: {skillBars.length} skills</span>
            <span className="text-six-eyes">mastered</span>
          </div>
        </motion.div>

        {/* ========== RIGHT — Services ========== */}
        <div className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-widest text-muted"
          >
            <span className="text-blood">&gt;</span> available_for
          </motion.p>

          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative border border-line bg-surface/40 p-5 transition-all duration-300 hover:border-cursed/60 hover:bg-surface"
              style={{
                clipPath:
                  "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
              }}
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-lg font-bold text-cursed">
                  [{String(i + 1).padStart(2, "0")}]
                </span>
                <div className="flex-1">
                  <h4 className="font-display text-lg tracking-tight">
                    {s.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-muted">
                    &gt; {s.desc}
                  </p>
                </div>
                <span className="text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  呪
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}