// https://nuxt.com/docs/api/configuration/nuxt-config
// import markdown_transform from "./modules/markdown-transform/index.mjs";
// import markdown_transform from "@/mmodules/markdown-transform/index";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt"],
  content: {},

  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width,initial-scale=1",
      title: "OGIOS's Blog",
      titleTemplate: "%s - OGIOS's Blog",
      meta: [{ name: "description", content: "OGIOS's blog" }],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
