import { Divider, type DividerProps, styled } from '@styled-system/jsx'
import { type SeparatorVariantProps, separator } from '@styled-system/recipes'

export type SeparatorProps = SeparatorVariantProps & DividerProps

const Component = styled(Divider, separator)

export const Separator = (props: SeparatorProps) => {
  return (
    <div>
      <Component {...props} />
    </div>
  )
}
