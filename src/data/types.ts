export type Language = "en" | "es";
export type Localized = { en: string; es: string };
export const bi = (en: string, es: string): Localized => ({ en, es });
export interface Project {
  slug: string;
  name: string;
  category: Localized;
  summary: Localized;
  technologies: string[];
  color: string;
  visual: string;
  githubUrl: string;
  liveUrl: string;
  sections: { title: Localized; body: Localized; bullets?: Localized[] }[];
  screenshots: { src: string; alt: Localized; mobile?: boolean }[];
}
