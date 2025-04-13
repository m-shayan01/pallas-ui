import { css } from '@styled-system/css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function Example() {
  return (
    <form className={css({ display: 'grid', gap: '4' })}>
      <div className={css({ display: 'grid', gap: '2' })}>
        <Label htmlFor="email">Email</Label>
        <Input.Text id="email" placeholder="Email" />
      </div>
      <div className={css({ display: 'grid', gap: '2' })}>
        <Label htmlFor="password">Password</Label>
        <Input.Text id="password" type="password" placeholder="Password" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )
}