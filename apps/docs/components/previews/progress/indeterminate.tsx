'use client'

import Progress from '@/components/ui/progress'

export default function Example() {
  return (
    <Progress.Root style={{ width: '60%' }}>
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill />
      </Progress.SVG>
    </Progress.Root>
  )
}
