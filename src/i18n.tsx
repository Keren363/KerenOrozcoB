import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Language, Localized } from "./data/types";
const Context = createContext<{
  lang: Language;
  setLang: (l: Language) => void;
  t: (v: Localized) => string;
}>({ lang: "en", setLang: () => {}, t: (v) => v.en });
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    try {
      return localStorage.getItem("language") === "es" ? "es" : "en";
    } catch {
      return "en";
    }
  });
  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("language", lang);
    } catch {}
  }, [lang]);
  return (
    <Context.Provider value={{ lang, setLang, t: (v) => v[lang] }}>
      {children}
    </Context.Provider>
  );
}
export const useLanguage = () => useContext(Context);
