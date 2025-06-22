'use client'

import { Button } from '@/components/ui/button'
import Segmented from '@/components/ui/segmented'
import { css } from '@styled-system/css'
import { VStack } from '@styled-system/jsx'
import { Mail, Send, Upload } from 'lucide-react'
import { useState } from 'react'

export default function Example() {
  const [position, setPosition] = useState<'start' | 'end'>('start')
  return (
    <VStack>
      <Segmented.Root
        value={position || ''}
        onValueChange={(value) => setPosition(value as 'start' | 'end')}
      >
        <Segmented.Option value="start">
          <Segmented.Text>Start</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="end">
          <Segmented.Text>End</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>
      <div className={css({ display: 'flex', gap: '4', flexWrap: 'wrap', alignItems: 'center' })}>
        <Button size="sm" icon={<Mail />} iconPosition={position}>
          Email
        </Button>
        <Button icon={<Send />} iconPosition={position}>
          Send
        </Button>
        <Button size="lg" icon={<Upload />} iconPosition={position}>
          Upload
        </Button>
      </div>
    </VStack>
  )
}
