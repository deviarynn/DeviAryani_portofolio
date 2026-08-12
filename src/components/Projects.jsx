import { motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiOutlineCodeBracket, } from "react-icons/hi2";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/projects"
        title="Development Projects"
        description="Three products built with real teams, real constraints, and real users in mind."
      />

      <div className="space-y-6">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="card grid gap-8 p-7 sm:p-9 lg:grid-cols-[1.1fr_1fr] lg:gap-12"
          >
            <div className="mt-7 flex flex-wrap gap-3">
              <p className="font-mono text-[11px] text-signal">
                0{i + 1} · {project.role}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-circuit">{project.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-ink-line px-3 py-1 font-mono text-[11px] text-slate"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-signal px-4 py-2 text-sm text-signal transition hover:bg-signal hover:text-black"
                >
                  <HiOutlineArrowUpRight />
                  Live Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-ink-line px-4 py-2 text-sm text-paper transition hover:border-signal hover:text-signal"
                >
                  <HiOutlineCodeBracket />
                  GitHub Repository
                </a>
              )}

            </div>

            <div className="border-t border-ink-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="eyebrow mb-4">My contributions</p>
              <ul className="space-y-3">
                {project.contributions.map((c) => (
                  <li key={c} className="flex gap-2.5 text-sm text-paper/85">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
