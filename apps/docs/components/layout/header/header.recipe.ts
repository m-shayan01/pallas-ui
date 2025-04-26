import { sva } from '@styled-system/css'

export const header = sva({
  slots: [
    'container',
    'header',
    'innerContainer',
    'layout',
    'logo',
    'searchContainer',
    'nav',
    'link',
    'githubLink',
  ],
  base: {
    container: {
      paddingInline: { base: '4', md: '6' },
      paddingBlock: '4',
      position: 'sticky',
      top: 0,
      zIndex: 10,
    },
    header: {
      bg: 'gray.100', // equivalent to surface.layout
      backdropFilter: 'blur(2.5px)',
      borderRadius: 'full',
      border: '1px solid {colors.gray.200}',
      maxWidth: '1100px',
      mx: 'auto',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    },
    innerContainer: {
      paddingInline: { base: 'padding.inline.md', md: 'padding.inline.lg' },
      paddingBlock: 'padding.block.md',
    },
    layout: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      flexWrap: { base: 'wrap', md: 'nowrap' },
      gap: { base: 'gap.component.md', md: '0' },
    },
    logo: {
      fontWeight: 'bold',
      fontSize: 'xl',
      color: 'text',
      zIndex: 2,
      paddingLeft: '3',
    },
    searchContainer: {
      order: { base: 3, md: 2 },
      width: { base: '100%', md: 'auto' },
      position: { md: 'absolute' },
      left: { md: '50%' },
      transform: { md: 'translateX(-50%)' },
      zIndex: 1,
      maxWidth: { md: '400px' },
    },
    nav: {
      display: 'flex',
      gap: 'gap.component.md',
      order: { base: 2, md: 3 },
      zIndex: 2,
      alignItems: 'center',
    },
    link: {
      color: 'text.secondary',
      fontWeight: 'medium',
      fontFamily: 'body',
      _hover: { color: 'primary.hover' },
    },
    githubLink: {
      color: 'text.secondary',
      display: 'flex',
      alignItems: 'center',
      _hover: { color: 'primary.hover' },
    },
  },
  variants: {
    // Add variants if needed in the future
  },
})
