import { Item, Link, List, Root, Separator } from '@pallas-ui/breadcrumb'
import { css } from '@styled-system/css'
import { allComponents, allGuides, allLayouts, allThemings } from 'content-collections'
import { ChevronRight } from 'lucide-react'
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
  const getBreadcrumbLink = (section: string) => {
    const sectionLower = section.toLowerCase()
    if (sectionLower === 'components') {
      // Link to the first component
      return '/docs/components/accordion'
    }
    if (sectionLower === 'layout') {
      // Link to the first layout page
      return '/docs/layout/index'
    }
    if (sectionLower === 'theming') {
      // Link to the first theming page
      const firstTheme = allThemings[0]
      return '/docs/theming/index'
    }
    if (sectionLower === 'introduction') {
      // Link to the first guide
      const firstGuide = allGuides[0]
      return '/docs/introduction'
    }
    // Default fallback
    return '/docs'
  }

  return (
    <main
      className={css({
        display: 'grid',
        gridTemplateColumns: {
          base: '1fr',
          xl: '1fr 250px',
        },
        p: { base: '4', md: '6' },
        maxWidth: '100%',
      })}
    >
      <div
        className={css({
          width: '100%',
          overflowX: 'hidden',
        })}
      >
        {showHeader && breadcrumb && (
          <header>
            <Root>
              <List
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'nowrap',
                  gap: '2',
                })}
              >
                <Item>
                  <Link
                    href={getBreadcrumbLink(breadcrumb.section)}
                    className={css({
                      color: 'text.secondary',
                      _hover: { color: 'primary' },
                      transition: 'color 0.2s ease',
                      fontSize: 'sm',
                    })}
                  >
                    {breadcrumb.section}
                  </Link>
                </Item>
                <Separator>
                  <ChevronRight size={18} className={css({ color: 'text.secondary' })} />
                </Separator>
                <Item>
                  <span
                    className={css({
                      color: 'text.primary',
                      fontWeight: 'medium',
                      fontSize: 'sm',
                    })}
                  >
                    {breadcrumb.title}
                  </span>
                </Item>
              </List>
            </Root>

            {/* Commented out title and description as in your original code */}
          </header>
        )}

        <div
          className={css({
            width: '100%',
            overflowX: 'hidden',
          })}
        >
          <MdxComponent code={mdxCode} />
        </div>
      </div>

      <div
        className={css({
          display: 'none',
          position: 'relative',
          fontSize: 'sm',
          xl: {
            display: 'block',
          },
        })}
      >
        <div
          className={css({
            position: 'sticky',
            top: '72px',
            height: 'calc(100vh - 72px)',
            p: '4',
            borderLeft: '1px solid',
            borderColor: 'border.secondary',
            bg: 'surface.container',
            overflowY: 'auto',
          })}
        >
          <DynamicToc />
        </div>
      </div>
    </main>
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
