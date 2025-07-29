import type { Meta } from '@storybook/react'
import { Grid, Stack } from '@styled-system/jsx'
import { Label } from '~/ui/label'
import { Textarea } from '~/ui/textarea'

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Forms/Textarea',
  tags: ['autodocs'],
}

export default meta

export const Default = () => <Textarea placeholder="Type your message here." />

export const Variants = () => (
  <Grid gap="2.5">
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-1">Message 1</Label>
      <Textarea id="message-1" placeholder="Type Message 1 here" />
    </Stack>
    <Stack align="flex-start" gap="2">
      <Label htmlFor="message-2">Disabled</Label>
      <Textarea id="message-2" placeholder="This textarea is disabled" disabled />
    </Stack>
  </Grid>
)
