// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://valyriantech.github.io',
  base: '/www_valyrian_tech',
  integrations: [tailwind(), mdx()],
});
