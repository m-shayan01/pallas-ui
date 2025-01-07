import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import { Collection } from 'react-aria-components'
import Tabs from '~/ui/tabs'

const meta: Meta<typeof Tabs.Root> = {
  render: (props) => (
    <Tabs.Root {...props}>
      <Tabs.TabList>
        <Tabs.Trigger id="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Tab 2</Tabs.Trigger>
        <Tabs.Trigger id="3">Tab 3</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>
  ),
  title: 'Components/Tabs',
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: 'select',
    },
    align: {
      options: ['start', 'center', 'end'],
      control: 'select',
    },
    position: {
      options: ['top', 'left', 'right', 'bottom'],
      control: 'select',
    },
    variant: {
      options: ['card', 'simple'],
      control: 'radio',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { size: 'md', align: 'start', position: 'top', variant: 'simple' },
}

const TABS = [
  {
    id: '1',
    title: 'Tab 1',
    content: '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: '2',
    title: 'Tab 2',
    content: `2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur
      adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam,
      quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos. dolor sit amet consectetur adipisicing elit. Quisquam, quos. dolor sit amet
      consectetur adipisicing elit. Quisquam, quos. dolor sit amet consectetur adipisicing elit.
      Quisquam, quos.`,
  },
  {
    id: '3',
    title: 'Tab 3',
    content: '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
]

export const Variants = () => (
  <Stack direction="column" align="flex-start">
    {/* CENTERED - DISABLED */}
    <Tabs.Root align="center">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger id="2" isDisabled>
          Disabled
        </Tabs.Trigger>
        <Tabs.Trigger id="3">Tab 3</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>

    {/* LEFT */}
    <Tabs.Root position="left">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Left 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Left 2</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>

    {/* RIGHT - SMALL */}
    <Tabs.Root position="right" size="sm">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Small 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Small 2</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>

    {/* BOTTOM - LARGE - END */}
    <Tabs.Root position="bottom" size="lg" align="end">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Large 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Large 2</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>

    {/* CARD - LEFT*/}
    <Tabs.Root variant="card" position="left">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Card 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Card 2</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>

    {/* CARD - BOTTOM - CENTER - LARGE */}
    <Tabs.Root variant="card" position="bottom" size="lg" align="center">
      <Tabs.TabList>
        <Tabs.Trigger id="1">Large 1</Tabs.Trigger>
        <Tabs.Trigger id="2">Large 2</Tabs.Trigger>
      </Tabs.TabList>
      <Collection items={TABS}>
        {(item) => <Tabs.Content id={item.id}>{item.content}</Tabs.Content>}
      </Collection>
    </Tabs.Root>
  </Stack>
)
