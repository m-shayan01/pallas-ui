'use client'

import Progress from '@/components/ui/progress'
import { css } from '@styled-system/css'

export default function Example() {
  return (
    // <div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
    //   <Progress.Root value={33} color="primary">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={33} />
    //     </Progress.SVG>
    //   </Progress.Root>

    //   <Progress.Root value={66} color="success">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={66} />
    //     </Progress.SVG>
    //   </Progress.Root>

    //   <Progress.Root value={33} color="error">
    //     <Progress.SVG>
    //       <Progress.LineTrack />
    //       <Progress.LineFill percentage={33} />
    //     </Progress.SVG>
    //   </Progress.Root>
    // </div>

    <Progress.Root value={33} style={{ width: '60%' }} color="error">
      <Progress.SVG>
        <Progress.LineTrack />
        <Progress.LineFill percentage={33} />
      </Progress.SVG>
      <Progress.Label>{33}%</Progress.Label>
    </Progress.Root>
  )
}
