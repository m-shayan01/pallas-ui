//import { ComponentShowcase } from '../components/home/showcase'
import { Feature } from '@/components/home/feature'
import { ComponentShowcase } from '@/components/home/showcase/index'
import { Button } from '@/components/ui/button'
import { css } from '@styled-system/css'
import { Box, Grid, HStack, VStack } from '@styled-system/jsx'
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <Box w="6xl" mx="auto" py="layout.section.lg" px="layout.internal.md">
        <VStack mb="layout.section.lg" css={{ textAlign: 'center' }}>
          <h1
            className={css({
              fontSize: { base: '3xl', md: '4xl' },
              fontWeight: 'extrabold',
              mb: 'gap.component.md',
              lineHeight: '1.5',
              color: 'text',
            })}
          >
            <span
              className={css({
                fontSize: { base: '5xl', md: '6xl' },
              })}
            >
              Pallas UI
            </span>{' '}
            <br />A Modern React Component Library
          </h1>

          <p
            className={css({
              fontSize: { base: 'lg', md: 'xl' },
              maxWidth: '2xl',
              marginX: 'auto',
              color: 'text.secondary',
            })}
          >
            Beautiful, accessible components built with React and Panda CSS
          </p>

          <HStack gap="gap.inline.md" justify="center" mt="layout.internal.lg">
            <Link href="/docs/introduction/introduction">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>

            <Link href="/docs/components/accordion">
              <Button
                variant="outlined"
                size="lg"
                className={css({
                  borderColor: 'gray.800',
                  color: 'text.secondary',
                  _hover: {
                    color: 'text',
                  },
                })}
              >
                Components
              </Button>
            </Link>
          </HStack>
        </VStack>

        <Grid
          className={css({
            gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
            gap: 'gap.component.md',
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
        </Grid>
      </Box>
      <ComponentShowcase />
    </Box>
  )
}
