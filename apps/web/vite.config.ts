import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react({ babel: { plugins: ["babel-plugin-styled-components"] } })],
  resolve: {
    alias: {
      "@my-org/ui": path.resolve(__dirname, "../../packages/ui/src"),
    },
  },
});
