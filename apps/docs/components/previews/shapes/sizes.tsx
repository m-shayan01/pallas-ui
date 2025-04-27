import { css } from '@styled-system/css'
import { Circle } from '@styled-system/jsx'
import { Flex } from '@styled-system/jsx'

export default function ShapesSizesPreview() {
  return (
    <Flex
      className={css({
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      })}
    >
      {[6, 8, 10, 12].map((size, index) => (
        <Circle
          key={index}
          className={css({
            size: size,
            bg: 'fill.accent',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: 'xs',
          })}
        >
          {size}
        </Circle>
      ))}
    </Flex>
  )
}
