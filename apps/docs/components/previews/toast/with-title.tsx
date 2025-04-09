'use client'

import { Button } from '@/components/ui/button'
import Toast from '@/components/ui/toast'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ToastWithTitleDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Show Toast
      </Button>

      <Toast.Provider>
        <Toast.Root open={open} onOpenChange={setOpen} style={{ backgroundColor: 'white' }}>
          <Toast.Title>Uh oh! Something went wrong.</Toast.Title>
          <Toast.Description>There was a problem with your request.</Toast.Description>
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
