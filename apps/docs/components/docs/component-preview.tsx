'use client'

import { Content, Root, TabList, Trigger } from '@/components/ui/tabs'
import { css } from '@styled-system/css'
import React from 'react'
import { Preview } from './preview'

interface ComponentPreviewProps {
  name: string
  file?: string
  withRecipe?: boolean
  hasRecipe?: boolean
  hasSlotRecipe?: boolean
  children?: React.ReactNode
}

export function ComponentPreview({
  name,
  file = 'index',
  withRecipe,
  hasRecipe,
  children,
}: ComponentPreviewProps) {
  // const nameMap: Record<string, string> = {
  //   accordion: 'accordian',
  // }
  const dirName = name

  const PreviewComponent = React.lazy(() => {
    if (file && file !== 'index') {
      return import(`../previews/${dirName}/${file}`)
        .then((mod) => ({ default: mod.default }))
        .catch(() => {
          console.error(`Failed to load preview file: ${dirName}/${file}`)
          return import('./fallback-preview').then((mod) => ({ default: mod.default }))
        })
    }

    return import(`../previews/${dirName}`)
      .then((mod) => ({ default: mod.default }))
      .catch(() => {
        console.error(`Failed to load preview: ${dirName}`)
        return import('./fallback-preview').then((mod) => ({ default: mod.default }))
      })
  })

  const childrenArray = React.Children.toArray(children)

  const [code, recipe] = childrenArray

  const triggerStyle = css({
    p: '3', // Changed from padding.inline.md
    color: 'text.secondary',
    fontSize: 'sm',
    fontWeight: 'medium',
    _selected: {
      color: 'text',
      borderBottom: '2px solid',
      borderColor: 'primary',
    },
  })
  return (
    <div
      className={css({
        border: '1px solid',
        borderColor: 'border',
        rounded: 'md',
        overflow: 'hidden',
        bg: 'surface.container',
        width: '100%', // Changed from fixed width to 100%
        maxWidth: '100%',
      })}
    >
      <Root defaultValue="preview">
        <TabList
          className={css({
            borderBottom: '1px solid',
            borderColor: 'border',
            overflowX: 'visible', // Changed from 'auto' to 'visible'
            display: 'flex',
            flexWrap: 'wrap', // Always wrap tabs instead of conditional wrapping
            position: 'relative', // Add position relative
            zIndex: 1, // Ensure tabs appear above content
            backdropFilter: 'blur(2px)',
            bg: '#e6f4ff4a',
            _before: {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/noise.svg)',
              backgroundSize: 'cover',
              opacity: 0.3,
              zIndex: 0,
              mixBlendMode: 'overlay',
            },
          })}
        >
          <Trigger value="preview" className={triggerStyle}>
            Preview
          </Trigger>

          {code && (
            <Trigger value="code" className={triggerStyle}>
              Code
            </Trigger>
          )}

          {withRecipe && hasRecipe && (
            <Trigger value="recipe" className={triggerStyle}>
              Recipe
            </Trigger>
          )}
        </TabList>

        <Content value="preview">
          <Preview>
            <React.Suspense
              fallback={
                <div
                  className={css({
                    p: '1', // Changed from padding.block.sm
                    textAlign: 'center',
                    color: 'text.secondary',
                  })}
                >
                  Loading preview...
                </div>
              }
            >
              <PreviewComponent />
            </React.Suspense>
          </Preview>
        </Content>

        {code && (
          <Content
            value="code"
            className={css({
              p: '2', // Changed from padding.block.md
              overflowX: 'auto', // Added for code block responsiveness
              maxWidth: '100%',
            })}
          >
            {code}
          </Content>
        )}

        {withRecipe && hasRecipe && recipe && (
          <Content value="recipe" className={css({ p: '2' /* Changed from padding.block.md */ })}>
            {recipe}
          </Content>
        )}
      </Root>
    </div>
  )
}

export function ComponentSource({ name, children }: { name: string; children?: React.ReactNode }) {
  return (
    <div
      className={css({
        width: '100%', // Changed from fixed width to 100%
        maxWidth: '100%',
      })}
    >
      {children ? (
        <div
          className={css({
            overflowX: 'auto',
            width: '100%', // Added to ensure full width
          })}
        >
          {children}
        </div>
      ) : (
        <div
          className={css({
            p: '1', // Changed from padding.block.sm
            border: '1px dashed',
            borderColor: 'border.secondary',
            rounded: 'md',
            color: 'text.tertiary',
            bg: 'fill.secondary',
            fontFamily: 'mono',
            fontSize: 'sm',
          })}
        >
          <p>Source code for {name} not available</p>
          <p className={css({ mt: '3', fontSize: 'xs', color: 'text.tertiary' })}>
            This component may be in a different location or the rehype plugin is not configured
            correctly
          </p>
        </div>
      )}
    </div>
  )
}
