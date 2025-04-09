'use client'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { useState } from 'react'

export default function ModalDemo() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button>Open Modal</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal Title</Modal.Title>
            <Modal.Description>
              This is a description of the modal. It provides additional context about the modal's purpose.
            </Modal.Description>
          </Modal.Header>
          <div>
            <p>Modal content goes here. You can add any content you want inside the modal.</p>
          </div>
          <Modal.Footer>
            <Modal.Cancel>Cancel</Modal.Cancel>
            <Modal.Action asChild>
              <Button>Continue</Button>
            </Modal.Action>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}