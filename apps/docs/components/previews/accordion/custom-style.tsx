import Accordion from '@/components/ui/accordion'
import { Plus } from 'lucide-react'

export default function AccordionCustomStylePreview() {
  return (
    <Accordion.Root
      type="single"
      css={{
        width: '100%',
        border: '2px solid var(--colors-primary-300)',
        borderRadius: 'var(--radii-xl)',
        backgroundColor: 'var(--colors-bg-muted)',
      }}
    >
      <Accordion.Item value="item-1">
        <Accordion.ItemHeader style={{ backgroundColor: 'var(--colors-primary-100)' }}>
          Custom Styling Example
          <Accordion.ItemTrigger>
            <Plus />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          You can customize the accordion&apos;s appearance with inline styles or by using the
          styling system.
        </Accordion.ItemContent>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.ItemHeader style={{ backgroundColor: 'var(--colors-primary-100)' }}>
          Different Icons
          <Accordion.ItemTrigger>
            <Plus />
          </Accordion.ItemTrigger>
        </Accordion.ItemHeader>
        <Accordion.ItemContent>
          You can use any icon from Lucide or other icon libraries.
        </Accordion.ItemContent>
      </Accordion.Item>
    </Accordion.Root>
  )
}
