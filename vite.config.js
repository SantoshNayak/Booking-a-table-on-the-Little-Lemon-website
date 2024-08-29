import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import stylelint from 'vite-plugin-stylelint';
import styleX from 'vite-plugin-stylex';

export default defineConfig({
  plugins: [react(), styleX()],
  test: {
    globals: true,
    environment: 'happy-dom',
   setupFiles: ['./vitest.setup.jsx']
  }
});
