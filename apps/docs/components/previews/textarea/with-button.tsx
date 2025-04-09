import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Grid } from '@styled-system/jsx'

export default function TextareaWithButtonDemo() {
  return (
    <Grid width="full" gap="2">
      <Textarea placeholder="Type your message here." />
      <Button>Send message</Button>
    </Grid>
  )
}
