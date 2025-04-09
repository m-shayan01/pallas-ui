'use client'

import Progress from '@/components/ui/progress'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    // <div className={css({ display: 'flex', gap: '4', height: '200px' })}>
    //   <Progress.Root value={33} align="vertical">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={33} />
    //     </Progress.SVG>
    //   </Progress.Root>

    //   <Progress.Root value={66} align="vertical" color="success">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={66} />
    //     </Progress.SVG>
    //   </Progress.Root>

    //   <Progress.Root value={33} align="vertical" color="error">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={33} />
    //     </Progress.SVG>
    //   </Progress.Root>
    // </div>
    <Progress.Root value={33} style={{ width: '60%' }} align="vertical">
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill percentage={33} />
      </Progress.SVG>
      <Progress.Label>{33}%</Progress.Label>
    </Progress.Root>
  )
}
