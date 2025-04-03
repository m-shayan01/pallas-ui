'use client'

import { css } from '@styled-system/css'
import React from 'react'
import { Content, Root, TabList, Trigger } from '../ui/tabs'
import { CopyButton } from './copy-button'

interface PackageTabsProps {
  npm: string
  yarn: string
  pnpm: string
}

export function PackageTabs({ npm, yarn, pnpm }: PackageTabsProps) {
  const [activeTab, setActiveTab] = React.useState('npm')

  // Load preferred tab from localStorage on mount
  React.useEffect(() => {
    try {
      const storedTab = localStorage.getItem('preferredPackageManager')
      if (storedTab && ['npm', 'yarn', 'pnpm'].includes(storedTab)) {
        setActiveTab(storedTab)
      }
    } catch (e) {
      // Ignore localStorage errors (e.g. in incognito mode)
    }
  }, [])

  // Save preference when tab changes
  const handleTabChange = (value: string) => {
    setActiveTab(value)
    try {
      localStorage.setItem('preferredPackageManager', value)
    } catch (e) {
      // Ignore localStorage errors
    }
  }

  // Get current tab content for copy button
  const getCurrentTabContent = () => {
    switch (activeTab) {
      case 'npm':
        return npm
      case 'yarn':
        return yarn
      case 'pnpm':
        return pnpm
      default:
        return npm
    }
  }

  // Define tab options
  const tabs = [
    { value: 'npm', content: npm },
    { value: 'yarn', content: yarn },
    { value: 'pnpm', content: pnpm },
  ]

  // Reusable styles
  const triggerStyles = (isActive: boolean) => css({
    p: 'padding.inline.md',
    fontWeight: isActive ? 'semibold' : 'normal',
    borderBottom: isActive ? '2px solid' : 'none',
    borderColor: 'primary',
  })

  const contentStyles = css({
    p: 'padding.block.md',
    bg: 'surface.container',
  })

  const preStyles = css({
    bg: 'fill.secondary',
    p: 'padding.block.lg',
    rounded: 'md',
    color: 'text.secondary',
    border: '1px solid',
    borderColor: 'border',
    overflow: 'auto',
    fontFamily: 'mono',
    fontSize: 'sm',
  })

  return (
    <div
      className={css({
        py: 'gap.inline.sm',
      })}
    >
      <Root
        value={activeTab}
        onValueChange={handleTabChange}
        className={css({
          border: '1px solid',
          borderColor: 'border',
          rounded: 'md',
          overflow: 'hidden',
        })}
      >
        <TabList
          className={css({
            bg: 'fill.tertiary',
            borderBottom: '1px solid',
            borderColor: 'border',
          })}
        >
          {tabs.map((tab) => (
            <Trigger
              key={tab.value}
              value={tab.value}
              className={triggerStyles(activeTab === tab.value)}
            >
              {tab.value}
            </Trigger>
          ))}
        </TabList>

        {/* Container for all content tabs with relative positioning */}
        <div className={css({ position: 'relative' })}>
          {/* Copy button that stays in place for all tabs */}
          <CopyButton
            value={getCurrentTabContent()}
            className={css({
              top: 'padding.inline.lg',
              right: 'padding.inline.lg',
            })}
          />
          <div
            className={css({
              my: 'gap.inline.sm',
            })}
          >
            {tabs.map((tab) => (
              <Content
                key={tab.value}
                value={tab.value}
                className={contentStyles}
              >
                <pre className={preStyles}>
                  <code>{tab.content}</code>
                </pre>
              </Content>
            ))}
          </div>
        </div>
      </Root>
    </div>
  )
}
