// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import icon from "astro-icon";
import flowbiteReact from "flowbite-react/plugin/astro";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [icon(), react(), flowbiteReact()],
  adapter: vercel(),
});
