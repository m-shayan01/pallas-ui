'use client'

import Segmented from '@/components/ui/segmented'
import { VStack } from '@styled-system/jsx'
import { useState } from 'react'

export default function SegmentedSizesDemo() {
  const [valueSmall, setValueSmall] = useState('tab1')
  const [valueMedium, setValueMedium] = useState('tab1')
  const [valueLarge, setValueLarge] = useState('tab1')

  return (
    <VStack gap="6">
      <Segmented.Root size="sm" value={valueSmall} onValueChange={setValueSmall}>
        <Segmented.Option value="tab1">
          <Segmented.Text>Small</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab2">
          <Segmented.Text>Option</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab3">
          <Segmented.Text>Size</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>

      <Segmented.Root size="md" value={valueMedium} onValueChange={setValueMedium}>
        <Segmented.Option value="tab1">
          <Segmented.Text>Medium</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab2">
          <Segmented.Text>Option</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab3">
          <Segmented.Text>Size</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>

      <Segmented.Root size="lg" value={valueLarge} onValueChange={setValueLarge}>
        <Segmented.Option value="tab1">
          <Segmented.Text>Large</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab2">
          <Segmented.Text>Option</Segmented.Text>
        </Segmented.Option>
        <Segmented.Option value="tab3">
          <Segmented.Text>Size</Segmented.Text>
        </Segmented.Option>
      </Segmented.Root>
    </VStack>
  )
}
