import { DocsBreadcrumb } from '@/components/docs/doc-breadcrumb'
import { DocsHeader } from '@/components/docs/layout/docs-header'
import { DocsSidebar } from '@/components/docs/layout/docs-sidebar'
import { Footer } from '@/components/layout/footer'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { Box, Grid, GridItem } from '@styled-system/jsx'
import { allComponents, allGuides, allLayouts, allThemings } from 'content-collections'
import { notFound } from 'next/navigation'
import { DynamicToc } from '../../../components/docs/dynamic-toc'
import { MdxComponent } from '../../../components/docs/mdx-components'

type PageItem = {
  slug: string
  mdx: string
  title: string
  description?: string
}

const pageTypes = [
  {
    prefix: 'components',
    section: 'Components',
    source: allComponents,
    getSlug: (item: PageItem) => ['components', item.slug],
    getTitle: (item: PageItem) => item.title,
    getDescription: (item: PageItem) => item.description,
    getKey: (slug: string[]) => slug[1],
    getMdx: (item: PageItem) => item.mdx,
  },
  {
    prefix: 'theming',
    section: 'Theming',
    source: allThemings,
    getSlug: (item: PageItem) => ['theming', item.slug],
    getTitle: (item: PageItem) => item.title,
    getDescription: (item: PageItem) => item.description,
    getKey: (slug: string[]) => slug[1],
    getMdx: (item: PageItem) => item.mdx,
  },
  {
    prefix: 'layout',
    section: 'Layout',
    source: allLayouts,
    getSlug: (item: PageItem) => ['layout', item.slug],
    getTitle: (item: PageItem) => item.title,
    getDescription: (item: PageItem) => item.description,
    getKey: (slug: string[]) => slug[1],
    getMdx: (item: PageItem) => item.mdx,
  },
  {
    prefix: null,
    section: 'Introduction',
    source: allGuides,
    getSlug: (item: PageItem) => [item.slug],
    getTitle: (item: PageItem) => item.title,
    getDescription: (item: PageItem) => item.description,
    getKey: (slug: string[]) => slug[0],
    getMdx: (item: PageItem) => item.mdx,
  },
]

export function generateStaticParams() {
  return pageTypes.flatMap((type) =>
    type.source.map((item) => ({
      slug: type.getSlug(item),
    })),
  )
}

export async function generateMetadata({ params }: { params?: { slug?: string[] } }) {
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params))
  const slug = resolvedParams.slug || []

  if (slug.length === 0) {
    return {
      title: 'Documentation',
      description: 'Pallas UI documentation',
    }
  }

  for (const type of pageTypes) {
    if (
      (type.prefix && slug[0] === type.prefix && slug.length > 1) ||
      (!type.prefix && slug.length === 1)
    ) {
      const key = type.getKey(slug)
      const item = type.source.find((i: PageItem) => i.slug === key)
      if (item) {
        return {
          title: type.getTitle(item),
          description: type.getDescription(item),
        }
      }
    }
  }

  return {}
}

//reusable component for content pages
type ContentPageProps = {
  title?: string
  description?: string
  breadcrumb?: {
    section: string
    title: string
  }
  mdxCode: string
  showHeader?: boolean
}

function ContentPage({
  title,
  description,
  breadcrumb,
  mdxCode,
  showHeader = true,
}: ContentPageProps) {
  return (
    <>
      {breadcrumb && <DocsBreadcrumb breadcrumb={breadcrumb} />}
      <MdxComponent code={mdxCode} />
    </>
  )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function DocsPage({ params }: any) {
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params))
  const slug = resolvedParams.slug || []

  if (slug.length === 0) {
    return (
      <div
        className={css({
          maxW: '4xl',
          mx: 'auto',
        })}
      >
        <h1
          className={css({
            fontSize: '3xl',
            fontWeight: 'bold',
            color: 'text',
          })}
        >
          Documentation
        </h1>
        <p className={css({ color: 'text.secondary' })}>
          Select a guide or component from the sidebar to get started.
        </p>
      </div>
    )
  }

  for (const type of pageTypes) {
    if (
      (type.prefix && slug[0] === type.prefix && slug.length > 1) ||
      (!type.prefix && slug.length === 1)
    ) {
      const key = type.getKey(slug)
      const item = type.source.find((i: PageItem) => i.slug === key)
      if (!item) notFound()
      return (
        <ContentPage
          title={type.getTitle(item)}
          description={type.getDescription(item)}
          breadcrumb={{ section: type.section, title: type.getTitle(item) }}
          mdxCode={type.getMdx(item)}
        />
      )
    }
  }

  notFound()
}
