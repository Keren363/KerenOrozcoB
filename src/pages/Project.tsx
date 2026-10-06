import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../i18n";
import { bi, type Project as ProjectType, type Localized } from "../data/types";
import {
  ProjectVisual,
  TechBadge,
  ArrowUpRight,
  ArrowRight,
  CaseStudy,
} from "../components/UI";
export function ProjectHero({ project }: { project: ProjectType }) {
  const { t } = useLanguage();
  return (
    <header className="project-hero">
      <div className="eyebrow">{t(project.category)}</div>
      <h1>{project.name}</h1>
      <p>{t(project.summary)}</p>
      <div className="badges">
        {project.technologies.map((s) => (
          <TechBadge key={s}>{s}</TechBadge>
        ))}
      </div>
      {(project.githubUrl || project.liveUrl) && (
        <div className="hero-buttons">
          {project.githubUrl && (
            <a
              className="button secondary"
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <ArrowUpRight size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              className="button primary"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t(bi("Live Demo", "Ver sitio"))}
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      )}
    </header>
  );
}
export function ProjectSection({
  title,
  body,
  bullets,
  index,
}: {
  title: Localized;
  body: Localized;
  bullets?: Localized[];
  index: number;
}) {
  const { t } = useLanguage();
  return (
    <section className="project-section">
      <div>
        <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
        <h2>{t(title)}</h2>
      </div>
      <div className="project-section-copy">
        <p>{t(body)}</p>
        {bullets && (
          <ul className="experience-points project-bullets">
            {bullets.map((item) => (
              <li key={item.en}>{t(item)}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
export default function Project() {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const project = projects.find((p) => p.slug === slug);
  if (!project)
    return (
      <div className="container not-found">
        <h1>{t(bi("Project not found", "Proyecto no encontrado"))}</h1>
        <Link className="button primary" to="/">
          {t(bi("Back to home", "Volver al inicio"))}
        </Link>
      </div>
    );
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <article className="container project-page">
      <Link to="/#projects" className="text-link back-link">
        ← {t(bi("All projects", "Todos los proyectos"))}
      </Link>
      <ProjectHero project={project} />
      <div className="detail-visual">
        <ProjectVisual project={project} />
      </div>
      {!project.screenshots.length && (
        <p className="visual-disclaimer">
          {t(
            bi(
              "Concept artwork for this portfolio. Not a screenshot of the original product.",
              "Ilustración conceptual para este portafolio. No es una captura del producto original.",
            ),
          )}
        </p>
      )}
      <div className="project-sections">
        {project.sections.map((s, i) => (
          <ProjectSection key={i} {...s} index={i} />
        ))}
      </div>
      {slug === "quality-automation" && <CaseStudy />}
      <section className="screenshots">
        <h2>{t(bi("Screenshots & mobile view", "Capturas y vista móvil"))}</h2>
        {project.screenshots.length ? (
          <div className="screenshot-grid">
            {project.screenshots.map((s) => (
              <figure key={s.src} className={s.mobile ? "mobile-shot" : ""}>
                <img
                  src={import.meta.env.BASE_URL + s.src}
                  alt={t(s.alt)}
                  loading="lazy"
                />
                <figcaption>{t(s.alt)}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <>
            <div className="placeholder-grid">
              <img
                src={
                  import.meta.env.BASE_URL +
                  `projects/${slug === "krea-one" ? "krea" : slug}/desktop-${lang}.svg`
                }
                alt={t(
                  bi(
                    "Desktop screenshot placeholder; original image pending",
                    "Espacio para captura de escritorio; imagen original pendiente",
                  ),
                )}
                loading="lazy"
              />
              <img
                src={
                  import.meta.env.BASE_URL +
                  `projects/${slug === "krea-one" ? "krea" : slug}/mobile-${lang}.svg`
                }
                alt={t(
                  bi(
                    "Mobile screenshot placeholder; original image pending",
                    "Espacio para captura móvil; imagen original pendiente",
                  ),
                )}
                loading="lazy"
              />
            </div>
            <p className="muted small">
              {t(
                bi(
                  "Original project screenshots will be added here. No internal employer screenshots will be published.",
                  "Aquí se agregarán capturas originales del proyecto. No se publicarán capturas internas de la empresa.",
                ),
              )}
            </p>
          </>
        )}
      </section>
      <Link className="next-project" to={"/projects/" + next.slug}>
        <span>
          <small>{t(bi("NEXT PROJECT", "SIGUIENTE PROYECTO"))}</small>
          <strong>{next.name}</strong>
        </span>
        <ArrowRight size={28} />
      </Link>
    </article>
  );
}
