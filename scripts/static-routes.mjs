import { readFile, writeFile, mkdir } from "node:fs/promises";
const html = await readFile("dist/index.html", "utf8");
const routes = [
  ["krea-one", "KREA ONE"],
  ["ai-video-editor", "AI Video Editor"],
  ["forge", "FORGE"],
  ["naia", "NAIA"],
  ["quality-automation", "Quality Data & Process Automation"],
];
// Physical route entries allow refresh/direct access on GitHub Pages without hash URLs.
for (const [slug, name] of routes) {
  await mkdir(`dist/projects/${slug}`, { recursive: true });
  await writeFile(
    `dist/projects/${slug}/index.html`,
    html
      .replace(/<title>.*?<\/title>/, `<title>${name} | Keren Orozco</title>`)
      .replace(
        'content="Keren Orozco | Engineering connected."',
        `content="${name} | Keren Orozco"`,
      ),
  );
}
await writeFile("dist/404.html", html);
if (process.env.VITE_SITE_URL) {
  const root = process.env.VITE_SITE_URL.replace(/\/$/, "");
  const urls = [
    root + "/",
    ...routes.map(([slug]) => root + "/projects/" + slug),
  ];
  await writeFile(
    "dist/sitemap.xml",
    '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' +
      urls
        .map((url) => `<url><loc>${url.replaceAll("&", "&amp;")}</loc></url>`)
        .join("") +
      "</urlset>",
  );
  await writeFile(
    "dist/robots.txt",
    `User-agent: *\nAllow: /\nSitemap: ${root}/sitemap.xml\n`,
  );
}
