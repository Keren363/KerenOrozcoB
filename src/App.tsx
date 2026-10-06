import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Navigation, Footer } from "./components/UI";
import Home from "./pages/Home";
import { useLanguage } from "./i18n";
import { bi } from "./data/types";
import { projects } from "./data/projects";
import { contact } from "./data/contact";
const Project = lazy(() => import("./pages/Project"));
function PageEffects() {
  const { pathname, hash } = useLocation();
  const { t, lang } = useLanguage();
  useEffect(() => {
    const project = projects.find(
      (p) =>
        pathname === "/projects/" + p.slug ||
        pathname === "/projects/" + p.slug + "/",
    );
    const title = project
      ? `${project.name} | Keren Orozco`
      : "Keren Orozco | Systems Engineering, AI & Software Portfolio";
    const description = project
      ? t(project.summary)
      : t(
          bi(
            "Systems Engineering portfolio focused on software development, AI, automation, data analytics, medical devices and digital transformation.",
            "Portafolio de Ingeniería en Sistemas enfocado en software, IA, automatización, análisis de datos, dispositivos médicos y transformación digital.",
          ),
        );
    document.title = title;
    for (const [name, content] of [
      ["description", description],
      ["og:title", title],
      ["og:description", description],
      ["twitter:title", title],
      ["twitter:description", description],
      ["og:locale", lang === "en" ? "en_US" : "es_CR"],
    ]) {
      const attr = name.startsWith("og:") ? "property" : "name";
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.append(tag);
      }
      tag.setAttribute("content", content);
    }
    if (contact.siteUrl) {
      let link = document.querySelector<HTMLLinkElement>(
        'link[rel="canonical"]',
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.append(link);
      }
      link.href =
        contact.siteUrl.replace(/\/$/, "") +
        (pathname === "/" ? "/" : pathname.replace(/\/$/, ""));
    }
  }, [pathname, lang, t]);
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() =>
        document.getElementById(hash.slice(1))?.scrollIntoView(),
      );
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
export default function App() {
  const { t } = useLanguage();
  return (
    <MotionConfig reducedMotion="user">
      <PageEffects />
      <a className="skip-link" href="#main">
        {t(bi("Skip to content", "Saltar al contenido"))}
      </a>
      <div id="top" />
      <Navigation />
      <main id="main" tabIndex={-1}>
        <Suspense
          fallback={
            <div className="container loading">
              {t(bi("Loading project…", "Cargando proyecto…"))}
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<Project />} />
            <Route
              path="*"
              element={
                <div className="container not-found">
                  <h1>404</h1>
                  <p>
                    {t(
                      bi(
                        "This page could not be found.",
                        "No se encontró esta página.",
                      ),
                    )}
                  </p>
                  <Link to="/" className="button primary">
                    {t(bi("Back to home", "Volver al inicio"))}
                  </Link>
                </div>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </MotionConfig>
  );
}
