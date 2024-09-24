import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vercelToolbar } from '@vercel/toolbar/plugins/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vercelToolbar()],
})
