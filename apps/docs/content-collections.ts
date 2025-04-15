import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { grid } from '@styled-system/patterns'
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { generateToc } from './lib/toc'
import { rehypeComponent } from './plugins/rehype-component'

const TOC_LEVEL = 3

const guides = defineCollection({
  name: 'guides',
  directory: 'app/content/guides',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    order: z.number().optional().default(999),
    toc: z.boolean().optional().default(true),
  }),
  transform: async (document, context) => {
    const slug = document._meta.fileName.replace(/\.mdx$/, '')
    const headings = await extractHeadings(document.content)

    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm,
        // Enable npm2Yarn with correct configuration
        // [
        //   remarkNpm2Yarn,
        //   {
        //     packageName: '../components/docs/npm-tabs', // Path to your custom tabs component
        //     tabNamesProp: 'items',
        //     storageKey: 'selectedPackageManager',
        //   },
        // ],
      ],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypePrettyCode,
          {
            theme: 'dark-plus',
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            onVisitHighlightedLine(node: { properties: { className: any[] } }) {
              node.properties.className = [
                ...(node.properties.className || []),
                'line--highlighted',
              ]
            },
            grid: false,
            keepBackground: false,
          },
        ],
      ],
    })

    return {
      ...document,
      slug,
      headings,
      mdx,
    }
  },
})

const components = defineCollection({
  name: 'components',
  directory: 'app/content/components',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    references: z
      .object({
        shadcnUiLink: z.string().url().optional(),
        radix: z
          .object({
            link: z.string().url().optional(),
            api: z.string().url().optional(),
          })
          .optional(),
      })
      .optional(),
    toc: z.boolean().optional().default(true),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm,
        // Enable npm2Yarn with correct configuration
        // [
        //   remarkNpm2Yarn,
        //   {
        //     packageName: '../components/docs/npm-tabs', // Path to your custom tabs component
        //     tabNamesProp: 'items',
        //     storageKey: 'selectedPackageManager',
        //   },
        // ],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeComponent,
        [
          rehypePrettyCode,
          {
            theme: 'dark-plus', //material-theme-darker, min-dark, night-owl, slack-dark(good), all these also look good
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            onVisitHighlightedLine(node: { properties: { className: any[] } }) {
              node.properties.className = [
                ...(node.properties.className || []),
                'line--highlighted',
              ]
            },
            // Add these options to remove the border corners
            grid: false,
            keepBackground: false,
          },
        ],
      ],
    })

    const fileName = document._meta.fileName.replace(/\.mdx$/, '')
    const slug = document.slug || fileName

    return {
      ...document,
      slug,
      mdx,
    }
  },
})

const theming = defineCollection({
  name: 'theming',
  directory: 'app/content/theming',
  include: '**/*.mdx',
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    slug: z.string().optional(),
    order: z.number().optional().default(999),
    toc: z.boolean().optional().default(true),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm,
        // Enable npm2Yarn with correct configuration
        // [
        //   remarkNpm2Yarn,
        //   {
        //     packageName: '../components/docs/npm-tabs', // Path to your custom tabs component
        //     tabNamesProp: 'items',
        //     storageKey: 'selectedPackageManager',
        //   },
        // ],
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeComponent,
        [
          rehypePrettyCode,
          {
            theme: 'dark-plus',
            // biome-ignore lint/suspicious/noExplicitAny: <explanation>
            onVisitHighlightedLine(node: { properties: { className: any[] } }) {
              node.properties.className = [
                ...(node.properties.className || []),
                'line--highlighted',
              ]
            },
            grid: false,
            keepBackground: false,
          },
        ],
      ],
    })

    const fileName = document._meta.fileName.replace(/\.mdx$/, '')
    const slug = document.slug || fileName

    return {
      ...document,
      slug,
      mdx,
    }
  },
})

async function extractHeadings(content: string) {
  const headingLines = content.match(/^##? .+/gm) || []
  return headingLines.map((line) => {
    const level = line.startsWith('## ') ? 2 : line.startsWith('# ') ? 1 : 3
    const text = line.replace(/^#+\s+/, '')
    const slug = text.toLowerCase().replace(/[^\w]+/g, '-')

    return { level, text, slug }
  })
}

export default defineConfig({
  collections: [guides, components, theming],
})
