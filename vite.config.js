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
        home: resolve(__dirname, './pages/Home.jsx'),
        login: resolve(__dirname, './pages/Login.jsx'),
        dashboard: resolve(__dirname, './pages/Dashboard.jsx'),
        mapeamento: resolve(__dirname, './pages/Mapeamento.jsx'),
        novaPesquisa: resolve(__dirname, './pages/NovaPesquisa.jsx'),
        pesquisa: resolve(__dirname, './pages/Pesquisa.jsx')
      }
    }
  }
})