import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { ConfigEnv, loadEnv } from 'vite'
import svgr from 'vite-plugin-svgr'
import { analyzer } from 'vite-bundle-analyzer'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


export default ({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())
  const plugins = [react(), svgr()]

  if (process.env.ANALYZER) {
    plugins.push(analyzer())
  }

  return {
    assetsInclude: ['**/*.svg'],
    plugins,
    server: {
      host: '0.0.0.0',
      port: 3000,
      proxy: {
        '/api': {
          target: env.VITE_PROXY_TARGET,
          secure: false,
          changeOrigin: true
        }
      }
    }
  }
}