import type { Meta, StoryObj } from '@storybook/react'
import type { ButtonProps } from '~/ui/button'
import Toast, { Provider, Viewport } from '~/ui/toast'

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  tags: ['autodocs'],
  render: (props) => (
    <Provider>
      <Toast open={true} {...props} />
      <Viewport placement={props.placement} />
    </Provider>
  ),
  argTypes: {
    variant: {
      options: ['shadow', 'bordered'],
      control: 'select',
    },
    iconType: {
      options: ['info', 'warning', 'success', 'error'],
      control: 'select',
    },
    placement: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: 'select',
    },
  },
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
    variant: 'bordered',
    placement: 'topRight',
  },
}

export const Varients = () => (
  <Provider>
    <Viewport />

    <Toast title={'Auto hides after 5s'} description={DESCRIPTION} />

    <Toast open={true} title={'Toast with shadow'} actions={ACTIONS} variant="shadow" />

    <Toast open={true} description={'Toast without title, just description text'} />

    <Toast
      open={true}
      title={'Toast with icon and actions'}
      description={DESCRIPTION}
      actions={ACTIONS}
      iconType="info"
      showClose
    />

    <Toast open={true} title={'Toast with warning icon'} iconType="warning" />

    <Toast open={true} title={'Toast with error icon'} iconType="error" />

    <Toast open={true} title={'Toast with success icon'} iconType="success" />
  </Provider>
)
