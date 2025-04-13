import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { styled } from '@styled-system/jsx'

const Flex = styled('div', {
  base: {
    display: 'flex',
    alignItems: 'center',
    gap: '2'
  }
})

export default function Example() {
  return (
    <Flex>
      <Checkbox id="disabled" disabled />
      <Label htmlFor="disabled" css={{ color: 'text.muted' }}>
        Disabled checkbox
      </Label>
    </Flex>
  )
}