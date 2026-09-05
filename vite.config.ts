import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
    },
    server: {
      entry: "server",
    },
  },

  vite: {
    base: "/cafe-d-cruze-v2/",
  },
});
