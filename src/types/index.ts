export type ProjectCategory = "data-analytics" | "bi-dashboard" | "product";

export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  categoryLabel: string;
  matchScore: number; // Netflix-style "% match" badge
  description: string;
  businessProblem: string;
  dataset: string;
  techStack: string[];
  sqlConcepts?: string[];
  pythonLibraries?: string[];
  keyInsights: string[];
  challenges: string[];
  learnings: string[];
  highlights: ProjectHighlight[];
  images: { src: string; alt: string }[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface Certification {
  title: string;
  issuer: string;
  score?: string;
  url?: string;
}

export interface EducationItem {
  course: string;
  institution: string;
  year: string;
  metric: string;
  metricLabel: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; level: number }[];
}

export interface Achievement {
  title: string;
  description: string;
  url?: string;
}
