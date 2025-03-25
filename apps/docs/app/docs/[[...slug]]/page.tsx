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
  if (!params.slug || params.slug.length === 0) {
    return (
      <div className={css({ maxW: '4xl', mx: 'auto', py: '8' })}>
        <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', mb: '4' })}>Documentation</h1>
        <p>Select a guide or component from the sidebar to get started.</p>
      </div>
    )
  }

  if (params.slug[0] === 'components' && params.slug.length > 1) {
    const component = allComponents.find((c) => c.slug === params.slug?.[1])
    
    if (!component) {
      notFound()
    }

    const tocData = generateToc(component.content)

    return (
      <main className={css({
        display: 'grid',
        gridTemplateColumns: {
          base: '1fr',
          xl: '1fr 250px', 
        },
        gap: '8',
        maxWidth: '1400px',
        mx: 'auto',
        px: { base: '4', md: '6' },
      })}>
        <div>
          <header className={css({ mb: '8' })}>
            <div
              className={css({
                fontSize: 'sm',
                color: 'gray.500',
                display: 'flex',
                alignItems: 'center',
                gap: '2',
                mb: '2',
              })}
            >
              <span>Components</span>
              <span>/</span>
              <span className={css({ color: 'gray.700' })}>{component.title}</span>
            </div>

            <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', mb: '2' })}>
              {component.title}
            </h1>

            <p className={css({ color: 'gray.600' })}>{component.description}</p>
          </header>

          <MdxComponent code={component.mdx} />
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
                top: '20',
              })}
            >
              <ScrollArea className={css({ pb: '10' })}>
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
      gap: '8',
      maxWidth: '1400px',
      mx: 'auto',
      px: { base: '4', md: '6' },
    })}>
      <div>
        <header className={css({ mb: '8' })}>
          <h1 className={css({ fontSize: '3xl', fontWeight: 'bold', mb: '2' })}>{guide.title}</h1>
          <p className={css({ color: 'gray.600' })}>{guide.description}</p>
        </header>

        <MdxComponent code={guide.mdx} />
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
              top: '20',
            })}
          >
            <ScrollArea className={css({ pb: '10' })}>
              <Toc toc={tocData} />
            </ScrollArea>
          </div>
        </div>
      )}
    </main>
  )
}
