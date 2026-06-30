"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Beacon from "./Beacon";
import { colorways, sizes, coreSpecs, LINE_URL, type ColorKey } from "@/lib/products";

export default function Spectrum() {
  const [active, setActive] = useState<ColorKey>("amber");
  const cw = colorways.find((c) => c.key === active)!;

  return (
    <section id="spectrum" className="relative border-y border-white/10 bg-charcoal/60">
      <div className="mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-36">
        <div className="max-w-3xl">
          <p className="mono-label mb-4 text-[11px] text-navy-glow">◈ The Spectrum</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">
            4 Dimensions. 4 Spectrum Signals.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/60 sm:text-lg">
            Precision engineering packed into every single rotation. Select a
            signal to see the beacon transform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Interactive beacon */}
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-30 blur-[120px] transition-colors duration-700"
              style={{ background: cw.glow }}
            />
            <Beacon
              image={cw.image}
              glow={cw.glow}
              alt={`BIG ONE ELECTRIC ${cw.name} LED rotary warning light`}
              swapKey={cw.key}
            />

            {/* live readout */}
            <div className="mx-auto mt-4 flex max-w-[460px] items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cw.key}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="flex w-full items-center justify-between"
                >
                  <div>
                    <p className="mono-label text-[10px] text-white/40">Signal</p>
                    <p className="font-display text-lg font-bold" style={{ color: cw.glow }}>
                      {cw.name}{" "}
                      <span className="font-thai text-xs text-white/40">{cw.nameTh}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="mono-label text-[10px] text-white/40">λ Wavelength</p>
                    <p className="font-display text-lg font-bold text-white">{cw.wavelength}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Switcher + detail */}
          <div>
            {/* color chips */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {colorways.map((c) => {
                const on = c.key === active;
                return (
                  <button
                    key={c.key}
                    onClick={() => setActive(c.key)}
                    aria-pressed={on}
                    className="group relative flex flex-col items-center gap-2 rounded-xl border bg-black/30 px-2 py-4 transition-all"
                    style={{
                      borderColor: on ? c.glow : "rgba(255,255,255,0.1)",
                      boxShadow: on ? `0 0 26px ${c.glow}55, inset 0 0 18px ${c.glow}22` : "none",
                    }}
                  >
                    <span
                      className="h-7 w-7 rounded-full transition-transform group-hover:scale-110"
                      style={{
                        background: c.glow,
                        boxShadow: `0 0 14px ${c.glow}`,
                      }}
                    />
                    <span
                      className="text-xs font-semibold transition-colors"
                      style={{ color: on ? "#fff" : "rgba(255,255,255,0.5)" }}
                    >
                      {c.name}
                    </span>
                    <span className="mono-label text-[9px] text-white/30">{c.catalogue}</span>
                  </button>
                );
              })}
            </div>

            {/* application */}
            <AnimatePresence mode="wait">
              <motion.div
                key={cw.key}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5"
              >
                <p className="mono-label text-[10px] text-white/40">Deployed for</p>
                <p className="mt-1 text-base text-white/85">{cw.use}</p>
              </motion.div>
            </AnimatePresence>

            {/* core specs */}
            <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] sm:grid-cols-4">
              {coreSpecs.map((s) => (
                <div key={s.label} className="bg-carbon px-4 py-3">
                  <dt className="mono-label text-[9px] text-white/35">{s.label}</dt>
                  <dd className="mt-1 text-xs font-semibold text-white/80">{s.value}</dd>
                </div>
              ))}
            </dl>

            <a
              href={LINE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
              style={{ color: cw.glow }}
            >
              Request {cw.name} pricing via LINE <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Sizes spec table */}
        <div id="specs" className="mt-24 scroll-mt-24">
          <h3 className="font-display text-2xl font-bold sm:text-3xl">Four Sizes, One Standard</h3>
          <p className="mt-3 max-w-2xl text-sm text-white/55">
            Every model shares the same electrical envelope — choose by footprint
            and output intensity.
          </p>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.04] text-white/45">
                  {["Model", "Diameter", "Height", "LED Array", "Output"].map((h) => (
                    <th key={h} className="mono-label px-5 py-4 text-[10px] font-medium">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sizes.map((s, i) => (
                  <motion.tr
                    key={s.model}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="border-t border-white/[0.06] transition-colors hover:bg-white/[0.03]"
                    style={{ ["--glow" as string]: cw.glow } as React.CSSProperties}
                  >
                    <td className="px-5 py-4 font-display text-sm font-bold text-white">
                      {s.model}
                    </td>
                    <td className="px-5 py-4 text-sm text-white/70">{s.diameter}</td>
                    <td className="px-5 py-4 text-sm text-white/70">{s.height}</td>
                    <td className="px-5 py-4 text-sm text-white/70">{s.leds}</td>
                    <td className="px-5 py-4 text-sm font-semibold" style={{ color: cw.glow }}>
                      {s.output}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
