import { motion } from "framer-motion";

export default function SectionHeading({ path, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      <p className="eyebrow mb-3">{path}</p>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-slate leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
