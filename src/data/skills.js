// Skill domains power the signature network-graph visual (Hero + About)
// and the detailed skill cards in the Skills section.
export const skillDomains = [
  { id: "backend", label: "Backend", x: 20, y: 28 },
  { id: "frontend", label: "Frontend", x: 78, y: 20 },
  { id: "design", label: "UI/UX", x: 82, y: 72 },
  { id: "network", label: "Network", x: 18, y: 76 },
  { id: "core", label: "Devi", x: 50, y: 48, isCore: true },
];

export const skillGroups = [
  {
    path: "~/skills/software-development",
    title: "Software Development",
    description:
      "Building reliable products end to end — from schema to interface.",
    items: [
      "Full-Stack Web Development",
      "Backend Development",
      "Frontend Development",
      "RESTful API Development",
      "Database Design & Management",
      "AI Integration",
    ],
  },
  {
    path: "~/skills/ui-ux-design",
    title: "UI/UX & Design",
    description: "Turning ambiguous ideas into interfaces people trust.",
    items: [
      "UI/UX Design",
      "Wireframing & Prototyping",
      "Responsive Web Design",
      "Design Systems",
      "Graphic Design",
    ],
  },
  {
    path: "~/skills/networking",
    title: "Networking",
    description: "A systems-level foundation from a CCNA-track background.",
    items: [
      "Basic Network Configuration",
      "Routing & Switching",
      "Infrastructure Maintenance",
    ],
  },
];

export const techStack = [
  "Laravel",
  "CodeIgniter 4",
  "React.js",
  "Express.js",
  "PostgreSQL",
  "MySQL",
  "Supabase",
  "Tailwind CSS",
  "JavaScript",
  "Figma",
  "Git",
  "JWT",
  "RabbitMQ",
  "Bootstrap",
  "MikroTik",
];
