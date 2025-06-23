import Combobox from '@/components/ui/combobox'
import { css } from '@styled-system/css'
import { Check } from 'lucide-react'
import { useState } from 'react'

function ComboboxPreview() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')

  const handleSelect = (newValue: string) => {
    if (newValue === value) {
      setValue('')
    } else {
      setValue(newValue)
    }
    setOpen(false)
  }

  return (
    <Combobox.Root open={open} onOpenChange={setOpen}>
      <Combobox.Trigger css={{ w: 200 }} placeholder="Select fruit...">
        {value && fruits.find((fruit) => fruit.value === value)?.label}
      </Combobox.Trigger>
      <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }}>
        <Combobox.Group heading="Fruit">
          {fruits.map((fruit) => (
            <Combobox.Item
              key={fruit.value}
              value={fruit.value}
              onSelect={handleSelect}
              selected={value === fruit.value}
              icon={
                <Check
                  className={css({
                    visibility: value === fruit.value ? 'visible' : 'hidden',
                  })}
                />
              }
            >
              {fruit.label}
            </Combobox.Item>
          ))}
        </Combobox.Group>
      </Combobox.Content>
    </Combobox.Root>
  )
}

export default ComboboxPreview

const fruits = [
  {
    value: 'apple',
    label: 'Apple',
  },
  {
    value: 'banana',
    label: 'Banana',
  },
  {
    value: 'blueberry',
    label: 'Blueberry',
  },
  {
    value: 'grapes',
    label: 'Grapes',
  },
  {
    value: 'pineapple',
    label: 'Pineapple',
  },
]
