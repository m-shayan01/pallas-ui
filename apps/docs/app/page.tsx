import { css } from '@styled-system/css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={css({ maxW: '6xl', mx: 'auto', py: '16', px: '4' })}>
      <div className={css({ textAlign: 'center', mb: '16' })}>
        <h1 className={css({ fontSize: { base: '4xl', md: '5xl' }, fontWeight: 'extrabold', mb: '4', lineHeight: '1.1' })}>
          <span className={css({ color: 'primary.600', _dark: { color: 'primary.400' } })}>Pallas UI</span> - 
          <br />A Modern React Component Library
        </h1>
        
        <p className={css({ fontSize: { base: 'lg', md: 'xl' }, maxW: '2xl', mx: 'auto', color: 'gray.600', _dark: { color: 'gray.400' } })}>
          Beautiful, accessible components built with React and Panda CSS
        </p>
        
        <div className={css({ mt: '10', display: 'flex', gap: '4', justifyContent: 'center' })}>
          <Link 
            href="/docs/introduction"
            className={css({
              px: '6',
              py: '3',
              fontSize: 'md',
              fontWeight: 'medium',
              rounded: 'md',
              bg: 'primary.600',
              color: 'white',
              _hover: { bg: 'primary.700' },
              _dark: {
                bg: 'primary.600',
                _hover: { bg: 'primary.500' }
              }
            })}
          >
            Get Started
          </Link>
          
          <Link 
            href="/docs/components/accordion"
            className={css({
              px: '6',
              py: '3',
              fontSize: 'md',
              fontWeight: 'medium',
              rounded: 'md',
              bg: 'white',
              color: 'gray.900',
              border: '1px solid',
              borderColor: 'gray.300',
              _hover: { bg: 'gray.50' },
              _dark: {
                bg: 'gray.800',
                color: 'gray.100',
                borderColor: 'gray.700',
                _hover: { bg: 'gray.700' }
              }
            })}
          >
            Components
          </Link>
        </div>
      </div>
      
      <div className={css({ 
        display: 'grid', 
        gridTemplateColumns: { base: '1fr', md: 'repeat(3, 1fr)' },
        gap: '8' 
      })}>
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
    </div>
  )
}

function Feature({ title, description }: { title: string, description: string }) {
  return (
    <div className={css({
      p: '6',
      border: '1px solid',
      borderColor: 'gray.200',
      rounded: 'lg',
      _dark: { borderColor: 'gray.800' }
    })}>
      <h3 className={css({ fontSize: 'xl', fontWeight: 'semibold', mb: '2' })}>{title}</h3>
      <p className={css({ color: 'gray.600', _dark: { color: 'gray.400' } })}>{description}</p>
    </div>
  )
}