// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  devtools: { enabled: true },

  modules: ["nuxt-icon", "nuxt-parallax", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL,
      baseURL: "/",
      buildAssetsDir: "assets",
    },
  },

  site: {
    url: process.env.APP_URL,
    hostname: process.env.APP_URL,
    name: "Islam Samy - Software Engineer",
    gzip: true,
    routes: async () => {
      return ["/", "/about", "/contact", "/portfolio", "/services"];
    },
  },

  robots: {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: process.env.APP_URL + "/sitemap.xml",
  },

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
