import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          colors: {
            'go4trades-dark': {
              100: '#1a2a44',
              200: '#0a1a34',
            },
            'go4trades-cyan': '#00FFFF',
            'go4trades-gray': '#b0b0b0',
            'go4trades-white': '#ffffff',
            },
          screens: {
            'sm': '576px',
            'md': '768px',
            'lg': '992px',
            'xl': '1200px',
            '2xl': '1400px',
          },
        },
      },
    }),
  ],
});