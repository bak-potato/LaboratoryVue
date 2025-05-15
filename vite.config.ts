import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// TinyVue 组件库需求
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { TinyVueSingleResolver } from '@opentiny/unplugin-tiny-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // TinyVue 组件库
    Components({
      resolvers: [TinyVueSingleResolver],
    }),
    AutoImport({
      resolvers: [TinyVueSingleResolver],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  //  TinyVue 组件库pc端
  define: {
    'process.env': { TINY_MODE: 'pc' },
  },
})
