'use client'

import { Button } from '@/components/ui/button'
import Progress from '@/components/ui/progress'
import { Heading } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import React, { useEffect, useState } from 'react'
import { ShowcaseCard } from './showcase-card'

export const ProgressShowcase = () => {
  const [progress, setProgress] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [circleProgress, setCircleProgress] = useState(0)

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false)
            clearInterval(timer)
            return 100
          }
          return prev + 5
        })

        setCircleProgress((prev) => {
          if (prev >= 100) {
            return 100
          }
          return prev + 5
        })
      }, 300)

      return () => clearInterval(timer)
    }
  }, [isRunning])

  const handleStart = () => {
    setProgress(0)
    setCircleProgress(0)
    setIsRunning(true)
  }

  return (
    <ShowcaseCard paddingBlock="3" paddingTitle="0">
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '8', py: '4' })}>
        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>File Upload</Heading>
          <Progress.Root value={progress} style={{ width: '100%' }}>
            <Progress.SVG>
              <Progress.LineTrack />
              <Progress.LineFill percentage={progress} />
            </Progress.SVG>
            <Progress.Label>{progress}%</Progress.Label>
          </Progress.Root>
        </div>

        {/* <div className={css({ display: 'flex', justifyContent: 'center' })}>
          <div className={css({ width: '120px', height: '120px' })}>
            <Progress.Root value={circleProgress} shape="circle">
              <Progress.SVG>
                <Progress.CircleTrack />
                <Progress.CircleFill percentage={circleProgress} />
              </Progress.SVG>
              <Progress.Label>{circleProgress}%</Progress.Label>
            </Progress.Root>
          </div>
        </div> */}

        <div className={css({ display: 'flex', justifyContent: 'center', mt: '2' })}>
          <Button variant="primary" onClick={handleStart} disabled={isRunning}>
            {progress === 100 ? 'Restart' : isRunning ? 'Uploading...' : 'Start Upload'}
          </Button>
        </div>
      </div>
    </ShowcaseCard>
  )
}
