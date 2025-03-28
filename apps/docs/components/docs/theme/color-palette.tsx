'use client'

import { css } from '@styled-system/css'
import { token, type Token } from '@styled-system/tokens'
import { generateThemeColors } from '@pallas-ui/panda-preset/colors/colors'
import { themeColorPalette } from '../../../../../components/panda.config'
import { useEffect, useState } from 'react'

function cleanToken(str: string) {
  if (str.startsWith('{') && str.endsWith('}')) {
    return str.slice(1, -1)
  }
  return str
}

function generateSwatches(themeColors: any) {
  return Object.entries(themeColors?.semanticTokens || {}).map(([colorName, shades]: [string, any]) => {
    const swatches = Object.entries(shades).reduce(
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
  })
}

export function ColorPalette() {
  const [swatches, setSwatches] = useState<Array<{ name: string; swatches: Record<string, string> }>>([])
  
  useEffect(() => {
    const themeColors = generateThemeColors(themeColorPalette)
    const generatedSwatches = generateSwatches(themeColors)
    setSwatches(generatedSwatches)
  }, [])

  return (
    <div className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.component.xl', my: 'gap.component.lg' })}>
      {swatches.map(({ name, swatches }) => (
        <div key={name} className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.component.md' })}>
          <h2 className={css({ fontSize: '2xl', fontWeight: 'semibold', color: 'text', mt: 'gap.component.lg' })}>
            {name.charAt(0).toUpperCase() + name.slice(1)} Colors
          </h2>
          <div className={css({ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 'gap.component.sm',
            p: 'padding.block.md',
            border: '1px solid',
            borderColor: 'border',
            borderRadius: 'md',
            bg: 'surface.container',
          })}>
            {Object.entries(swatches).map(([tokenName, color]) => (
              <div key={tokenName} className={css({ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 'gap.inline.md',
                py: 'padding.block.sm',
                borderBottom: '1px solid',
                borderColor: 'border.secondary',
                _last: { borderBottom: 'none' },
              })}>
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
                <div className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.inline.xs' })}>
                  <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>{tokenName}</span>
                  <span className={css({ fontSize: 'xs', color: 'text.tertiary', fontFamily: 'mono' })}>
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