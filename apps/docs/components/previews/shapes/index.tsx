import { css } from '@styled-system/css'
import { Circle, Square } from '@styled-system/jsx'
import { Flex } from '@styled-system/jsx'

export default function ShapesPreview() {
  return (
    <Flex
      className={css({
        gap: 6,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      })}
    >
      <Circle
        className={css({
          size: '100px',
          bg: 'fill.accent',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'medium',
        })}
      >
        Circle
      </Circle>

      <Square
        className={css({
          size: '100px',
          bg: 'fill.secondary',
          border: '1px solid',
          borderColor: 'border.secondary',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.secondary',
          fontWeight: 'medium',
        })}
      >
        Square
      </Square>
    </Flex>
  )
}
