'use client'

import { MDXContent } from '@content-collections/mdx/react'
import Accordian from '@/components/ui/accordian/accordian'
import { Check, Copy, HashIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { css } from '@styled-system/css'
import { ComponentPreview, ComponentSource } from './component-preview'
import { Steps } from './steps'

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
        mx: level > 2 ? '1' : '2',
        color: 'gray.500',
        opacity: '0',
        transition: 'opacity 0.2s',
        _groupHover: { opacity: 1 },
        _hover: { color: 'gray.700' },
        _dark: {
          color: 'gray.400',
          _hover: { color: 'gray.200' },
        },
      })}
    >
      <HashIcon
        className={css({
          h: level === 1 ? '5' : level === 2 ? '4' : '3',
          w: level === 1 ? '5' : level === 2 ? '4' : '3',
        })}
      />
    </Link>
  )
}


function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = React.useState(false)

  React.useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  const copyToClipboard = React.useCallback(() => {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true)
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    })
  }, [value])

  return (
    <button
      type="button"
      onClick={copyToClipboard}
      className={css({
        position: 'absolute',
        top: '3',
        right: '3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: '1.5',
        rounded: 'md',
        color: 'gray.400',
        bg: 'gray.800',
        opacity: 0.8,
        _hover: {
          bg: 'gray.700',
          color: 'gray.300',
        },
        _focus: { outline: 'none' },
        _dark: {
          bg: 'gray.700',
          color: 'gray.300',
          _hover: { bg: 'gray.600', color: 'gray.200' },
        },
      })}
    >
      {copied ? (
        <Check className={css({ h: '4', w: '4' })} />
      ) : (
        <Copy className={css({ h: '4', w: '4' })} />
      )}
    </button>
  )
}

function CustomLink({ href, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (href?.startsWith('/')) {
    return (
      <Link
        href={href}
        {...props}
        className={css({
          color: 'primary.600',
          fontWeight: 'medium',
          textDecoration: 'none',
          _hover: { textDecoration: 'underline' },
          _dark: { color: 'primary.400' },
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
        color: 'primary.600',
        fontWeight: 'medium',
        textDecoration: 'none',
        _hover: { textDecoration: 'underline' },
        _dark: { color: 'primary.400' },
      })}
    />
  )
}


function CodeBlock({ className, children, 'data-filename': filename }: {
  className?: string,
  children: React.ReactNode,
  'data-filename'?: string
}) {
  const language = className?.replace(/language-/, '') || '';
  const codeString = React.Children.toArray(children)
    .map(child => {
      if (typeof child === 'string') return child;
      if (React.isValidElement(child) && typeof child.props.children === 'string') {
        return child.props.children;
      }
      return '';
    })
    .join('');

  return (
    <div className={css({ position: 'relative', my: '4' })}>
      {filename && (
        <div className={css({
          position: 'absolute',
          top: '0',
          left: '0',
          right: '0',
          bg: 'gray.800',
          color: 'gray.300',
          fontSize: 'xs',
          px: '4',
          py: '2',
          borderBottom: '1px solid',
          borderColor: 'gray.700',
          fontFamily: 'mono',
        })}>
          {filename}
        </div>
      )}
      <pre className={css({
        p: '4',
        pt: filename ? '12' : '4',
        rounded: 'md',
        bg: 'gray.900',
        color: 'gray.100',
        border: '1px solid',
        borderColor: 'gray.700',
        overflow: 'auto',
      })}>
        <code className={css({
          fontFamily: 'mono',
          fontSize: 'sm',
          fontWeight: 'normal',
          whiteSpace: 'pre',
          overflowWrap: 'normal',
          color: 'inherit'
        })}>
          {children}
        </code>
      </pre>
      <CopyButton value={codeString} />
      {language && !filename && (
        <div className={css({
          position: 'absolute',
          top: '0',
          right: '0',
          bg: 'gray.800',
          color: 'gray.300',
          fontSize: 'xs',
          px: '2',
          py: '1',
          rounded: 'md',
        })}>
          {language}
        </div>
      )}
    </div>
  )
}

const components = {
  h1: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      id={id}
      className={css({
        mt: '8',
        mb: '4',
        fontSize: '3xl',
        fontWeight: 'bold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span className={css({ mr: '2' })}>{children}</span>
      <HeadingAnchor id={id} level={1} />
    </h1>
  ),
  h2: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      id={id}
      className={css({
        mt: '12',
        mb: '3',
        fontSize: '2xl',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span className={css({ mr: '2' })}>{children}</span>
      <HeadingAnchor id={id} level={2} />
    </h2>
  ),
  h3: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      id={id}
      className={css({
        mt: '8',
        mb: '2',
        fontSize: 'xl',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span className={css({ mr: '2' })}>{children}</span>
      <HeadingAnchor id={id} level={3} />
    </h3>
  ),
  h4: ({ id, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      id={id}
      className={css({
        mt: '6',
        mb: '2',
        fontSize: 'lg',
        fontWeight: 'semibold',
        lineHeight: 'tight',
        scrollMargin: '24',
        display: 'flex',
        alignItems: 'center',
        _groupHover: { '& a': { opacity: 1 } },
      })}
      {...props}
    >
      <span className={css({ mr: '2' })}>{children}</span>
      <HeadingAnchor id={id} level={4} />
    </h4>
  ),
  a: CustomLink,
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={css({
        mt: '4',
        mb: '4',
        lineHeight: 'relaxed',
        color: 'gray.700',
        _dark: { color: 'gray.300' },
      })}
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={css({
        my: '6',
        ml: '6',
        listStyleType: 'disc',
        '& li': { mt: '2' },
      })}
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className={css({
        my: '6',
        ml: '6',
        listStyleType: 'decimal',
        '& li': { mt: '2' },
      })}
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={css({ mt: '2' })} {...props} />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className={css({
        mt: '6',
        mb: '6',
        borderLeft: '4px solid',
        borderColor: 'gray.300',
        pl: '6',
        py: '2',
        fontStyle: 'italic',
        color: 'gray.700',
        _dark: {
          borderColor: 'gray.700',
          color: 'gray.300',
        },
      })}
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className={css({
        my: '8',
        borderColor: 'gray.200',
        _dark: { borderColor: 'gray.800' },
      })}
      {...props}
    />
  ),
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <div
      className={css({
        my: '6',
        w: 'full',
        overflowX: 'auto',
      })}
    >
      <table
        className={css({
          w: 'full',
          borderCollapse: 'collapse',
          textAlign: 'left',
          fontSize: 'sm',
        })}
        {...props}
      />
    </div>
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={css({
        borderTop: '1px solid',
        borderColor: 'gray.300',
        _dark: { borderColor: 'gray.700' },
      })}
      {...props}
    />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
    <th
      className={css({
        py: '2',
        px: '4',
        fontWeight: 'semibold',
        bg: 'gray.100',
        _dark: { bg: 'gray.800' },
      })}
      {...props}
    />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
    <td
      className={css({
        py: '2',
        px: '4',
        borderTop: '1px solid',
        borderColor: 'gray.200',
        _dark: { borderColor: 'gray.800' },
      })}
      {...props}
    />
  ),
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  code: (props: any) => {
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
}

export function MdxComponent({ code }: MdxComponentProps) {
  if (!code) {
    return (
      <div
        className={css({
          p: '4',
          border: '1px solid',
          borderColor: 'red.300',
          bg: 'red.50',
          color: 'red.800',
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
        className={css({
          '& [data-rehype-pretty-code-title]': {
            roundedTop: 'md',
            bg: 'gray.800',
            color: 'gray.300',
            fontSize: 'xs',
            px: '4',
            py: '2',
            fontFamily: 'mono',
            '& + div > pre': {
              mt: '0',
              roundedTop: '0',
            },
          },
        })}
      >
        <MDXContent code={code} components={components} />
      </div>
    )
  } catch (error) {
    console.error('Error rendering MDX:', error)
    return (
      <div
        className={css({
          p: '4',
          border: '1px solid',
          borderColor: 'red.300',
          bg: 'red.50',
          color: 'red.800',
          rounded: 'md',
        })}
      >
        <p>Error rendering content: {String(error)}</p>
      </div>
    )
  }
}
