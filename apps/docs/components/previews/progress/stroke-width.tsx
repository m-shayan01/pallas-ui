'use client'

import Progress from '@/components/ui/progress'

export default function Example() {
  return (
    <Progress.Root value={33} style={{ width: '60%' }} strokeWidth="lg">
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill percentage={33} />
      </Progress.SVG>
      <Progress.Label>{33}%</Progress.Label>
    </Progress.Root>
  )
}
