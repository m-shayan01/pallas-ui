import { DocsBreadcrumb } from '@/components/docs/doc-breadcrumb'
import { DocsHeader } from '@/components/docs/layout/docs-header'
import { DocsSidebar } from '@/components/docs/layout/docs-sidebar'
import { Footer } from '@/components/layout/footer'
import Sidebar from '@/components/ui/sidebar'
import { css } from '@styled-system/css'
import { GridItem } from '@styled-system/jsx'
import { allComponents, allGuides, allLayouts, allThemings } from 'content-collections'
import { notFound } from 'next/navigation'
import { DynamicToc } from '../../../components/docs/dynamic-toc'
import { MdxComponent } from '../../../components/docs/mdx-components'

export function generateStaticParams() {
  const guideParams = allGuides.map((guide) => ({
    slug: [guide.slug],
  }))

  const componentParams = allComponents.map((component) => ({
    slug: ['components', component.slug],
  }))

  const themingParams = allThemings.map((theme) => ({
    slug: ['theming', theme.slug],
  }))

  const layoutParams = allLayouts.map((layout) => ({
    slug: ['layout', layout.slug],
  }))

  return [...guideParams, ...componentParams, ...themingParams, ...layoutParams]
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function generateMetadata({ params }: any) {
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params))
  const slug = resolvedParams.slug || []

  if (slug.length === 0) {
    return {
      title: 'Documentation',
      description: 'Pallas UI documentation',
    }
  }

  if (slug[0] === 'components' && slug.length > 1) {
    const component = allComponents.find((c) => c.slug === slug[1])
    if (component) {
      return {
        title: component.title,
        description: component.description,
      }
    }
  } else if (slug[0] === 'theming' && slug.length > 1) {
    const theme = allThemings.find((t) => t.slug === slug[1])
    if (theme) {
      return {
        title: theme.title,
        description: theme.description,
      }
    }
  } else if (slug[0] === 'layout' && slug.length > 1) {
    const layout = allLayouts.find((l) => l.slug === slug[1])
    if (layout) {
      return {
        title: layout.title,
        description: layout.description,
      }
    }
  } else {
    const guide = allGuides.find((g) => g.slug === slug[0])
    if (guide) {
      return {
        title: guide.title,
        description: guide.description,
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
  //helper function to get the correct starter link for each section as docs/components type links do not exist

  return (
    <>
      {showHeader && <DocsHeader />}
      <DocsSidebar />
      <main
        className={css({
          display: 'flex',
          flexGrow: 1,
          maxWidth: '100%',
          height: '100vh',
          overflowX: 'auto',
          px: 'layout.section.sm',
          pt: '{sizes.header.height}',
          pb: 'layout.section.sm',
        })}
      >
        <div
          className={css({
            width: '100%',
            overflowX: 'hidden',
            pl: { base: '6', md: '6' },
          })}
        >
          <div
            className={css({
              width: '100%',
              overflowX: 'hidden',
            })}
          >
            {breadcrumb && <DocsBreadcrumb breadcrumb={breadcrumb} />}
            <MdxComponent code={mdxCode} />
          </div>
        </div>

        <div
          className={css({
            display: 'none',
            fontSize: 'sm',
            lg: {
              display: 'block',
            },
            position: 'sticky',
            top: '0',
          })}
        >
          <div
            className={css({
              width: '280px',
              p: '4',
              borderLeft: '1px solid',
              borderColor: 'border.secondary',
              bg: 'surface.container',
            })}
          >
            <DynamicToc />
          </div>
        </div>
      </main>
    </>
  )
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default async function DocsPage({ params }: any) {
  const resolvedParams = await (params instanceof Promise ? params : Promise.resolve(params))
  const slug = resolvedParams.slug || []

  // Handle root docs page
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

  // Handle component pages
  if (slug[0] === 'components' && slug.length > 1) {
    const component = allComponents.find((c) => c.slug === slug[1])

    if (!component) {
      notFound()
    }

    return (
      <ContentPage
        title={component.title}
        description={component.description}
        breadcrumb={{ section: 'Components', title: component.title }}
        mdxCode={component.mdx}
      />
    )
  }

  // Handle theming pages
  if (slug[0] === 'theming' && slug.length > 1) {
    const theme = allThemings.find((t) => t.slug === slug[1])

    if (!theme) {
      notFound()
    }

    return (
      <ContentPage
        breadcrumb={{ section: 'Theming', title: theme.title }}
        mdxCode={theme.mdx}
        showHeader={true}
      />
    )
  }

  // Handle layout pages
  if (slug[0] === 'layout' && slug.length > 1) {
    const layout = allLayouts.find((l) => l.slug === slug[1])

    if (!layout) {
      notFound()
    }

    return (
      <ContentPage
        breadcrumb={{ section: 'Layout', title: layout.title }}
        mdxCode={layout.mdx}
        showHeader={true}
      />
    )
  }

  // Handle guide pages
  const guide = allGuides.find((g) => g.slug === slug[0])

  if (!guide) {
    notFound()
  }

  return (
    <ContentPage
      mdxCode={guide.mdx}
      breadcrumb={{ section: 'Introduction', title: guide.title }}
      showHeader={true}
    />
  )
}
