'use client'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { useState } from 'react'

export default function ModalConfirmationDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button variant="primary">Delete Account</Button>
        </Modal.Trigger>
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Are you absolutely sure?</Modal.Title>
            <Modal.Description>
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </Modal.Description>
          </Modal.Header>
          <Modal.Footer>
            <Modal.Cancel>Cancel</Modal.Cancel>
            <Modal.Action asChild>
              <Button variant="primary">Delete Account</Button>
            </Modal.Action>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}
