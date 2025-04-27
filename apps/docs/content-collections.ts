import { defineCollection, defineConfig } from '@content-collections/core'
import { compileMDX } from '@content-collections/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import { generateToc } from './lib/toc'
import { rehypeComponent } from './plugins/rehype-component'

const TOC_LEVEL = 3

const prettyCodeOptions = {
  theme: 'dark-plus', //material-theme-darker, min-dark, night-owl, slack-dark(good), all these also look good
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  onVisitHighlightedLine(node: { properties: { className: any[] } }) {
    node.properties.className = [...(node.properties.className || []), 'line--highlighted']
  },
}

const rehypePlugins = [rehypeSlug, rehypeComponent, [rehypePrettyCode, prettyCodeOptions]]

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
      remarkPlugins: [remarkGfm],
      rehypePlugins: rehypePlugins,
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
      remarkPlugins: [remarkGfm],
      rehypePlugins: rehypePlugins,
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
      remarkPlugins: [remarkGfm],
      rehypePlugins: rehypePlugins,
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

const layout = defineCollection({
  name: 'layout',
  directory: 'app/content/layout',
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
      remarkPlugins: [remarkGfm],
      rehypePlugins: rehypePlugins,
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
  collections: [guides, components, theming, layout],
})
