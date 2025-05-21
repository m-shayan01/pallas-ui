import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Grid } from '@styled-system/jsx'

export default function ResponsiveGridPreview() {
  return (
    <Grid
      className={css({
        width: '100%',
        gridTemplateColumns: {
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        },
        gap: 4,
      })}
    >
      <DecorativeBox>Item 1</DecorativeBox>
      <DecorativeBox>Item 2</DecorativeBox>
      <DecorativeBox>Item 3</DecorativeBox>
      <DecorativeBox>Item 4</DecorativeBox>
      <DecorativeBox>Item 5</DecorativeBox>
      <DecorativeBox>Item 6</DecorativeBox>
      <DecorativeBox>Item 7</DecorativeBox>
      <DecorativeBox>Item 8</DecorativeBox>
    </Grid>
  )
}
