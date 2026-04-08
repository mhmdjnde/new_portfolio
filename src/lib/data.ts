// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT — Edit this file to update all page content
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Mohamad Joundi",
  firstName: "mohamad",
  lastName: "Joundi",
  handle: "jnde",
  title: "Power Platform Developer",
  subtitle: "CS Graduate · 42 Beirut · CMA CGM",
  bio: `I design and build intelligent automation systems that transform how enterprises operate.
With a Computer Science degree from Lebanese University and a systems engineering background from 42 Beirut,
I bridge the gap between complex business processes and elegant digital solutions.`,
  shortBio: `Power Platform developer with a CS degree from Lebanese University and a systems background from 42 Beirut, building enterprise automation at CMA CGM.`,
  email: "me@mhmdjnde.dev", // TODO: Replace with your real email
  linkedin: "https://www.linkedin.com/in/mohamad-joundi/",
  github: "https://github.com/mhmdjnde",
  cvUrl: "/cv.pdf", // TODO: Add your CV as public/cv.pdf
  siteTitle: "mhmdjnde.dev",
};

export const METRICS = [
  { value: "42", label: "Beirut Graduate", suffix: "" },
  { value: "LU", label: "CS Graduate", suffix: "" },
  { value: "12+", label: "42 Projects", suffix: "" },
  { value: "CMA CGM", label: "Current Employer", suffix: "" },
];

export const JOURNEY = [
  {
    year: "Nov 2022",
    title: "Lebanese University — Computer Science",
    description:
      "Enrolled in the Computer Science program at Lebanese University, building formal foundations in algorithms, data structures, operating systems, networking, and software engineering principles.",
    type: "education",
    tags: ["Computer Science", "Algorithms", "Data Structures", "Networking"],
  },
  {
    year: "Jun 2024",
    title: "42 Beirut — Original Curriculum",
    description:
      "Joined 42 Beirut's intensive peer-learning environment — no teachers, no lectures, only project-based engineering challenges. Completed the original curriculum track, not the 2026 restructured version.",
    type: "education",
    tags: ["C", "Unix", "Systems", "Peer Learning"],
  },
  {
    year: "Mar 2025",
    title: "Power Platform Developer — CMA CGM",
    description:
      "Joined CMA CGM, one of the world's largest shipping and logistics groups, as a Power Platform Developer. Building enterprise-grade internal tools, automated workflows, and digital process solutions.",
    type: "work",
    tags: ["Power Apps", "Power Automate", "CMA CGM", "Enterprise"],
  },
  {
    year: "Jul 2025",
    title: "Dual Graduation",
    description:
      "Completed both Lebanese University's Computer Science degree and 42 Beirut's original curriculum simultaneously — marking the close of over two years of parallel academic and technical training.",
    type: "milestone",
    tags: ["CS Graduate", "42 Beirut", "Lebanese University"],
  },
  {
    year: "2025 → Present",
    title: "Engineering at Enterprise Scale",
    description:
      "Continuing to deepen expertise in Power Platform architecture, workflow orchestration, and enterprise automation at CMA CGM — delivering digital transformation across business units.",
    type: "current",
    tags: ["Power Platform", "Automation", "Enterprise Scale"],
  },
];

export const FORTY_TWO_PROJECTS = [
  {
    name: "LIBFT",
    description: "Custom C foundation library covering memory handling, strings, linked lists, and the low-level helpers reused across later 42 work.",
    lang: "C",
    category: "Core",
    github: "https://github.com/mhmdjnde/LIBFT",
  },
  {
    name: "ft_nm",
    description: "Reimplementation of the Unix nm tool with ELF parsing, symbol lookup, and GNU-like output for 32-bit and 64-bit binaries.",
    lang: "C",
    category: "Systems",
    github: "https://github.com/mhmdjnde/ft_nm",
  },
  {
    name: "so_long",
    description: "2D MLX game with map validation, sprite rendering, keyboard input, collectibles, and memory-safe resource handling.",
    lang: "C",
    category: "Graphics",
    github: "https://github.com/mhmdjnde/so_long",
  },
  {
    name: "MiniShell",
    description: "Custom Unix shell with lexing, parsing, pipes, redirections, heredocs, built-ins, signal handling, and environment expansion.",
    lang: "C",
    category: "Systems",
    github: "https://github.com/mhmdjnde/MiniShell",
  },
  {
    name: "philosophers",
    description: "Concurrency project solving dining philosophers with threads, mutexes, tight timing control, and deadlock-aware synchronization.",
    lang: "C",
    category: "Concurrency",
    github: "https://github.com/mhmdjnde/philosophers",
  },
  {
    name: "CPP_modules",
    description: "Progressive C++ modules covering classes, inheritance, canonical form, templates, containers, and STL problem solving.",
    lang: "C++",
    category: "OOP",
    github: "https://github.com/mhmdjnde/CPP_modules",
  },
  {
    name: "IRC",
    description: "Socket-based IRC server project with channels, commands, multi-client communication, and low-level network handling.",
    lang: "C++",
    category: "Network",
    github: "https://github.com/mhmdjnde/IRC",
  },
  {
    name: "cub3D",
    description: "Raycasting-based first-person maze built with MiniLibX, textured walls, player movement, and classic Wolfenstein-style rendering.",
    lang: "C",
    category: "Graphics",
    github: "https://github.com/mhmdjnde/cub3D",
  },
  {
    name: "ft_hangouts",
    description: "Android contacts and SMS app built with Kotlin, Material 3, localization, per-contact threads, and custom theming.",
    lang: "Kotlin",
    category: "Mobile",
    github: "https://github.com/mhmdjnde/ft_hangouts",
  },
  {
    name: "ft_transcendence",
    description: "Final 42 web project rebuilt as a full-stack multiplayer platform with auth, game logic, chat, and real-time interactions.",
    lang: "TypeScript",
    category: "Web",
    github: "https://github.com/mhmdjnde/ft_transcendence",
  },
];

export const POWER_PLATFORM_SKILLS = [
  {
    name: "Power Apps",
    icon: "apps",
    color: "#742774",
    level: 90,
    description: "Canvas & model-driven apps for enterprise workflows and internal tools",
    tags: ["Canvas Apps", "Model-Driven", "Dataverse", "PCF Controls"],
  },
  {
    name: "Power Automate",
    icon: "automate",
    color: "#0078D4",
    level: 88,
    description: "Cloud flows, desktop flows, and complex automated business processes",
    tags: ["Cloud Flows", "Desktop RPA", "Approvals", "HTTP Connectors"],
  },
  {
    name: "Dataverse",
    icon: "dataverse",
    color: "#0099BC",
    level: 80,
    description: "Enterprise data platform at the core of Power Platform solutions",
    tags: ["Tables", "Relationships", "Security Roles", "Business Rules"],
  },
  {
    name: "SharePoint",
    icon: "sharepoint",
    color: "#038387",
    level: 78,
    description: "Document management and list-based data integration across workflows",
    tags: ["Lists", "Libraries", "Integration", "Permissions"],
  },
];

export const TECH_STACK = [
  { name: "Power Apps",    category: "Platform",      color: "#742774" },
  { name: "Power Automate",category: "Platform",      color: "#0078D4" },
  { name: "Dataverse",     category: "Platform",      color: "#0099BC" },
  { name: "SharePoint",    category: "Microsoft 365", color: "#038387" },
  { name: "Microsoft Teams", category: "Microsoft 365", color: "#6264A7" },
  { name: "C / C++",       category: "Systems",       color: "#8A9FBA" },
  { name: "Linux / Unix",  category: "Systems",       color: "#8A9FBA" },
  { name: "Kotlin",        category: "Mobile",        color: "#7F52FF" },
  { name: "JavaScript",    category: "Web",           color: "#C4960E" },
  { name: "TypeScript",    category: "Web",           color: "#3178C6" },
  { name: "Tailwind CSS",  category: "Web",           color: "#38BDF8" },
  { name: "Python",        category: "Scripting",     color: "#5EA8E8" },
  { name: "Git",           category: "DevOps",        color: "#F07070" },
  { name: "SQL",           category: "Data",          color: "#0099BC" },
];

// Ordered: most impressive first. Selected Projects = first 4.
export const PROJECTS = [
  {
    title: "Power Platform @ CMA CGM",
    subtitle: "CMA CGM · Enterprise NDA",
    description:
      "5+ automation solutions delivered across departments at one of the world's top-3 global shipping conglomerates. Projects spanned critical internal tooling, multi-stage approval workflows, real-time operational systems, and Dataverse-backed data architecture. All work is under enterprise NDA — no project details can be disclosed.",
    impact: ["5+ projects shipped", "Critical systems built", "Multi-department reach", "Enterprise NDA"],
    tags: ["Power Apps", "Power Automate", "Dataverse", "SharePoint"],
    color: "blue",
  },
  {
    title: "ft_hangouts",
    subtitle: "42 Beirut — Mobile · Kotlin",
    description:
      "Lightweight Android contacts & SMS application with full CRUD contact management, per-contact conversation threads, SMS capabilities, customizable color themes per contact, and bilingual support (English/Arabic). Built with Kotlin and Material 3.",
    impact: ["Full SMS & contact management", "Bilingual EN/AR support", "Custom color themes per contact"],
    tags: ["Kotlin", "Android", "Material 3", "42 Project"],
    color: "purple",
    github: "https://github.com/mhmdjnde/ft_hangouts",
  },
  {
    title: "ft_transcendence",
    subtitle: "42 Beirut — Final Project · Full-Stack Web",
    description:
      "Final 42 web project rebuilt as a full-stack multiplayer platform with auth, game logic, real-time chat, and live interactions — delivering the complete 42 final evaluation experience.",
    impact: ["Real-time multiplayer game", "Auth system & JWT", "Live chat & WebSockets", "42 final evaluation"],
    tags: ["TypeScript", "42 Project"],
    color: "cyan",
    github: "https://github.com/mhmdjnde/ft_transcendence",
  },
  {
    title: "MiniShell",
    subtitle: "42 Beirut — Systems Programming",
    description:
      "A fully functional POSIX-compliant shell in C with lexer, parser, heredoc, environment variable expansion, pipe chaining, signal handling, and all required built-ins including cd, echo, env, export, unset, and exit.",
    impact: ["Full Bash compatibility", "Signal-safe I/O", "Peer-reviewed & validated"],
    tags: ["C", "Unix", "Shell", "42 Project"],
    color: "cyan",
    github: "https://github.com/mhmdjnde/MiniShell",
  },
  {
    title: "smart_ToDo",
    subtitle: "Hackathon · JavaScript",
    description:
      "Smart to-do application built during a hackathon, featuring intelligent task management and a clean, intuitive UI. Demonstrates rapid prototyping and frontend engineering under time pressure.",
    impact: ["Built within hackathon timeframe", "Smart task organization", "Clean, intuitive UI"],
    tags: ["JavaScript", "Hackathon", "Frontend"],
    color: "blue",
    github: "https://github.com/mhmdjnde/smart_ToDo",
  },
  {
    title: "philosophers",
    subtitle: "42 Beirut — Concurrency",
    description:
      "The classic dining philosophers concurrency problem solved with threads and mutexes. Precise timing, death detection, and zero data races — demonstrates deep understanding of concurrent programming in C.",
    impact: ["Thread-safe implementation", "Mutex synchronization", "Zero data races"],
    tags: ["C", "Threads", "Mutexes", "42 Project"],
    color: "purple",
    github: "https://github.com/mhmdjnde/philosophers",
  },
  {
    title: "so_long",
    subtitle: "42 Beirut — Graphics · C",
    description:
      "2D game built in C using the MLX graphics library. Implements map parsing with .ber format validation, sprite rendering, collision detection, collectible tracking, and proper event handling with no memory leaks.",
    impact: ["Custom MLX graphics pipeline", "Map validation & parsing", "Full event system"],
    tags: ["C", "MLX", "2D Game", "42 Project"],
    color: "cyan",
    github: "https://github.com/mhmdjnde/so_long",
  },
  {
    title: "LIBFT",
    subtitle: "42 Beirut — C Library",
    description:
      "From-scratch reimplementation of the C standard library — string manipulation, memory management, character classification, linked list utilities, and file descriptor output functions. Foundation for all subsequent 42 projects.",
    impact: ["42+ functions implemented", "Full standard compliance", "Foundation for all 42 projects"],
    tags: ["C", "Standard Library", "42 Project"],
    color: "purple",
    github: "https://github.com/mhmdjnde/LIBFT",
  },
];

export const SERVICES = [
  {
    icon: "workflow",
    title: "Process Automation",
    description:
      "Design and build end-to-end automated workflows with Power Automate — from simple approvals to complex multi-system orchestrations that eliminate manual bottlenecks.",
    points: ["Cloud & desktop flows", "Approval chains", "System integrations", "Scheduled automations"],
  },
  {
    icon: "apps",
    title: "Power Apps Development",
    description:
      "Custom canvas and model-driven apps tailored to your business processes, replacing manual work with polished, scalable applications built on Dataverse.",
    points: ["Canvas apps", "Model-driven apps", "Dataverse modeling", "PCF custom controls"],
  },
  {
    icon: "chart",
    title: "Data & Integration",
    description:
      "Connect your business systems through automated data pipelines — aggregating, transforming, and routing operational data across Dataverse, SharePoint, and SQL.",
    points: ["Dataverse architecture", "Automated pipelines", "SharePoint & SQL connectors"],
  },
  {
    icon: "architecture",
    title: "Architecture & Consulting",
    description:
      "Strategic guidance on Power Platform adoption — governance frameworks, environment strategy, ALM pipelines, and digital transformation roadmaps tailored to your organization.",
    points: ["Environment strategy", "Governance models", "ALM pipelines", "Training & enablement"],
  },
];
