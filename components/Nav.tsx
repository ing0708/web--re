"use client";

import Image from "next/image";
import { LINE_URL } from "@/lib/products";

const links = [
  { href: "#innovation", label: "Innovation" },
  { href: "#spectrum", label: "Spectrum" },
  { href: "#specs", label: "Specs" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          aria-label="BIG ONE ELECTRIC — home"
          className="relative block h-9 w-[150px] sm:h-10 sm:w-[170px]"
        >
          <Image
            src="/brand/logo-dark.svg"
            alt="BIG ONE ELECTRIC"
            fill
            priority
            className="logo-glow object-contain object-left"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mono-label text-[11px] text-white/55 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full border border-signal-green/40 bg-signal-green/10 px-4 py-2 text-xs font-semibold text-signal-green transition-all hover:bg-signal-green/20 hover:shadow-[0_0_22px_rgba(24,201,166,0.45)] sm:px-5 sm:text-sm"
        >
          <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_8px_#18C9A6]" />
          Add LINE
        </a>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}
