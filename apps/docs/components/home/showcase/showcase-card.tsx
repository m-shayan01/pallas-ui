import { Heading, Paragraph } from '@/components/ui/typography'
import { css, cx } from '@styled-system/css'
import type React from 'react'

export interface ShowcaseCardProps {
  title?: string
  description?: string
  children: React.ReactNode
  className?: string
  paddingTitle?: string
  paddingBlock?: string
  colSpan?: number
  rowSpan?: number
}

export const ShowcaseCard = ({
  title,
  description,
  children,
  className,
  paddingTitle,
  paddingBlock,
  colSpan,
  rowSpan,
}: ShowcaseCardProps) => {
  return (
    <div
      className={cx(
        css({
          borderRadius: 'md',
          overflow: 'hidden',
          bg: 'white',
          boxShadow: 'sm',
          border: '.5px solid',
          borderColor: 'border',
          transition: 'all 0.2s ease-in-out',
          height: 'fit-content',
          gridColumn: colSpan ? `span ${colSpan} / span ${colSpan}` : 'auto',
          gridRow: rowSpan ? `span ${rowSpan} / span ${rowSpan}` : 'auto',
          _hover: {
            boxShadow: 'md',
          },
        }),
        className,
      )}
    >
      <div
        className={css({
          p: paddingTitle ? paddingTitle : '6',
          borderBottom: '1px solid',
          borderColor: 'border',
          border: 'none',
          spaceY: '4',
        })}
      >
        <Heading level={4}>{title}</Heading>
        {description && <Paragraph size={'compact'}>{description}</Paragraph>}
      </div>
      <div
        className={css({
          p: paddingBlock ? paddingBlock : '6',
        })}
      >
        {children}
      </div>
    </div>
  )
}
