import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import { remarkNpm2Yarn } from '@theguild/remark-npm2yarn'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { rehypeComponent } from './plugins/rehype-component'
import { generateToc } from './lib/toc'

const TOC_LEVEL = 3

const baseComputedFields = {
  url: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: any } }) => `/content/${doc._raw.flattenedPath}`,
  },
  tocData: {
    type: 'json',
    resolve: async (doc: { body: { raw: string } }) => {
      return generateToc(doc.body.raw, TOC_LEVEL)
    },
  },
  slug: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: any } }) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: 'string',
    resolve: (doc: { _raw: { flattenedPath: any } }) => doc._raw.flattenedPath,
  },
}

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
    
    // Generate TOC data
    const tocData = generateToc(document.content, TOC_LEVEL)
    
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm,
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
          theme: 'github-light',
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          onVisitHighlightedLine(node: { properties: { className: any[] } }) {
            node.properties.className = [
              ...(node.properties.className || []),
              'line--highlighted'
            ]
          },
        }],
      ],
    })

    return {
      ...document,
      slug,
      headings,
      mdx,
      tocData, 
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
    const tocData = generateToc(document.content, TOC_LEVEL)
    
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [
        remarkGfm,
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
          theme: 'github-light',
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          onVisitHighlightedLine(node: { properties: { className: any[] } }) {
            node.properties.className = [
              ...(node.properties.className || []),
              'line--highlighted'
            ]
          },
        }],
      ],
    })

    const fileName = document._meta.fileName.replace(/\.mdx$/, '')

    const slug = document.slug || fileName

    return {
      ...document,
      slug,
      mdx,
      tocData, 
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
  collections: [guides, components],
})
