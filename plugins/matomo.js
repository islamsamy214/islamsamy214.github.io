import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default defineNuxtPlugin((nuxtApp) => {
  Vue.use(VueMatomo, {
    // Matomo server URL
    host: 'https://islamdev.matomo.cloud/',

    // Site ID configured in Matomo
    siteId: 1,

    // Use Nuxt's router for automatic page tracking
    router: nuxtApp.$router,

    // Additional options
    enableLinkTracking: true,
    trackInitialView: true,
    requireConsent: false, // Change to true if consent is required
    enableHeartBeatTimer: false, // Adjust based on preference
  })
})
