// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-echarts-project/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        {
          'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
        },
        'pinia'
      ],
      dts: 'custom/auto-imports.d.ts'
    }),
    Components({
      dirs: 'src/components',
      dts: 'custom/component.d.ts',
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: '0.0.0.0',
    port: 5174,
    proxy: {
      '/api': {
        target: 'https://echarts.apache.org/examples',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'vite-echarts-project',
    assetsDir: './',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      },
    },
    copyPublicDir: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    cssMinify: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[chunk]-[hash:10].js',
        entryFileNames: 'js/[name]-[hash:10].js',
        assetFileNames: 'css/[name]-[hash:10].[ext]',
        compact: true
      },
    }
  }
})


