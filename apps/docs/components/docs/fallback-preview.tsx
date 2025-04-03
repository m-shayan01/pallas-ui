import { css } from '@styled-system/css'

export default function FallbackPreview() {
  return (
    <div
      className={css({
        padding: 'padding.block.sm',
        backgroundColor: 'fill.secondary',
        border: '1px dashed',
        borderColor: 'border.secondary',
        borderRadius: 'md',
        color: 'text.tertiary',
        textAlign: 'center',
        width: '100%',
      })}
    >
      Component preview not found
    </div>
  )
}
