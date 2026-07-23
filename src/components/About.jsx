import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { profile, education } from "../data/profile";
import SectionHeading from "./SectionHeading";
import profileImage from "../assets/depi.jpeg";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/about"
        title="A little about me"
        description="Where the interest in systems and interfaces comes from."
      />

      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="group card relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">

            <img
              src={profileImage}
              alt="Devi Aryani"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">

              <h3 className="text-xl font-semibold text-white">
                Devi Aryani
              </h3>

              <p className="text-sm text-slate-300">
                Full-Stack Developer
              </p>

              <div className="mt-3 flex items-center gap-2 font-mono text-xs text-slate-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
                {profile.location}
              </div>

            </div>

          </div>

          <div className="space-y-4">
            {education.map((edu) => (
              <div key={edu.school} className="flex gap-3">
                <HiOutlineAcademicCap className="mt-1 shrink-0 text-lg text-signal" />
                <div>
                  <p className="text-sm font-medium text-paper">{edu.school}</p>
                  <p className="text-sm text-slate">{edu.degree}</p>
                  <p className="font-mono text-xs text-slate-soft">
                    {edu.period} {edu.detail && `· ${edu.detail}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed text-slate">{profile.bio}</p>

          <div className="mt-12">
            <Stats />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
