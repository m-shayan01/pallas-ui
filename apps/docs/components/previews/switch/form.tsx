'use client'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { css } from '@styled-system/css'
import { Flex } from '@styled-system/jsx'

export default function SwitchFormDemo() {
  return (
    <form className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '4' })}>
        <h3 className={css({ fontSize: 'lg', fontWeight: 'medium' })}>Email Notifications</h3>

        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            rounded: 'md',
            border: '1px solid',
            borderColor: 'border',
            p: '4',
            gap: '3',
          })}
        >
          <Flex direction="column" gap="0.5">
            <Label htmlFor="marketing-emails">Marketing emails</Label>
            <p className={css({ fontSize: 'sm', color: 'text.tertiary' })}>
              Receive emails about new products, features, and more.
            </p>
          </Flex>
          <Switch id="marketing-emails" />
        </div>

        <div
          className={css({
            display: 'flex',
            flexDir: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            rounded: 'md',
            border: '1px solid',
            borderColor: 'border',
            p: '4',
            gap: '3',
          })}
        >
          <Flex direction="column" gap="0.5">
            <Label htmlFor="security-emails">Security emails</Label>
            <p className={css({ fontSize: 'sm', color: 'text.tertiary' })}>
              Receive emails about your account security.
            </p>
          </Flex>
          <Switch id="security-emails" defaultChecked disabled aria-readonly />
        </div>
      </div>

      <Button type="submit" className={css({ alignSelf: 'flex-start' })}>
        Submit
      </Button>
    </form>
  )
}
