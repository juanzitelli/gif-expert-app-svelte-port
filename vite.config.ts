import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import postcss from "./postcss.config.js";

/**
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [svelte()],
  envDir: "./",
  css: {
    postcss,
  },
});
