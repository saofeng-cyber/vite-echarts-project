// import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { resolve } from 'node:path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-echarts-project/',
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', '@vueuse/core', 'pinia'],
      dts: 'custom/auto-imports.d.ts'
    }),
    Components({
      dirs: 'src/components',
      dts: 'custom/component.d.ts'
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__svg__icons__dom__'
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  optimizeDeps: {
    include: ['echarts']
  },
  server: {
    host: '0.0.0.0',
    port: 5174
  },
  build: {
    outDir: 'vite-echarts-project',
    assetsDir: './',
    emptyOutDir: true,
    sourcemap: true,
    minify: 'esbuild',
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
      }
    }
  }
});
