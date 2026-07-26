import { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../data/profile";
import emailjs from "@emailjs/browser";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setStatus("sending");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        reply_to: form.email,
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
    setStatus("sent");

    setForm({
      name: "",
      email: "",
      message: "",
    });
  } catch (err) {
    console.error(err);
    setStatus("error");
  }
};

  return (
    <section id="contact" className="section-shell py-24 sm:py-32">
      <SectionHeading
        path="~/contact"
        title="Let's build something"
        description="Open to full-stack, front-end, or UI/UX roles — and happy to talk about internship-to-hire opportunities too."
      />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="space-y-6"
        >
          <a
            href={`mailto:${profile.email}`}
            className="card flex items-center gap-4 p-5 transition-colors hover:border-signal/50"
          >
            <HiOutlineMail className="text-xl text-signal" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-slate">Email</p>
              <p className="text-sm text-paper">{profile.email}</p>
            </div>
          </a>

          <a
            href={`tel:${profile.phone.replace(/\s|-/g, "")}`}
            className="card flex items-center gap-4 p-5 transition-colors hover:border-circuit/50"
          >
            <HiOutlinePhone className="text-xl text-circuit" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-slate">Phone</p>
              <p className="text-sm text-paper">{profile.phone}</p>
            </div>
          </a>

          <div className="card flex items-center gap-4 p-5">
            <HiOutlineLocationMarker className="text-xl text-slate" />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wide text-slate">Based in</p>
              <p className="text-sm text-paper">{profile.location}</p>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-lg text-slate transition-colors hover:border-signal hover:text-signal"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-lg text-slate transition-colors hover:border-circuit hover:text-circuit"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-line text-lg text-slate transition-colors hover:border-signal hover:text-signal"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          onSubmit={handleSubmit}
          className="card space-y-5 p-7 sm:p-9"
        >
          <div>
            <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wide text-slate">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              disabled={status === "sending"}
              value={form.name}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-circuit"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wide text-slate">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              disabled={status === "sending"}
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-circuit"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wide text-slate">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              disabled={status === "sending"}
              value={form.message}
              onChange={handleChange}
              className="mt-2 w-full resize-none rounded-lg border border-ink-line bg-ink-soft px-4 py-3 text-sm text-paper outline-none transition-colors focus:border-circuit"
              placeholder="Tell me about the role or project..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending"
              ? "Sending..."
              : status === "sent"
              ? "Message Sent ✓"
              : "Send Message"}
          </button>
          {status === "sent" && (
            <p className="text-green-400 text-sm">
              ✅ Your message has been sent successfully. I'll get back to you soon!
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm">
              ❌ Failed to send message. Please try again later.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
