'use client'

import Accordion from '@/components/ui/accordion'
import { css } from '@styled-system/css'
import { allComponents, allGuides, allLayouts, allThemings } from 'content-collections'
import { ChevronDown } from 'lucide-react'
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

export function Sidebar({ onNavigate }: SidebarProps = {}) {
  const pathname = usePathname()

  const guides = [...allGuides].sort((a, b) => (a.order || 999) - (b.order || 999))
  const components = [...allComponents].sort((a, b) => a.title.localeCompare(b.title))
  const themings = [...allThemings].sort((a, b) => (a.order || 999) - (b.order || 999))
  const layouts = [...allLayouts].sort((a, b) => (a.order || 999) - (b.order || 999))

  const linkStyle = {
    display: 'flex',
    width: 'full',
    fontSize: 'sm',
    fontWeight: 'medium',
    py: '1',
    px: '3',
    rounded: 'md',
    cursor: 'pointer',
    color: 'text',
    _hover: { bg: 'fill.secondary', color: 'text' },
  }

  const activeStyle = {
    bg: 'primary',
    color: 'bgSolid.text',
    fontWeight: 'semibold',
    _hover: { bg: 'primary.hover', color: 'bgSolid.text' },
  }

  const subMenuStyle = css({
    pl: '2',
    ml: '3',
    borderLeft: '1px solid',
    borderColor: 'border',
    spaceY: '3',
  })

  const chevronStyle = css({
    transition: 'transform 200ms',
    color: 'text.tertiary',
    size: 'icon.sm',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
  })

  const headerStyle = css({
    fontWeight: 'medium',
    color: 'text.tertiary',
    fontSize: 'xs',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
  })

  const accordionItemStyle = css({
    width: '100%',
    borderRadius: '0',
    mb: '1',
    borderWidth: '0',
  })

  const accordionHeaderStyle = css({
    width: '100%',
    px: '6',
    py: '2',
    bg: 'surface.container',
  })

  const accordionContentStyle = css({
    width: '100%',
    bg: 'surface.container',
    py: 'padding.inline.xs',
  })

  type AccordionSectionProps = {
    value: string
    title: string
    items: ContentItem[]
    basePath: string
  }

  const AccordionSection = ({ value, title, items, basePath }: AccordionSectionProps) => (
    <Accordion.Item value={value} className={accordionItemStyle}>
      <Accordion.ItemHeader className={accordionHeaderStyle}>
        <span className={headerStyle}>{title}</span>
        <Accordion.ItemTrigger>
          <ChevronDown className={chevronStyle} />
        </Accordion.ItemTrigger>
      </Accordion.ItemHeader>
      <Accordion.ItemContent className={accordionContentStyle}>
        <ul className={subMenuStyle}>
          {items.map((item) => {
            const itemPath = `${basePath}${item.slug}`
            return (
              <li key={item.slug} className={css({ marginTop: '1' })}>
                <Link
                  href={itemPath}
                  className={css(linkStyle, pathname === itemPath ? activeStyle : {})}
                  onClick={() => onNavigate?.(itemPath)}
                >
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </Accordion.ItemContent>
    </Accordion.Item>
  )

  return (
    <div
      className={css({
        position: 'sticky',
        top: '72px',
        height: 'calc(100vh - 72px)',
        overflowY: 'auto',

        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          bg: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          bg: 'fill',
          rounded: 'full',
        },
      })}
    >
      <Accordion.Root
        type="multiple"
        defaultValue={['guides', 'components', 'theming', 'layout']}
        style={{ width: '100%', borderWidth: '0' }}
      >
        <AccordionSection value="guides" title="Getting Started" items={guides} basePath="/docs/" />

        <AccordionSection
          value="theming"
          title="Theming"
          items={themings}
          basePath="/docs/theming/"
        />

        <AccordionSection value="layout" title="Layout" items={layouts} basePath="/docs/layout/" />

        <AccordionSection
          value="components"
          title="Components"
          items={components}
          basePath="/docs/components/"
        />
      </Accordion.Root>
    </div>
  )
}
