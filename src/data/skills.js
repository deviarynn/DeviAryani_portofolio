// Skill domains power the signature network-graph visual (Hero + About)
// and the detailed skill cards in the Skills section.
export const skillDomains = [
  { id: "backend", label: "Full-Stack", x: 20, y: 28 },
  { id: "frontend", label: "IT Support", x: 78, y: 20 },
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
      "Testing & Debugging",
      "Application Deployment",
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
    path: "~/skills/it support",
    title: "IT Infrastructure & Support",
    description: "Supporting applications beyond development — from configuration and deployment to basic infrastructure maintenance..",
    items: [ 
    'Basic Network Configuration', 
    'Routing & Switching', 
    'MikroTik Configuration', 
    'Connectivity Troubleshooting', 
    'Infrastructure Maintenance', 
    'IT Support', 
    'Hosting Administration', 
    'Application Deployment', 
    'Database Configuration', 
    'Data Migration', 
    'Database Backup', 
    'Network Troubleshooting'
  ],
  },
];

export const techStack = [
  "PHP",
  "JavaScript",
  "TypeScript",
  "SQL",
  "Laravel",
  "CodeIgniter 4",
  "Node.js",
  "Express.js",
  "React.js",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Bootstrap",
  "MySQL",
  "PostgreSQL",
  "Supabase",
  "RESTful API",
  "JWT",
  "RabbitMQ",
  "Redis",
  "Git",
  "GitHub",
  "Postman",
  "Figma",
  "MikroTik",
];
