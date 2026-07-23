import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { stats } from "../data/profile";

function Counter({ value, suffix, animateCounter = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const [display, setDisplay] = useState("0");

  const isDecimal = value.includes(".");
  const numericValue = parseFloat(value);

  // kalau tidak ingin animasi
  if (!animateCounter) {
    return (
      <span
        className="font-display text-4xl font-semibold text-paper sm:text-5xl"
      >
        {value}
        <span className="text-signal">{suffix}</span>
      </span>
    );
  }

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, numericValue, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => {
        setDisplay(
          isDecimal
            ? v.toFixed(2)
            : Math.round(v).toString()
        );
      },
    });

    return () => controls.stop();
  }, [isInView, numericValue, isDecimal]);

  return (
  <span
    ref={ref}
    className="font-display font-semibold"
  >
    {suffix === "/4.00" ? (
      <span className="flex flex-col leading-none">
        <span className="text-4xl text-paper sm:text-5xl">
          {display}
        </span>

        <span className="mt-1 text-xl text-signal sm:text-2xl">
          {suffix}
        </span>
      </span>
    ) : (
      <span className="text-4xl text-paper sm:text-5xl">
        {display}
        <span className="text-signal">{suffix}</span>
      </span>
    )}
  </span>
);
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-x- border-t border-ink-line pt-8 sm:grid-cols-4">
    {stats.map((stat, i) => (
    <motion.div
      key={stat.label}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={i === 0 ? "min-w-[250px] mr-18" : ""}
    >
          <Counter value={stat.value} suffix={stat.suffix} />
          <p className="mt-1 font-mono text-xs uppercase tracking-wide text-slate">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
