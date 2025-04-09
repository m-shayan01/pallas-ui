'use client'

import Segmented from '@/components/ui/segmented'
import { useState } from 'react'

export default function SegmentedDisabledDemo() {
  const [value, setValue] = useState('tab1')
  
  return (
    <Segmented.Root value={value} onValueChange={setValue}>
      <Segmented.Option value="tab1">
        <Segmented.Text>Enabled</Segmented.Text>
      </Segmented.Option>
      <Segmented.Option value="tab2" disabled>
        <Segmented.Text>Disabled</Segmented.Text>
      </Segmented.Option>
      <Segmented.Option value="tab3">
        <Segmented.Text>Enabled</Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>
  )
}