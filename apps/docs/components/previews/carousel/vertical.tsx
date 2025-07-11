'use client'

import Carousel from '@/components/ui/carousel'
import { css } from '@styled-system/css'
import { ChevronDown, ChevronUp } from 'lucide-react'

const IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1740394846530-cc715503dc6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'lightskyblue',
  },
  {
    src: 'https://images.unsplash.com/photo-1740394800623-86314cdea5cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'lightsalmon',
  },
  {
    src: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'hotpink',
  },
  {
    src: 'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: 'slateblue',
  },
]

export default function CarouselVerticalDemo() {
  return (
    <Carousel.Root opts={{ axis: 'y' }} orientation="vertical" style={{ margin: 20 }}>
      <Carousel.List className={css({ h: '300px' })}>
        {IMAGES.map((image, i) => (
          <Carousel.Item key={i} className={css({ flexBasis: '100%' })}>
            <img
              src={image.src}
              alt={`Slide ${i + 1}`}
              className={css({
                w: '100%',
                h: '100%',
                objectFit: 'cover',
              })}
            />
          </Carousel.Item>
        ))}
      </Carousel.List>
      <Carousel.Previous>
        <ChevronUp />
      </Carousel.Previous>
      <Carousel.Next>
        <ChevronDown />
      </Carousel.Next>
    </Carousel.Root>
  )
}
