'use client'

import { generateThemeColors } from '@pallas-ui/panda-preset/colors/colors'
import { css } from '@styled-system/css'
import { type Token, token } from '@styled-system/tokens'
import { useEffect, useState } from 'react'
import { themeColorPalette } from '../../../../../components/panda.config'

function cleanToken(str: string) {
  if (str.startsWith('{') && str.endsWith('}')) {
    return str.slice(1, -1)
  }
  return str
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function generateSwatches(themeColors: any) {
  return Object.entries(themeColors?.semanticTokens || {}).map(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    ([colorName, shades]: [string, any]) => {
      const swatches = Object.entries(shades).reduce(
        // biome-ignore lint/suspicious/noExplicitAny: <explanation>
        (acc, [shadeName, shadeValue]: [string, any]) => {
          if (shadeValue.value.base.startsWith('{')) {
            acc[`${colorName}.${shadeName}`] = token(cleanToken(shadeValue.value.base) as Token)
          } else {
            acc[`${colorName}.${shadeName}`] = shadeValue.value.base
          }
          return acc
        },
        {} as Record<string, string>,
      )
      return { name: colorName, swatches }
    },
  )
}

export function ColorPalette() {
  const [swatches, setSwatches] = useState<
    Array<{ name: string; swatches: Record<string, string> }>
  >([])

  useEffect(() => {
    const themeColors = generateThemeColors(themeColorPalette)
    const generatedSwatches = generateSwatches(themeColors)
    setSwatches(generatedSwatches)
  }, [])

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: '3', // Changed from gap.inline.sm
        mb: '6', // Changed from layout.section.sm
      })}
    >
      {swatches.map(({ name, swatches }) => (
        <div
          key={name}
          className={css({ display: 'flex', flexDirection: 'column', gap: '6' })} // Changed from layout.section.sm
        >
          <h2
            className={css({
              fontSize: '2xl',
              fontWeight: 'semibold',
              color: 'text',
              mt: '10', // Changed from layout.section.lg
            })}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)} Colors
          </h2>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '4', // Changed from gap.component.sm
              p: '3', // Changed from gap.inline.sm
              border: '1px solid',
              borderColor: 'border',
              borderRadius: 'md',
              bg: 'surface.container',
            })}
          >
            {Object.entries(swatches).map(([tokenName, color]) => (
              <div
                key={tokenName}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4', // Changed from gap.inline.md
                  py: '4', // Changed from gap.component.sm
                  borderBottom: '1px solid',
                  borderColor: 'border.secondary',
                  _last: { borderBottom: 'none' },
                })}
              >
                <div
                  className={css({
                    width: '48px',
                    height: '48px',
                    borderRadius: 'md',
                    border: '1px solid',
                    borderColor: 'border',
                  })}
                  style={{ backgroundColor: color }}
                />
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1', // Changed from padding.inline.xs
                  })}
                >
                  <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>{tokenName}</span>
                  <span
                    className={css({ fontSize: 'xs', color: 'text.tertiary', fontFamily: 'mono' })}
                  >
                    {color}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
