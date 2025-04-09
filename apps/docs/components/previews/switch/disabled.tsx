import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Flex, Grid } from '@styled-system/jsx'

export default function SwitchDisabledDemo() {
  return (
    <Grid gap="2.5">
      <Flex align="center" gap="2">
        <Switch id="airplane-mode-2" disabled />
        <Label htmlFor="airplane-mode-2">Airplane Mode</Label>
      </Flex>
      <Flex align="center" gap="2">
        <Switch id="airplane-mode-3" checked disabled />
        <Label htmlFor="airplane-mode-3">Airplane Mode (On)</Label>
      </Flex>
    </Grid>
  )
}
