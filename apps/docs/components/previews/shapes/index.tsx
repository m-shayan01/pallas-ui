import { css } from '@styled-system/css'
import { Circle, Square } from '@styled-system/jsx'
import { Flex } from '@styled-system/jsx'

export default function ShapesPreview() {
  return (
    <Flex w="100%" h="100%" gap="6" justify="center" align="center">
      <Circle
        className={css({
          size: '100px',
          bg: 'primary.bg',
          border: '1px solid',
          borderColor: 'border.secondary',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'text.secondary',
          fontWeight: 'medium',
        })}
      >
        Circle
      </Circle>

      <Square
        className={css({
          size: '100px',
          bg: 'primary.bg',
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
