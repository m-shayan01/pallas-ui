import { css } from '@styled-system/css'
import { Box } from '@styled-system/jsx'

export default function NestedBoxPreview() {
  return (
    <Box
      className={css({
        padding: 4,
        backgroundColor: 'fill.primary',
        borderRadius: 'md',
        width: '100%',
        maxWidth: '500px',
        color: 'text.secondary',
        border: '1px dashed',
        borderColor: 'border',
      })}
    >
      Outer Box
      <Box
        className={css({
          padding: 4,
          marginTop: 2,
          backgroundColor: 'fill.secondary',
          borderRadius: 'md',
          border: '1px dashed',
          borderColor: 'border.secondary',
        })}
      >
        Middle Box
        <Box
          className={css({
            padding: 3,
            marginTop: 2,
            backgroundColor: 'fill.tertiary',
            borderRadius: 'sm',
            textAlign: 'center',
            fontWeight: 'bold',
          })}
        >
          Inner Box
        </Box>
      </Box>
    </Box>
  )
}
