'use client'

import Accordian from '@/components/ui/accordian/accordian'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MDXContent } from '@content-collections/mdx/react'
import { css } from '@styled-system/css'
import { HashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { ComponentPreview, ComponentSource } from './component-preview'
import { CopyButton } from './copy-button'
import { InstallTabs } from './install-tabs'
import { PackageTabs } from './package-tabs'
import { Steps } from './steps'
import { ColorPalette } from './theme/color-palette'
import { SizeBox, SpacingBox } from './theme/size-box'
import { ThemePreview } from './theme/theme-preview'

interface MdxComponentProps {
  code: string
}

function HeadingAnchor({ id, level }: { id?: string; level: 1 | 2 | 3 | 4 }) {
  if (!id) return null

  return (
    <Link
      aria-label="Link to section"
      href={`#${id}`}
      className={css({
        display: 'inline-block',
        rounded: 'md',
        mx: level > 2 ? 'padding.inline.xs' : 'padding.inline.sm',
        color: 'text.tertiary',
        opacity: '0',
        transition: 'opacity 0.2s',
        _groupHover: { opacity: 1 },
        _hover: { color: 'text.secondary' },
      })}
    >
      <HashIcon
        className={css({
          h: level === 1 ? 'icon.md' : level === 2 ? 'icon.sm' : 'icon.sm',
          w: level === 1 ? 'icon.md' : level === 2 ? 'icon.sm' : 'icon.sm',
        })}
      />
    </Link>
  )
}

function CustomLink({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className={css({
          color: 'primary',
          fontWeight: 'medium',
          textDecoration: 'none',
          _hover: { textDecoration: 'underline' },
        })}
      />
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={css({
        color: 'primary',
        fontWeight: 'medium',
        textDecoration: 'none',
        _hover: { textDecoration: 'underline' },
      })}
    />
  )
}

function extractCodeString(children: React.ReactNode): string {
  // Handle undefined or null
  if (!children) return ''

  // Handle string directly
  if (typeof children === 'string') {
    return children
  }

  // Handle arrays of children
  if (Array.isArray(children)) {
    return children.map((child) => extractCodeString(child)).join('')
  }

  // Handle React elements
  if (React.isValidElement(children)) {
    // If the element has props.children, extract from there
    if (children.props?.children) {
      return extractCodeString(children.props.children)
    }

    // If the element has a 'value' prop (like in some code highlighting components)
    if (children.props?.value) {
      return children.props.value
    }
  }

  // Return empty string for other cases
  return ''
}

function CodeBlock({
  className,
  children,
  'data-filename': filename,
}: {
  className?: string
  children: React.ReactNode
  'data-filename'?: string
}) {
  const language = className?.replace(/language-/, '') || ''
  const codeString = extractCodeString(children)

  return (
    <div
      className={css({
        position: 'relative',
        my: 'gap.inline.sm',
        width: '100%',
        maxWidth: '100%',
      })}
    >
      {/* {filename && (
        <div
          className={css({
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bg: 'fill',
            color: 'text.secondary',
            fontSize: 'xs',
            px: 'padding.inline.md',
            py: 'padding.block.sm',
            borderBottom: '1px solid',
            borderColor: 'border.secondary',
            fontFamily: 'mono',
            zIndex: 5,
          })}
        >
          {filename}
        </div>
      )} */}
      <pre
        className={css({
          p: 'padding.block.lg',
          //pt: filename ? 'layout.internal.md' : 'padding.block.md',
          rounded: 'md',
          bg: 'fill.secondary',
          color: 'text.secondary',
          border: '1px solid',
          borderColor: 'border',
          overflow: 'auto',
          width: '100%',
          maxWidth: '100%',
        })}
      >
        <code
          className={css({
            fontFamily: 'mono',
            fontSize: 'sm',
            fontWeight: 'normal',
            whiteSpace: 'pre',
            overflowWrap: 'normal',
            color: 'text.primary',
            display: 'block',
          })}
        >
          {children}
        </code>
      </pre>

      {/* Only add the copy button if we have content to copy */}
      {codeString && <CopyButton value={codeString} />}

      {/* {language && !filename && (
        <div
          className={css({
            position: 'absolute',
            top: '0',
            right: '0',
            bg: 'fill',
            color: 'text.secondary',
            fontSize: 'xs',
            px: 'padding.inline.sm',
            py: 'padding.block.xs',
            rounded: 'md',
            mt: '12px',
            mr: '48px', // Space for copy button
          })}
        >
          {language}
        </div>
      )} */}
    </div>
  )
}

const components = {
  h1: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      id={id}
      className={css({
        mt: 'layout.section.lg',
        mb: 'layout.section.sm',
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        color: 'text',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span>{children}</span>
      <HeadingAnchor id={id} level={1} />
    </h1>
  ),
  h2: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={id}
      className={css({
        mt: 'layout.section.lg',
        mb: 'layout.section.sm',
        fontSize: '2xl',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        color: 'text',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span>{children}</span>
      <HeadingAnchor id={id} level={2} />
    </h2>
  ),
  h3: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={id}
      className={css({
        my: 'layout.internal.sm', //exist inside the h2 layout
        fontSize: 'xl',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        color: 'text',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span className={css({ mr: 'gap.inline.sm' })}>{children}</span>
      <HeadingAnchor id={id} level={3} />
    </h3>
  ),
  h4: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      id={id}
      className={css({
        my: 'layout.default.sm', //exist inside the h3 layout
        fontSize: 'lg',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        color: 'text',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span>{children}</span>
      <HeadingAnchor id={id} level={4} />
    </h4>
  ),
  a: CustomLink,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={css({
        mt: 'gap.inline.sm',
        mb: 'gap.inline.sm',
        lineHeight: 'relaxed',
        color: 'text.secondary',
      })}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={css({
        my: 'gap.component.sm',
        ml: 'padding.inline.lg',
        listStyleType: 'disc',
        '& li': { m: 'gap.inline.sm' },
        color: 'text.secondary',
      })}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={css({
        my: 'gap.component.sm',
        ml: 'padding.inline.lg',
        listStyleType: 'decimal',
        '& li': { m: 'gap.inline.sm' },
        color: 'text.secondary',
      })}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={css({ color: 'text.secondary' })} {...props} />
  ),
  // blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
  //   <blockquote
  //     className={css({
  //       mt: 'gap.component.lg',
  //       mb: 'gap.component.lg',
  //       borderLeft: '4px solid',
  //       borderColor: 'border.secondary',
  //       pl: 'padding.inline.lg',
  //       py: 'padding.block.sm',
  //       fontStyle: 'italic',
  //       color: 'text.secondary',
  //     })}
  //     {...props}
  //   />
  // ),
  // hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
  //   <hr
  //     className={css({
  //       my: 'layout.internal.md',
  //       borderColor: 'border.secondary',
  //     })}
  //     {...props}
  //   />
  // ),
  // table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
  //   <div
  //     className={css({
  //       my: 'gap.component.lg',
  //       w: 'full',
  //       overflowX: 'auto',
  //     })}
  //   >
  //     <table
  //       className={css({
  //         w: 'full',
  //         borderCollapse: 'collapse',
  //         textAlign: 'left',
  //         fontSize: 'sm',
  //         color: 'text.secondary',
  //       })}
  //       {...props}
  //     />
  //   </div>
  // ),
  // tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
  //   <tr
  //     className={css({
  //       borderTop: '1px solid',
  //       borderColor: 'border.secondary',
  //     })}
  //     {...props}
  //   />
  // ),
  // th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  //   <th
  //     className={css({
  //       py: 'padding.block.sm',
  //       px: 'padding.inline.md',
  //       fontWeight: 'semibold',
  //       bg: 'fill.secondary',
  //       color: 'text',
  //     })}
  //     {...props}
  //   />
  // ),
  // td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  //   <td
  //     className={css({
  //       py: 'padding.block.sm',
  //       px: 'padding.inline.md',
  //       borderTop: '1px solid',
  //       borderColor: 'border.secondary',
  //     })}
  //     {...props}
  //   />
  // ),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  code: (props: any) => {
    // If the code has a className, it's part of a code block
    if (props.className) {
      return <CodeBlock {...props} />
    }
    //do this later
    return <CodeBlock {...props} />
  },

  Accordian,
  Badge,
  Button,
  ComponentPreview,
  ComponentSource,
  Steps,
  PackageTabs,
  InstallTabs,
  ColorPalette,
  SizeBox,
  SpacingBox,
  ThemePreview,
}

export function MdxComponent({ code }: MdxComponentProps) {
  if (!code) {
    return (
      <div
        className={css({
          p: 'layout.section.lg',
          border: '1px solid',
          borderColor: 'error.border',
          bg: 'error.bg',
          color: 'error.text',
          rounded: 'md',
        })}
      >
        <p>No content available</p>
      </div>
    )
  }

  try {
    return (
      <div
      // className={css({                //fix
      //   '& [data-rehype-pretty-code-title]': {
      //     roundedTop: 'md',
      //     bg: 'fill',
      //     color: 'text.secondary',
      //     fontSize: 'xs',
      //     px: 'layout.section.lg',
      //     py: 'padding.block.sm',
      //     fontFamily: 'mono',
      //     '& + div > pre': {
      //       mt: '0',
      //       roundedTop: '0',
      //     },
      //   },
      // })}
      >
        <MDXContent code={code} components={components} />
      </div>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return (
      <div
        className={css({
          p: 'layout.section.lg',
          border: '1px solid',
          borderColor: 'error.border',
          bg: 'error.bg',
          color: 'error.text',
          rounded: 'md',
        })}
      >
        <p>Error rendering content: {String(error)}</p>
      </div>
    )
  }
}
