'use client'

import Select from '@/components/ui/select'

export default function Example() {
  return (
    <Select.Root>
      <Select.Trigger style={{ width: '180px' }}>
        <Select.Value placeholder="Select a food" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="banana">Banana</Select.Item>
          <Select.Item value="blueberry">Blueberry</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="cucumber">Cucumber</Select.Item>
          <Select.Item value="spinach">Spinach</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Meats</Select.Label>
          <Select.Item value="beef">Beef</Select.Item>
          <Select.Item value="chicken">Chicken</Select.Item>
          <Select.Item value="fish">Fish</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  )
}