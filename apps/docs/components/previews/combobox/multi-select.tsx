import Combobox from '@/components/ui/combobox'
import { css } from '@styled-system/css'
import { Check } from 'lucide-react'
import { useState } from 'react'

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

function ComboboxMultiSelect() {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState<string[]>([])

  const handleSelect = (newValue: string) => {
    if (values.includes(newValue)) {
      setValues((prev) => prev.filter((v) => v !== newValue))
    } else {
      setValues((prev) => [...prev, newValue])
    }
  }
  return (
    <Combobox.Root open={open} onOpenChange={setOpen}>
      <Combobox.Trigger css={{ w: 200 }} placeholder="Select fruit...">
        {values.length > 0 &&
          values
            .map((value) => fruits.find((fruit) => fruit.value === value)?.label)
            .filter(Boolean)
            .join(', ')}
      </Combobox.Trigger>
      <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }}>
        <Combobox.Group heading="Fruit">
          {fruits.map((fruit) => (
            <Combobox.Item
              key={fruit.value}
              value={fruit.value}
              onSelect={handleSelect}
              selected={values.includes(fruit.value)}
              icon={
                <Check
                  className={css({
                    visibility: values.includes(fruit.value) ? 'visible' : 'hidden',
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

export default ComboboxMultiSelect
