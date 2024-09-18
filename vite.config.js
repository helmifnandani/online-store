import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgSprite from "vite-plugin-svg-sprite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    svgSprite({
      symbolId: "icon_[name]", // This will generate IDs like "icon-close" for "close.svg"
    }),
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "http://localhost:5000/",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
