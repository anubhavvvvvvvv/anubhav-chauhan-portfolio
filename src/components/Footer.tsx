import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { contact } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 sm:flex-row md:px-10">
        <div className="flex items-center gap-2">
          <span className="font-display text-xl tracking-wider text-red">
            ANUBHAV<span className="text-white">.</span>
          </span>
        </div>

        <p className="text-center text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Anubhav Chauhan. Built with Next.js &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition-colors hover:text-red"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition-colors hover:text-red"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            aria-label="Email"
            className="text-gray-400 transition-colors hover:text-red"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
