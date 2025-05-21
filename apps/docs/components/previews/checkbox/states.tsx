import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { styled } from '@styled-system/jsx'
import { VStack } from '@styled-system/jsx'

const Flex = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2',
  },
})

export default function CheckboxStates() {
  return (
    <VStack gap="4" align="start">
      <Flex>
        <Checkbox id="unchecked" />
        <Label htmlFor="unchecked">Unchecked</Label>
      </Flex>

      <Flex>
        <Checkbox id="checked" checked />
        <Label htmlFor="checked">Checked</Label>
      </Flex>

      <Flex>
        <Checkbox id="indeterminate" checked="indeterminate" />
        <Label htmlFor="indeterminate">Indeterminate</Label>
      </Flex>
    </VStack>
  )
}
