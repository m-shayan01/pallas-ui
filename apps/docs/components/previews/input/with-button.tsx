import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <div
      className={css({
        display: 'flex',
        width: 'full',
        maxWidth: 'sm',
        alignItems: 'center',
        gap: '2',
      })}
    >
      <Input.Text id="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  )
}