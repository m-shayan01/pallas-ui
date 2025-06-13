'use client'

import { Button } from '@/components/ui/button'
import Form from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { VStack } from '@styled-system/jsx'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function Example() {
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  })
  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })
  return (
    <Form.Provider form={form} onSubmit={handleSubmit}>
      <VStack gap="1">
        <Form.Field
          name="email"
          control={form.control}
          render={({ field }) => {
            return (
              <Form.Item>
                <Form.Label htmlFor="email-form">Email</Form.Label>
                <Form.Control>
                  <Input size="md">
                    <Input.Text id="email-form" placeholder="Email" {...field} />
                  </Input>
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )
          }}
        />
        <Form.Field
          name="password"
          control={form.control}
          render={({ field }) => {
            return (
              <Form.Item>
                <Form.Label htmlFor="password-form">Password</Form.Label>
                <Form.Control>
                  <Input size="md">
                    <Input.Text id="password-form" placeholder="Password" {...field} />
                  </Input>
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )
          }}
        />
        <Button type="submit" css={{ my: 2 }}>
          Submit
        </Button>
      </VStack>
    </Form.Provider>
  )
}
