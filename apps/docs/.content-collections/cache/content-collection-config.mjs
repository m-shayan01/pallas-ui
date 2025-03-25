// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// plugins/rehype-component.js
import fs from "node:fs";
import path from "node:path";
import { visit } from "unist-util-visit";
function rehypeComponent() {
  return (tree) => {
    visit(tree, (node) => {
      if (node.type === "mdxJsxFlowElement" && node.name === "ComponentPreview") {
        const attributes = node.attributes || [];
        const nameAttr = attributes.find((attr) => attr.name === "name");
        const fileAttr = attributes.find((attr) => attr.name === "file");
        if (!nameAttr?.value) return;
        const componentName = nameAttr.value;
        const fileName = fileAttr?.value || "index";
        const withRecipe = attributes.some((attr) => attr.name === "withRecipe");
        const dirName = componentName;
        try {
          const componentPath = path.join(
            process.cwd(),
            `components/previews/${dirName}/${fileName}.tsx`
          );
          const source = fs.existsSync(componentPath) ? fs.readFileSync(componentPath, "utf8") : `// Component not found: ${dirName}/${fileName}.tsx`;
          node.children.push({
            type: "element",
            tagName: "pre",
            properties: {},
            children: [
              {
                type: "element",
                tagName: "code",
                properties: {
                  className: ["language-tsx"],
                  "data-filename": `components/previews/${dirName}/${fileName}.tsx`
                },
                children: [{ type: "text", value: source }]
              }
            ]
          });
          if (withRecipe) {
            try {
              const recipePath = path.join(
                process.cwd(),
                "styled-system/recipes",
                `${dirName}.mjs`
              );
              if (fs.existsSync(recipePath)) {
                const recipeSource = fs.readFileSync(recipePath, "utf8");
                node.attributes.push({
                  type: "mdxJsxAttribute",
                  name: "hasRecipe",
                  value: true
                });
                node.children.push({
                  type: "element",
                  tagName: "pre",
                  properties: {},
                  children: [
                    {
                      type: "element",
                      tagName: "code",
                      properties: { className: ["language-javascript"] },
                      children: [{ type: "text", value: recipeSource }]
                    }
                  ]
                });
              } else {
                console.warn(`Recipe not found: ${recipePath}`);
              }
            } catch (error) {
              console.error(`Error reading recipe for ${dirName}:`, error);
            }
          }
        } catch (error) {
          console.error(`Error processing ComponentPreview for ${dirName}/${fileName}:`, error);
        }
      }
      if (node.type === "mdxJsxFlowElement" && node.name === "ComponentSource") {
        const attributes = node.attributes || [];
        const nameAttr = attributes.find((attr) => attr.name === "name");
        const fileAttr = attributes.find((attr) => attr.name === "file");
        if (!nameAttr?.value) return;
        const componentName = nameAttr.value;
        const fileName = fileAttr?.value || "index";
        const nameMap = {
          accordion: "accordian"
        };
        const dirName = nameMap[componentName] || componentName;
        try {
          let componentPath = path.join(
            process.cwd(),
            `../../components/src/ui`,
            dirName,
            `${fileName}.tsx`
          );
          if (!fs.existsSync(componentPath) && fileName !== "index") {
            componentPath = path.join(
              process.cwd(),
              `../../components/src/ui`,
              dirName,
              "index.tsx"
            );
          }
          if (!fs.existsSync(componentPath)) {
            componentPath = path.join(
              process.cwd(),
              `../../components/src/ui`,
              dirName,
              `${dirName}.tsx`
            );
          }
          if (fs.existsSync(componentPath)) {
            const source = fs.readFileSync(componentPath, "utf8");
            node.children = [
              {
                type: "element",
                tagName: "pre",
                properties: {},
                children: [
                  {
                    type: "element",
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"],
                      "data-filename": `components/ui/${dirName}/${path.basename(componentPath)}`
                    },
                    children: [{ type: "text", value: source }]
                  }
                ]
              }
            ];
          } else {
            node.children = [
              {
                type: "element",
                tagName: "pre",
                properties: {},
                children: [
                  {
                    type: "element",
                    tagName: "code",
                    properties: { className: ["language-tsx"] },
                    children: [
                      {
                        type: "text",
                        value: `// Component source not found: ${dirName}/${fileName}.tsx`
                      }
                    ]
                  }
                ]
              }
            ];
          }
        } catch (error) {
          console.error(`Error processing ComponentSource for ${dirName}/${fileName}:`, error);
        }
      }
    });
  };
}

// lib/toc.ts
import GithubSlugger from "github-slugger";
var getTocTree = (tocData = []) => {
  if (!tocData.length) return [];
  const firstNode = tocData[0];
  if (!firstNode) return [];
  const rootNodes = [
    firstNode,
    ...tocData.slice(1).filter((node) => node.level <= firstNode.level)
  ];
  const rootIndices = rootNodes.map((node) => tocData.indexOf(node));
  const chunks = rootIndices.map((rootIndex, index) => {
    const nextRootIndex = rootIndices[index + 1];
    return tocData.slice(rootIndex + 1, nextRootIndex);
  });
  const tree = rootNodes.map((node, index) => {
    const children = chunks[index];
    if (children?.length) {
      node.children = getTocTree(children);
    }
    return node;
  });
  return tree;
};
var generateToc = (content, level = 3) => {
  const headerRegex = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  const tocNodes = Array.from(content.matchAll(headerRegex)).map(({ groups }) => {
    const flag = groups?.flag;
    const content2 = groups?.content ?? "";
    if (!flag || !content2) return null;
    if (flag.length > level) return null;
    return {
      level: flag.length,
      text: content2,
      slug: content2 ? slugger.slug(content2) : ""
    };
  }).filter((node) => node !== null);
  const toc = getTocTree(tocNodes);
  return toc;
};

// content-collections.ts
var TOC_LEVEL = 3;
var guides = defineCollection({
  name: "guides",
  directory: "app/content/guides",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    order: z.number().optional().default(999),
    toc: z.boolean().optional().default(true)
  }),
  transform: async (document, context) => {
    const slug = document._meta.fileName.replace(/\.mdx$/, "");
    const headings = await extractHeadings(document.content);
    const tocData = generateToc(document.content, TOC_LEVEL);
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm
        // Temporarily disable npm2yarn until we resolve the import issues
        // [remarkNpm2Yarn, {
        //   packageName: '../components/docs/tabs',
        //   tabNamesProp: 'items',
        //   storageKey: 'selectedPackageManager',
        // }],
      ],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, {
          theme: "dark-plus",
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          onVisitHighlightedLine(node) {
            node.properties.className = [
              ...node.properties.className || [],
              "line--highlighted"
            ];
          }
        }]
      ]
    });
    return {
      ...document,
      slug,
      headings,
      mdx,
      tocData
    };
  }
});
var components = defineCollection({
  name: "components",
  directory: "app/content/components",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    references: z.object({
      shadcnUiLink: z.string().url().optional(),
      radix: z.object({
        link: z.string().url().optional(),
        api: z.string().url().optional()
      }).optional()
    }).optional(),
    toc: z.boolean().optional().default(true)
  }),
  transform: async (document, context) => {
    const tocData = generateToc(document.content, TOC_LEVEL);
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm
        // [remarkNpm2Yarn, {
        //   packageName: '../components/docs/tabs',
        //   tabNamesProp: 'items',
        //   storageKey: 'selectedPackageManager',
        // }],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeComponent,
        [rehypePrettyCode, {
          theme: "dark-plus",
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          onVisitHighlightedLine(node) {
            node.properties.className = [
              ...node.properties.className || [],
              "line--highlighted"
            ];
          }
        }]
      ]
    });
    const fileName = document._meta.fileName.replace(/\.mdx$/, "");
    const slug = document.slug || fileName;
    return {
      ...document,
      slug,
      mdx,
      tocData
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
  collections: [guides, components]
});
export {
  content_collections_default as default
};
