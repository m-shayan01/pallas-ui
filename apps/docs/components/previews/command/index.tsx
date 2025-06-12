import Command from '@/components/ui/command'
import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react'

function CommandPreview() {
  return (
    <Command.Root css={{ maxW: '[450px]', minH: '[350px]' }} defaultValue="-">
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>
        <Command.Group heading="Suggestions">
          <Command.Item icon={<Calendar />}>
            <span>Calendar</span>
          </Command.Item>
          <Command.Item icon={<Smile />}>
            <span>Search Emoji</span>
          </Command.Item>
          <Command.Item icon={<Calculator />} disabled>
            <span>Calculator</span>
          </Command.Item>
        </Command.Group>
        <Command.Separator />
        <Command.Group heading="Settings">
          <Command.Item icon={<User />}>
            <span>Profile</span>
          </Command.Item>
          <Command.Item icon={<CreditCard />}>
            <span>Billing</span>
          </Command.Item>
          <Command.Item icon={<Settings />}>
            <span>Settings</span>
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Root>
  )
}

export default CommandPreview
