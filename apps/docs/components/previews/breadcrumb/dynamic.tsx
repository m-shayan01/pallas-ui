'use client'

import Breadcrumb from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Box, styled } from '@styled-system/jsx'
import { useState } from 'react'

// Create a styled ButtonGroup component
const ButtonGroup = styled('div', {
  base: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1rem',
  },
})

export default function BreadcrumbDynamicPreview() {
  // Sample breadcrumb data that could come from a CMS, router, or API
  const [breadcrumbs, setBreadcrumbs] = useState([
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Projects', href: '/dashboard/projects' },
    { label: 'Mobile App', href: '/dashboard/projects/mobile-app' },
    { label: 'Tasks', href: '/dashboard/projects/mobile-app/tasks' },
  ])

  // Add a new breadcrumb
  const addBreadcrumb = () => {
    if (breadcrumbs.length < 5) {
      const newBreadcrumbs = [...breadcrumbs]
      const lastItem = newBreadcrumbs[newBreadcrumbs.length - 1]
      if (lastItem) {
        newBreadcrumbs.push({
          label: `Level ${breadcrumbs.length + 1}`,
          href: `${lastItem.href}/level-${breadcrumbs.length + 1}`,
        })
        setBreadcrumbs(newBreadcrumbs)
      }
    }
  }

  // Remove the last breadcrumb
  const removeBreadcrumb = () => {
    if (breadcrumbs.length > 1) {
      const newBreadcrumbs = [...breadcrumbs]
      newBreadcrumbs.pop()
      setBreadcrumbs(newBreadcrumbs)
    }
  }

  return (
    <Box>
      <ButtonGroup>
        <Button variant="outlined" onClick={addBreadcrumb} disabled={breadcrumbs.length >= 5}>
          Add Level
        </Button>
        <Button variant="outlined" onClick={removeBreadcrumb} disabled={breadcrumbs.length <= 1}>
          Remove Level
        </Button>
      </ButtonGroup>

      <Breadcrumb.Root>
        <Breadcrumb.List>
          {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb.Item key={breadcrumb.href}>
              <Breadcrumb.Link
                href={breadcrumb.href}
                aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
              >
                {breadcrumb.label}
              </Breadcrumb.Link>
              {index < breadcrumbs.length - 1 && <Breadcrumb.Separator />}
            </Breadcrumb.Item>
          ))}
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </Box>
  )
}
