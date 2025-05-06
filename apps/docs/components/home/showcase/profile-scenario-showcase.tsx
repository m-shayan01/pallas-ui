'use client'

import Avatar from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Modal from '@/components/ui/modal/modal'
import Heading from '@/components/ui/typography/heading'
import Paragraph from '@/components/ui/typography/paragraph'
import { css } from '@styled-system/css'
import { Box, HStack, VStack } from '@styled-system/jsx'
import React from 'react'
import { ShowcaseCard } from './showcase-card'

export const ProfileScenarioShowcase = () => {
  return (
    <ShowcaseCard paddingTitle="0">
      <VStack gap="layout.section.md" align="center">
        <VStack gap="gap.component.sm" align="center">
          <Avatar.Root>
            <Avatar.Image
              src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
              alt="User avatar"
            />
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar.Root>
          <VStack align="center">
            <Heading level={3}>John Doe</Heading>
            <Paragraph size={'compact'}>john.doe@example.com</Paragraph>
          </VStack>
        </VStack>

        <Box w="full" maxW="320px">
          <Box mb="4">
            <Label htmlFor="name">Full Name</Label>
            <Input>
              <Input.Text id="name" placeholder="John Doe" />
            </Input>
          </Box>

          <Box mb="4">
            <Label htmlFor="email">Email</Label>
            <Input>
              <Input.Text id="email" placeholder="john.doe@example.com" type="email" />
            </Input>
          </Box>

          <HStack justify="space-between" gap="gap.inline.sm">
            <Button variant="outlined">Cancel</Button>

            <Modal.Root>
              <Modal.Trigger asChild>
                <Button variant="primary">Save Changes</Button>
              </Modal.Trigger>
              <Modal.Content>
                <Modal.Header>
                  <Modal.Title>Confirm Profile Update</Modal.Title>
                  <Modal.Description>
                    Are you sure you want to update your profile information?
                  </Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                  <Modal.Cancel>Cancel</Modal.Cancel>
                  <Modal.Action asChild>
                    <Button variant="primary">Confirm</Button>
                  </Modal.Action>
                </Modal.Footer>
              </Modal.Content>
            </Modal.Root>
          </HStack>
        </Box>
      </VStack>
    </ShowcaseCard>
  )
}
