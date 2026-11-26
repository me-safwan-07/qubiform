import { resolve } from 'node:path'
import svgr from 'vite-plugin-svgr'

import { defineConfig } from 'vitest/config'

export default defineConfig({
    plugins: [svgr()],
    envDir: false,
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    test: {
        env: {
            VITE_HOMEPAE_URL: 'http://localhost',
            VITE_DASHBOARD_URL: 'http://localhost'
        },
        pool: 'threads',
        maxWorkers: 1,
    }
})