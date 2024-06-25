import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Occhio di Luce',
        short_name: 'OdL',
        description: 'Ricerchiamo la verita in ogni angolo del pianeta',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'public/eye_192.jpg',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'public/eye_512.jpg',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })  
  ],
})
