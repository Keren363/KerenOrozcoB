import { mkdir, writeFile } from "node:fs/promises";
for (const folder of [
  "krea",
  "ai-video-editor",
  "forge",
  "naia",
  "quality-automation",
]) {
  await mkdir(`public/projects/${folder}`, { recursive: true });
  for (const lang of ["en", "es"])
    for (const type of ["desktop", "mobile"]) {
      const label =
        lang === "en"
          ? type === "desktop"
            ? "Desktop view"
            : "Mobile view"
          : type === "desktop"
            ? "Vista de escritorio"
            : "Vista móvil";
      const note =
        lang === "en"
          ? "Original screenshot pending"
          : "Captura original pendiente";
      await writeFile(
        `public/projects/${folder}/${type}-${lang}.svg`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400"><rect width="640" height="400" fill="#1b2019"/><rect x="${type === "desktop" ? 140 : 265}" y="65" width="${type === "desktop" ? 360 : 110}" height="190" rx="12" fill="#242d20" stroke="#647454"/><path d="M295 155h50m-25-25v50" stroke="#c4ed88" stroke-width="2"/><text x="320" y="305" text-anchor="middle" font-family="Arial" font-size="19" fill="#e8eddf">${label}</text><text x="320" y="335" text-anchor="middle" font-family="Arial" font-size="13" fill="#a8b39f">${note}</text></svg>`,
      );
    }
  await writeFile(
    `public/projects/${folder}/README.md`,
    "Place approved public screenshots here (WebP recommended). Register paths and bilingual alt text in src/data/projects.ts screenshots. Set mobile: true for a phone screenshot. Never include internal employer screenshots. The SVGs are explicit placeholders.\n",
  );
}
