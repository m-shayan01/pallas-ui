'use client'

import Select from '@/components/ui/select'

export default function Example() {
  return (
    <Select.Root disabled>
      <Select.Trigger style={{ width: '180px' }}>
        <Select.Value placeholder="Select a fruit" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
      </Select.Content>
    </Select.Root>
  )
}