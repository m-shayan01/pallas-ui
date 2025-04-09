import { css } from '@styled-system/css'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Example() {
  return (
    <div className={css({ display: 'grid', gap: '2' })}>
      <Label htmlFor="email">Email</Label>
      <Input.Text id="email" placeholder="Enter your email" />
    </div>
  )
}
