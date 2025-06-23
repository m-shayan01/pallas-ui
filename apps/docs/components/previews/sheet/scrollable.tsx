'use client'

import Avatar from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Sheet from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Heading, Paragraph } from '@/components/ui/typography'
import { Box, HStack, VStack } from '@styled-system/jsx'

export default function SheetScrollableDemo() {
  return (
    <>
      <Sheet.Root>
        <Sheet.Trigger asChild>
          <Button>Open Scrollable Sheet</Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Box w="50%" mx="auto">
              <Sheet.Header>
                <Sheet.Title>Settings</Sheet.Title>
                <Sheet.Description>Manage your account settings and preferences.</Sheet.Description>
              </Sheet.Header>

              <VStack gap="4" px="4">
                <ProfileSection />
                <NotificationsSection />
                <RecentActivitySection />
                <QuickActionsSection />
              </VStack>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant="outlined">Cancel</Button>
                </Sheet.Close>
                <Button>Save Changes</Button>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    </>
  )
}

const ProfileSection = () => (
  <Box p="4">
    <Heading level={3}>Profile</Heading>
    <HStack gap="4" align="center">
      <Avatar.Root>
        <Avatar.Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar.Root>
      <VStack align="start" gap="1">
        <Paragraph>John Doe</Paragraph>
        <Paragraph color="tertiary">john.doe@example.com</Paragraph>
      </VStack>
    </HStack>
  </Box>
)

const NotificationsSection = () => (
  <Box p="4">
    <Heading level={3}>Notifications</Heading>
    <VStack gap="2">
      <HStack justify="space-between" align="center">
        <Label>Email notifications</Label>
        <Switch defaultChecked />
      </HStack>
      <HStack justify="space-between" align="center">
        <Label>Push notifications</Label>
        <Switch />
      </HStack>
      <HStack justify="space-between" align="center">
        <Label>SMS notifications</Label>
        <Switch />
      </HStack>
    </VStack>
  </Box>
)

const RecentActivitySection = () => (
  <Box p="4">
    <Heading level={3}>Recent Activity</Heading>
    <VStack gap="2">
      <Box p="2">
        <Paragraph>Profile updated</Paragraph>
        <Paragraph color="tertiary">2 hours ago</Paragraph>
      </Box>
      <Box p="2">
        <Paragraph>Password changed</Paragraph>
        <Paragraph color="tertiary">1 day ago</Paragraph>
      </Box>
      <Box p="2">
        <Paragraph>Login from new device</Paragraph>
        <Paragraph color="tertiary">3 days ago</Paragraph>
      </Box>
    </VStack>
  </Box>
)

const QuickActionsSection = () => (
  <Box p="4">
    <Heading level={3}>Quick Actions</Heading>
    <VStack gap="2">
      <Button variant="outlined" size="sm">
        Export Data
      </Button>
      <Button variant="outlined" size="sm">
        Download Backup
      </Button>
      <Button variant="outlined" size="sm">
        Reset Settings
      </Button>
    </VStack>
  </Box>
)
