'use client'

import { Button } from '@/components/ui/button'
import Toast from '@/components/ui/toast'
import { HStack } from '@styled-system/jsx'
import { X } from 'lucide-react'
import { useState } from 'react'

export default function ToastPlacementDemo() {
  const [openTopLeft, setOpenTopLeft] = useState(false)
  const [openTopRight, setOpenTopRight] = useState(false)
  const [openBottomLeft, setOpenBottomLeft] = useState(false)
  const [openBottomRight, setOpenBottomRight] = useState(false)

  return (
    <>
      <HStack gap="2">
        <Button variant="outlined" onClick={() => setOpenTopLeft(true)}>
          Top Left
        </Button>
        <Button variant="outlined" onClick={() => setOpenTopRight(true)}>
          Top Right
        </Button>
        <Button variant="outlined" onClick={() => setOpenBottomLeft(true)}>
          Bottom Left
        </Button>
        <Button variant="outlined" onClick={() => setOpenBottomRight(true)}>
          Bottom Right
        </Button>
      </HStack>

      {/* <Toast.Provider>
        <Toast.Root placement="topLeft" open={openTopLeft} onOpenChange={setOpenTopLeft}>
          <Toast.Title>Top Left Toast</Toast.Title>
          <Toast.Description>This toast appears in the top left corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>

        <Toast.Root placement="topRight" open={openTopRight} onOpenChange={setOpenTopRight}>
          <Toast.Title>Top Right Toast</Toast.Title>
          <Toast.Description>This toast appears in the top right corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>

        <Toast.Root placement="bottomLeft" open={openBottomLeft} onOpenChange={setOpenBottomLeft}>
          <Toast.Title>Bottom Left Toast</Toast.Title>
          <Toast.Description>This toast appears in the bottom left corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>

        <Toast.Root
          placement="bottomRight"
          open={openBottomRight}
          onOpenChange={setOpenBottomRight}
        >
          <Toast.Title>Bottom Right Toast</Toast.Title>
          <Toast.Description>This toast appears in the bottom right corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>

        <Toast.Viewport placement="topLeft" />
        <Toast.Viewport placement="topRight" />
        <Toast.Viewport placement="bottomLeft" />
        <Toast.Viewport placement="bottomRight" /> 
      </Toast.Provider> */}
      <Toast.Provider>
        <Toast.Root
          placement="topLeft"
          open={openTopLeft}
          onOpenChange={setOpenTopLeft}
          style={{ backgroundColor: 'white' }}
        >
          <Toast.Title>Top Left Toast</Toast.Title>
          <Toast.Description>This toast appears in the top left corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport placement={'topLeft'} />
      </Toast.Provider>

      <Toast.Provider>
        <Toast.Root
          placement="topRight"
          open={openTopRight}
          onOpenChange={setOpenTopRight}
          style={{ backgroundColor: 'white' }}
        >
          <Toast.Title>Top Right Toast</Toast.Title>
          <Toast.Description>This toast appears in the top right corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport placement={'topRight'} />
      </Toast.Provider>

      <Toast.Provider>
        <Toast.Root
          placement="bottomLeft"
          open={openBottomLeft}
          onOpenChange={setOpenBottomLeft}
          style={{ backgroundColor: 'white' }}
        >
          <Toast.Title>Bottom Left Toast</Toast.Title>
          <Toast.Description>This toast appears in the bottom left corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport placement={'bottomLeft'} />
      </Toast.Provider>

      <Toast.Provider>
        <Toast.Root
          placement="bottomRight"
          open={openBottomRight}
          onOpenChange={setOpenBottomRight}
          style={{ backgroundColor: 'white' }}
        >
          <Toast.Title>Bottom Right Toast</Toast.Title>
          <Toast.Description>This toast appears in the bottom right corner.</Toast.Description>
          <Toast.Close asChild>
            <Button variant="dashed" size="sm">
              <X size={16} />
            </Button>
          </Toast.Close>
        </Toast.Root>
        <Toast.Viewport placement={'bottomRight'} />
      </Toast.Provider>
    </>
  )
}
