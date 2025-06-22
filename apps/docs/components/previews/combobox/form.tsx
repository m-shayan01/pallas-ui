'use client'

import { Button } from '@/components/ui/button'
import Combobox from '@/components/ui/combobox'
import Form from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { css } from '@styled-system/css'
import { VStack } from '@styled-system/jsx'
import { Check } from 'lucide-react'
import { useState } from 'react'
import { type ControllerRenderProps, useForm } from 'react-hook-form'
import { z } from 'zod'

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

const schema = z.object({
  fruit: z
    .enum(['apple', 'banana', 'blueberry', 'grapes', 'pineapple'])
    .array()
    .max(3, 'More than 3 fruits selected'),
})

type Fruit = z.infer<typeof schema>['fruit'][number]

function ComboboxForm() {
  const form = useForm({
    defaultValues: {
      fruit: [],
    },
    resolver: zodResolver(schema),
  })

  const handleSubmit = (data: z.infer<typeof schema>) => {}

  const [open, setOpen] = useState(false)

  const handleSelect = (
    newValue: Fruit,
    field: ControllerRenderProps<{ fruit: Fruit[] }, 'fruit'>,
  ) => {
    if (field.value.includes(newValue as Fruit)) {
      field.onChange(field.value.filter((v) => v !== newValue))
    } else {
      field.onChange([...field.value, newValue])
    }
  }

  const triggerText = (field: ControllerRenderProps<{ fruit: Fruit[] }, 'fruit'>) =>
    field.value.length > 0 &&
    field.value.map((fruit) => fruits.find((f) => f.value === fruit)?.label).join(', ')

  return (
    <Form.Provider form={form} onSubmit={form.handleSubmit(handleSubmit)}>
      <VStack gap="4">
        <VStack gap="0.5">
          <Form.Field
            name="fruit"
            control={form.control}
            render={({ field }) => (
              <Form.Item>
                <Form.Label htmlFor="fruit">Fruit</Form.Label>
                <Form.Control>
                  <Combobox.Root open={open} onOpenChange={setOpen}>
                    <Combobox.Trigger id="fruit" css={{ w: 200 }} placeholder="Select fruit...">
                      {triggerText(field)}
                    </Combobox.Trigger>
                    <Combobox.Content placeholder="Search fruit..." css={{ w: 200 }} side="top">
                      <Combobox.Group heading="Fruits">
                        {fruits.map((fruit) => (
                          <Combobox.Item
                            key={fruit.value}
                            value={fruit.value}
                            onSelect={(newValue) => handleSelect(newValue as Fruit, field)}
                            icon={
                              <Check
                                className={css({
                                  visibility: field.value.includes(fruit.value as Fruit)
                                    ? 'visible'
                                    : 'hidden',
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
                </Form.Control>
                <Form.Description>Select up to 3 fruits</Form.Description>
                <Form.Message />
              </Form.Item>
            )}
          />
        </VStack>
        <Button type="submit">Submit</Button>
      </VStack>
    </Form.Provider>
  )
}

export default ComboboxForm
