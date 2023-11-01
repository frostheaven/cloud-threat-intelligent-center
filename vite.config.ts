import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/index.scss";`,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@router": path.resolve(__dirname, "src/router"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
      "@common": path.resolve(__dirname, "src/common"),
    }
  },
  //配置服务代理
  server: {
    port: 8001,

    proxy: {
      '/local': {
        target: 'http://127.0.0.1:3000',
        ws: false, // 是否跨域
        changeOrigin: true,
        // rewrite: (path) => {
        //   return path.replace('/local', '/');
        // },
      },
      '/api': {
        target: 'http://10.40.127.46:30000',
        ws: false, // 是否跨域
        changeOrigin: true,
        // rewrite: (path) => {
        //   return path.replace('/portalApi', '/');
        // },
      },

    },
  },

})
