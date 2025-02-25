import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import { ChevronLeft, ChevronRight, DotIcon } from 'lucide-react'
import { Button } from '~/ui/button'
import type { RootProps } from '~/ui/carousel'
import Carousel from '~/ui/carousel'

const IMAGES = [
  'https://images.unsplash.com/photo-1740394846530-cc715503dc6a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1740394800623-86314cdea5cc?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1591779051696-1c3fa1469a79?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
]

const meta: Meta<RootProps> = {
  render: (props) => (
    <Carousel.Root css={{ height: 300 }} {...props}>
      {({ previous, next, goTo, currentIndex }) => (
        <>
          <Carousel.Previous>
            <Button onClick={previous} icon={<ChevronLeft />} variant="text" shape="circle" />
          </Carousel.Previous>
          <Carousel.Next>
            <Button onClick={next} icon={<ChevronRight />} variant="text" shape="circle" />
          </Carousel.Next>

          {IMAGES.map((_, i) => (
            <Carousel.Item key={i}>
              {/* <img src={src} alt={`image-${i}`} /> */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  fontSize: 30,
                  fontWeight: 'bold',
                  backgroundColor: 'lightskyblue',
                }}
              >
                {i + 1}
              </div>
            </Carousel.Item>
          ))}

          <Carousel.Dots>
            {IMAGES.map((_, i) => (
              <DotIcon
                key={i}
                size={40}
                color={i === currentIndex ? 'black' : 'gray'}
                style={{ cursor: 'pointer' }}
                onClick={() => goTo(i)}
              />
            ))}
          </Carousel.Dots>
        </>
      )}
    </Carousel.Root>
  ),
  title: 'Components/Carousel',
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Variants = () => <Stack>Hello</Stack>
