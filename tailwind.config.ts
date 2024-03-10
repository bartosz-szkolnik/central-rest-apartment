import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'title': '#5C5C5C',
        'content': '#484848',
        'separator': '#D2C3C1',
        'gradient-1': '#E3DDD4',
        'gradient-2': '#EDE6E0',
        'gradient-3': '#E0D7CC',
        'link': '#4285F4',
        'vanilla': '#D7CBC5',
        'hero-text': '#363636',
      },
    },
  },
  plugins: [],
};
export default config;
