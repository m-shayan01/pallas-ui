import Select from '@/components/ui/select'
import { Box, VStack } from '@styled-system/jsx'

export default function SelectSizesPreview() {
  return (
    <VStack gap={4} align="start">
      <Box>
        <Box mb={2}>Small</Box>
        <Select.Root size="sm">
          <Select.Trigger style={{ width: '180px' }}>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box>
        <Box mb={2}>Medium</Box>
        <Select.Root size="md">
          <Select.Trigger style={{ width: '180px' }}>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Box>
      <Box>
        <Box mb={2}>Large</Box>
        <Select.Root size="lg">
          <Select.Trigger style={{ width: '180px' }}>
            <Select.Value placeholder="Select a fruit" />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>Fruits</Select.Label>
              <Select.Item value="apple">Apple</Select.Item>
              <Select.Item value="banana">Banana</Select.Item>
              <Select.Item value="blueberry">Blueberry</Select.Item>
              <Select.Item value="grapes">Grapes</Select.Item>
              <Select.Item value="pineapple">Pineapple</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </Box>
    </VStack>
  )
}
