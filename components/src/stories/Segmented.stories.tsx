import type { Meta, StoryObj } from '@storybook/react'
import { HStack, Stack } from '@styled-system/jsx'
import { Equal, Grid, List, StretchHorizontal } from 'lucide-react'
import Segmented from '~/ui/segmented'

const meta: Meta<typeof Segmented.Root> = {
  component: Segmented.Root,
  title: 'Components/Segmented',
  tags: ['autodocs'],
  render: (props) => (
    <Segmented.Root {...props}>
      <Segmented.Option aria-selected>Option 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
    </Segmented.Root>
  ),
  argTypes: {
    orientation: {
      options: ['horizontal', 'vertical'],
      control: 'inline-radio',
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'inline-radio',
    },
    block: {
      control: 'boolean',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    size: 'md',
  },
}

export const Variants = () => (
  <Stack>
    {/* SIZES */}
    <Segmented.Root size="sm">
      <Segmented.Option data-selected>Small 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
      <Segmented.Option data-disabled>Disabled</Segmented.Option>
    </Segmented.Root>

    <Segmented.Root>
      <Segmented.Option data-selected>Medium 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
      <Segmented.Option data-disabled>Disabled</Segmented.Option>
    </Segmented.Root>

    <Segmented.Root size="lg">
      <Segmented.Option data-selected>Large 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
      <Segmented.Option data-disabled>Disabled</Segmented.Option>
    </Segmented.Root>

    {/* ICONS */}
    <Segmented.Root>
      <Segmented.Option data-selected>
        <List />
      </Segmented.Option>
      <Segmented.Option>
        <Grid />
      </Segmented.Option>
      <Segmented.Option>
        <StretchHorizontal />
      </Segmented.Option>
    </Segmented.Root>

    <HStack>
      {/* VERTICAL */}
      <Segmented.Root orientation="vertical" size="sm">
        <Segmented.Option data-selected>Small 1</Segmented.Option>
        <Segmented.Option>Option 2</Segmented.Option>
        <Segmented.Option data-disabled>Disabled</Segmented.Option>
      </Segmented.Root>

      <Segmented.Root orientation="vertical">
        <Segmented.Option data-selected>Medium 1</Segmented.Option>
        <Segmented.Option>Option 2</Segmented.Option>
        <Segmented.Option data-disabled>Disabled</Segmented.Option>
      </Segmented.Root>

      <Segmented.Root orientation="vertical" size="lg">
        <Segmented.Option data-selected>Large 1</Segmented.Option>
        <Segmented.Option>Option 2</Segmented.Option>
        <Segmented.Option data-disabled>Disabled</Segmented.Option>
      </Segmented.Root>

      <Segmented.Root orientation="vertical">
        <Segmented.Option data-selected css={{ justifyContent: 'start' }}>
          <List /> List
        </Segmented.Option>
        <Segmented.Option css={{ justifyContent: 'start' }}>
          <Grid /> Grid
        </Segmented.Option>
        <Segmented.Option>
          <StretchHorizontal /> Stack
        </Segmented.Option>
      </Segmented.Root>
    </HStack>

    {/* BLOCK */}
    <Segmented.Root block>
      <Segmented.Option data-selected>Option 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
      <Segmented.Option>
        <Segmented.Text>
          Option 3 LLOOOoooooooooooooooOOOOOOOOOOOOOOooooooooooONNNNGGGG TEXT
        </Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>

    {/* TEXT COMPONENT */}
    <Segmented.Root orientation="vertical" css={{ width: 200 }}>
      <Segmented.Option data-selected>Option 1</Segmented.Option>
      <Segmented.Option>Option 2</Segmented.Option>
      <Segmented.Option>
        <div>
          <Equal />
        </div>
        <Segmented.Text>
          Option 3 LLOOOoooooooooooooooOOOOOOOOOOOOOOooooooooooONNNNGGGG TEXT
        </Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>
  </Stack>
)

// function onClickOption(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
//   const target = e.target as HTMLDivElement
//   const children = target.parentElement?.children
//   if (!children || children.length === 1) return
//   for (let index = 0; index < children.length; index++) {
//     children[index].removeAttribute('data-selected')
//   }
//   target.setAttribute('data-selected', 'true')
// }
