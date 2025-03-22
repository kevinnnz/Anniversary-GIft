import { defineConfig } from "vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
      TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
      react()
    ],
    server: {
      fs: {
        allow: ['..']
      }
    },
    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ]
      }
    }
  });