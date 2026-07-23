import { motion } from "framer-motion";
import { skillGroups, techStack } from "../data/skills";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/skills"
        title="What I bring to a team"
        description="Three domains that usually live in separate job descriptions — backend engineering, interface design, and infrastructure — meeting in one person."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="card group flex flex-col p-7 transition-colors hover:border-circuit/50"
          >
            <p className="font-mono text-[11px] text-signal">{group.path}</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-paper">
              {group.title}
            </h3>
            <p className="mt-2 text-sm text-slate">{group.description}</p>

            <ul className="mt-6 space-y-2.5 border-t border-ink-line pt-5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-sm text-paper/90"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-circuit" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="mt-8 card p-7"
      >
        <p className="eyebrow mb-4">~/skills/tech-stack</p>
        <div className="flex flex-wrap gap-2.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-ink-line bg-ink-soft px-3.5 py-1.5 font-mono text-xs text-slate transition-colors hover:border-signal/60 hover:text-paper"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
