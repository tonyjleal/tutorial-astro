import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://unique-sprinkles-2c1ef0.netlify.app/",
  integrations: [preact()]
});