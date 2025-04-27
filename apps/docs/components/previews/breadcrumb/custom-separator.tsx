'use client'

import Breadcrumb from '@/components/ui/breadcrumb'
import { ChevronRight } from 'lucide-react'

export default function BreadcrumbCustomSeparatorPreview() {
  return (
    <Breadcrumb.Root>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          <Breadcrumb.Separator>
            <ChevronRight size={14} />
          </Breadcrumb.Separator>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/products">Products</Breadcrumb.Link>
          <Breadcrumb.Separator>
            <ChevronRight size={14} />
          </Breadcrumb.Separator>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/products/electronics">Electronics</Breadcrumb.Link>
          <Breadcrumb.Separator>
            <ChevronRight size={14} />
          </Breadcrumb.Separator>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/products/electronics/smartphones" aria-current="page">
            Smartphones
          </Breadcrumb.Link>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb.Root>
  )
}
