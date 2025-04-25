'use client'

import Progress from '@/components/ui/progress'
import { useEffect, useState } from 'react'

export default function Example() {
  const [isClient, setIsClient] = useState(false)
  const [progress, setProgress] = useState(33)
  
  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])
  
  if (!isClient) {
    return null
  }
  
  return (
    <Progress.Root value={progress} style={{ width: '60%' }}>
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill percentage={progress} />
      </Progress.SVG>
      <Progress.Label>{progress}%</Progress.Label>
    </Progress.Root>
  )
}
