'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { css } from '@styled-system/css'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const BadgeSeparatorShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '4', py: '2' })}>
        <div>
          <div
            className={css({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '2',
            })}
          >
            <Heading level={5}>Project Overview</Heading>
            <Badge variant="primary">Active</Badge>
          </div>
          <Paragraph size={'compact'}>
            A comprehensive dashboard for monitoring system performance and user activity.
          </Paragraph>
        </div>

        <Separator />

        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>Team Members</Heading>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>Alex Johnson</span>
              <Badge variant="default">Lead</Badge>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>Maria Garcia</span>
              <Badge variant="default">Developer</Badge>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>James Wilson</span>
              <Badge variant="default">Designer</Badge>
            </div>
          </div>
        </div>

        <Separator />

        <div className={css({ spaceY: '4' })}>
          <Heading level={5}>Milestones</Heading>
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '3' })}>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>Design System</span>
              <Badge variant="primary">Completed</Badge>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>Backend Integration</span>
              <Badge variant="error">Blocked</Badge>
            </div>
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span>Testing</span>
              <Badge variant="default">Not Started</Badge>
            </div>
          </div>
        </div>
      </div>
    </ShowcaseCard>
  )
}
