import type { Meta, StoryObj } from '@storybook/react'
import { Stack } from '@styled-system/jsx/stack'
import type { ButtonProps } from '~/ui/button'
import Toast, { Provider, Viewport } from '~/ui/toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  argTypes: {},
  render: (props) => (
    <Provider swipeDirection="right">
      <Toast open={true} {...props} />
      <Viewport />
    </Provider>
  ),
  decorators: [],
}

export default meta

type Story = StoryObj<typeof meta>

const TITLE = 'This is a title'
const DESCRIPTION = `when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries. when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has survived not only five centuries.`
const ACTIONS = [
  {
    key: '1',
    label: 'Action 1',
    onClick: () => {},
    buttonProps: {
      variant: 'outlined',
    } as ButtonProps,
  },
  {
    key: '2',
    label: 'Action 2',
    onClick: () => {},
  },
]

export const Default: Story = {
  args: {
    title: TITLE,
    description: DESCRIPTION,
  },
}

export const Varients = () => (
  <Stack gap="8">
    <Provider swipeDirection="right">
      <Toast
        open={true}
        title={'Toast with shadow and actions'}
        description={DESCRIPTION}
        actions={ACTIONS}
        variant="shadow"
      />
      <Viewport />
    </Provider>

    <Provider swipeDirection="right">
      <Toast title={'Auto hides after 5s'} description={DESCRIPTION} />
      <Viewport />
    </Provider>

    <Provider swipeDirection="right">
      <Toast
        open={true}
        title={'Toast with icon and actions'}
        description={DESCRIPTION}
        actions={ACTIONS}
        iconType="info"
      />
      <Viewport />
    </Provider>

    <Provider swipeDirection="right">
      <Toast
        open={true}
        title={'Toast with warning icon'}
        description={DESCRIPTION}
        iconType="warning"
      />
      <Viewport />
    </Provider>

    <Provider swipeDirection="right">
      <Toast
        open={true}
        title={'Toast with error icon'}
        description={DESCRIPTION}
        iconType="error"
      />
      <Viewport />
    </Provider>

    <Provider swipeDirection="right">
      <Toast
        open={true}
        title={'Toast with success icon'}
        description={DESCRIPTION}
        iconType="success"
      />
      <Viewport />
    </Provider>
  </Stack>
)
