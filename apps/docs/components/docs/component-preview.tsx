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
            bg: 'surface.layout',
            overflowX: 'auto', // Added for tab responsiveness
            display: 'flex',
            flexWrap: { base: 'nowrap', md: 'wrap' }, // Allow wrapping on larger screens
          })}
        >
          <Trigger
            value="preview"
            className={css({
              p: '3', // Changed from padding.inline.md
              color: 'text.secondary',
              fontWeight: 'medium',
              _selected: {
                color: 'text',
                borderBottom: '2px solid',
                borderColor: 'primary',
              },
            })}
          >
            Preview
          </Trigger>

          {code && (
            <Trigger
              value="code"
              className={css({
                p: '3', // Changed from padding.inline.md
                color: 'text.secondary',
                fontWeight: 'medium',
                _selected: {
                  color: 'text',
                  borderBottom: '2px solid',
                  borderColor: 'primary',
                },
              })}
            >
              Code
            </Trigger>
          )}

          {withRecipe && hasRecipe && (
            <Trigger
              value="recipe"
              className={css({
                p: '3', // Changed from padding.inline.md
                color: 'text.secondary',
                fontWeight: 'medium',
                _selected: {
                  color: 'text',
                  borderBottom: '2px solid',
                  borderColor: 'primary',
                },
              })}
            >
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
