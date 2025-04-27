import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Grid, GridItem } from '@styled-system/jsx'

export default function GridItemPlacementPreview() {
  return (
    <Grid
      columns={3}
      gap={4}
      w="100%"
      className={css({
        gridTemplateRows: 'repeat(3, 100px)',
      })}
    >
      <GridItem colStart={1} colEnd={3} rowStart={1} rowEnd={2}>
        <DecorativeBox
          className={css({
            bg: 'fill.accent',
            color: 'white',
            fontWeight: 'semibold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          Header
        </DecorativeBox>
      </GridItem>

      <GridItem colStart={3} colEnd={4} rowStart={1} rowEnd={4}>
        <DecorativeBox
          className={css({
            bg: 'fill.secondary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          Sidebar
        </DecorativeBox>
      </GridItem>

      <GridItem colStart={1} colEnd={3} rowStart={2} rowEnd={3}>
        <DecorativeBox
          className={css({
            bg: 'fill.secondary',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          Main Content
        </DecorativeBox>
      </GridItem>

      <GridItem colStart={1} colEnd={3} rowStart={3} rowEnd={4}>
        <DecorativeBox
          className={css({
            bg: 'fill.accent',
            color: 'white',
            fontWeight: 'semibold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          })}
        >
          Footer
        </DecorativeBox>
      </GridItem>
    </Grid>
  )
}
