import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaWithLabelDemo() {
  return (
    <Grid width="full" gap="1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea id="message" placeholder="Type your message here." />
    </Grid>
  )
}
