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
    py: '1.5',
    px: '3',
    rounded: 'md',
    cursor: 'pointer',
    color: 'gray.300', 
    _hover: { bg: 'gray.800' },
  }

  const activeStyle = {
    bg: 'gray.800',
    color: 'gray.100',
    fontWeight: 'semibold',
  }

  const subMenuStyle = css({
    mt: '2',
    pl: '2',
    ml: '4',
    borderLeft: '1px solid',
    borderColor: 'gray.700',
    spaceY: '1',
  })

  const chevronStyle = css({
    transition: 'transform 200ms',
    color: 'gray.400',
    '[data-state=open] &': { transform: 'rotate(180deg)' },
  })
  
  const headerStyle = css({ 
    fontWeight: 'medium', 
    color: 'gray.400',
    fontSize: 'xs',
    textTransform: 'uppercase',
    letterSpacing: 'wider',
  })
  
  const accordionItemStyle = css({
    width: '100%',
    borderRadius: '0',
    mb: '2',
  })
  
  const accordionHeaderStyle = css({
    width: '100%',
    px: '4',
    py: '2',
    bg: 'gray.900',
  })
  
  const accordionContentStyle = css({
    width: '100%',
    bg: 'gray.900',
  })
  
  return (
    <Accordian.Root type="multiple" defaultValue={['guides', 'components']} style={{ width: '100%' }}>
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