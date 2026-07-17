import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-5 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-red">Error 404</span>
      <h1 className="mt-4 font-display text-[7rem] leading-none text-white sm:text-[10rem]">
        LOST<span className="text-red">?</span>
      </h1>
      <p className="mt-4 max-w-md text-gray-400">
        This page took a wrong turn in the data pipeline. Let&apos;s get you back to something that
        actually exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded bg-red px-6 py-3.5 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-red-dark"
      >
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  );
}
