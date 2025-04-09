import { css } from '@styled-system/css'
import { Input } from '@/components/ui/input'
import { AtSign, Search } from 'lucide-react'

export default function Example() {
  return (
    <div className={css({ display: 'grid', gap: '4' })}>
      <Input>
        <Input.Prefix>
          <AtSign size={16} />
        </Input.Prefix>
        <Input.Text placeholder="Email" />
      </Input>
      
      <Input>
        <Input.Text placeholder="Search" />
        <Input.Postfix>
          <Search size={16} />
        </Input.Postfix>
      </Input>
      
      <Input>
        <Input.Prefix>
          <span>https://</span>
        </Input.Prefix>
        <Input.Text placeholder="Website" />
        <Input.Postfix>
          <span>.com</span>
        </Input.Postfix>
      </Input>
    </div>
  )
}