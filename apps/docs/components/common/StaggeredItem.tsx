'use client'
import { Box } from '@styled-system/jsx'
import type React from 'react'
import { useEffect, useState } from 'react'

type StaggeredItemProps = {
  delay: number
  children: React.ReactNode
}

export const StaggeredItem: React.FC<StaggeredItemProps> = ({ delay, children }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delay)
    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <Box
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Box>
  )
}
export default StaggeredItem
