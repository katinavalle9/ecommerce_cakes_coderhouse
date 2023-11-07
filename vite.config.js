import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "http://katinavalle9.github.io/ecommerce_cakes_coderhouse/",
  plugins: [react()],
})
