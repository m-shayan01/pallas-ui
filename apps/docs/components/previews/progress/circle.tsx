'use client'

import Progress from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function Example() {
  // Use client-side only rendering to avoid hydration mismatches
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  // Only render the component on the client side
  if (!isClient) {
    return null
  }
  
  return (
    <Progress.Root value={33} style={{ width: '120px' }} shape="circle">
      <Progress.SVG>
        <Progress.CircleTrack />
        <Progress.CircleFill percentage={33} />
      </Progress.SVG>
      <Progress.Label>{33}%</Progress.Label>
    </Progress.Root>
  )
}
