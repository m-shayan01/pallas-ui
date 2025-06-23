'use client'

import Combobox from '@/components/ui/combobox'
import { Label } from '@/components/ui/label'
import { css } from '@styled-system/css'
import { Stack } from '@styled-system/jsx'
import { Check } from 'lucide-react'
import { useState } from 'react'

function ComboboxSizes() {
  const [openSm, setOpenSm] = useState(false)
  const [openMd, setOpenMd] = useState(false)
  const [openLg, setOpenLg] = useState(false)
  return (
    <Stack>
      <Stack gap={1}>
        <Label htmlFor="sm">Small</Label>
        <Combobox.Root size="sm" open={openSm} onOpenChange={setOpenSm}>
          <ComboboxInner setOpen={setOpenSm} id="sm" />
        </Combobox.Root>
      </Stack>
      <Stack gap={1}>
        <Label htmlFor="md">Medium</Label>
        <Combobox.Root size="md" open={openMd} onOpenChange={setOpenMd}>
          <ComboboxInner setOpen={setOpenMd} id="md" />
        </Combobox.Root>
      </Stack>
      <Stack gap={1}>
        <Label htmlFor="lg">Large</Label>
        <Combobox.Root size="lg" open={openLg} onOpenChange={setOpenLg}>
          <ComboboxInner setOpen={setOpenLg} id="lg" />
        </Combobox.Root>
      </Stack>
    </Stack>
  )
}

export default ComboboxSizes

function ComboboxInner({ setOpen, id }: { setOpen: (open: boolean) => void; id?: string }) {
  const [value, setValue] = useState('')
  return (
    <>
      <Combobox.Trigger id={id} css={{ w: 200 }} placeholder="Select fruit...">
        {value && fruits.find((fruit) => fruit.value === value)?.label}
      </Combobox.Trigger>
      <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }}>
        <Combobox.Group heading="Fruit">
          {fruits.map((fruit) => (
            <Combobox.Item
              key={fruit.value}
              value={fruit.value}
              onSelect={(newValue) => {
                if (newValue === value) {
                  setValue('')
                } else {
                  setValue(newValue)
                }
                setOpen(false)
              }}
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
    </>
  )
}

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
