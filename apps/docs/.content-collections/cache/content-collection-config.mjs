// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
var guides = defineCollection({
  name: "guides",
  directory: "app/content/guides",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    order: z.number().optional().default(999)
  }),
  transform: async (document, context) => {
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    const headings = await extractHeadings(document.content);
    const mdx = await compileMDX(context, document);
    return {
      ...document,
      slug,
      headings,
      mdx
    };
  }
});
async function extractHeadings(content) {
  const headingLines = content.match(/^##? .+/gm) || [];
  return headingLines.map((line) => {
    const level = line.startsWith("## ") ? 2 : line.startsWith("# ") ? 1 : 3;
    const text = line.replace(/^#+\s+/, "");
    const slug = text.toLowerCase().replace(/[^\w]+/g, "-");
    return { level, text, slug };
  });
}
var content_collections_default = defineConfig({
  collections: [guides]
});
export {
  content_collections_default as default
};
