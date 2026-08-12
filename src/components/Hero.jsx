import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineArrowDown, HiOutlineDownload } from "react-icons/hi";
import { profile } from "../data/profile";
import NetworkGraph from "./NetworkGraph";

const BOOT_LINES = [
  { cmd: "whoami", out: profile.name },
  { cmd: "cat roles.txt", out: profile.roles.join("  ·  ") },
  { cmd: "status --check", out: "AVAILABLE FOR HIRE" },
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-grid bg-grid pt-24 pb-16"
    >
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-signal/10 blur-[120px]" />
        <NetworkGraph className="absolute right-[-10%] top-1/2 hidden w-[560px] -translate-y-1/2 opacity-70 md:block lg:right-[-4%]" />
      </div>

      <div className="section-shell relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          {/* boot log */}
          <div className="mb-8 font-mono text-xs text-slate">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <motion.p
                key={line.cmd}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-1"
              >
                <span className="text-circuit">devi@portfolio</span>
                <span className="text-slate-soft">:~$ </span>
                <span className="text-paper">{line.cmd}</span>
                <br />
                <span className={i === 2 ? "text-signal" : "text-slate"}>
                  {"> "}
                  {line.out}
                </span>
              </motion.p>
            ))}
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-display text-5xl font-semibold leading-[1.05] text-paper sm:text-6xl lg:text-7xl"
          >
            Building reliable
            <br />
            software <span className="text-signal">&amp;</span> considered
            <br />
            interfaces.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate sm:text-lg"
          >
            {profile.tagline} — Full Stack Development, UI/UX design, Creative Design and an
            IT infrastructure foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View projects <HiOutlineArrowDown className="rotate-[-45deg]" />
            </a>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
            <a
              href="/Devi-Aryani-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs text-slate transition-colors hover:text-circuit"
            >
              <HiOutlineDownload />
              View Resume
            </a>
          </motion.div>
        </div>

        <NetworkGraph className="mx-auto block w-full max-w-xs opacity-90 md:hidden" />
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-slate hover:text-circuit md:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        scroll
        <HiOutlineArrowDown />
      </motion.a>
    </section>
  );
}
