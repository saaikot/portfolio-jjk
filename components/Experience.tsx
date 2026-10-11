"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

// ✏️ এখানে তোমার Experience / Education অ্যাড করো
const timeline = [
  {
    type: "work",
    title: "Frontend Developer",
    org: "Freelance",
    period: "2024 — Present",
    desc: "Building responsive Next.js applications for clients worldwide. Focused on performance, SEO and clean UI.",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    type: "work",
    title: "Junior Web Developer",
    org: "Company Name",
    period: "2023 — 2024",
    desc: "Developed and maintained React dashboards, integrated REST APIs and improved load time by 40%.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    type: "edu",
    title: "BSc in Computer Science",
    org: "University Name",
    period: "2019 — 2023",
    desc: "Graduated with focus on web technologies, algorithms and software engineering.",
    tags: ["CGPA 3.5"],
  },
  {
    type: "edu",
    title: "Higher Secondary Certificate",
    org: "College Name",
    period: "2017 — 2019",
    desc: "Science background with strong foundation in mathematics and physics.",
    tags: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        <span className="font-mono text-xs text-muted">[ 05 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-six-eyes/60 to-transparent" />
        <span className="font-jp text-xs text-muted">高専 記録</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Jujutsu <span className="text-six-eyes">Records</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-14 font-mono text-xs text-muted"
      >
        <span className="text-blood">&gt;</span> experience & education
      </motion.p>

      {/* ===== Timeline ===== */}
      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div
          className="absolute left-[19px] top-2 h-full w-[2px] md:left-1/2 md:-translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, #7b2cbf 0%, #e63946 40%, #00b4d8 80%, transparent 100%)",
          }}
        />

        <div className="space-y-10">
          {timeline.map((item, i) => {
            const Icon = item.type === "work" ? FiBriefcase : FiBookOpen;
            const isRight = i % 2 === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Node marker */}
                <div className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                  <div className="relative flex h-10 w-10 items-center justify-center border-2 border-cursed bg-bg">
                    <Icon size={14} className="text-cursed" />
                    {/* pulsing ring */}
                    <span className="absolute inset-0 animate-ping border border-cursed/40" />
                  </div>
                </div>

                {/* Card */}
                <div
                  className={`ml-16 w-full border border-line bg-surface/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-cursed/60 hover:bg-surface/60 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isRight ? "md:mr-auto" : "md:ml-auto"
                  }`}
                  style={{
                    clipPath:
                      "polygon(12px 0, 100% 0, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%, 0 12px)",
                  }}
                >
                  {/* top row */}
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-cursed">
                      {item.period}
                    </span>
                    <span className="font-jp text-xs text-muted">
                      {item.type === "work" ? "任務" : "学業"}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-lg leading-tight tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-blood">
                    @ {item.org}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted">
                    {item.desc}
                  </p>

                  {item.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line/60 pt-3">
                      {item.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-line/60 bg-black/30 px-2 py-0.5 font-mono text-[10px] text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}