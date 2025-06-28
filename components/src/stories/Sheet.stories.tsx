import type { Meta, StoryObj } from '@storybook/react'
import { css } from '@styled-system/css'
import { Box, Grid, HStack, VStack } from '@styled-system/jsx'
import { useState } from 'react'
import Avatar from '~/ui/avatar'
import { Button } from '~/ui/button'
import { Label } from '~/ui/label'
import Sheet from '~/ui/sheet'
import type { RootProps } from '~/ui/sheet'
import { Switch } from '~/ui/switch'
import { Heading, Paragraph } from '~/ui/typography'

const meta: Meta<RootProps> = {
  component: Sheet.Root,
  title: 'Components/Sheet',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Sheet.Header>
              <Sheet.Title>Are you absolutely sure?</Sheet.Title>
              <Sheet.Description>This action cannot be undone.</Sheet.Description>
            </Sheet.Header>

            <Paragraph className={css({ marginX: 'padding.inline.md' })}>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop publishing packages
              and web page editors now use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </Paragraph>

            <Sheet.Footer>
              <Sheet.Close asChild>
                <Button variant={'outlined'}>Cancel</Button>
              </Sheet.Close>
              <Button>Submit</Button>
            </Sheet.Footer>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

const snapPoints = ['200px', '400px', 0.7, 1]

export const SnapPoints: Story = {
  argTypes: {},
  args: {},
  render: () => {
    const [snap, setSnap] = useState<number | string | null>(snapPoints[0])
    return (
      <Sheet.Root
        variant={'snap'}
        snapPoints={snapPoints}
        activeSnapPoint={snap}
        setActiveSnapPoint={setSnap}
      >
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <div
              className={css({
                width: { base: '100%', sm: '50%' },
                marginX: 'auto',
                overflowY: snap === 1 ? 'scroll' : 'hidden',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Are you absolutely sure?</Sheet.Title>
                <Sheet.Description>This action cannot be undone.</Sheet.Description>
              </Sheet.Header>

              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many desktop publishing
                packages and web page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their infancy. Various
                versions have evolved over the years, sometimes by accident, sometimes on purpose
                (injected humour and the like).
              </Paragraph>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant={'outlined'}>Cancel</Button>
                </Sheet.Close>
                <Button>Submit</Button>
              </Sheet.Footer>
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

export const Scrollable: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root variant={'scrollable'}>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Box
              className={css({
                width: { base: '100%', md: '50%' },
                marginX: 'auto',
                flex: 1,
                overflowY: 'scroll',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Settings</Sheet.Title>
                <Sheet.Description>Manage your account settings and preferences.</Sheet.Description>
              </Sheet.Header>

              <VStack
                gap="{spacing.gap.component.md}"
                className={css({ marginX: 'padding.inline.md' })}
              >
                <ProfileSection />
                <NotificationsSection />
                <RecentActivitySection />
                <QuickActionsSection />
              </VStack>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant={'outlined'}>Cancel</Button>
                </Sheet.Close>
                <Button>Save Changes</Button>
              </Sheet.Footer>
            </Box>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

export const NestedSheet: Story = {
  argTypes: {},
  args: {},
  render: () => {
    return (
      <Sheet.Root>
        <Sheet.Trigger className={css({ margin: 'padding.inline.md' })}>Open</Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <div
              className={css({
                width: { base: '100%', sm: '50%' },
                marginX: 'auto',
              })}
            >
              <Sheet.Header>
                <Sheet.Title>Nested Drawers</Sheet.Title>
              </Sheet.Header>

              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                Nesting drawers creates a{' '}
                <a
                  href="https://sonner.emilkowal.ski/"
                  target="_blank"
                  className="underline"
                  rel="noreferrer"
                >
                  Sonner-like
                </a>{' '}
                stacking effect .
              </Paragraph>
              <Paragraph className={css({ marginX: 'padding.inline.md' })}>
                You can nest as many drawers as you want. All you need to do is add a
                `Drawer.NestedRoot` component instead of `Drawer.Root`.
              </Paragraph>

              <Sheet.Footer>
                <Sheet.Close asChild>
                  <Button variant={'outlined'}>Close</Button>
                </Sheet.Close>

                <Sheet.NestedRoot>
                  <Sheet.Trigger>Open Second Sheet</Sheet.Trigger>
                  <Sheet.Overlay />
                  <Sheet.Portal>
                    <Sheet.Content>
                      <Sheet.Handle />
                      <div
                        className={css({
                          width: { base: '100%', sm: '50%' },
                          marginX: 'auto',
                        })}
                      >
                        <Sheet.Header>
                          <Sheet.Title>This Sheet is nested.</Sheet.Title>
                          <Paragraph>
                            If you pull this Sheet down a bit, it&apos;ll scale the Sheet underneath
                            it as well.
                          </Paragraph>
                          <Paragraph>
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                            letters, as opposed to using 'Content here, content here', making it
                            look like readable English.
                          </Paragraph>
                        </Sheet.Header>
                      </div>
                    </Sheet.Content>
                  </Sheet.Portal>
                </Sheet.NestedRoot>
              </Sheet.Footer>
            </div>
          </Sheet.Content>
        </Sheet.Portal>
      </Sheet.Root>
    )
  },
}

const ProfileSection = () => (
  <Box
    className={css({
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      p: 'padding.block.lg',
    })}
  >
    <Heading level={3} className={css({ mb: 'gap.inline.md' })}>
      Profile
    </Heading>
    <VStack gap="4" className={css({ alignItems: 'start' })}>
      <HStack gap="4" className={css({ alignItems: 'center' })}>
        <Avatar.Root size="xl">
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar.Root>
        <VStack gap="1" className={css({ alignItems: 'start' })}>
          <Heading level={5} className={css({ fontWeight: 'medium' })}>
            John Doe
          </Heading>
          <Paragraph size="large" color="secondary">
            john@example.com
          </Paragraph>
        </VStack>
      </HStack>
      <VStack gap="3" className={css({ alignItems: 'start', width: 'full' })}>
        <Paragraph size="large">
          Senior Software Engineer with 8+ years of experience in React, TypeScript, and modern web
          development.
        </Paragraph>
        <Paragraph size="compact" color="secondary">
          Member since January 2023 • Last active 2 hours ago
        </Paragraph>
      </VStack>
    </VStack>
  </Box>
)

const NotificationsSection = () => {
  const notifications = [
    {
      label: 'Email notifications',
      description: 'Receive important updates via email',
      enabled: true,
    },
    {
      label: 'Push notifications',
      description: 'Get instant notifications on your device',
      enabled: false,
    },
    {
      label: 'SMS notifications',
      description: 'Receive critical alerts via text message',
      enabled: true,
    },
    {
      label: 'Marketing emails',
      description: 'Stay updated with new features and promotions',
      enabled: false,
    },
    {
      label: 'Weekly digest',
      description: 'Get a summary of your activity every week',
      enabled: true,
    },
    {
      label: 'Security alerts',
      description: 'Immediate notifications for security events',
      enabled: true,
    },
  ]

  return (
    <Box
      className={css({
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        p: 'padding.block.lg',
      })}
    >
      <Heading level={3} className={css({ mb: 'gap.inline.lg' })}>
        Notifications
      </Heading>
      <VStack gap="4">
        {notifications.map((item, index) => (
          <VStack
            key={index}
            gap="2"
            className={css({ alignItems: 'start', py: 'padding.block.sm' })}
          >
            <HStack
              justify="space-between"
              className={css({ alignItems: 'center', width: 'full' })}
            >
              <VStack gap="1" className={css({ alignItems: 'start' })}>
                <Label
                  htmlFor={`notification-${index}`}
                  className={css({ fontSize: 'lg', fontWeight: 'medium' })}
                >
                  {item.label}
                </Label>
                <Paragraph size="compact" color="secondary">
                  {item.description}
                </Paragraph>
              </VStack>
              <Switch id={`notification-${index}`} defaultChecked={item.enabled} />
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Box>
  )
}

const RecentActivitySection = () => {
  const activities = [
    {
      action: 'Password changed',
      time: '2 hours ago',
      icon: '🔒',
      details: 'Password was updated for enhanced security',
    },
    {
      action: 'Login from new device',
      time: '1 day ago',
      icon: '📱',
      details: 'New login detected from iPhone 15 Pro',
    },
    {
      action: 'Profile updated',
      time: '3 days ago',
      icon: '👤',
      details: 'Profile picture and bio information updated',
    },
    {
      action: 'Email verified',
      time: '1 week ago',
      icon: '✅',
      details: 'Primary email address successfully verified',
    },
    {
      action: 'Account created',
      time: '2 weeks ago',
      icon: '🎉',
      details: 'Welcome! Your account has been successfully created',
    },
    {
      action: 'Two-factor authentication enabled',
      time: '3 weeks ago',
      icon: '🔐',
      details: 'Enhanced security with 2FA protection',
    },
    {
      action: 'Payment method updated',
      time: '1 month ago',
      icon: '💳',
      details: 'New credit card added to your account',
    },
    {
      action: 'Privacy settings modified',
      time: '1 month ago',
      icon: '🛡️',
      details: 'Updated privacy preferences and data sharing settings',
    },
  ]

  return (
    <Box
      className={css({
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        p: 'padding.block.lg',
      })}
    >
      <Heading level={3} className={css({ mb: 'gap.inline.lg' })}>
        Recent Activity
      </Heading>
      <VStack gap="4">
        {activities.map((activity, index) => (
          <VStack
            key={index}
            gap="2"
            className={css({ alignItems: 'start', py: 'padding.block.sm' })}
          >
            <HStack gap="3" className={css({ alignItems: 'center' })}>
              <Box className={css({ fontSize: '2xl' })}>{activity.icon}</Box>
              <VStack gap="1" className={css({ flex: 1, alignItems: 'start' })}>
                <Paragraph size="large" className={css({ fontWeight: 'medium' })}>
                  {activity.action}
                </Paragraph>
                <Paragraph size="compact" color="secondary">
                  {activity.time}
                </Paragraph>
              </VStack>
            </HStack>
          </VStack>
        ))}
      </VStack>
    </Box>
  )
}

const QuickActionsSection = () => {
  const actions = [
    { label: 'Export Data', icon: '📤', description: 'Download your data' },
    { label: 'Backup', icon: '💾', description: 'Create backup' },
    { label: 'Privacy', icon: '🔒', description: 'Privacy settings' },
    { label: 'Help', icon: '❓', description: 'Get help' },
    { label: 'Settings', icon: '⚙️', description: 'App settings' },
    { label: 'Support', icon: '🆘', description: 'Contact support' },
  ]

  return (
    <Box
      className={css({
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        p: 'padding.block.lg',
      })}
    >
      <Heading level={3} className={css({ mb: 'gap.inline.lg' })}>
        Quick Actions
      </Heading>
      <Grid columns={2} gap="4">
        {actions.map((action, index) => (
          <Button
            key={index}
            variant="outlined"
            size="lg"
            className={css({ height: 'auto', p: 'padding.block.md' })}
          >
            <VStack gap="2" className={css({ alignItems: 'center', width: 'full' })}>
              <Box className={css({ fontSize: '3xl' })}>{action.icon}</Box>
              <VStack gap="1" className={css({ alignItems: 'center' })}>
                <Paragraph
                  size="large"
                  className={css({ fontWeight: 'medium', textAlign: 'center' })}
                >
                  {action.label}
                </Paragraph>
                <Paragraph
                  size="compact"
                  color="secondary"
                  className={css({ textAlign: 'center' })}
                >
                  {action.description}
                </Paragraph>
              </VStack>
            </VStack>
          </Button>
        ))}
      </Grid>
    </Box>
  )
}
