'use client'

import Avatar from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import Sheet from '@/components/ui/sheet'
import { Switch } from '@/components/ui/switch'
import { Heading, Paragraph } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import { Box, Grid, HStack, VStack } from '@styled-system/jsx'
import {
  CheckCircle,
  Cloud,
  CreditCard,
  HelpCircle,
  LifeBuoy,
  Link,
  Lock,
  Mail,
  Save,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Upload,
  User,
} from 'lucide-react'

export default function SheetScrollableDemo() {
  return (
    <>
      <Sheet.Root variant="scrollable">
        <Sheet.Trigger asChild>
          <Button>Open Scrollable Sheet</Button>
        </Sheet.Trigger>
        <Sheet.Portal>
          <Sheet.Overlay />
          <Sheet.Content>
            <Sheet.Handle />
            <Box
              css={{
                width: { base: '100%', md: '50%' },
                maxW: '2xl',
                marginX: 'auto',
                flex: 1,
                overflowY: 'auto',
              }}
            >
              <Sheet.Header>
                <Sheet.Title css={{ fontSize: '3xl', fontWeight: 'bold' }}>Settings</Sheet.Title>
                <Sheet.Description>Manage your account settings and preferences.</Sheet.Description>
              </Sheet.Header>

              <VStack gap="gap.component.md" mx={'padding.inline.md'}>
                <ProfileSection />
                <NotificationsSection />
                <RecentActivitySection />
                <QuickActionsSection />
                <SecuritySection />
                <BillingSection />
                <IntegrationsSection />
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
  <Box
    className={css({
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      p: 'layout.section.md',
    })}
  >
    <Heading level={3} css={{ mb: 'gap.inline.md' }}>
      Profile
    </Heading>
    <VStack gap="4" align="start">
      <HStack gap="4" align="center">
        <Avatar.Root size="xl">
          <Avatar.Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar.Root>
        <VStack gap="1" align="start">
          <Heading level={5} css={{ fontWeight: 'medium' }}>
            John Doe
          </Heading>
          <Paragraph size="compact" color="secondary">
            john@example.com
          </Paragraph>
        </VStack>
      </HStack>
      <VStack gap="3" align="start" w="full">
        <Paragraph>
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
        p: 'layout.section.md',
      })}
    >
      <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
        Notifications
      </Heading>
      <VStack gap="4">
        {notifications.map((item, index) => (
          <VStack key={index} gap="2" align="start" py="padding.block.sm">
            <HStack justify="space-between" align="center" w="full">
              <VStack gap="1" align="start">
                <Label
                  htmlFor={`notification-${index}`}
                  css={{ fontSize: 'base', fontWeight: 'medium' }}
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
      icon: Lock,
      details: 'Password was updated for enhanced security',
    },
    {
      action: 'Login from new device',
      time: '1 day ago',
      icon: Smartphone,
      details: 'New login detected from iPhone 15 Pro',
    },
    {
      action: 'Profile updated',
      time: '3 days ago',
      icon: User,
      details: 'Profile picture and bio information updated',
    },
    {
      action: 'Email verified',
      time: '1 week ago',
      icon: CheckCircle,
      details: 'Primary email address successfully verified',
    },
    {
      action: 'Account created',
      time: '2 weeks ago',
      icon: Sparkles,
      details: 'Welcome! Your account has been successfully created',
    },
    {
      action: 'Two-factor authentication enabled',
      time: '3 weeks ago',
      icon: ShieldCheck,
      details: 'Enhanced security with 2FA protection',
    },
    {
      action: 'Payment method updated',
      time: '1 month ago',
      icon: CreditCard,
      details: 'New credit card added to your account',
    },
    {
      action: 'Privacy settings modified',
      time: '1 month ago',
      icon: Shield,
      details: 'Updated privacy preferences and data sharing settings',
    },
  ]

  return (
    <Box
      css={{
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        p: 'layout.section.md',
      }}
    >
      <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
        Recent Activity
      </Heading>
      <VStack gap="4">
        {activities.map((activity, index) => {
          const IconComponent = activity.icon
          return (
            <VStack key={index} gap="1" align="start" py="gap.inline.xs">
              <HStack gap="3" align="center">
                <IconComponent size={24} />
                <VStack gap="0" align="start">
                  <Paragraph css={{ fontWeight: 'medium' }}>{activity.action}</Paragraph>
                  <Paragraph size="compact" color="secondary">
                    {activity.time}
                  </Paragraph>
                </VStack>
              </HStack>
            </VStack>
          )
        })}
      </VStack>
    </Box>
  )
}

const QuickActionsSection = () => {
  const actions = [
    { label: 'Export Data', icon: Upload, description: 'Download your data' },
    { label: 'Backup', icon: Save, description: 'Create backup' },
    { label: 'Privacy', icon: Lock, description: 'Privacy settings' },
    { label: 'Help', icon: HelpCircle, description: 'Get help' },
    { label: 'Settings', icon: Settings, description: 'App settings' },
    { label: 'Support', icon: LifeBuoy, description: 'Contact support' },
  ]

  return (
    <Box
      className={css({
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        p: 'layout.section.md',
      })}
    >
      <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
        Quick Actions
      </Heading>
      <Grid columns={2} gap="4">
        {actions.map((action, index) => {
          const IconComponent = action.icon
          return (
            <Button
              key={index}
              variant="outlined"
              size="lg"
              css={{ height: 'auto', p: 'padding.block.md' }}
            >
              <VStack gap="2" align="center" w="full">
                <IconComponent size={32} />
                <VStack gap="1" align="center">
                  <Paragraph css={{ fontWeight: 'medium', textAlign: 'center' }}>
                    {action.label}
                  </Paragraph>
                  <Paragraph size="compact" color="secondary" textAlign="center">
                    {action.description}
                  </Paragraph>
                </VStack>
              </VStack>
            </Button>
          )
        })}
      </Grid>
    </Box>
  )
}

const SecuritySection = () => (
  <Box
    className={css({
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      p: 'layout.section.md',
    })}
  >
    <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
      Security
    </Heading>
    <VStack gap="4">
      <VStack gap="2" align="start">
        <Paragraph css={{ fontWeight: 'medium' }}>Two-Factor Authentication</Paragraph>
        <Paragraph size="compact" color="secondary">
          Add an extra layer of security to your account
        </Paragraph>
        <Button variant="outlined" size="sm">
          Enable 2FA
        </Button>
      </VStack>
      <VStack gap="2" align="start">
        <Paragraph css={{ fontWeight: 'medium' }}>Active Sessions</Paragraph>
        <Paragraph size="compact" color="secondary">
          Manage your active login sessions
        </Paragraph>
        <Button variant="outlined" size="sm">
          View Sessions
        </Button>
      </VStack>
    </VStack>
  </Box>
)

const BillingSection = () => (
  <Box
    className={css({
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      p: 'layout.section.md',
    })}
  >
    <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
      Billing & Subscription
    </Heading>
    <VStack gap="4">
      <HStack justify="space-between" align="center">
        <VStack gap="1" align="start">
          <Paragraph css={{ fontWeight: 'medium' }}>Pro Plan</Paragraph>
          <Paragraph size="compact" color="secondary">
            $29/month • Next billing: March 15, 2024
          </Paragraph>
        </VStack>
        <Button variant="outlined" size="sm">
          Manage
        </Button>
      </HStack>
      <VStack gap="2" align="start">
        <Paragraph css={{ fontWeight: 'medium' }}>Payment Methods</Paragraph>
        <Paragraph size="compact" color="secondary">
          Visa ending in 4242 • Expires 12/25
        </Paragraph>
        <Button variant="outlined" size="sm">
          Update Payment
        </Button>
      </VStack>
    </VStack>
  </Box>
)

const IntegrationsSection = () => (
  <Box
    className={css({
      border: '1px solid',
      borderColor: 'border',
      rounded: 'md',
      p: 'layout.section.md',
    })}
  >
    <Heading level={3} css={{ mb: 'gap.inline.lg' }}>
      Integrations
    </Heading>
    <VStack gap="4">
      <HStack justify="space-between" align="center">
        <HStack gap="3" align="center">
          <Link size={24} />
          <VStack gap="1" align="start">
            <Paragraph css={{ fontWeight: 'medium' }}>GitHub</Paragraph>
            <Paragraph size="compact" color="secondary">
              Connected • 15 repositories
            </Paragraph>
          </VStack>
        </HStack>
        <Switch defaultChecked />
      </HStack>
      <HStack justify="space-between" align="center">
        <HStack gap="3" align="center">
          <Mail size={24} />
          <VStack gap="1" align="start">
            <Paragraph css={{ fontWeight: 'medium' }}>Slack</Paragraph>
            <Paragraph size="compact" color="secondary">
              Not connected
            </Paragraph>
          </VStack>
        </HStack>
        <Switch />
      </HStack>
      <HStack justify="space-between" align="center">
        <HStack gap="3" align="center">
          <Cloud size={24} />
          <VStack gap="1" align="start">
            <Paragraph css={{ fontWeight: 'medium' }}>Google Drive</Paragraph>
            <Paragraph size="compact" color="secondary">
              Connected • 2.5GB used
            </Paragraph>
          </VStack>
        </HStack>
        <Switch defaultChecked />
      </HStack>
    </VStack>
  </Box>
)
