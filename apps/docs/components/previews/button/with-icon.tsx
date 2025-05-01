'use client'

import { Button } from '@/components/ui/button'
import { css } from '@styled-system/css'
import { Mail, Send, Upload } from 'lucide-react'

export default function Example() {
  return (
    <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap', alignItems: 'center' })}>
      <Button size="sm" icon={<Mail />}>
        Email
      </Button>
      <Button icon={<Send />}>Send</Button>
      <Button size="lg" icon={<Upload />}>
        Upload
      </Button>
    </div>
  )
}
