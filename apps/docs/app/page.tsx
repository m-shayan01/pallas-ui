//import { ComponentShowcase } from '../components/home/showcase'
import { Feature } from '@/components/home/feature'
import { ComponentShowcase } from '@/components/home/showcase/index'
import { Button } from '@/components/ui/button'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <div
        className={css({
          maxW: '6xl',
          mx: 'auto',
          py: 'layout.section.lg', // Using section layout spacing
          px: 'layout.internal.md', // Using internal layout spacing
        })}
      >
        <div className={css({ textAlign: 'center', mb: 'layout.section.lg' })}>
          <h1
            className={css({
              fontSize: { base: '3xl', md: '4xl' },
              fontWeight: 'extrabold',
              mb: 'gap.component.md', // Using component gap spacing
              lineHeight: '1.1',
              color: 'text', // Using default text color
            })}
          >
            <span
              className={css({ color: 'primary.DEFAULT', fontSize: { base: '5xl', md: '6xl' } })}
            >
              Pallas UI
            </span>{' '}
            <br />A Modern React Component Library
          </h1>

          <p
            className={css({
              fontSize: { base: 'lg', md: 'xl' },
              maxW: '2xl',
              mx: 'auto',
              color: 'text.secondary', // Using secondary text color
            })}
          >
            Beautiful, accessible components built with React and Panda CSS
          </p>

          <div
            className={css({
              mt: 'layout.internal.lg', // Using internal layout spacing
              display: 'flex',
              gap: 'gap.inline.md', // Using inline gap spacing
              justifyContent: 'center',
            })}
          >
            <Link href="/docs/introduction/introduction">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>

            <Link href="/docs/components/accordion">
              <Button variant="outlined" size="lg">
                Components
              </Button>
            </Link>
          </div>
        </div>

        <div
          className={css({
            display: 'grid',
            gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
            gap: 'gap.component.md', // Using component gap spacing
          })}
        >
          <Feature
            title="Accessible"
            description="All components follow WAI-ARIA guidelines and have proper keyboard navigation support."
          />
          <Feature
            title="Themeable"
            description="Easily customize the look and feel of your components with a powerful theming system."
          />
          <Feature
            title="Developer Experience"
            description="Built with TypeScript for a great developer experience with full type safety."
          />
        </div>

        {/* <div
        className={css({
          mb: 'layout.section.lg',
          py: 'layout.internal.lg',
          px: { base: 'layout.internal.sm', md: 'layout.internal.md' },
          borderRadius: 'lg',
          bg: 'surface.container.low',
        })}
      >
        <ComponentShowcase />
      </div> */}
        {/* <HomeShowcase /> */}
      </div>
      <ComponentShowcase />
    </Box>
  )
}
