import { defineTransformer } from "@nuxt/content/transformers";

export default defineTransformer({
  name: "md-transformer",
  extensions: [".md"],
  parse(_id, rawContent) {
    return {
      _id,
      body: rawContent,
    };
  },
});
