'use client'

import React from 'react'
import { css } from '@styled-system/css'
import { Preview } from './preview'
import { Root, TabList, Trigger, Content } from '@/components/ui/tabs'

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
  const nameMap: Record<string, string> = {
    accordion: 'accordian',
  }
  const dirName = nameMap[name] || name

  const PreviewComponent = React.lazy(() => {
    if (file && file !== 'index') {
      return import(`../previews/${dirName}/${file}`)
        .then((mod) => ({ default: mod.default }))
        .catch(() => {
          console.error(`Failed to load preview file: ${dirName}/${file}`);
          return import('./fallback-preview').then((mod) => ({ default: mod.default }));
        });
    }

    return import(`../previews/${dirName}`)
      .then((mod) => ({ default: mod.default }))
      .catch(() => {
        console.error(`Failed to load preview: ${dirName}`);
        return import('./fallback-preview').then((mod) => ({ default: mod.default }));
      });
  });

  const childrenArray = React.Children.toArray(children)


  const [code, recipe] = childrenArray

  return (
    <div
      className={css({
        my: '6',
        border: '1px solid',
        borderColor: 'gray.700',
        rounded: 'md',
        overflow: 'hidden',
        bg: 'gray.900',
      })}
    >

      <Root defaultValue="preview">
        <TabList
          className={css({
            borderBottom: '1px solid',
            borderColor: 'gray.700',
            bg: 'gray.900',
          })}
        >
          <Trigger
            value="preview"
            className={css({
              px: '4',
              py: '2',
              color: 'gray.300',
              fontWeight: 'medium',
              _selected: {
                color: 'gray.100',
                borderBottom: '2px solid',
                borderColor: 'gray.400',
              },
            })}
          >
            Preview
          </Trigger>

          {code && (
            <Trigger
              value="code"
              className={css({
                px: '4',
                py: '2',
                color: 'gray.300',
                fontWeight: 'medium',
                _selected: {
                  color: 'gray.100',
                  borderBottom: '2px solid',
                  borderColor: 'gray.400',
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
                px: '4',
                py: '2',
                color: 'gray.300',
                fontWeight: 'medium',
                _selected: {
                  color: 'gray.100',
                  borderBottom: '2px solid',
                  borderColor: 'gray.400',
                },
              })}
            >
              Recipe
            </Trigger>
          )}
        </TabList>

        <Content value="preview">
          <Preview>
            <React.Suspense fallback={<div className={css({ color: 'gray.300' })}>Loading...</div>}>
              <PreviewComponent />
            </React.Suspense>
          </Preview>
        </Content>

        {code && (
          <Content value="code" className={css({ p: '4' })}>
            {code}
          </Content>
        )}

        {withRecipe && hasRecipe && recipe && (
          <Content value="recipe" className={css({ p: '4' })}>
            {recipe}
          </Content>
        )}
      </Root>
    </div>
  )
}


export function ComponentSource({ name, children }: { name: string; children?: React.ReactNode }) {

  return (
    <div className={css({ my: '6' })}>
      {children ? (

        <>{children}</>
      ) : (

        <div
          className={css({
            p: '4',
            border: '1px dashed',
            borderColor: 'gray.500',
            rounded: 'md',
            color: 'gray.400',
            bg: 'gray.800',
            fontFamily: 'mono',
            fontSize: 'sm',
          })}
        >
          <p>Source code for {name} not available</p>
          <p className={css({ mt: '2', fontSize: 'xs', color: 'gray.500' })}>
            This component may be in a different location or the rehype plugin is not configured
            correctly
          </p>
        </div>
      )}
    </div>
  )
}
