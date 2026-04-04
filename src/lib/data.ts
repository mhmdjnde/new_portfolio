// ─────────────────────────────────────────────────────────────
//  PORTFOLIO CONTENT — Edit this file to update all page content
// ─────────────────────────────────────────────────────────────

export const PERSONAL = {
  name: "Mohammad Joundi",
  firstName: "Mohammad",
  lastName: "Joundi",
  handle: "jnde",
  title: "Power Platform Developer",
  subtitle: "CS Graduate · 42 Beirut · CMA CGM",
  bio: `I design and build intelligent automation systems that transform how enterprises operate.
With a Computer Science degree from Lebanese University and a systems engineering background from 42 Beirut,
I bridge the gap between complex business processes and elegant digital solutions.`,
  shortBio: `Power Platform developer with a CS degree from Lebanese University and a systems background from 42 Beirut, building enterprise automation at CMA CGM.`,
  email: "contact@jnde.dev", // TODO: Replace with your real email
  linkedin: "https://www.linkedin.com/in/mohammad-joundi/",
  github: "https://github.com/mhmdjnde",
  cvUrl: "/cv.pdf", // TODO: Add your CV as public/cv.pdf
  siteTitle: "jnde.dev",
};

export const METRICS = [
  { value: "42", label: "Beirut Graduate", suffix: "" },
  { value: "LU", label: "CS Graduate", suffix: "" },
  { value: "12+", label: "42 Projects", suffix: "" },
  { value: "CMA", label: "CGM Developer", suffix: "" },
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
    description: "Reimplementation of C standard library functions from scratch — foundational data structures and string utilities.",
    lang: "C",
    category: "Core",
    github: "https://github.com/mhmdjnde/LIBFT",
  },
  {
    name: "ft_printf",
    description: "Full reimplementation of printf with variadic argument handling and custom format parsing.",
    lang: "C",
    category: "Core",
    github: null,
  },
  {
    name: "get_next_line",
    description: "File descriptor reader returning lines on successive calls — memory-safe with static buffer management.",
    lang: "C",
    category: "Core",
    github: null,
  },
  {
    name: "minitalk",
    description: "Inter-process communication using UNIX signals (SIGUSR1/SIGUSR2) for binary data transmission.",
    lang: "C",
    category: "Systems",
    github: null,
  },
  {
    name: "push_swap",
    description: "Optimized sorting algorithm using two stacks and a minimal set of operations.",
    lang: "C",
    category: "Algorithms",
    github: null,
  },
  {
    name: "pipex",
    description: "Shell pipe simulation with fork, exec, and file descriptor management.",
    lang: "C",
    category: "Systems",
    github: null,
  },
  {
    name: "so_long",
    description: "2D game using the MLX library — map parsing, sprite rendering, event handling, and memory management.",
    lang: "C",
    category: "Graphics",
    github: "https://github.com/mhmdjnde/so_long",
  },
  {
    name: "MiniShell",
    description: "Full POSIX-compatible shell with lexer, parser, heredoc, environment expansion, pipe chaining, and built-ins.",
    lang: "C",
    category: "Systems",
    github: "https://github.com/mhmdjnde/MiniShell",
  },
  {
    name: "philosophers",
    description: "Dining philosophers concurrency problem — thread synchronization with mutexes, zero deadlocks.",
    lang: "C",
    category: "Concurrency",
    github: "https://github.com/mhmdjnde/philosophers",
  },
  {
    name: "CPP Modules",
    description: "9-module C++ curriculum covering OOP, inheritance, templates, operator overloading, and STL.",
    lang: "C++",
    category: "OOP",
    github: null,
  },
  {
    name: "NetPractice",
    description: "Network configuration and IP routing exercises — subnetting, routing tables, and TCP/IP fundamentals.",
    lang: "Networking",
    category: "Network",
    github: null,
  },
  {
    name: "ft_irc",
    description: "RFC 1459-compliant IRC server with multi-client support, channel management, and non-blocking I/O.",
    lang: "C++",
    category: "Network",
    github: null,
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
  {
    name: "Microsoft Teams",
    icon: "teams",
    color: "#6264A7",
    level: 72,
    description: "Notification delivery, approval flows, and adaptive card interfaces",
    tags: ["Notifications", "Approvals", "Adaptive Cards", "Bot Framework"],
  },
  {
    name: "Custom Connectors",
    icon: "connector",
    color: "#CA3CCA",
    level: 70,
    description: "REST API integration and custom connector development for Power Platform",
    tags: ["REST APIs", "OpenAPI", "OAuth 2.0", "HTTP Requests"],
  },
];

export const TECH_STACK = [
  { name: "Power Apps", category: "Platform", color: "#742774" },
  { name: "Power Automate", category: "Platform", color: "#0078D4" },
  { name: "Dataverse", category: "Platform", color: "#0099BC" },
  { name: "SharePoint", category: "Microsoft 365", color: "#038387" },
  { name: "Microsoft Teams", category: "Microsoft 365", color: "#6264A7" },
  { name: "C / C++", category: "Systems", color: "#4A5568" },
  { name: "Linux / Unix", category: "Systems", color: "#718096" },
  { name: "Kotlin", category: "Mobile", color: "#7F52FF" },
  { name: "JavaScript", category: "Web", color: "#C4960E" },
  { name: "Python", category: "Scripting", color: "#2B6CB0" },
  { name: "Git", category: "DevOps", color: "#C53030" },
  { name: "REST APIs", category: "Integration", color: "#742774" },
  { name: "SQL", category: "Data", color: "#0099BC" },
];

// Ordered: most impressive first. Selected Projects = first 4.
export const PROJECTS = [
  {
    title: "Internal Request Management",
    subtitle: "CMA CGM — Power Platform",
    description:
      "End-to-end automated request management system built with Power Apps and Power Automate. Handles employee requests with multi-level approval workflows, email notifications, and real-time status tracking — replacing a fully manual, paper-based process.",
    impact: ["70%+ reduction in processing time", "Multi-department rollout", "SharePoint & Teams integrated"],
    tags: ["Power Apps", "Power Automate", "SharePoint", "Approvals"],
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
      "Connect your business systems through automated data pipelines — aggregating, transforming, and routing operational data across Dataverse, SharePoint, SQL, and external APIs.",
    points: ["Dataverse architecture", "Automated pipelines", "SharePoint & SQL connectors", "Custom API integration"],
  },
  {
    icon: "architecture",
    title: "Architecture & Consulting",
    description:
      "Strategic guidance on Power Platform adoption — governance frameworks, environment strategy, ALM pipelines, and digital transformation roadmaps tailored to your organization.",
    points: ["Environment strategy", "Governance models", "ALM pipelines", "Training & enablement"],
  },
];
