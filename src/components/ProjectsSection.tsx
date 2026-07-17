"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects, featuredProjects } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const FILTERS: { label: string; value: ProjectCategory | "all" }[] = [
  { label: "All", value: "all" },
  { label: "BI Dashboards", value: "bi-dashboard" },
  { label: "Data Analytics", value: "data-analytics" },
  { label: "Product", value: "product" },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesFilter = filter === "all" || p.category === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q));
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <section id="projects" className="relative bg-bg py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <SectionHeading eyebrow="Featured Work" title="Projects" />
        <p className="mt-4 max-w-2xl text-sm text-gray-400 md:text-base">
          Real datasets, real business questions. Click any project to see the full breakdown —
          business problem, tech stack, insights, and what I learned building it.
        </p>
      </div>

      {/* Featured row - horizontal scroll */}
      <div className="mt-12">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
            Top Picks For Recruiters
          </h3>
        </div>
        <div className="row-scroll flex gap-5 overflow-x-auto px-5 pb-4 md:px-10">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            >
              <ProjectCard project={project} onOpen={setSelected} size="large" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search + filter + full grid */}
      <div className="mx-auto mt-16 max-w-7xl px-5 md:px-10">
        <div className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-400">
            All Projects ({filtered.length})
          </h3>

          <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="relative w-full sm:w-64">
              <Search size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects or tech..."
                aria-label="Search projects"
                className="w-full rounded border border-border-strong bg-bg-card py-2 pl-9 pr-3 text-sm text-white placeholder:text-gray-600 outline-none transition-colors focus:border-red"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setFilter(f.value)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 font-mono text-xs transition-colors",
                    filter === f.value
                      ? "border-red bg-red text-white"
                      : "border-border-strong bg-bg-card text-gray-100 hover:border-red/50"
                  )}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-xl border border-dashed border-border py-16 text-center">
            <p className="text-gray-400">No projects match &ldquo;{query}&rdquo;. Try a different search.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} onOpen={setSelected} size="compact" />
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
