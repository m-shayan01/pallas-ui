'use client'

import { generateThemeColors } from '@pallas-ui/panda-preset/colors/colors'
import { css } from '@styled-system/css'
import { type Token, token } from '@styled-system/tokens'
import { Copy } from 'lucide-react'
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

type ColorSwatchProps = {
  tokenName: string
  color: string
}

const ColorSwatch = ({ tokenName, color }: ColorSwatchProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenName).then(() => {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    })
  }

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '4',
        py: '4',
      })}
    >
      <button
        type="button"
        className={css({
          width: '80px',
          height: '80px',
          borderRadius: 'md',
          border: '1px solid',
          borderColor: 'border',
          position: 'relative',
          cursor: 'pointer',
          overflow: 'hidden',
          padding: 0,
          appearance: 'none',
        })}
        style={{ backgroundColor: color }}
        onClick={copyToClipboard}
        aria-label={`Copy color token ${tokenName}`}
      >
        <div
          className={css({
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            opacity: isCopied ? 1 : 0,
            transition: 'opacity 0.2s',
            _hover: { opacity: 1 },
          })}
        >
          <Copy
            className={css({
              color: 'white',
              height: '24px',
              width: '24px',
            })}
          />
        </div>
      </button>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '1',
        })}
      >
        <span className={css({ fontSize: 'xs', fontWeight: 'medium' })}>{tokenName}</span>
        <span className={css({ fontSize: 'xs', color: 'text.tertiary', fontFamily: 'mono' })}>
          {color}
        </span>
      </div>
    </div>
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
        gap: '3',
        mb: '6',
      })}
    >
      {swatches.map(({ name, swatches }) => (
        <div key={name} className={css({ display: 'flex', flexDirection: 'column', gap: '6' })}>
          <h2
            className={css({
              fontSize: '2xl',
              fontWeight: 'semibold',
              color: 'text',
              mt: '10',
            })}
          >
            {name.charAt(0).toUpperCase() + name.slice(1)} Colors
          </h2>
          <div
            className={css({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '4',
              p: '3',
              border: '1px solid',
              borderColor: 'border',
              borderRadius: 'md',
              bg: 'surface.container',
              overflowX: 'auto',
            })}
          >
            {Object.entries(swatches).map(([tokenName, color]) => (
              <ColorSwatch
                key={tokenName}
                tokenName={tokenName.replace('.DEFAULT', '')}
                color={color}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
