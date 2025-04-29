import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import Carousel from '../ui/carousel'

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
]

const meta: Meta<typeof Carousel.Root> = {
  title: 'Components/Carousel',
  component: Carousel.Root,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Carousel.Root>

export const Default: Story = {
  render: () => (
    <Carousel.Root>
      <Carousel.List>
        {/* <img src={src} alt={`image-${i}`} /> */}
        {IMAGES.map((image, i) => (
          <Carousel.Item key={i} className={css({ width: '1/3' })}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: 30,
                fontWeight: 'bold',
                backgroundColor: image.color,
              }}
            >
              {i + 1}
            </div>
          </Carousel.Item>
        ))}
      </Carousel.List>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel.Root>
  ),
}
