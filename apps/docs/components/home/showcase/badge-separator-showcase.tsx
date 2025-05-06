'use client'

import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Paragraph as OrignalParagraph } from '@/components/ui/typography'
import Heading from '@/components/ui/typography/heading'
import { Box, HStack, VStack } from '@styled-system/jsx'
import type React from 'react'
import { ShowcaseCard } from './showcase-card'

const Paragraph = (props: React.ComponentProps<typeof OrignalParagraph>) => (
  <OrignalParagraph size="compact" {...props} />
)
const SpacedRow = (props: React.ComponentProps<typeof HStack>) => (
  <HStack justify="space-between" w="full" {...props} />
)

export const BadgeSeparatorShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <VStack gap="gap.component.md" py="padding.block.xs" w="full" align="flex-start">
        <Box>
          <SpacedRow css={{ mb: '2' }}>
            <Heading level={5}>Project Overview</Heading>
            <Badge variant="primary">Active</Badge>
          </SpacedRow>
          <Paragraph>
            A comprehensive dashboard for monitoring system performance and user activity.
          </Paragraph>
        </Box>

        <Separator />

        <VStack gap="gap.component.md" w="full" align="flex-start">
          <Heading level={5}>Team Members</Heading>
          <VStack gap="gap.inline.xs" w="full">
            <SpacedRow>
              <Paragraph>Alex Johnson</Paragraph>
              <Badge variant="default" size="sm">
                Lead
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Maria Garcia</Paragraph>
              <Badge variant="default" size="sm">
                Developer
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>James Wilson</Paragraph>
              <Badge variant="default" size="sm">
                Designer
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>James Wilson</Paragraph>
              <Badge variant="default" size="sm">
                Designer
              </Badge>
            </SpacedRow>
          </VStack>
        </VStack>

        <Separator />

        <VStack gap="gap.component.md" w="full" align="flex-start">
          <Heading level={5}>Milestones</Heading>
          <VStack gap="gap.inline.xs" w="full">
            <SpacedRow>
              <Paragraph>Design System</Paragraph>
              <Badge variant="primary" size="sm">
                Completed
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Design System</Paragraph>
              <Badge variant="primary" size="sm">
                Completed
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Backend Integration</Paragraph>
              <Badge variant="error" size="sm">
                Blocked
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Backend Integration</Paragraph>
              <Badge variant="error" size="sm">
                Blocked
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Backend Integration</Paragraph>
              <Badge variant="error" size="sm">
                Blocked
              </Badge>
            </SpacedRow>
            <SpacedRow>
              <Paragraph>Testing</Paragraph>
              <Badge variant="default" size="sm">
                Not Started
              </Badge>
            </SpacedRow>
          </VStack>
        </VStack>
      </VStack>
    </ShowcaseCard>
  )
}
