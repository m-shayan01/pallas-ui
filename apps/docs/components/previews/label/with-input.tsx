import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    <div className={css({ display: 'grid', gap: '2' })}>
      <Label htmlFor="email">Email</Label>
      <Input size="md">
        <Input.Text id="email" placeholder="Enter your email" />
      </Input>
    </div>
  )
}
