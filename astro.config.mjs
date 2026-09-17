// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

// Todo se prerenderiza en estático salvo /api/* (formularios), que corre en Node.
export default defineConfig({
  site: 'https://www.startuc3m.es',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  vite: { plugins: [tailwindcss()] },
});
