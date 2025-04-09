'use client'

import { Button } from '@/components/ui/button'
import Toast from '@/components/ui/toast'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ToastSimpleDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Toast
      </Button>

      <Toast.Provider>
        <Toast.Root open={open} onOpenChange={setOpen}>
          <Toast.Description>Your message has been sent.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport />
      </Toast.Provider>
    </>
  )
}
