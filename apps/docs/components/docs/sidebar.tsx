'use client'

import Accordian from '@/components/ui/accordian/accordian'
import { css } from '@styled-system/css'
import { allComponents, allGuides, allThemings } from 'content-collections'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface SidebarProps {
  onNavigate?: (url: string) => void
}

export function Sidebar({ onNavigate }: SidebarProps = {}) {
  const pathname = usePathname()

  const guides = [...allGuides].sort((a, b) => (a.order || 999) - (b.order || 999))

  const components = [...allComponents].sort((a, b) => a.title.localeCompare(b.title))

  // Sort theming pages by order
  const themings = [...allThemings].sort((a, b) => (a.order || 999) - (b.order || 999))

  const linkStyle = {
    //inner children spacing via padding
    display: 'flex',
    width: 'full',
    fontSize: 'sm',
    fontWeight: 'medium',
    py: '1', // was padding.block.sm
    px: '3', // was padding.inline.md
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
    //inner children spacing via padding
    pl: '2', // was padding.inline.sm
    ml: '3', // was padding.inline.md
    borderLeft: '1px solid',
    borderColor: 'border',
    spaceY: '3', // was padding.inline.md
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
    //component root spacing via gap
    width: '100%',
    borderRadius: '0',
    mb: '1', // was gap.component.sm
    borderWidth: '0',
  })

  const accordionHeaderStyle = css({
    width: '100%',
    px: '6', // was gap.component.lg
    py: '2', // was gap.component.sm
    bg: 'surface.container',
  })

  const accordionContentStyle = css({
    width: '100%',
    bg: 'surface.container',
  })

  return (
    <div
      className={css({
        position: 'sticky',
        top: '72px',
        height: 'calc(100vh - 72px)', // Viewport height minus header height
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
      <Accordian.Root
        type="multiple"
        defaultValue={['guides', 'components', 'theming']}
        style={{ width: '100%', borderWidth: '0' }}
      >
        <Accordian.Item value="guides" className={accordionItemStyle}>
          <Accordian.ItemHeader className={accordionHeaderStyle}>
            <span className={headerStyle}>Getting Started</span>
            <Accordian.ItemTrigger>
              <ChevronDown className={chevronStyle} />
            </Accordian.ItemTrigger>
          </Accordian.ItemHeader>
          <Accordian.ItemContent className={accordionContentStyle}>
            <ul className={subMenuStyle}>
              {guides.map((guide) => (
                <li key={guide.slug} className={css({ marginTop: '1' })}>
                  <Link
                    href={`/docs/${guide.slug}`}
                    className={css(
                      linkStyle,
                      pathname === `/docs/${guide.slug}` ? activeStyle : {},
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

        {/* New Theming Section */}
        <Accordian.Item value="theming" className={accordionItemStyle}>
          <Accordian.ItemHeader className={accordionHeaderStyle}>
            <span className={headerStyle}>Theming</span>
            <Accordian.ItemTrigger>
              <ChevronDown className={chevronStyle} />
            </Accordian.ItemTrigger>
          </Accordian.ItemHeader>
          <Accordian.ItemContent className={accordionContentStyle}>
            <ul className={subMenuStyle}>
              {themings.map((theme) => (
                <li key={theme.slug} className={css({ marginTop: '1' })}>
                  <Link
                    href={`/docs/theming/${theme.slug}`}
                    className={css(
                      linkStyle,
                      pathname === `/docs/theming/${theme.slug}` ? activeStyle : {},
                    )}
                    onClick={() => onNavigate?.(`/docs/theming/${theme.slug}`)}
                  >
                    {theme.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Accordian.ItemContent>
        </Accordian.Item>

        <Accordian.Item value="components" className={accordionItemStyle}>
          <Accordian.ItemHeader className={accordionHeaderStyle}>
            <span className={headerStyle}>Components</span>
            <Accordian.ItemTrigger>
              <ChevronDown className={chevronStyle} />
            </Accordian.ItemTrigger>
          </Accordian.ItemHeader>
          <Accordian.ItemContent className={accordionContentStyle}>
            <ul className={subMenuStyle}>
              {components.map((component) => (
                <li key={component.slug} className={css({ marginTop: '1' })}>
                  <Link
                    href={`/docs/components/${component.slug}`}
                    className={css(
                      linkStyle,
                      pathname === `/docs/components/${component.slug}` ? activeStyle : {},
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
    </div>
  )
}
