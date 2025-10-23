import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwind()],
    resolve: {
        alias: {
            "@": "/src",
            "@component": "/src/components",
            "@layout": "/src/components/layout",
            "@assets": "/src/assets",
            "@types": "src/types",
        },
    },
});
