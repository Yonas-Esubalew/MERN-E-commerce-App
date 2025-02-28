import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Fixes file changes not detected
    },
    hmr: {
      overlay: false, // Disable HMR overlay errors (optional)
    },
  },
});
