'use client'

import Breadcrumb from '@/components/ui/breadcrumb'
import { FileText, Home, Settings, Users } from 'lucide-react'

export default function BreadcrumbWithIconsPreview() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="/"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <Home size={14} />
            <span>Home</span>
          </Breadcrumb.Link>
          <Breadcrumb.Separator />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="/docs"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <FileText size={14} />
            <span>Documentation</span>
          </Breadcrumb.Link>
          <Breadcrumb.Separator />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="/docs/admin"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <Settings size={14} />
            <span>Admin</span>
          </Breadcrumb.Link>
          <Breadcrumb.Separator />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link
            href="/docs/admin/users"
            aria-current="page"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <Users size={14} />
            <span>User Management</span>
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
