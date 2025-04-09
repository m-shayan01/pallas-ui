'use client'

import { Button } from '@/components/ui/button'
import Toast from '@/components/ui/toast'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ToastDemo() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Add to calendar
      </Button>

      <Toast.Provider>
        <Toast.Root
          placement="bottomRight"
          open={open}
          onOpenChange={setOpen}
          style={{ backgroundColor: 'white' }}
        >
          <Toast.Icon>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Clock Text"
            >
              <path
                d="M7.5 0.875C5.49797 0.875 3.57907 1.67165 2.16637 3.08435C0.753676 4.49705 0 6.41775 0 8.375C0 10.3322 0.753676 12.2529 2.16637 13.6656C3.57907 15.0783 5.49797 15.875 7.5 15.875C9.50203 15.875 11.4209 15.0783 12.8336 13.6656C14.2463 12.2529 15 10.3322 15 8.375C15 6.41775 14.2463 4.49705 12.8336 3.08435C11.4209 1.67165 9.50203 0.875 7.5 0.875ZM7.5 14.125C5.9087 14.125 4.38258 13.5022 3.25736 12.4426C2.13214 11.383 1.5 9.9212 1.5 8.375C1.5 6.8288 2.13214 5.36701 3.25736 4.30736C4.38258 3.24771 5.9087 2.625 7.5 2.625C9.0913 2.625 10.6174 3.24771 11.7426 4.30736C12.8679 5.36701 13.5 6.8288 13.5 8.375C13.5 9.9212 12.8679 11.383 11.7426 12.4426C10.6174 13.5022 9.0913 14.125 7.5 14.125ZM7.5 4.375C7.30109 4.375 7.11032 4.45268 6.96967 4.59099C6.82902 4.7293 6.75 4.91467 6.75 5.10938V8.375C6.75 8.56971 6.82902 8.75508 6.96967 8.89339C7.11032 9.0317 7.30109 9.10938 7.5 9.10938H10.5C10.6989 9.10938 10.8897 9.0317 11.0303 8.89339C11.171 8.75508 11.25 8.56971 11.25 8.375C11.25 8.18029 11.171 7.99492 11.0303 7.85661C10.8897 7.7183 10.6989 7.64062 10.5 7.64062H8.25V5.10938C8.25 4.91467 8.17098 4.7293 8.03033 4.59099C7.88968 4.45268 7.69891 4.375 7.5 4.375Z"
                fill="currentColor"
              />
            </svg>
          </Toast.Icon>
          <Toast.Title>Scheduled: Catch up</Toast.Title>
          <Toast.Description>Friday, February 10, 2023 at 5:57 PM</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
          <Toast.Actions>
            <Toast.Action altText="Undo scheduled event">Undo</Toast.Action>
          </Toast.Actions>
        </Toast.Root>
        <Toast.Viewport placement={'bottomRight'} />
      </Toast.Provider>
    </>
  )
}
