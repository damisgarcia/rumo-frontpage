// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/icon', '@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  devServer: {
    port: 8000,
  },
  css: ['~/assets/css/main.css'],
  fonts: {
    families: [
      { name: 'Inter', weights: [400, 600] },
      { name: 'Inter Tight', weights: [600] },
      { name: 'JetBrains Mono', weights: [400] },
    ],
  },
})