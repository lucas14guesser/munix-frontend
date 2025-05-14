import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, './src/pages/Login.jsx'),
        dashboard: resolve(__dirname, './src/pages/Dashboard.jsx'),
        mapeamento: resolve(__dirname, './src/pages/Mapeamento.jsx'),
        novaPesquisa: resolve(__dirname, './src/pages/NovaPesquisa.jsx'),
        pesquisa: resolve(__dirname, './src/pages/Pesquisa.jsx')
      }
    }
  }
})