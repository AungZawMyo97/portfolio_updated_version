import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import seo from "./plugins/seo";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), seo()],
});
