import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react'; // Add this import
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic', // This tells Vite to use the automatic JSX runtime
    }),
    tailwindcss(),
  ],
})
