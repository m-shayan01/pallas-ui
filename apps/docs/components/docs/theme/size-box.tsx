import { css } from '@styled-system/css'
import { token } from '@styled-system/tokens'
import type { Token } from '@styled-system/tokens'

export function SizeBox({ 
  label, 
  width, 
  height 
}: { 
  label: string; 
  width: string; 
  height: string 
}) {
  return (
    <div className={css({ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: 'gap.component.sm',
      p: 'padding.block.md',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'surface.container',
      minWidth: '180px',
    })}>
      <div className={css({ display: 'flex', flexDirection: 'column', gap: 'gap.inline.xs' })}>
        <span className={css({ fontSize: 'sm', fontWeight: 'medium' })}>{label}</span>
        <span className={css({ fontSize: 'xs', color: 'text.tertiary' })}>
          {width} x {height}
        </span>
      </div>
      <div
        className={css({
          bg: 'primary',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 'md',
          mx: 'auto',
          mt: 'gap.inline.sm',
        })}
        style={{ width, height }}
      />
    </div>
  )
}

export function SpacingBox({ 
  label, 
  size 
}: { 
  label: string; 
  size: string 
}) {
  return (
    <div className={css({ 
      display: 'flex', 
      alignItems: 'center', 
      gap: 'gap.inline.lg',
      p: 'padding.block.md',
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'md',
      bg: 'surface.container',
    })}>
      <div className={css({ width: '150px', flexShrink: 0 })}>
        <span className={css({ fontSize: 'sm', fontWeight: 'medium', display: 'block' })}>{label}</span>
        <span className={css({ fontSize: 'xs', color: 'text.tertiary', display: 'block', mt: 'gap.inline.xs' })}>
          {size}
        </span>
      </div>
      <div
        className={css({
          height: '24px',
          bg: 'primary',
          borderRadius: 'sm',
        })}
        style={{ width: token(size as Token) }}
      />
    </div>
  )
}