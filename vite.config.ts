import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwind()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@modules": path.resolve(__dirname, "./src/modules"),
            "@shared": path.resolve(__dirname, "./src/shared"),
            "@core": path.resolve(__dirname, "./src/core"),
        },
    },
});
