'use client'
import AnimatedBrandName from '@/components/home/animated-brandname'
import Sidebar from '@/components/ui/sidebar'
import IntroductionLogo from '@/public/introduction.svg'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { allComponents, allGuides, allLayouts, allThemings } from 'content-collections'
import { Compass, LayoutGrid, Package, Palette, PanelLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SidebarProps {
  onNavigate?: (url: string) => void
}

type ContentItem = {
  slug: string
  title: string
  order?: number
}

export function DocsSidebar({ onNavigate }: SidebarProps = {}) {
  const pathname = usePathname()

  const guides = [...allGuides].sort((a, b) => (a.order || 999) - (b.order || 999))
  const components = [...allComponents].sort((a, b) => a.title.localeCompare(b.title))
  const themings = [...allThemings].sort((a, b) => (a.order || 999) - (b.order || 999))
  const layouts = [...allLayouts].sort((a, b) => (a.order || 999) - (b.order || 999))

  type SidebarContentGroupProps = {
    value: string
    title: string
    items: ContentItem[]
    basePath: string
    icon: React.ReactNode
  }

  const SidebarContentGroup = ({ title, items, basePath, icon }: SidebarContentGroupProps) => (
    <Sidebar.Menu>
      <Sidebar.MenuItem>
        <Sidebar.MenuButton>
          {icon}
          {title}
        </Sidebar.MenuButton>

        {items.map((item) => {
          const itemPath = `${basePath}${item.slug}`
          return (
            <Sidebar.MenuSub key={item.slug}>
              <Sidebar.MenuSubItem>
                <Sidebar.MenuSubButton asChild isActive={pathname === itemPath}>
                  <Link href={itemPath} onClick={() => onNavigate?.(itemPath)}>
                    {item.title}
                  </Link>
                </Sidebar.MenuSubButton>
              </Sidebar.MenuSubItem>
            </Sidebar.MenuSub>
          )
        })}
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  )

  return (
    <Sidebar.Root
      collapsible="none"
      side="left"
      variant="sidebar"
      className={css({
        position: 'sticky',
        insetBlock: 'header.height',
        top: '{sizes.header.height}',
        height: 'sidebar.height',
        bg: 'surface.container',
        flex: '0 0 {sizes.sidebar.width}',
        w: 'sidebar.width',
      })}
    >
      <Sidebar.Content>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Core</Sidebar.GroupLabel>
          <SidebarContentGroup
            icon={<Image src={IntroductionLogo} alt="Pallas UI" width={16} height={16} />}
            value="guides"
            title="Getting Started"
            items={guides}
            basePath="/docs/"
          />
          <SidebarContentGroup
            icon={<Palette size={16} />}
            value="theming"
            title="Theming"
            items={themings}
            basePath="/docs/theming/"
          />

          <SidebarContentGroup
            icon={<LayoutGrid size={16} />}
            value="layout"
            title="Layout"
            items={layouts}
            basePath="/docs/layout/"
          />
        </Sidebar.Group>
        <Sidebar.Group>
          <Sidebar.GroupLabel>Previews</Sidebar.GroupLabel>
          <SidebarContentGroup
            icon={<Package size={16} />}
            value="components"
            title="Components"
            items={components}
            basePath="/docs/components/"
          />
        </Sidebar.Group>
      </Sidebar.Content>
    </Sidebar.Root>
  )
}
