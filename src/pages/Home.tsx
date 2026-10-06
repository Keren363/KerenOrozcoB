import { Link } from "react-router-dom";
import { useLanguage } from "../i18n";
import { bi } from "../data/types";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { education } from "../data/education";
import { contact } from "../data/contact";
import {
  SectionTitle,
  ProjectCard,
  SkillGroup,
  ExperienceItem,
  CaseStudy,
  TechBadge,
  ResumeButton,
  ContactLinks,
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  BrainCircuit,
  Workflow,
  ShieldCheck,
  MapPin,
} from "../components/UI";
export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow">
            <i />
            {t(
              bi(
                "SYSTEMS THINKER. SOLUTION BUILDER.",
                "VISIÓN DE SISTEMAS. SOLUCIONES REALES.",
              ),
            )}
          </div>
          <p className="hero-name">Keren Orozco</p>
          <h1>
            {t(bi("Engineering", "Ingeniería"))}
            <br />
            {t(bi("the connections", "que conecta"))}
            <span className="accent">.</span>
          </h1>
          <p className="hero-description">
            {t(
              bi(
                "I’m a Systems Engineering student with hands-on experience in medical device quality. I build software, data tools and AI workflows around real operational needs.",
                "Soy estudiante de Ingeniería en Sistemas con experiencia práctica en calidad de dispositivos médicos. Desarrollo software, herramientas de datos y flujos de IA para necesidades reales.",
              ),
            )}
          </p>
          <div className="hero-buttons">
            <a className="button primary" href="#projects">
              {t(bi("View Projects", "Ver proyectos"))}
              <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="#experience">
              {t(bi("View Experience", "Ver experiencia"))}
              <ArrowDown size={17} />
            </a>
          </div>
          <div className="hero-secondary">
            <ResumeButton />
            <a className="text-link" href="#contact">
              {t(bi("Contact Me", "Contáctame"))}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
        <div className="engineering-visual">
          <div className="diagram-label">
            <span className="status-dot" />{" "}
            {t(bi("CONNECTED BY DESIGN", "CONEXIONES CON PROPÓSITO"))}
            <span>01 / 05</span>
          </div>
          <div className="orbit">
            <div className="orbit-ring orbit-inner" />
            <div className="orbit-ring orbit-outer" />
            <svg className="orbit-lines" viewBox="0 0 440 400">
              <path d="M220 200L220 50M220 200L385 150M220 200L330 340M220 200L95 330M220 200L50 145" />
            </svg>
            <div className="orbit-center">
              <span>
                ko<span>.</span>
              </span>
              <small>{t(bi("CONNECT & CREATE", "CONECTAR Y CREAR"))}</small>
            </div>
            {[
              { Icon: Code2, label: "Software", cls: "node-top" },
              { Icon: BrainCircuit, label: "AI", cls: "node-right" },
              {
                Icon: Workflow,
                label: t(bi("Automation", "Automatización")),
                cls: "node-bottom-right",
              },
              {
                Icon: ShieldCheck,
                label: t(bi("Engineering", "Ingeniería")),
                cls: "node-bottom-left",
              },
              {
                Icon: Database,
                label: t(bi("Data", "Datos")),
                cls: "node-left",
              },
            ].map(({ Icon, label, cls }) => (
              <div key={cls} className={"orbit-node " + cls}>
                <Icon size={22} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="diagram-footer">
            <span>
              {t(bi("DIFFERENT DISCIPLINES.", "DISTINTAS DISCIPLINAS."))}
            </span>
            <span>
              {t(bi("ONE CONNECTED MINDSET.", "UNA VISIÓN CONECTADA."))}
            </span>
          </div>
        </div>
        <div className="hero-meta">
          <span>
            <MapPin size={14} />
            Costa Rica
          </span>
          <span>{t(bi("English C1", "Inglés C1"))}</span>
          <span>
            {t(
              bi(
                "Expected graduation · December 2026",
                "Graduación prevista · Diciembre 2026",
              ),
            )}
          </span>
          <span className="hero-discipline">
            Systems Engineering / AI / Automation / Software / Medical Devices
          </span>
        </div>
      </section>
      <div className="stack-strip">
        <div className="container">
          <span>{t(bi("MY TOOLKIT", "MIS HERRAMIENTAS"))}</span>
          {[
            "C#",
            ".NET",
            "Python",
            "React",
            "TypeScript",
            "Power BI",
            "AI",
            "Automation",
            "SQL",
          ].map((s) => (
            <strong key={s}>{s}</strong>
          ))}
        </div>
      </div>
      <section id="about" className="container section about">
        <SectionTitle
          number="01"
          label={t(bi("THE BIGGER PICTURE", "UNA VISIÓN MÁS AMPLIA"))}
          title={t(
            bi(
              "More than a single discipline.",
              "Más que una sola disciplina.",
            ),
          )}
        />
        <div className="about-grid">
          <p className="large-copy">
            {t(
              bi(
                "Real problems don’t fit into one box. Neither does my approach.",
                "Los problemas reales no caben en una sola categoría. Mi enfoque tampoco.",
              ),
            )}
          </p>
          <div>
            <p>
              {t(
                bi(
                  "Working with testing, process data and controlled documentation has shaped how I approach software: understand the process, question assumptions and keep the evidence traceable.",
                  "Trabajar con pruebas, datos de procesos y documentación controlada ha marcado mi forma de abordar el software: entender el proceso, cuestionar supuestos y mantener la trazabilidad de la evidencia.",
                ),
              )}
            </p>
            <p>
              {t(
                bi(
                  "That perspective extends to my own products and client work. I connect what a business needs with how an application behaves, how its data is organized and which tasks are worth automating.",
                  "Llevo esa perspectiva a mis productos y proyectos para clientes. Conecto las necesidades del negocio con el funcionamiento de la aplicación, la organización de datos y las tareas que conviene automatizar.",
                ),
              )}
            </p>
            <div className="about-tags">
              {[
                bi("Product thinking", "Visión de producto"),
                bi("Process improvement", "Mejora de procesos"),
                bi("Digital transformation", "Transformación digital"),
              ].map((s) => (
                <span key={s.en}>{t(s)}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="container section">
        <SectionTitle
          number="02"
          label={t(bi("SELECTED WORK", "PROYECTOS SELECCIONADOS"))}
          title={t(
            bi(
              "Ideas, engineered into reality.",
              "Ideas convertidas en soluciones.",
            ),
          )}
          description={t(
            bi(
              "Digital commerce, client websites, training software and automation—with the decisions behind each project.",
              "Comercio digital, sitios para clientes, software de entrenamiento y automatización, con las decisiones detrás de cada proyecto.",
            ),
          )}
        />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section id="experience" className="container section">
        <SectionTitle
          number="03"
          label={t(bi("PROFESSIONAL EXPERIENCE", "EXPERIENCIA PROFESIONAL"))}
          title={t(
            bi(
              "Medical devices. Practical engineering.",
              "Ingeniería aplicada a dispositivos médicos.",
            ),
          )}
        />
        <ExperienceItem />
      </section>
      <section id="skills" className="container section">
        <SectionTitle
          number="04"
          label={t(bi("TECHNICAL EXPERTISE", "CONOCIMIENTOS TÉCNICOS"))}
          title={t(
            bi(
              "The tools behind the thinking.",
              "Las herramientas detrás de las ideas.",
            ),
          )}
          description={t(
            bi(
              "Applied tools, working knowledge and fundamentals—grouped by the work they support.",
              "Herramientas aplicadas, conocimientos y fundamentos, agrupados por el trabajo que permiten realizar.",
            ),
          )}
        />
        <div className="skills-grid">
          {skills.map((g, i) => (
            <SkillGroup key={g.name.en} group={g} index={i} />
          ))}
        </div>
        <div className="software-panel">
          <div>
            <Code2 size={22} />
            <h3>
              {t(bi("Software with structure.", "Software con estructura."))}
            </h3>
            <p>
              {t(
                bi(
                  "C# and .NET foundations: REST APIs, OOP, LINQ, SOLID, dependency injection and clean architecture.",
                  "Fundamentos de C# y .NET: API REST, OOP, LINQ, SOLID, inyección de dependencias y arquitectura limpia.",
                ),
              )}
            </p>
          </div>
          <div>
            <div className="architecture">
              {["Controller", "Service", "Repository", "Database"].map(
                (s, i) => (
                  <span key={s}>
                    {s}
                    {i < 3 && <ArrowRight size={14} />}
                  </span>
                ),
              )}
            </div>
            <p className="small">
              {t(
                bi(
                  "I use Git workflows to track changes and organize development. My foundations include testing, debugging and API validation with Postman; Docker, CI/CD and deployment remain areas of basic knowledge.",
                  "Uso flujos de Git para registrar cambios y organizar el desarrollo. Mis bases incluyen pruebas, depuración y validación de API con Postman; Docker, CI/CD y despliegue son áreas de conocimiento básico.",
                ),
              )}
            </p>
          </div>
        </div>
      </section>
      <section id="ai" className="ai-section">
        <div className="container section">
          <SectionTitle
            number="05"
            label={t(
              bi(
                "HUMAN JUDGMENT. AI ACCELERATION.",
                "CRITERIO HUMANO. APOYO DE IA.",
              ),
            )}
            title={t(
              bi("How I Use AI in Engineering", "Cómo uso IA en ingeniería"),
            )}
          />
          <div className="ai-grid">
            <div>
              <blockquote>
                “
                {t(
                  bi(
                    "I treat AI-generated output as a draft that must be validated, tested and reviewed before implementation.",
                    "Trato los resultados generados por IA como borradores que deben validarse, probarse y revisarse antes de su implementación.",
                  ),
                )}
                ”
              </blockquote>
              <div className="badges">
                {[
                  "OpenAI Codex",
                  "Claude",
                  "Microsoft Copilot",
                  "Gemini",
                  "Ollama",
                ].map((s) => (
                  <TechBadge key={s}>{s}</TechBadge>
                ))}
              </div>
            </div>
            <div className="ai-method">
              {[
                [
                  bi("Define before generating", "Definir antes de generar"),
                  bi(
                    "I specify the problem, relevant context, constraints and acceptance criteria before asking an agent to modify code.",
                    "Defino el problema, contexto relevante, restricciones y criterios de aceptación antes de pedir a un agente que modifique código.",
                  ),
                ],
                [
                  bi("Choose the right workflow", "Elegir el flujo adecuado"),
                  bi(
                    "With Codex and Claude, I break work into steps: inspect the codebase, plan changes, run tests and iterate on failures.",
                    "Con Codex y Claude, divido el trabajo en pasos: inspeccionar el proyecto, planificar cambios, ejecutar pruebas e iterar sobre los fallos.",
                  ),
                ],
                [
                  bi("Validate, then implement", "Validar e implementar"),
                  bi(
                    "I review generated changes, check assumptions and test behavior. Confidential employer information stays out of prompts and shared examples.",
                    "Reviso los cambios generados, verifico supuestos y pruebo el comportamiento. La información confidencial de la empresa queda fuera de prompts y ejemplos compartidos.",
                  ),
                ],
              ].map(([title, body], i) => (
                <div key={i}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{t(title)}</h3>
                    <p>{t(body)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="ai-usecases">
            {t(bi("IN PRACTICE", "EN LA PRÁCTICA"))}
            <span>
              {t(
                bi(
                  "In AI Video Editor, local models assist ambiguous cuts while conservative fallback rules handle failures and delays.",
                  "En AI Video Editor, los modelos locales apoyan decisiones de corte ambiguas y las reglas conservadoras responden ante fallos o demoras.",
                ),
              )}
            </span>
          </p>
        </div>
      </section>
      <section className="container section">
        <SectionTitle
          number="06"
          label={t(bi("DATA INTO DIRECTION", "DATOS QUE ORIENTAN"))}
          title={t(
            bi(
              "From scattered data to shared clarity.",
              "De datos dispersos a información clara.",
            ),
          )}
        />
        <CaseStudy />
        <Link className="text-link case-link" to="/projects/quality-automation">
          {t(bi("Explore the case study", "Explorar el caso"))}
          <ArrowUpRight size={17} />
        </Link>
      </section>
      <section id="education" className="container section">
        <SectionTitle
          number="07"
          label={t(
            bi(
              "ALWAYS BUILDING ON THE FOUNDATION",
              "UNA BASE EN CONSTANTE DESARROLLO",
            ),
          )}
          title={t(bi("Education & languages", "Educación e idiomas"))}
        />
        <div className="education-grid">
          <div>
            <span className="overline">{education.school}</span>
            <h3>{t(education.degree)}</h3>
            <span className="education-date">{t(education.date)}</span>
            <p>{t(education.areas)}</p>
          </div>
          <div className="languages">
            <div>
              <span>{t(bi("Spanish", "Español"))}</span>
              <strong>{t(bi("Native", "Nativo"))}</strong>
            </div>
            <div>
              <span>{t(bi("English", "Inglés"))}</span>
              <strong>C1</strong>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="container contact-section">
        <div className="eyebrow">
          08 / {t(bi("LET’S CONNECT", "CONVERSEMOS"))}
        </div>
        <h2>
          {t(bi("Good conversations.", "Buenas conversaciones."))}
          <br />
          <span>
            {t(bi("Meaningful possibilities.", "Nuevas posibilidades."))}
          </span>
        </h2>
        <p>
          {t(
            bi(
              "Let’s discuss opportunities in software, data, automation or engineering teams working with real operational problems.",
              "Conversemos sobre oportunidades en software, datos, automatización o equipos de ingeniería que trabajen con problemas operativos reales.",
            ),
          )}
        </p>
        <a className="contact-email" href={"mailto:" + contact.email}>
          {contact.email}
          <ArrowUpRight />
        </a>
        <ContactLinks />
      </section>
    </>
  );
}
