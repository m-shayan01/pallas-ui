import Combobox from '@/components/ui/combobox'
import { css } from '@styled-system/css'
import { Check, Plus } from 'lucide-react'
import { useState } from 'react'

function ComboboxPopoverPreview() {
  const [open, setOpen] = useState(false)
  const [popoverSide, setPopoverSide] = useState<Item<Side> | null>(null)

  return (
    <Combobox.Root open={open} onOpenChange={setOpen}>
      <Combobox.Trigger css={{ w: 200 }} icon={<Plus />} placeholder="Set side">
        {popoverSide?.label}
      </Combobox.Trigger>
      <Combobox.Content side={popoverSide?.value ?? 'bottom'} css={{ w: 200 }}>
        <Combobox.Group heading="Side">
          {sides.map((side) => (
            <Combobox.Item
              key={side.value}
              value={side.value}
              onSelect={() => {
                setPopoverSide(side)
                setOpen(false)
              }}
              icon={
                <Check
                  className={css({
                    visibility: popoverSide?.value === side.value ? 'visible' : 'hidden',
                  })}
                />
              }
            >
              {side.label}
            </Combobox.Item>
          ))}
        </Combobox.Group>
      </Combobox.Content>
    </Combobox.Root>
  )
}

export default ComboboxPopoverPreview

type Item<T = string> = {
  value: T
  label: string
}

type Side = 'left' | 'bottom' | 'top' | 'right'
const sides: Item<Side>[] = [
  {
    value: 'left',
    label: 'Left',
  },
  {
    value: 'bottom',
    label: 'Bottom',
  },
  {
    value: 'top',
    label: 'Top',
  },
  {
    value: 'right',
    label: 'Right',
  },
]
