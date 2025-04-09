'use client'

import Segmented from '@/components/ui/segmented'
import { useState } from 'react'

export default function SegmentedVerticalDemo() {
  const [value, setValue] = useState('tab1')

  return (
    <Segmented.Root orientation="vertical" value={value} onValueChange={setValue}>
      <Segmented.Option value="tab1">
        <Segmented.Text>Option 1</Segmented.Text>
      </Segmented.Option>
      <Segmented.Option value="tab2">
        <Segmented.Text>Option 2</Segmented.Text>
      </Segmented.Option>
      <Segmented.Option value="tab3">
        <Segmented.Text>Option 3</Segmented.Text>
      </Segmented.Option>
    </Segmented.Root>
  )
}
