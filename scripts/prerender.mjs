import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "vite";

// Compile the same components for Node without adding a production server.
const serverDirectory = "node_modules/.cache/portfolio-ssr";
await build({
  build: {
    ssr: "src/entry-server.tsx",
    outDir: serverDirectory,
    emptyOutDir: true,
    copyPublicDir: false,
    rollupOptions: { output: { entryFileNames: "entry-server.mjs" } },
  },
});

const { render } = await import(
  pathToFileURL(resolve(serverDirectory, "entry-server.mjs")).href
);
const htmlPath = resolve("dist/index.html");
const template = await readFile(htmlPath, "utf8");
const outlet = '<div id="root"></div>';
if (!template.includes(outlet)) {
  throw new Error("The HTML template is missing the prerender root.");
}
await writeFile(
  htmlPath,
  template.replace(outlet, () => `<div id="root">${render()}</div>`),
);
console.log("Prerendered the portfolio into dist/index.html.");
