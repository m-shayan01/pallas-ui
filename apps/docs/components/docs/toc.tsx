'use client'

import { css } from '@styled-system/css'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import type { Toc } from '../../lib/toc'

interface TocProps {
  toc: Toc
}

// biome-ignore lint/suspicious/noRedeclare: <explanation>
export function Toc({ toc }: TocProps) {
  const [activeHeading, setActiveHeading] = useState<string>('')
  const headingElementsRef = useRef<HTMLElement[]>([])
  const observerRef = useRef<IntersectionObserver | null>(null)

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!toc || toc.length === 0) return

    headingElementsRef.current = toc
      .flatMap((item) => [
        document.getElementById(item.slug),
        ...(item.children?.map((child) => document.getElementById(child.slug)) || []),
      ])
      .filter(Boolean) as HTMLElement[]

    if (headingElementsRef.current.length === 0) return

    if (!activeHeading) {
      setActiveHeading(headingElementsRef.current[0]?.id || '')
    }

    const getIndexFromId = (id: string) =>
      headingElementsRef.current.findIndex((heading) => heading.id === id)

    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target.id)

        if (visibleHeadings.length > 0) {
          const topHeading = visibleHeadings.reduce((top, current) => {
            const topIndex = getIndexFromId(top || '')
            const currentIndex = getIndexFromId(current || '')
            return currentIndex < topIndex ? current : top
          }, visibleHeadings[0])

          setActiveHeading(topHeading || '')
        } else {
          const entryAbove = entries
            .filter((entry) => entry.boundingClientRect.top < 0)
            .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top)[0]

          if (entryAbove) {
            setActiveHeading(entryAbove.target.id)
          }
        }
      },
      {
        rootMargin: '-10% 0px -70% 0px',
        threshold: [0.1],
      },
    )

    headingElementsRef.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element)
      }
    })

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
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
