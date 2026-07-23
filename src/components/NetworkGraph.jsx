import { motion } from "framer-motion";
import { skillDomains } from "../data/skills";


export default function NetworkGraph({ className = "" }) {
  const core = skillDomains.find((n) => n.isCore);
  const nodes = skillDomains.filter((n) => !n.isCore);

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Diagram connecting Devi's disciplines: backend, frontend, UI/UX design, and networking"
    >
      {nodes.map((n) => (
        <line
          key={`line-${n.id}`}
          x1={core.x}
          y1={core.y}
          x2={n.x}
          y2={n.y}
          stroke="#232B3D"
          strokeWidth="0.4"
        />
      ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={`pulse-${n.id}`}
          cx={n.x}
          cy={n.y}
          r="1.6"
          fill="none"
          stroke={i % 2 === 0 ? "#FFB454" : "#5EEAD4"}
          strokeWidth="0.5"
          initial={{ opacity: 0.6, r: 1.6 }}
          animate={{ opacity: 0, r: 6 }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
        />
      ))}

      <circle cx={core.x} cy={core.y} r="3" fill="#FFB454" />

      {nodes.map((n, i) => (
        <circle
          key={`dot-${n.id}`}
          cx={n.x}
          cy={n.y}
          r="1.8"
          fill={i % 2 === 0 ? "#FFB454" : "#5EEAD4"}
        />
      ))}

      {nodes.map((n) => (
        <text
          key={`label-${n.id}`}
          x={n.x}
          y={n.y - 4}
          fontSize="3"
          fill="#8B93A7"
          fontFamily="'JetBrains Mono', monospace"
          textAnchor="middle"
        >
          {n.label}
        </text>
      ))}
    </svg>
  );
}
