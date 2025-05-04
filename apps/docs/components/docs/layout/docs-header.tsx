'use client'
import AnimatedBrandName from '@/components/home/animated-brandname'
import Breadcrumb from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import Sidebar from '@/components/ui/sidebar'
import { Heading } from '@/components/ui/typography'
import { css } from '@styled-system/css'
import { HStack } from '@styled-system/jsx'
import { allGuides } from 'content-collections'
import { allThemings } from 'content-collections'
import { ChevronRight, Link, PanelLeft } from 'lucide-react'

export function DocsHeader() {
  return (
    <header
      className={css({
        display: 'flex',
        alignItems: 'center',
        gap: '2',
        px: '4',
        pb: '2',
        borderBottom: '1px solid',
        borderColor: 'border',
        height: 'header.height',
        position: 'fixed',
        insetInlineStart: '0',
        insetBlockStart: '0',
        top: '0',
        zIndex: '100',
        bg: 'surface.container',
        width: '100%',
      })}
    >
      <HStack justify="space-between" w="full">
        <Heading level={3} css={{ fontWeight: 'extrabold' }}>
          <AnimatedBrandName />
        </Heading>
      </HStack>
      <Separator orientation="vertical" />
      <Sidebar.Trigger>
        <PanelLeft size={16} />
      </Sidebar.Trigger>
      <Separator orientation="vertical" />
      {/* Commented out title and description as in your original code */}
    </header>
  )
}
