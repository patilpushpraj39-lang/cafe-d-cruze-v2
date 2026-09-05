import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,

  tanstackStart: {
    server: {
      preset: "vercel",
    },

    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },

  vite: {
    base: "/cafe-d-cruze-v2/",
  },
});
