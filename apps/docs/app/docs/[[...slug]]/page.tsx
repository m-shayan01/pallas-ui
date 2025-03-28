import { css } from '@styled-system/css'
import { allComponents, allGuides } from 'content-collections'
import { notFound } from 'next/navigation'
import { MdxComponent } from '../../../components/docs/mdx-components'
import { Toc } from '../../../components/docs/toc'
import { generateToc } from '../../../lib/toc'

export function generateStaticParams() {
  const guideParams = allGuides.map((guide) => ({
    slug: [guide.slug],
  }))

  const componentParams = allComponents.map((component) => ({
    slug: ['components', component.slug],
  }))

  return [...guideParams, ...componentParams]
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
          py: 'layout.section.sm',
          px: 'layout.internal.md',
        })}
      >
        <h1
          className={css({
            fontSize: '3xl',
            fontWeight: 'bold',
            mb: 'gap.component.md',
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

    const tocData = generateToc(component.content)

    return (
      <main
        className={css({
          display: 'grid',
          gridTemplateColumns: {
            base: '1fr',
            xl: '1fr 250px',
          },
          gap: 'gap.component.lg',
          maxWidth: '100%',
          mx: 'auto',
          px: { base: 'layout.internal.sm', md: 'layout.internal.md' },
        })}
      >
        <div
          className={css({
            width: '100%',
            overflowX: 'hidden',
          })}
        >
          <header className={css({ mb: 'layout.section.sm' })}>
            <div
              className={css({
                fontSize: 'sm',
                color: 'text.tertiary',
                display: 'flex',
                alignItems: 'center',
                gap: 'gap.inline.sm',
                mb: 'gap.inline.md',
              })}
            >
              <span>Components</span>
              <span>/</span>
              <span className={css({ color: 'text.secondary' })}>{component.title}</span>
            </div>

            <h1
              className={css({
                fontSize: '3xl',
                fontWeight: 'bold',
                mb: 'gap.inline.md',
                color: 'text',
              })}
            >
              {component.title}
            </h1>

            <p className={css({ color: 'text.secondary' })}>{component.description}</p>
          </header>

          <div
            className={css({
              width: '100%',
              overflowX: 'hidden',
            })}
          >
            <MdxComponent code={component.mdx} />
          </div>
        </div>

        {tocData && tocData.length > 0 && (
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
                p: 'padding.block.md',
                borderLeft: '1px solid',
                borderColor: 'border.secondary',
                bg: 'surface.container',
                overflowY: 'auto', 
              })}
            >
              <Toc toc={tocData} />
            </div>
          </div>
        )}
      </main>
    )
  }

  const guide = allGuides.find((g) => g.slug === slug[0])

  if (!guide) {
    notFound()
  }

  const tocData = generateToc(guide.content)

  return (
    <main
      className={css({
        display: 'grid',
        gridTemplateColumns: {
          base: '1fr',
          xl: '1fr 250px',
        },
        gap: 'gap.component.lg',
        maxWidth: '100%',
        mx: 'auto',
        px: { base: 'layout.internal.sm', md: 'layout.internal.md' },
      })}
    >
      <div
        className={css({
          width: '100%',
          overflowX: 'hidden',
        })}
      >
        <div
          className={css({
            width: '100%',
            overflowX: 'hidden',
          })}
        >
          <MdxComponent code={guide.mdx} />
        </div>
      </div>

      {tocData && tocData.length > 0 && (
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
              p: 'padding.block.md',
              borderLeft: '1px solid',
              borderColor: 'border.secondary',
              bg: 'surface.container',
              overflowY: 'auto', 
            })}
          >
            <Toc toc={tocData} />
          </div>
        </div>
      )}
    </main>
  )
}
