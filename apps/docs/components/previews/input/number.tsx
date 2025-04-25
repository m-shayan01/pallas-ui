import { Input } from '@/components/ui/input'

export default function Example() {
  return (
    <Input size="md">
      <Input.Number placeholder="Enter a number" min={0} max={100} />
    </Input>
  )
}
