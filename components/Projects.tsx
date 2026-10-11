"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { categories, projects } from "@/data/projects";

// ===== Rank assign logic =====
function getRank(project: { featured: boolean; category: string }) {
  if (project.featured) return { label: "S", color: "#ffb703" };
  if (project.category === "web") return { label: "A", color: "#e63946" };
  if (project.category === "app") return { label: "B", color: "#7b2cbf" };
  return { label: "C", color: "#00b4d8" };
}

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  featured: boolean;
  year: string;
};

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const list =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
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
        <span className="font-mono text-xs text-muted">[ 04 ]</span>
        <div className="h-px flex-1 bg-gradient-to-r from-cursed/60 to-transparent" />
        <span className="font-jp text-xs text-muted">任務 一覧</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 font-display text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl"
      >
        Completed <span className="text-cursed">Missions</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10 font-mono text-xs text-muted"
      >
        <span className="text-blood">&gt;</span> {projects.length} missions on record
      </motion.p>

      {/* ===== Filter tabs ===== */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.25 }}
        className="mb-12 flex flex-wrap gap-2"
      >
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setFilter(c.id)}
            className={`relative border px-4 py-2 font-mono text-xs uppercase tracking-widest transition-all duration-200 ${
              filter === c.id
                ? "border-cursed bg-cursed/20 text-cursed"
                : "border-line bg-surface/40 text-muted hover:border-cursed/60 hover:text-ink"
            }`}
            style={{
              clipPath:
                "polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px)",
            }}
          >
            {c.label}
          </button>
        ))}
      </motion.div>

      {/* ===== Projects grid ===== */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <ProjectCard key={p.id} project={p as Project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <p className="py-16 text-center font-mono text-sm text-muted">
          // no_missions_found
        </p>
      )}
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const rank = getRank(project);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border border-line bg-surface/40 backdrop-blur-sm transition-all duration-300 hover:border-cursed/60 hover:bg-surface/60"
      style={{
        clipPath:
          "polygon(14px 0, 100% 0, 100% calc(100% - 14px), calc(100% - 14px) 100%, 0 100%, 0 14px)",
      }}
    >
      {/* Hover glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 0%, rgba(123,44,191,0.15) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Image / placeholder */}
      <div className="relative m-3 aspect-[16/10] overflow-hidden border border-line bg-black/40">
        {project.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover opacity-80 grayscale-[0.4] transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="font-jp text-5xl text-cursed/30 transition-all duration-500 group-hover:text-cursed/60 group-hover:scale-110">
              呪
            </span>
          </div>
        )}

        {/* Rank badge */}
        <div
          className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center border font-display text-base backdrop-blur-md"
          style={{
            borderColor: rank.color,
            background: `${rank.color}20`,
            color: rank.color,
            clipPath: "polygon(20% 0, 100% 0, 100% 80%, 80% 100%, 0 100%, 0 20%)",
          }}
        >
          {rank.label}
        </div>

        {/* Status (featured only) */}
        {project.featured && (
          <div className="absolute right-3 top-3 border border-gold/60 bg-black/70 px-2 py-1 font-mono text-[9px] tracking-widest text-gold backdrop-blur">
            ★ FEATURED
          </div>
        )}

        {/* Year */}
        <div className="absolute bottom-3 right-3 font-mono text-[10px] text-muted/80">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-5 pt-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-lg leading-tight tracking-tight transition-colors duration-200 group-hover:text-cursed">
            {project.title}
          </h3>
          <FiArrowUpRight
            className="mt-1 shrink-0 text-muted transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cursed"
            size={16}
          />
        </div>

        <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags?.slice(0, 3).map((t) => (
            <span
              key={t}
              className="border border-line/60 bg-black/30 px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action links */}
        <div className="mt-4 flex items-center gap-4 border-t border-line/60 pt-4 font-mono text-[11px]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-cursed"
            >
              <FiGithub size={13} /> code
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-six-eyes"
            >
              <FiExternalLink size={13} /> live_demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}