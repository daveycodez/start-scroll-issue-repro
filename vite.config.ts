import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import viteReact from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart(), // MUST come before viteReact()
    viteReact()
  ],
  server: {
    host: "0.0.0.0",
    allowedHosts: true
  }
})
