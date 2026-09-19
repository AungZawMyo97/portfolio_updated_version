import type { HtmlTagDescriptor, Plugin } from "vite";
import { profile } from "../src/data/profile";
import { site } from "../src/data/site";

export default function seo(): Plugin {
  let isServerBuild = false;
  const image = new URL(site.image, site.url).href;
  const personId = `${site.url}#person`;
  const websiteId = `${site.url}#website`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: site.url,
        name: `${profile.name} — Software Engineer`,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${site.url}#profile`,
        url: site.url,
        name: site.title,
        description: site.description,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
      {
        "@type": "Person",
        "@id": personId,
        name: profile.name,
        url: site.url,
        image,
        jobTitle: "Software Engineer",
        description: site.description,
        sameAs: [profile.github, profile.linkedin],
        knowsAbout: [
          "C#",
          ".NET",
          "REST APIs",
          "Fintech",
          "React",
          "TypeScript",
          "Full stack development",
        ],
      },
    ],
  };

  return {
    name: "portfolio-seo",
    configResolved(config) {
      isServerBuild = Boolean(config.build.ssr);
    },
    transformIndexHtml() {
      const tags: HtmlTagDescriptor[] = [
        { tag: "title", children: site.title },
        { tag: "link", attrs: { rel: "canonical", href: site.url } },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        },
      ];
      const metadata = {
        description: site.description,
        author: profile.name,
        robots: "index, follow, max-image-preview:large",
        "twitter:card": "summary",
        "twitter:title": site.title,
        "twitter:description": site.description,
        "twitter:image": image,
        "twitter:image:alt": `${profile.name}, software engineer`,
      };
      const openGraph = {
        "og:type": "profile",
        "og:locale": "en_US",
        "og:site_name": `${profile.name} — Software Engineer`,
        "og:title": site.title,
        "og:description": site.description,
        "og:url": site.url,
        "og:image": image,
        "og:image:type": "image/png",
        "og:image:width": "360",
        "og:image:height": "360",
        "og:image:alt": `${profile.name}, software engineer`,
      };
      for (const [name, content] of Object.entries(metadata)) {
        tags.push({ tag: "meta", attrs: { name, content } });
      }
      for (const [property, content] of Object.entries(openGraph)) {
        tags.push({ tag: "meta", attrs: { property, content } });
      }
      return tags.map((tag) => ({ ...tag, injectTo: "head" }));
    },
    generateBundle() {
      if (isServerBuild) return;
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap.xml", site.url).href}\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${site.url}</loc></url>\n</urlset>\n`,
      });
    },
  };
}
