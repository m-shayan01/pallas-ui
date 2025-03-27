import { css } from '@styled-system/css'

export function Footer() {
  return (
    <footer className={css({
      bg: 'surface.layout',
      borderTop: '1px solid',
      borderColor: 'border.DEFAULT',
      py: 'layout.internal.md',
      mt: 'layout.section.lg',
    })}>
      <div className={css({
        maxW: '7xl',
        mx: 'auto',
        px: { base: 'padding.inline.md', md: 'padding.inline.lg' },
        textAlign: 'center',
        color: 'text.secondary',
      })}>
        <p className={css({ mb: 'gap.inline.md' })}>
          Built with ❤️ by the carbonteq team. The source code is available on{' '}
          <a
            href="https://github.com/PallasUI/pallas-ui"
            target="_blank"
            rel="noreferrer"
            className={css({
              fontWeight: 'medium',
              color: 'primary.DEFAULT',
              textDecoration: 'underline',
              textUnderlineOffset: '4px',
              _hover: { color: 'primary.hover' },
            })}
          >
            GitHub
          </a>
          .
        </p>
        <p>© {new Date().getFullYear()} Pallas UI. All rights reserved.</p>
      </div>
    </footer>
  )
}
