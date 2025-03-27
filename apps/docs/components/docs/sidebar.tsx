'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { css } from '@styled-system/css'
import { allGuides, allComponents } from 'content-collections'
import Accordian from '@/components/ui/accordian/accordian'
import { ChevronDown } from 'lucide-react'

export interface SidebarProps {
  onNavigate?: (url: string) => void
}

export function Sidebar({ onNavigate }: SidebarProps = {}) {
  const pathname = usePathname()
  
  const guides = [...allGuides].sort((a, b) => 
    (a.order || 999) - (b.order || 999)
  )
  
  const components = [...allComponents].sort((a, b) => 
    a.title.localeCompare(b.title)
  )
  
  const linkStyle = {
    display: 'flex',
    width: 'full',
    fontSize: 'sm',
    fontWeight: 'medium',
    py: 'padding.block.sm',
    px: 'padding.inline.md',
    rounded: 'md',
    cursor: 'pointer',
    color: 'text.secondary', 
    _hover: { bg: 'fill.secondary', color: 'text' },
  }

  const activeStyle = {
    bg: 'fill.secondary',
    color: 'primary.DEFAULT',
    fontWeight: 'semibold',
    borderLeft: '2px solid',
    borderLeftColor: 'primary.DEFAULT',
  }

  const subMenuStyle = css({
    pl: 'padding.inline.sm',
    ml: 'padding.inline.md',
    borderLeft: '1px solid',
    borderColor: 'border',
    spaceY: 'gap.inline.sm',
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
    mb: 'gap.component.sm',
    borderWidth: '0',
  })
  
  const accordionHeaderStyle = css({
    width: '100%',
    px: 'padding.inline.sm',
    py: 'padding.block.md',
    bg: 'surface.layout',
  })
  
  const accordionContentStyle = css({
    width: '100%',
    bg: 'surface.layout',
  })
  
  return (
    <Accordian.Root type="multiple" defaultValue={['guides', 'components']} style={{ width: '100%', borderWidth: '0' }}>
      <Accordian.Item value="guides" className={accordionItemStyle}>
        <Accordian.ItemHeader className={accordionHeaderStyle}>
          <span className={headerStyle}>
            Getting Started
          </span>
          <Accordian.ItemTrigger>
            <ChevronDown className={chevronStyle} />
          </Accordian.ItemTrigger>
        </Accordian.ItemHeader>
        <Accordian.ItemContent className={accordionContentStyle}>
          <ul className={subMenuStyle}>
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link 
                  href={`/docs/${guide.slug}`}
                  className={css(
                    linkStyle,
                    pathname === `/docs/${guide.slug}` ? activeStyle : {}
                  )}
                  onClick={() => onNavigate?.(`/docs/${guide.slug}`)}
                >
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </Accordian.ItemContent>
      </Accordian.Item>

      <Accordian.Item value="components" className={accordionItemStyle}>
        <Accordian.ItemHeader className={accordionHeaderStyle}>
          <span className={headerStyle}>
            Components
          </span>
          <Accordian.ItemTrigger>
            <ChevronDown className={chevronStyle} />
          </Accordian.ItemTrigger>
        </Accordian.ItemHeader>
        <Accordian.ItemContent className={accordionContentStyle}>
          <ul className={subMenuStyle}>
            {components.map((component) => (
              <li key={component.slug}>
                <Link 
                  href={`/docs/components/${component.slug}`}
                  className={css(
                    linkStyle,
                    pathname === `/docs/components/${component.slug}` ? activeStyle : {}
                  )}
                  onClick={() => onNavigate?.(`/docs/components/${component.slug}`)}
                >
                  {component.title}
                </Link>
              </li>
            ))}
          </ul>
        </Accordian.ItemContent>
      </Accordian.Item>
    </Accordian.Root>
  )
}