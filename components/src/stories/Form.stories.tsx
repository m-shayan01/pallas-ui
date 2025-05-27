import { zodResolver } from '@hookform/resolvers/zod'
import type { Meta, StoryObj } from '@storybook/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../ui/button'
import Form from '../ui/form'
import { Input } from '../ui/input'

const meta: Meta<typeof Form.Provider> = {
  component: Form.Provider,
  title: 'Forms/Form',
  subcomponents: {},
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

const formSchema = z.object({ name: z.string().min(3) })

export const Default: Story = {
  args: {
    children: 'Pallas UI',
  },
  render: () => {
    const form = useForm({
      defaultValues: {
        name: '',
      },
      resolver: zodResolver(formSchema),
    })

    const handleSubmit = form.handleSubmit((data) => {
      console.log(data.name)
    })

    return (
      <div>
        <Form.Provider form={form} onSubmit={handleSubmit}>
          <Form.Field
            name="name"
            control={form.control}
            render={({ field }) => {
              return (
                <Form.Item>
                  <Form.Label>Name</Form.Label>
                  <Form.Description>Enter your name</Form.Description>
                  <Form.Control>
                    <Input>
                      <Input.Text {...field} />
                    </Input>
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )
            }}
          />
          <Button type="submit">Submit</Button>
        </Form.Provider>
      </div>
    )
  },
}
