"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ExternalLink, Lightbulb, AlertTriangle, GraduationCap, Target } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Project } from "@/types";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto bg-black/80 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} details`}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl overflow-hidden rounded-none border border-border-strong bg-bg-elevated shadow-2xl sm:rounded-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-bg/80 text-white backdrop-blur transition-colors hover:bg-red"
            >
              <X size={18} />
            </button>

            <div className="max-h-[90vh] overflow-y-auto">
              {project.images[0] && (
                <div className="relative aspect-[16/8] w-full bg-bg-card">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-elevated via-transparent to-transparent" />
                </div>
              )}

              <div className="px-6 py-7 sm:px-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-red">
                    {project.categoryLabel}
                  </span>
                  <span className="rounded-full border border-red/40 bg-red/10 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-red">
                    {project.matchScore}% Match
                  </span>
                  <span className="font-mono text-xs text-gray-600">{project.year}</span>
                </div>

                <h2 className="mt-2 font-display text-4xl text-white sm:text-5xl">{project.title}</h2>
                <p className="mt-2 text-base text-gray-400">{project.tagline}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded bg-white px-4 py-2.5 text-sm font-bold text-bg transition-transform hover:scale-105"
                  >
                    <GithubIcon size={16} />
                    View Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded border border-border-strong bg-white/10 px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-white/20"
                    >
                      <ExternalLink size={15} />
                      Live Demo
                    </a>
                  )}
                </div>

                {/* Highlight stats */}
                <div className="mt-7 grid grid-cols-3 gap-3">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="rounded-lg border border-border bg-bg-card p-3 text-center">
                      <div className="font-display text-2xl text-red sm:text-3xl">{h.value}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-wide text-gray-600">
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Section title="Overview">
                  <p className="text-sm leading-relaxed text-gray-100">{project.description}</p>
                </Section>

                <Section title="Business Problem">
                  <p className="text-sm leading-relaxed text-gray-100">{project.businessProblem}</p>
                </Section>

                <Section title="Dataset">
                  <p className="text-sm leading-relaxed text-gray-100">{project.dataset}</p>
                </Section>

                <Section title="Tech Stack">
                  <TagList items={project.techStack} />
                </Section>

                {project.sqlConcepts && (
                  <Section title="SQL Concepts Used">
                    <TagList items={project.sqlConcepts} />
                  </Section>
                )}

                {project.pythonLibraries && (
                  <Section title="Python Libraries">
                    <TagList items={project.pythonLibraries} />
                  </Section>
                )}

                <Section title="Key Insights" icon={<Lightbulb size={15} className="text-red" />}>
                  <ul className="flex flex-col gap-2">
                    {project.keyInsights.map((k, i) => (
                      <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-gray-100">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-red" />
                        {k}
                      </li>
                    ))}
                  </ul>
                </Section>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <Section title="Challenges" icon={<AlertTriangle size={15} className="text-red" />} noMargin>
                    <ul className="flex flex-col gap-2">
                      {project.challenges.map((c, i) => (
                        <li key={i} className="text-sm leading-relaxed text-gray-400">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Section>
                  <Section title="Learnings" icon={<GraduationCap size={15} className="text-red" />} noMargin>
                    <ul className="flex flex-col gap-2">
                      {project.learnings.map((l, i) => (
                        <li key={i} className="text-sm leading-relaxed text-gray-400">
                          {l}
                        </li>
                      ))}
                    </ul>
                  </Section>
                </div>

                {project.images.length > 1 && (
                  <Section title="Gallery" icon={<Target size={15} className="text-red" />}>
                    <div className="grid grid-cols-2 gap-3">
                      {project.images.slice(1).map((img) => (
                        <div key={img.src} className="relative aspect-video overflow-hidden rounded-lg border border-border">
                          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="50vw" />
                        </div>
                      ))}
                    </div>
                  </Section>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Section({
  title,
  children,
  icon,
  noMargin,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  noMargin?: boolean;
}) {
  return (
    <div className={noMargin ? "" : "mt-7"}>
      <h3 className="mb-2.5 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-gray-400">
        {icon}
        {title}
      </h3>
      {children}
    </div>
  );
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded border border-border-strong bg-bg-card px-2.5 py-1 font-mono text-xs text-gray-100"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
