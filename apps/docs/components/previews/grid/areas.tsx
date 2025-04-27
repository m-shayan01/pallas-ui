import { css } from '@styled-system/css'
import { Box, Grid } from '@styled-system/jsx'

export default function GridAreasPreview() {
  return (
    <Grid
      className={css({
        width: '100%',
        gridTemplateAreas: `
          "header header header"
          "sidebar main main"
          "footer footer footer"
        `,
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateColumns: '1fr 3fr 1fr',
        gap: 4,
      })}
    >
      <Box
        className={css({
          gridArea: 'header',
          padding: 4,
          backgroundColor: 'fill.accent',
          color: 'white',
          borderRadius: 'md',
          fontSize: 'lg',
          fontWeight: 'semibold',
          textAlign: 'center',
        })}
      >
        Header
      </Box>
      <Box
        className={css({
          gridArea: 'sidebar',
          padding: 4,
          backgroundColor: 'fill.secondary',
          borderRadius: 'md',
          color: 'text.secondary',
        })}
      >
        Sidebar
      </Box>
      <Box
        className={css({
          gridArea: 'main',
          padding: 4,
          backgroundColor: 'fill.secondary',
          borderRadius: 'md',
          color: 'text.secondary',
          minHeight: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        })}
      >
        Main Content
      </Box>
      <Box
        className={css({
          gridArea: 'footer',
          padding: 4,
          backgroundColor: 'fill.accent',
          color: 'white',
          borderRadius: 'md',
          textAlign: 'center',
        })}
      >
        Footer
      </Box>
    </Grid>
  )
}
