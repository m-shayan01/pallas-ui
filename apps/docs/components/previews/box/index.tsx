import { DecorativeBox } from '@/components/ui/render-helpers/decorative-box'
import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'

export default function BoxPreview() {
  return (
    <Box
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        width: '100%',
        maxWidth: '500px',
      })}
    >
      <DecorativeBox
        className={css({
          height: '100px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.secondary',
        })}
      >
        Basic Box
      </DecorativeBox>
    </Box>
  )
}
