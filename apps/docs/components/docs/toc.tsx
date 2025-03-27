'use client'

import { useEffect, useState } from 'react'
import { css } from '@styled-system/css'
import Link from 'next/link'
import type { Toc } from '../../lib/toc'

interface TocProps {
  toc: Toc
}

export function Toc({ toc }: TocProps) {
  const [activeHeading, setActiveHeading] = useState<string>('')

  useEffect(() => {
    if (!toc || toc.length === 0) return

    const headingElements = toc
      .flatMap((item) => [
        document.getElementById(item.slug),
        ...(item.children?.map((child) => document.getElementById(child.slug)) || []),
      ])
      .filter(Boolean) as HTMLElement[]

    if (headingElements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.id)
          }
        })
      },
      {
        rootMargin: '0px 0px -80% 0px',
        threshold: 1.0,
      }
    )

    headingElements.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      headingElements.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [toc])

  if (!toc || toc.length === 0) {
    return null
  }

  return (
    <div>
      <div
        className={css({
          fontWeight: 'medium',
          mb: 'gap.component.md',
          color: 'text',
        })}
      >
        On This Page
      </div>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: 'gap.inline.md',
        })}
      >
        {toc.map((item) => (
          <div key={item.slug}>
            <Link
              href={`#${item.slug}`}
              className={css({
                display: 'inline-block',
                color: activeHeading === item.slug ? 'primary' : 'text.secondary',
                textDecoration: 'none',
                fontSize: 'sm',
                fontWeight: activeHeading === item.slug ? 'medium' : 'normal',
                _hover: { color: 'primary.hover' },
              })}
            >
              {item.text}
            </Link>
            {item.children && item.children.length > 0 && (
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'gap.inline.sm',
                  mt: 'gap.inline.md',
                  ml: 'padding.inline.md',
                })}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.slug}
                    href={`#${child.slug}`}
                    className={css({
                      display: 'inline-block',
                      color: activeHeading === child.slug ? 'primary' : 'text.tertiary',
                      textDecoration: 'none',
                      fontSize: 'sm',
                      fontWeight: activeHeading === child.slug ? 'medium' : 'normal',
                      _hover: { color: 'primary.hover' },
                    })}
                  >
                    {child.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}