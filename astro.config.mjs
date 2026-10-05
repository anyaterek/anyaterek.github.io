import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://anyaterek.github.io',
  integrations: [react()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
});
