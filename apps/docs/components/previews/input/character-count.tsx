import { Input } from '@/components/ui/input'
import { Stack } from '@styled-system/jsx'

export default function CharacterCountExample() {
  return (
    <Stack w="full" maxW="sm" align="flex-start" gap="1.5">
      <Input>
        <Input.Text placeholder="Type something..." maxLength={50} showCount />
      </Input>
    </Stack>
  )
}
