import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgSprite from "vite-plugin-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgSprite({
      symbolId: "icon_[name]", // This will generate IDs like "icon-close" for "close.svg"
    }),
  ],
});
