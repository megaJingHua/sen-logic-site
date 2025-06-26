import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  base: '/sen-logic-site/', // 你的 repo 名稱
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
})