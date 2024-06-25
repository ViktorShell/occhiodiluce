import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      manifest: {
        name: "Occhio di Luce",
        icons: [
          {
            src: "src/assets/eye_192.jpg",
            size: "192x192",
            type: "image/jpg",
            purpose: "any maskable"
          },
          {
            src: "src/assets/eye_512.jpg",
            size: "512x512",
            type: "image/jpg",
            purpose: "any maskable"
          }
        ]
      },
      workbox: {
        runtimeCaching: {
          urlPattern: ({ url }) => {
            return true;
          },
          handler: "NetworkFirst",
          options: {
            cacheName: "v1",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }
      }
    })
    ],
})
