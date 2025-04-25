'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Modal from '@/components/ui/modal/modal'
import { VStack } from '@styled-system/jsx'
import { useState } from 'react'

export default function ModalWithFormDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button>Edit Profile</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Edit Profile</Modal.Title>
            <Modal.Description>
              Make changes to your profile here. Click save when you're done.
            </Modal.Description>
          </Modal.Header>
          <form>
            <VStack gap="4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" size="md">
                  <Input.Text defaultValue="John Doe" />
                </Input>
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" size="md">
                  <Input.Text defaultValue="john.doe@example.com" />
                </Input>
              </div>
            </VStack>
          </form>
          <Modal.Footer>
            <Modal.Cancel>Cancel</Modal.Cancel>
            <Modal.Action asChild>
              <Button>Save Changes</Button>
            </Modal.Action>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}
