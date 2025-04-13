import Avatar from '@/components/ui/avatar'

export default function Example() {
  return (
    <Avatar.Root>
      <Avatar.Image src="https://github.com/nanopx.png" alt="@nanopx" />
      <Avatar.Fallback>NP</Avatar.Fallback>
    </Avatar.Root>
  )
}