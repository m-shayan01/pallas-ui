import type { Meta, StoryObj } from '@storybook/react'
import { HStack } from '@styled-system/jsx'
import { Checkbox } from '~/ui/checkbox'
import { Label } from '~/ui/label'

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  tags: ['autodocs'],
}

export default meta

export const Default = () => <Checkbox />
