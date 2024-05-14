// filename: my-module.mjs
import { defineNuxtModule } from "@nuxt/kit";
import { createResolver } from "@nuxt/kit";

export default defineNuxtModule({
  setup(_options, nuxt) {
    const resolver = createResolver(import.meta.url);

    // Set up Nitro externals for .tex content transformation.
    nuxt.options.nitro.externals = nuxt.options.nitro.externals || {};
    nuxt.options.nitro.externals.inline =
      nuxt.options.nitro.externals.inline || [];
    nuxt.options.nitro.externals.inline.push(resolver.resolve("."));

    // Register a hook to modify content context and add a transformer for .tex files.
    nuxt.hook("content:context", (contentContext) => {
      contentContext.transformers.push(
        resolver.resolve("markdown_transform.ts"),
      );
    });
  },
});
