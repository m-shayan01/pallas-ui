'use client'

import Progress from '@/components/ui/progress'

export default function Example() {
  return (
    <Progress.Root value={66} style={{ width: '60%' }} steps={10}>
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill percentage={66} />
      </Progress.SVG>
      <Progress.Label>{66}%</Progress.Label>
    </Progress.Root>
  )
}
