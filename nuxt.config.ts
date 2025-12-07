// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxt/ui", "@clerk/nuxt"],

  css: ["@/assets/css/main.css"],

  appConfig: {
    title: "SocBay",
    description: "Mua bán tài khoản mạng xã hội.",
  },

  clerk: {
    skipServerMiddleware: true,
  },

  image: {
    imagekit: {
      baseURL: "https://ik.imagekit.io/22010186",
    },
  },
});
