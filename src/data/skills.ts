import { bi } from "./types";
export const skills = [
  {
    name: bi("Software development", "Desarrollo de software"),
    items: [
      "C#",
      ".NET",
      ".NET Core",
      "Python",
      "Java",
      "TypeScript",
      "JavaScript",
      "React",
      "Flask",
      "REST APIs",
    ],
    details: bi(
      "Web application development and backend foundations; architecture concepts are outlined below.",
      "Desarrollo de aplicaciones web y fundamentos de backend; los conceptos de arquitectura se resumen abajo.",
    ),
  },
  {
    name: bi("Databases", "Bases de datos"),
    items: ["SQL", "SQL Server", "PostgreSQL", "MySQL", "Supabase"],
    details: bi(
      "Academic and practical experience with relational data, queries and application/database integration.",
      "Experiencia académica y práctica con datos relacionales, consultas e integración entre aplicaciones y bases de datos.",
    ),
  },
  {
    name: bi("AI & agentic development", "IA y desarrollo agéntico"),
    items: [
      "OpenAI Codex",
      "Claude",
      "Microsoft Copilot",
      "Gemini",
      "Ollama",
      "Qwen",
    ],
    details: bi(
      "AI-assisted debugging, refactoring, architecture exploration, documentation and research. Prompt design, model selection, context-window management and token efficiency.",
      "Depuración, refactorización, exploración de arquitectura, documentación e investigación asistidas por IA. Diseño de prompts, selección de modelos, gestión de contexto y eficiencia de tokens.",
    ),
  },
  {
    name: bi("Automation", "Automatización"),
    items: ["Power Automate", "Power Apps", "SharePoint", "Python"],
    details: bi(
      "Onboarding tools, documentation workflows, API integration and repetitive task automation.",
      "Herramientas de onboarding, flujos documentales, integración de API y automatización de tareas repetitivas.",
    ),
  },
  {
    name: bi("Data & analytics", "Datos y analítica"),
    items: ["Power BI", "Excel", "Minitab", "R", "SQL", "Python"],
    details: bi(
      "Data preparation, dashboards and KPI tracking. Descriptive statistics and trend analysis; basic process capability and Cp/Cpk concepts.",
      "Preparación de datos, tableros y seguimiento de KPI. Estadística descriptiva y tendencias; conceptos básicos de capacidad de proceso y Cp/Cpk.",
    ),
  },
  {
    name: bi("Engineering & quality", "Ingeniería y calidad"),
    items: ["CAPA", "NCEP", "DFMEA", "IQ / OQ / PQ", "TMV"],
    details: bi(
      "Hands-on support in investigations, testing and validation; basic metrology and risk-documentation exposure. Root cause analysis, 5 Whys and Gemba. Knowledge and exposure to Lean, Six Sigma, 6S and Kaizen.",
      "Apoyo práctico en investigaciones, pruebas y validación; exposición a metrología básica y documentación de riesgo. Causa raíz, 5 porqués y Gemba. Conocimientos y exposición a Lean, Six Sigma, 6S y Kaizen.",
    ),
  },
  {
    name: bi("Systems & developer tools", "Sistemas y herramientas"),
    items: [
      "Git",
      "GitHub",
      "Linux / WSL",
      "Postman",
      "GNS3",
      "Cisco Packet Tracer",
    ],
    details: bi(
      "Branches, commits, pull requests, merges and conflict resolution. Networking, operating systems and cybersecurity fundamentals. Basic Docker, GitHub Actions, CI/CD and Agile/Scrum knowledge.",
      "Ramas, commits, pull requests, merges y resolución de conflictos. Redes, sistemas operativos y fundamentos de ciberseguridad. Conocimientos básicos de Docker, GitHub Actions, CI/CD y Agile/Scrum.",
    ),
  },
];
