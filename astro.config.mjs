import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Troque pela URL final quando comprar o domínio (ex.: https://comparotech.com.br)
  site: 'https://comparotech.vercel.app',
  integrations: [sitemap()],
});
