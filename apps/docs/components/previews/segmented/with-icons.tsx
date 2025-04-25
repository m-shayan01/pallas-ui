'use client'

import Segmented from '@/components/ui/segmented'
import { HStack } from '@styled-system/jsx'
import { Grid, List, Rows } from 'lucide-react'
import { useState } from 'react'

export default function SegmentedWithIconsDemo() {
  const [value, setValue] = useState('tab1')

  return (
    <Segmented.Root value={value} onValueChange={setValue}>
      <Segmented.Option value="tab1">
        <HStack gap="1">
          <Grid size={16} />
          <Segmented.Text>Grid</Segmented.Text>
        </HStack>
      </Segmented.Option>
      <Segmented.Option value="tab2">
        <HStack gap="1">
          <List size={16} />
          <Segmented.Text>List</Segmented.Text>
        </HStack>
      </Segmented.Option>
      <Segmented.Option value="tab3">
        <HStack gap="1">
          <Rows size={16} />
          <Segmented.Text>Rows</Segmented.Text>
        </HStack>
      </Segmented.Option>
    </Segmented.Root>
  )
}
