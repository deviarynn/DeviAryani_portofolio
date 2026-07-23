import { motion } from "framer-motion";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";
import { FaGithub } from "react-icons/fa";
export default function Experience() {
  return (
    <section id="experience" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/experience"
        title="Where I've worked"
        description="From an industry internship to a national capstone program and campus leadership roles."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-line sm:left-[9px]" />

        <ol className="space-y-10">
          {experience.map((role, i) => (
            <motion.li
              key={role.role + role.org}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative pl-8 sm:pl-10"
            >
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center sm:h-5 sm:w-5">
                <span className="absolute h-2 w-2 rounded-full bg-signal sm:h-2.5 sm:w-2.5" />
                <span className="absolute h-2 w-2 animate-pulseSoft rounded-full bg-signal/40 sm:h-2.5 sm:w-2.5" />
              </span>

              <div className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">
                    {role.role}
                  </h3>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-circuit">
                    {role.type}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate">
                  {role.org} <span className="text-slate-soft">·</span>{" "}
                  <span className="font-mono">{role.period}</span>
                </p>
                
                <ul className="mt-4 space-y-2 border-t border-ink-line pt-4">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-paper/85">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-slate-soft" />
                      {point}
                    </li>
                  ))}
                </ul>
                
                {role.github && (
                  <a
                    href={role.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-orange-400 hover:text-orange-400"
                  >
                    <FaGithub />
                    Source Code
                  </a>
                )}
                {role.demo && (
                  <a
                    href={role.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-3 mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-600 px-4 py-2 text-sm text-slate-200 transition hover:border-orange-400 hover:text-orange-400"
                  >
                    🌐 Live Demo
                  </a>
                )}
              
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
