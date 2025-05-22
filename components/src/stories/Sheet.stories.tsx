import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { useState } from 'react'
import { Button } from '~/ui/button'
import Sheet from '~/ui/sheet'
import type { RootProps } from '~/ui/sheet'
import { Paragraph } from '~/ui/typography'

const meta: Meta<RootProps> = {
  component: Sheet.Root,
  title: 'Components/Sheet',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Overlay />
        <Sheet.Portal>
          <Sheet.Content>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Title>Are you absolutely sure?</Sheet.Title>
              <Sheet.Description>This action cannot be undone.</Sheet.Description>
            </Sheet.Header>

            <Paragraph className={css({ marginX: 'padding.inline.md' })}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Paragraph>

            <Sheet.Footer
              className={css({
                flexDirection: 'row',
                justifyContent: { base: 'center', sm: 'end' },
              })}
            >
              <Sheet.Close asChild>
                <Button variant={'outlined'}>Cancel</Button>
              </Sheet.Close>
              <Button>Submit</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

const snapPoints = ['280px', '600px', 1]

export const SnapPoints: Story = {
  argTypes: {},
  args: {},
  render: () => {
    const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
    return (
      <Sheet.Root
        height={'multiple'}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Overlay />
        <Sheet.Portal>
          <Sheet.Content>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Title>Are you absolutely sure?</Sheet.Title>
              <Sheet.Description>This action cannot be undone.</Sheet.Description>
            </Sheet.Header>

            <Paragraph className={css({ marginX: 'padding.inline.md' })}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Paragraph>

            <Sheet.Footer
              className={css({
                flexDirection: 'row',
                justifyContent: { base: 'center', sm: 'end' },
              })}
            >
              <Sheet.Close asChild>
                <Button variant={'outlined'}>Cancel</Button>
              </Sheet.Close>
              <Button>Submit</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}
