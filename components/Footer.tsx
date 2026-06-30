import Image from "next/image";
import { LINE_URL, colorways } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-carbon">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="relative h-10 w-[180px]">
              <Image
                src="/brand/logo-dark.svg"
                alt="BIG ONE ELECTRIC"
                fill
                className="logo-glow object-contain object-left"
              />
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              Re-imagining industrial safety as high-tech precision. Rotary
              warning lights, signal beacons and factory signal equipment.
            </p>
            <p className="font-thai mt-3 text-sm text-white/35">
              ไฟหมุนเตือนภัย · สัญญาณไฟโรงงาน · Made in Thailand
            </p>
          </div>

          <div className="flex gap-14">
            <div>
              <p className="mono-label mb-4 text-[10px] text-white/35">Spectrum</p>
              <ul className="space-y-2.5">
                {colorways.map((c) => (
                  <li key={c.key} className="flex items-center gap-2 text-sm text-white/60">
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: c.glow, boxShadow: `0 0 8px ${c.glow}` }}
                    />
                    {c.name} · {c.catalogue}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mono-label mb-4 text-[10px] text-white/35">Contact</p>
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-signal-green transition-colors hover:opacity-80"
              >
                <span className="h-2 w-2 rounded-full bg-signal-green shadow-[0_0_8px_#18C9A6]" />
                Add LINE
              </a>
              <p className="mt-3 text-sm text-white/45">AC 220V · LED Running</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/[0.06] pt-6 text-xs text-white/30 sm:flex-row">
          <p>© {new Date().getFullYear()} BIG ONE ELECTRIC. All rights reserved.</p>
          <p className="mono-label text-[10px]">Engineered for Absolute Safety</p>
        </div>
      </div>
    </footer>
  );
}
