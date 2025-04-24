import Accordion from '@/components/ui/accordion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function AccordionControlledPreview() {
  const [value, setValue] = useState<string | undefined>('item-1')

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button
          type="button"
          onClick={() => setValue(value === 'item-1' ? undefined : 'item-1')}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid var(--colors-border)',
            borderRadius: 'var(--radii-md)',
            backgroundColor: value === 'item-1' ? 'var(--colors-primary-100)' : 'transparent',
            marginRight: '0.5rem',
          }}
        >
          Toggle First Item
        </button>
        <button
          type="button"
          onClick={() => setValue(value === 'item-2' ? undefined : 'item-2')}
          style={{
            padding: '0.5rem 1rem',
            border: '1px solid var(--colors-border)',
            borderRadius: 'var(--radii-md)',
            backgroundColor: value === 'item-2' ? 'var(--colors-primary-100)' : 'transparent',
            marginRight: '0.5rem',
          }}
        >
          Toggle Second Item
        </button>
      </div>

      <Accordion.Root
        type="single"
        value={value}
        onValueChange={setValue}
        css={{ width: '100%', border: '0' }}
      >
        <Accordion.Item value="item-1">
          <Accordion.ItemHeader>
            Controlled Item 1
            <Accordion.ItemTrigger>
              <ChevronDown />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>
            This accordion is controlled with React state. Click the buttons above to control it.
          </Accordion.ItemContent>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.ItemHeader>
            Controlled Item 2
            <Accordion.ItemTrigger>
              <ChevronDown />
            </Accordion.ItemTrigger>
          </Accordion.ItemHeader>
          <Accordion.ItemContent>
            State management allows programmatic control of the accordion.
          </Accordion.ItemContent>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  )
}
