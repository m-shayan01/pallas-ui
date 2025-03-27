import { allComponents, allGuides } from 'content-collections'
import { notFound } from 'next/navigation'
import { MdxComponent } from '../../../components/docs/mdx-components'
import { css } from '@styled-system/css'
import { Toc } from '../../../components/docs/toc'
import { ScrollArea } from '../../../components/docs/scroll-area'
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

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  if (!params.slug || params.slug.length === 0) {
    return {
      title: 'Documentation',
      description: 'Pallas UI documentation',
    }
  }

  if (params.slug[0] === 'components' && params.slug.length > 1) {
    const component = allComponents.find((c) => c.slug === params.slug?.[1])
    if (component) {
      return {
        title: component.title,
        description: component.description,
      }
    }
  } else {
    const guide = allGuides.find((g) => g.slug === params.slug?.[0])
    if (guide) {
      return {
        title: guide.title,
        description: guide.description,
      }
    }
  }

  return {}
}

export default async function DocsPage({ params }: { params: { slug?: string[] } }) {
  // Handle root docs page
  if (!params.slug || params.slug.length === 0) {
    return (
      <div className={css({ 
        maxW: '4xl', 
        mx: 'auto', 
        py: 'layout.section.sm', // Using section layout spacing
        px: 'layout.internal.md', // Using internal layout spacing
      })}>
        <h1 className={css({ 
          fontSize: '3xl', 
          fontWeight: 'bold', 
          mb: 'gap.component.md', // Using component gap spacing
          color: 'text', // Using text color token
        })}>Documentation</h1>
        <p className={css({ color: 'text.secondary' })}>Select a guide or component from the sidebar to get started.</p>
      </div>
    )
  }

  // Handle component pages
  if (params.slug[0] === 'components' && params.slug.length > 1) {
    const component = allComponents.find((c) => c.slug === params.slug?.[1])
    
    if (!component) {
      notFound()
    }
    
    // Generate TOC from component content instead of body.raw
    const tocData = generateToc(component.content)

    return (
      <main className={css({
        display: 'grid',
        gridTemplateColumns: {
          base: '1fr',
          xl: '1fr 250px', // Add space for TOC on larger screens
        },
        gap: 'gap.component.lg', // Using component gap spacing
        maxWidth: '100%', // Changed from fixed width to 100%
        mx: 'auto',
        px: { base: 'layout.internal.sm', md: 'layout.internal.md' }, // Using internal layout spacing
      })}>
        <div className={css({
          width: '100%', // Added to ensure full width
          overflowX: 'hidden', // Prevent horizontal overflow
        })}>
          <header className={css({ mb: 'layout.section.sm' })}>
            <div
              className={css({
                fontSize: 'sm',
                color: 'text.tertiary', // Using tertiary text color
                display: 'flex',
                alignItems: 'center',
                gap: 'gap.inline.sm', // Using inline gap spacing
                mb: 'gap.inline.md', // Using inline gap spacing
              })}
            >
              <span>Components</span>
              <span>/</span>
              <span className={css({ color: 'text.secondary' })}>
                {component.title}
              </span>
            </div>

            <h1 className={css({ 
              fontSize: '3xl', 
              fontWeight: 'bold', 
              mb: 'gap.inline.md', // Using inline gap spacing
              color: 'text', // Using default text color
            })}>
              {component.title}
            </h1>

            <p className={css({ color: 'text.secondary' })}>
              {component.description}
            </p>
          </header>

          <div className={css({ 
            width: '100%', // Added to ensure full width
            overflowX: 'hidden', // Prevent horizontal overflow
          })}>
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
                top: 'layout.section.md', // Using section layout spacing
                p: 'padding.block.md', // Using block padding
                borderLeft: '1px solid',
                borderColor: 'border.secondary',
                bg: 'surface.container', // Using container surface color
              })}
            >
              <ScrollArea className={css({ pb: 'layout.internal.md' })}>
                <Toc toc={tocData} />
              </ScrollArea>
            </div>
          </div>
        )}
      </main>
    )
  }

  const guide = allGuides.find((g) => g.slug === params.slug?.[0])

  if (!guide) {
    notFound()
  }

  const tocData = generateToc(guide.content)

  return (
    <main className={css({
      display: 'grid',
      gridTemplateColumns: {
        base: '1fr',
        xl: '1fr 250px',
      },
      gap: 'gap.component.lg', // Updated to use semantic token
      maxWidth: '100%', // Changed for consistency with component pages
      mx: 'auto',
      px: { base: 'layout.internal.sm', md: 'layout.internal.md' }, // Updated to use semantic tokens
    })}>
      <div className={css({
        width: '100%', // Added for consistency
        overflowX: 'hidden', // Prevent horizontal overflow
      })}>
        {/* <header className={css({ mb: 'layout.section.sm' })}>
          <h1 className={css({ 
            fontSize: '3xl', 
            fontWeight: 'bold', 
            mb: 'gap.inline.md', // Updated to use semantic token
            color: 'text', // Using default text color
          })}>
            {guide.title}
          </h1>
          <p className={css({ color: 'text.secondary' })}>
            {guide.description}
          </p>
        </header> */}

        <div className={css({ 
          width: '100%', // Added to ensure full width
          overflowX: 'hidden', // Prevent horizontal overflow
        })}>
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
              top: 'layout.section.md', // Updated to use semantic token
              p: 'padding.block.md', // Added padding with semantic token
              borderLeft: '1px solid',
              borderColor: 'border.secondary',
              bg: 'surface.container', // Added background color
            })}
          >
            <ScrollArea className={css({ pb: 'layout.internal.md' })}>
              <Toc toc={tocData} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
