import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  HiOutlineArrowUpRight,
  HiOutlineCodeBracket,
  HiOutlineChevronDown,
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (id) => {
    setOpenProject(openProject === id ? null : id);
  };

  return (
    <section id="projects" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/projects"
        title="Development Projects"
        description="Three products built with real teams, real constraints, and real users in mind."
      />

      <div className="space-y-10">
        {projects.map((project, i) => {
          const isOpen = openProject === project.id;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
              }}
              className="
                card
                overflow-hidden
              "
            >
              {/* =====================================================
                  MAIN PROJECT CARD
              ===================================================== */}

              <div className="p-5 sm:p-7 lg:p-9">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">

                  {/* ================= IMAGE ================= */}

                  <div className="group relative overflow-hidden rounded-2xl border border-ink-line bg-ink">

                    <div className="flex min-h-[260px] items-center justify-center overflow-hidden bg-white/100 sm:min-h-[340px] lg:min-h-[420px]">

                      <img
                        src={project.mockup || project.image}
                        alt={`${project.name} project mockup`}
                        className="
                          block
                          h-auto
                          max-h-[520px]
                          w-full
                          object-contain
                          transition
                          duration-700
                          group-hover:scale-[1.02]
                        "
                      />

                    </div>

                    {/* Overlay */}

                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/50
                        via-transparent
                        to-transparent
                        opacity-60
                      "
                    />

                    {/* Project number */}

                    <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                      <span className="font-mono text-[10px] tracking-widest text-white">
                        PROJECT 0{i + 1}
                      </span>
                    </div>

                  </div>

                  {/* ================= CONTENT ================= */}

                  <div className="flex flex-col">

                    <p className="font-mono text-[11px] text-signal">
                      0{i + 1} · {project.role}
                    </p>

                    <h3 className="mt-3 font-display text-2xl font-semibold text-paper sm:text-3xl">
                      {project.name}
                    </h3>

                    <p className="mt-2 text-sm text-circuit">
                      {project.tagline}
                    </p>

                    <p className="mt-5 text-sm leading-relaxed text-slate">
                      {project.description}
                    </p>

                    {/* ================= STACK ================= */}

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stack?.map((tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-ink-line
                            px-3
                            py-1
                            font-mono
                            text-[10px]
                            text-slate
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* ================= CONTRIBUTIONS ================= */}

                    {/* <div className="mt-8 border-t border-ink-line pt-6">

                      <p className="eyebrow mb-4">
                        My contributions
                      </p>

                      <ul className="space-y-3">

                        {project.contributions?.map((contribution) => (
                          <li
                            key={contribution}
                            className="
                              flex
                              gap-3
                              text-sm
                              leading-relaxed
                              text-paper/85
                            "
                          >
                            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />

                            <span>
                              {contribution}
                            </span>
                          </li>
                        ))}

                      </ul>

                    </div> */}

                    {/* ================= ACTIONS ================= */}

                    <div className="mt-8 flex flex-wrap gap-3">

                      {/* Case Study */}

                      <button
                        onClick={() => toggleProject(project.id)}
                        className="
                          inline-flex
                          items-center
                          gap-2
                          rounded-lg
                          border
                          border-signal
                          px-4
                          py-2
                          text-sm
                          text-signal
                          transition
                          hover:bg-signal
                          hover:text-black
                        "
                      >
                        View Case Study

                        <motion.span
                          animate={{
                            rotate: isOpen ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <HiOutlineChevronDown />
                        </motion.span>
                      </button>

                      {/* Live Demo */}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-ink-line
                            px-4
                            py-2
                            text-sm
                            text-paper
                            transition
                            hover:border-signal
                            hover:text-signal
                          "
                        >
                          <HiOutlineArrowUpRight />
                          Live Demo
                        </a>
                      )}

                      {/* Github */}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-lg
                            border
                            border-ink-line
                            px-4
                            py-2
                            text-sm
                            text-paper
                            transition
                            hover:border-signal
                            hover:text-signal
                          "
                        >
                          <HiOutlineCodeBracket />
                          GitHub
                        </a>
                      )}

                    </div>

                  </div>
                </div>
              </div>

              {/* =====================================================
                  CASE STUDY
              ===================================================== */}

              <AnimatePresence initial={false}>

                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.45,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >

                    <div className="border-t border-ink-line">

                      <div className="grid gap-12 p-6 sm:p-8 lg:p-12">

                        {/* ================= OVERVIEW ================= */}

                        <CaseStudySection
                          number="01"
                          title="Overview"
                          content={project.overview}
                        />

                        {/* ================= PROBLEM ================= */}

                        <CaseStudySection
                          number="03"
                          title="Problem / Background"
                          content={project.problem}
                        />

                        {/* ================= SOLUTION ================= */}

                        <CaseStudySection
                          number="04"
                          title="Solution"
                          content={project.solution}
                        />

                        {/* ================= ROLE ================= */}

                        <div className="grid gap-6 lg:grid-cols-[180px_1fr]">

                          <CaseStudyLabel
                            number="05"
                            title="My Role & Contributions"
                          />

                          <div>
                            <ul className="space-y-4">

                              {project.caseStudyContributions?.map(
                                (item) => (
                                  <li
                                    key={item}
                                    className="
                                      flex
                                      gap-3
                                      text-sm
                                      leading-relaxed
                                      text-paper/85
                                    "
                                  >
                                    <HiOutlineCheckCircle className="mt-0.5 shrink-0 text-signal" />

                                    <span>
                                      {item}
                                    </span>
                                  </li>
                                )
                              )}

                            </ul>
                          </div>

                        </div>

                        {/* ================= FEATURES ================= */}

                        <div className="grid gap-6 lg:grid-cols-[180px_1fr]">

                          <CaseStudyLabel
                            number="06"
                            title="Key Features"
                          />

                          <div className="grid gap-3 sm:grid-cols-2">

                            {project.features?.map((feature) => (
                              <div
                                key={feature}
                                className="
                                  rounded-xl
                                  border
                                  border-ink-line
                                  bg-black/5
                                  p-4
                                  text-sm
                                  text-paper/85
                                "
                              >
                                <div className="flex gap-3">

                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />

                                  {feature}

                                </div>
                              </div>
                            ))}

                          </div>

                        </div>

                        {/* ================= TECHNICAL ================= */}

                        <CaseStudySection
                          number="07"
                          title="Technical Implementation"
                          content={project.technical}
                        />

                        {/* ================= CHALLENGES ================= */}

                        <CaseStudySection
                          number="08"
                          title="Challenges & Solutions"
                          content={project.challenges}
                        />

                        {/* ================= RESULT ================= */}

                        <CaseStudySection
                          number="09"
                          title="Result / Outcome"
                          content={project.result}
                        />

                      </div>

                    </div>

                  </motion.div>
                )}

              </AnimatePresence>

            </motion.article>
          );
        })}
      </div>
    </section>
  );
}


/* =========================================================
   CASE STUDY COMPONENTS
========================================================= */

function CaseStudyLabel({ number, title }) {
  return (
    <div>
      <span className="font-mono text-[10px] tracking-widest text-signal">
        {number}
      </span>

      <h4 className="mt-2 font-display text-lg font-semibold text-paper">
        {title}
      </h4>
    </div>
  );
}


function CaseStudySection({ number, title, content }) {
  if (!content) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[180px_1fr]">

      <CaseStudyLabel
        number={number}
        title={title}
      />

      <div className="max-w-3xl">

        {Array.isArray(content) ? (
          <ul className="space-y-3">

            {content.map((item) => (
              <li
                key={item}
                className="
                  flex
                  gap-3
                  text-sm
                  leading-relaxed
                  text-slate
                "
              >
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />

                {item}
              </li>
            ))}

          </ul>
        ) : (
          <p className="text-sm leading-8 text-slate">
            {content}
          </p>
        )}

      </div>

    </div>
  );
}