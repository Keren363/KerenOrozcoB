import {
  ArrowUpRight,
  ArrowDown,
  Download,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Globe,
  Code2,
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  Layers,
  MapPin,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n";
import { bi, type Project } from "../data/types";
import { contact } from "../data/contact";
import { experience } from "../data/experience";
import { skills } from "../data/skills";
export {
  ArrowUpRight,
  ArrowDown,
  Mail,
  Code2,
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  Layers,
  MapPin,
  ArrowRight,
};
export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  return (
    <button
      className="icon-control language"
      onClick={() => setLang(lang === "en" ? "es" : "en")}
      aria-label={lang === "en" ? "Switch to Spanish" : "Cambiar a inglés"}
    >
      <Globe size={15} />
      {lang.toUpperCase()}
    </button>
  );
}
export function ThemeToggle() {
  const { t } = useLanguage();
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "dark";
    } catch {
      return "dark";
    }
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);
  return (
    <button
      className="icon-control"
      aria-label={t(bi("Toggle color theme", "Cambiar tema de color"))}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
export function Navigation() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, []);
  const links = [
    ["about", bi("About", "Perfil")],
    ["projects", bi("Projects", "Proyectos")],
    ["experience", bi("Experience", "Experiencia")],
    ["skills", bi("Expertise", "Habilidades")],
  ] as const;
  return (
    <header className="navigation">
      <div className="nav-inner">
        <Link to="/" className="wordmark" aria-label="Keren Orozco home">
          ko<span>.</span>
        </Link>
        <nav
          id="main-nav"
          aria-label={t(bi("Main navigation", "Navegación principal"))}
          className={open ? "nav-links open" : "nav-links"}
        >
          {links.map(([id, label]) => (
            <Link key={id} to={"/#" + id} onClick={() => setOpen(false)}>
              {t(label)}
            </Link>
          ))}
          <Link
            className="mobile-contact"
            to="/#contact"
            onClick={() => setOpen(false)}
          >
            {t(bi("Let’s connect", "Conversemos"))}
          </Link>
        </nav>
        <div className="nav-actions">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link className="nav-contact" to="/#contact">
            {t(bi("Let’s connect", "Conversemos"))}
            <ArrowUpRight size={15} />
          </Link>
          <button
            id="menu-toggle"
            className="icon-control menu-toggle"
            aria-label={t(bi("Toggle menu", "Abrir o cerrar menú"))}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
export function SectionTitle({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">
          <span>{number}</span> {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}
export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="tech-badge">{children}</span>;
}
export function ResumeButton() {
  const { t } = useLanguage();
  return contact.resumeAvailable ? (
    <a
      className="text-link"
      href={import.meta.env.BASE_URL + contact.resumePath}
      download
    >
      <Download size={15} />
      {t(bi("Download Resume", "Descargar CV"))}
    </a>
  ) : (
    <span className="resume-pending">
      <button disabled className="text-link">
        <Download size={15} />
        {t(bi("Download Resume", "Descargar CV"))}
      </button>
      <small>{t(bi("PDF coming soon", "PDF pendiente"))}</small>
    </span>
  );
}
export function ProjectVisual({ project }: { project: Project }) {
  const { t } = useLanguage();
  const screenshot = project.screenshots[0];
  if (screenshot)
    return (
      <div className="project-visual real-preview">
        <img
          src={import.meta.env.BASE_URL + screenshot.src}
          alt={t(screenshot.alt)}
          loading="lazy"
        />
      </div>
    );
  return (
    <div className={"project-visual " + project.color} aria-hidden="true">
      <span className="concept-label">
        {t(bi("CONCEPT PREVIEW", "VISTA CONCEPTUAL"))}
      </span>
      {project.visual === "krea" ? (
        <div className="krea-art">
          <div className="mini-nav">
            KREA ONE <span>MOVE WITH PURPOSE.</span>
          </div>
          <div className="krea-body">
            <span>
              MADE
              <br />
              TO MOVE<span className="dot">.</span>
            </span>
            <div className="garment">
              <div />
              <div />
            </div>
          </div>
          <div className="mini-bottom">
            ACTIVEWEAR / EVERYDAY ENERGY <ArrowUpRight size={18} />
          </div>
        </div>
      ) : project.visual === "editor" ? (
        <div className="editor-art">
          <div className="editor-top">
            <span>
              <i /> AI Video Editor
            </span>
            <span>LOCAL AI</span>
          </div>
          <div className="waveform">
            {Array.from({ length: 45 }, (_, i) => (
              <i
                key={i}
                style={{ height: 12 + Math.abs(Math.sin(i * 1.7)) * 47 + "px" }}
              />
            ))}
          </div>
          <div className="timeline">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="editor-bottom">
            <span>Whisper</span>
            <ArrowRight size={13} />
            <span>Qwen</span>
            <ArrowRight size={13} />
            <span>FFmpeg</span>
          </div>
        </div>
      ) : project.visual === "forge" ? (
        <div className="forge-art">
          <span className="forge-logo">
            F<span>/</span>
          </span>
          <strong>FORGE</strong>
          <span>BUILD YOUR NEXT.</span>
          <div className="forge-bars">
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      ) : project.visual === "naia" ? (
        <div className="naia-art">
          <span>BEAUTY IN BALANCE</span>
          <strong>naia</strong>
          <div className="naia-arch" />
        </div>
      ) : (
        <div className="quality-art">
          <div className="mini-nav">
            PROCESS INSIGHTS <Database size={16} />
          </div>
          <div className="chart-bars">
            {[35, 48, 42, 64, 54, 78, 69, 89].map((v, i) => (
              <i key={i} style={{ height: v + "%" }} />
            ))}
          </div>
          <span>
            {t(
              bi(
                "ILLUSTRATIVE · NO COMPANY DATA",
                "ILUSTRATIVO · SIN DATOS DE EMPRESA",
              ),
            )}
          </span>
        </div>
      )}
    </div>
  );
}
export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const { t } = useLanguage();
  return (
    <motion.article
      className={"project-card " + (index > 2 ? "secondary-card" : "")}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        to={"/projects/" + project.slug}
        className="project-image-link"
        aria-label={t(bi("View project: ", "Ver proyecto: ")) + project.name}
      >
        <ProjectVisual project={project} />
      </Link>
      <div className="project-card-body">
        <div className="project-category">
          {t(project.category)}
          <span>0{index + 1}</span>
        </div>
        <h3>
          <Link to={"/projects/" + project.slug}>{project.name}</Link>
        </h3>
        <p>{t(project.summary)}</p>
        <div className="badges">
          {(project.technologies.length
            ? project.technologies
            : ["UI/UX", "Responsive Design"]
          )
            .slice(0, 4)
            .map((tech) => (
              <TechBadge key={tech}>{tech}</TechBadge>
            ))}
        </div>
        <Link className="project-link" to={"/projects/" + project.slug}>
          {t(bi("View project", "Ver proyecto"))}
          <ArrowUpRight size={17} />
        </Link>
      </div>
    </motion.article>
  );
}
export function SkillGroup({
  group,
  index,
}: {
  group: (typeof skills)[number];
  index: number;
}) {
  const { t } = useLanguage();
  const Icon = [
    Code2,
    Database,
    BrainCircuit,
    Workflow,
    Layers,
    ShieldCheck,
    Code2,
  ][index];
  return (
    <details className="skill-group" open={index === 0 || undefined}>
      <summary>
        <Icon size={20} />
        <h3>{t(group.name)}</h3>
        <span>+</span>
      </summary>
      <div className="skill-content">
        <div className="badges">
          {group.items.map((s) => (
            <TechBadge key={s}>{s}</TechBadge>
          ))}
        </div>
        {group.details && <p>{t(group.details)}</p>}
      </div>
    </details>
  );
}
export function ExperienceItem() {
  const { t } = useLanguage();
  return (
    <div className="experience-card">
      <div className="experience-meta">
        <span className="company-mark">
          Boston
          <br />
          Scientific
        </span>
        <span className="eyebrow">{t(experience.period)}</span>
        <span className="muted">Costa Rica</span>
      </div>
      <div>
        <span className="overline">{experience.company}</span>
        <h3>{t(experience.role)}</h3>
        <ul className="experience-points">
          {experience.points.map((p, i) => (
            <li key={i}>{t(p)}</li>
          ))}
        </ul>
        <div className="badges">
          {experience.tools.map((s) => (
            <TechBadge key={s}>{s}</TechBadge>
          ))}
        </div>
        <Link className="text-link case-link" to="/projects/quality-automation">
          {t(
            bi(
              "Explore testing, data & process work",
              "Ver trabajo en pruebas, datos y procesos",
            ),
          )}
          <ArrowUpRight size={16} />
        </Link>
        <p className="confidential-note">
          <ShieldCheck size={16} />
          {t(
            bi(
              "Experience described at a general level. Employer information remains confidential.",
              "Experiencia descrita de forma general. La información de la empresa permanece confidencial.",
            ),
          )}
        </p>
      </div>
    </div>
  );
}
export function CaseStudy() {
  const { t } = useLanguage();
  const steps = [
    bi("Problem", "Problema"),
    bi("Data collection", "Recopilación"),
    bi("Analysis", "Análisis"),
    bi("Visualization", "Visualización"),
    bi("Automation", "Automatización"),
    bi("Decision support", "Apoyo a decisiones"),
  ];
  const text = [
    bi("Limited process visibility", "Visibilidad limitada"),
    bi("Structure multiple sources", "Estructurar diversas fuentes"),
    bi("Explore trends and patterns", "Explorar tendencias y patrones"),
    bi("Build dashboards and KPIs", "Crear tableros y KPI"),
    bi("Simplify repetitive tracking", "Simplificar el seguimiento"),
    bi("Inform technical teams", "Informar a equipos técnicos"),
  ];
  return (
    <div className="case-study">
      <div className="case-label">
        <ShieldCheck size={15} />
        {t(
          bi(
            "GENERALIZED / ANONYMIZED CASE STUDY",
            "CASO GENERALIZADO / ANONIMIZADO",
          ),
        )}
      </div>
      <div className="case-steps">
        {steps.map((s, i) => (
          <div key={i}>
            <span className="step-number">0{i + 1}</span>
            <h3>{t(s)}</h3>
            <p>{t(text[i])}</p>
            {i < 5 && <ArrowRight className="step-arrow" size={18} />}
          </div>
        ))}
      </div>
      <p className="small muted">
        {t(
          bi(
            "Illustrative regulated manufacturing workflow, grounded in analytical support. No proprietary data or measured business outcomes are shown.",
            "Flujo ilustrativo de manufactura regulada basado en apoyo analítico. No se muestran datos propietarios ni resultados de negocio medidos.",
          ),
        )}
      </p>
    </div>
  );
}
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="container footer">
      <Link to="/" className="wordmark">
        ko<span>.</span>
      </Link>
      <p>© {new Date().getFullYear()} Keren Orozco</p>
      <span>
        {t(
          bi(
            "Built with intention. Engineered with care.",
            "Diseñado con intención. Desarrollado con cuidado.",
          ),
        )}
      </span>
      <a href="#top" aria-label={t(bi("Back to top", "Volver arriba"))}>
        <ArrowUpRight size={20} />
      </a>
    </footer>
  );
}
export function ContactLinks() {
  const { t } = useLanguage();
  return (
    <div className="contact-links">
      <a href={"mailto:" + contact.email}>
        <Mail size={19} />
        Email
        <ArrowUpRight size={17} />
      </a>
      {contact.linkedinUrl && (
        <a href={contact.linkedinUrl} target="_blank" rel="noreferrer">
          <ExternalLink size={19} />
          LinkedIn
          <ArrowUpRight size={17} />
        </a>
      )}
      {contact.githubUrl && (
        <a href={contact.githubUrl} target="_blank" rel="noreferrer">
          <Code2 size={19} />
          GitHub
          <ArrowUpRight size={17} />
        </a>
      )}
      <ResumeButton />
      {contact.showPhone && contact.phone && (
        <a href={"tel:" + contact.phone}>
          {t(bi("Phone", "Teléfono"))}: {contact.phone}
        </a>
      )}
    </div>
  );
}
