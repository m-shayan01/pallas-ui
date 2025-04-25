import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Flex } from '@styled-system/jsx'

export default function SwitchDemo() {
  return (
    <Flex align="center" gap="2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </Flex>
  )
}
