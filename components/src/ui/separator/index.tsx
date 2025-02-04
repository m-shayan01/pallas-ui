import { cx } from '@styled-system/css'
import { Divider, type DividerProps } from '@styled-system/jsx'
import { type SeparatorVariantProps, separator } from '@styled-system/recipes'

// const Component = styled(Divider, separator)

export type SeparatorProps = SeparatorVariantProps & DividerProps

export const Separator = (props: SeparatorProps) => {
  const { rounded, className } = props
  return (
    <div>
      <Divider className={cx(separator({ rounded }), className)} {...props} />
    </div>
  )
}
