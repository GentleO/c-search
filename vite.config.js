import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; //

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), //
  ],
  base: '/c-search/',
   proxy: {
      '/pixabay': {
        target: 'https://pixabay.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pixabay/, ''),
      }
    }
});
