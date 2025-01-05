import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ghPages } from "vite-plugin-gh-pages";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/Shcool-management-system/",
  build: {
    chunkSizeWarningLimit: 1000, // Increase the limit to 1000 KB
  },
});
