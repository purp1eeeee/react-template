/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
  test: {
    globals: true,
    environment: "happy-dom",
    setupFiles: "/src/tests/setup",
  },
})
