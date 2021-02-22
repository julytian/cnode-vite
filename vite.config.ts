import type { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({command}: ConfigEnv):UserConfig => {
  const isBuild = command === 'build';
  return {
    // base: isBuild ? '/cnode-vite/': '/',
    plugins: [
      vue(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
    build: {
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: isBuild,
        }
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/styles/variables.scss";`,
        }
      }
    }
  };
}
