"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Info } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

export default function ProjectCard({
  project,
  onOpen,
  size = "large",
}: {
  project: Project;
  onOpen: (p: Project) => void;
  size?: "large" | "compact";
}) {
  const image = project.images[0];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative shrink-0 overflow-hidden rounded-xl border border-border bg-bg-card transition-colors hover:border-red/50",
        size === "large" ? "w-[300px] sm:w-[360px]" : "w-full"
      )}
    >
      <button
        onClick={() => onOpen(project)}
        className="block w-full text-left"
        aria-label={`View details for ${project.title}`}
      >
        <div className={cn("relative w-full overflow-hidden bg-bg-elevated", size === "large" ? "aspect-[16/10]" : "aspect-[16/9]")}>
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 90vw, 360px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-bg-card to-bg-elevated">
              <span className="font-display text-4xl text-white/10">{project.title.slice(0, 2).toUpperCase()}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent opacity-90" />

          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full border border-red/40 bg-bg/80 px-2.5 py-1 font-mono text-[11px] font-semibold text-red backdrop-blur">
            {project.matchScore}% Match
          </div>

          {project.featured && (
            <div className="absolute left-3 top-3 rounded bg-red px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-white">
              FEATURED
            </div>
          )}

          <div className="absolute inset-x-0 bottom-0 p-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-red">
              {project.categoryLabel}
            </span>
            <h3 className="font-display text-2xl leading-tight text-white">{project.title}</h3>
          </div>
        </div>

        <div className="p-4">
          <p className="line-clamp-2 text-sm text-gray-400">{project.tagline}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((t) => (
              <span
                key={t}
                className="rounded border border-border-strong bg-bg-elevated px-2 py-0.5 font-mono text-[10px] text-gray-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </button>

      <div className="flex items-center gap-2 border-t border-border px-4 py-3">
        <button
          onClick={() => onOpen(project)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded bg-white/10 py-2 text-xs font-semibold text-white transition-colors hover:bg-red"
        >
          <Info size={13} />
          Read More
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="flex h-8 w-8 items-center justify-center rounded border border-border-strong text-gray-100 transition-colors hover:border-red hover:text-red"
        >
          <GithubIcon size={15} />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live demo`}
            className="flex h-8 w-8 items-center justify-center rounded border border-border-strong text-gray-100 transition-colors hover:border-red hover:text-red"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
