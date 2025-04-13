import { css } from '@styled-system/css'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <div
      className={css({
        display: 'grid',
        width: 'full',
        maxWidth: 'sm',
        alignItems: 'center',
        gap: '1.5',
      })}
    >
      <Label htmlFor="email">Email</Label>
      <Input.Text id="email" placeholder="Email" />
    </div>
  )
}