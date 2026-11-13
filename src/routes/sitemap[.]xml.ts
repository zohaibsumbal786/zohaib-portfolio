import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://zohaibsumbal.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const currentDate = new Date().toISOString().split('T')[0];
        
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: currentDate },
          { path: "/portfolio", changefreq: "weekly", priority: "0.9", lastmod: currentDate },
          { path: "/services", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/about", changefreq: "monthly", priority: "0.8", lastmod: currentDate },
          { path: "/blog", changefreq: "weekly", priority: "0.7", lastmod: currentDate },
          { path: "/contact", changefreq: "monthly", priority: "0.7", lastmod: currentDate },
        ];
        
        const urls = entries.map(
          (e) =>
            `  <url>
    <loc>${BASE_URL}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
        );
        
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`,
          `        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"`,
          `        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9`,
          `        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600, must-revalidate",
          },
        });
      },
    },
  },
});
