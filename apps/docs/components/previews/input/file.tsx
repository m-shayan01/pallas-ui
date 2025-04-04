import { css } from '@styled-system/css'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <div className={css({ display: 'grid', gap: '2' })}>
      <Label htmlFor="file">Upload file</Label>
      <Input.Text id="file" type="file" />
    </div>
  )
}