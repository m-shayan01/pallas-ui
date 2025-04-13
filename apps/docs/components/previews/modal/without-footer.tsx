'use client'

import { Button } from '@/components/ui/button'
import Modal from '@/components/ui/modal/modal'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ModalWithoutFooterDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Trigger asChild>
          <Button>Open Modal</Button>
        </Modal.Trigger>
        <Modal.Content>
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
            <Button variant="dashed" size="sm" onClick={() => setOpen(false)}>
              <X size={16} />
            </Button>
          </div>
          <Modal.Header>
            <Modal.Title>Notification</Modal.Title>
            <Modal.Description>
              This is an informational modal without action buttons.
            </Modal.Description>
          </Modal.Header>
          <div>
            <p>
              This modal doesn't have a footer with action buttons. It's meant for displaying
              information only.
            </p>
          </div>
        </Modal.Content>
      </Modal.Root>
    </>
  )
}
