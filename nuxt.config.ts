// https://nuxt.com/docs/api/configuration/nuxt-config
// import markdown_transform from "./modules/markdown-transform/index.mjs";
// import markdown_transform from "@/mmodules/markdown-transform/index";
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/content", "@unocss/nuxt"],
  content: {},
});
