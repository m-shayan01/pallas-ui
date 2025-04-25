'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { css } from '@styled-system/css'
import { Box, HStack, VStack } from '@styled-system/jsx'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const BadgeSeparatorShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <VStack gap="4" py="2" css={{ w: 'full' }}>
        <Box>
          <HStack justify="space-between" css={{ mb: '2' }}>
            <Heading level={5}>Project Overview</Heading>
            <Badge variant="primary">Active</Badge>
          </HStack>
          <Paragraph size={'compact'}>
            A comprehensive dashboard for monitoring system performance and user activity.
          </Paragraph>
        </Box>

        <Separator />

        <VStack gap="3" css={{ w: 'full' }}>
          <Heading level={5}>Team Members</Heading>
          <VStack gap="3" css={{ w: 'full' }}>
            <HStack justify="space-between" width={'full'}>
              <span>Alex Johnson</span>
              <Badge variant="default">Lead</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Maria Garcia</span>
              <Badge variant="default">Developer</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>James Wilson</span>
              <Badge variant="default">Designer</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>James Wilson</span>
              <Badge variant="default">Designer</Badge>
            </HStack>
          </VStack>
        </VStack>

        <Separator />

        <VStack gap="4" css={{ w: 'full' }}>
          <Heading level={5}>Milestones</Heading>
          <VStack gap="3" width={'full'}>
            <HStack justify="space-between" width={'full'}>
              <span>Design System</span>
              <Badge variant="primary">Completed</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Design System</span>
              <Badge variant="primary">Completed</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Backend Integration</span>
              <Badge variant="error">Blocked</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Backend Integration</span>
              <Badge variant="error">Blocked</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Backend Integration</span>
              <Badge variant="error">Blocked</Badge>
            </HStack>
            <HStack justify="space-between" width={'full'}>
              <span>Testing</span>
              <Badge variant="default">Not Started</Badge>
            </HStack>
          </VStack>
        </VStack>
      </VStack>
    </ShowcaseCard>
  )
}
