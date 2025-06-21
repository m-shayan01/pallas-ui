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
        <Sheet.Portal>
          <Sheet.Overlay />
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

const snapPoints = ['200px', '400px', 0.7, 1]

export const SnapPoints: Story = {
  argTypes: {},
  args: {},
  render: () => {
    const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
    return (
      <Sheet.Root
        mode={'snap'}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <div
              className={css({
                width: '50%',
                marginX: 'auto',
                overflowY: snap === 1 ? 'scroll' : 'hidden',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Are you absolutely sure?</Sheet.Title>
                <Sheet.Description>This action cannot be undone.</Sheet.Description>
              </Sheet.Header>

              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
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
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

export const Scrollable: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content className={css({ height: 'full' })}>
            <Sheet.Handle />
            <div
              className={css({
                width: '50%',
                marginX: 'auto',
                overflowY: 'scroll',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Are you absolutely sure?</Sheet.Title>
                <Sheet.Description>This action cannot be undone.</Sheet.Description>
              </Sheet.Header>

              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </Paragraph>
              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </Paragraph>
              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </Paragraph>
              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
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
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

export const NestedSheet: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <div
              className={css({
                width: '50%',
                marginX: 'auto',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Nested Drawers</Sheet.Title>
              </Sheet.Header>

              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                Nesting drawers creates a{' '}
                <a
                  href="https://sonner.emilkowal.ski/"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  Sonner-like
                </a>{' '}
                stacking effect .
              </Paragraph>
              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                You can nest as many drawers as you want. All you need to do is add a
                `Drawer.NestedRoot` component instead of `Drawer.Root`.
              </Paragraph>

              <Sheet.Footer
                className={css({
                  flexDirection: 'row',
                  justifyContent: { base: 'center', sm: 'end' },
                })}
              >
                <Sheet.Close asChild>
                  <Button variant={'outlined'}>Close</Button>
                </Sheet.Close>

                <Sheet.NestedRoot>
                  <Sheet.Trigger>Open Second Sheet</Sheet.Trigger>
                  <Sheet.Overlay />
                  <Sheet.Portal>
                    <Sheet.Content>
                      <Sheet.Handle />
                      <div
                        className={css({
                          width: '50%',
                          marginX: 'auto',
                        })}
                      >
                        <Sheet.Header>
                          <Sheet.Title>This Sheet is nested.</Sheet.Title>
                          <Paragraph>
                            If you pull this Sheet down a bit, it&apos;ll scale the Sheet underneath
                            it as well.
                          </Paragraph>
                          <Paragraph>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English.
                          </Paragraph>
                        </Sheet.Header>
                      </div>
                    </Sheet.Content>
                  </Sheet.Portal>
                </Sheet.NestedRoot>
              </Sheet.Footer>
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}
