import { Separator as SeparatorPrimitive } from '@pallas-ui/sidebar'
import { cx } from '@styled-system/css'
import { separator } from '@styled-system/recipes'
import type { Assign } from '@styled-system/types'
import type { SeparatorProps } from '../separator'
import { withContext } from './provider'

type SideSeparatorProps = Assign<React.ComponentProps<typeof SeparatorPrimitive>, SeparatorProps>
const SeparatorStyled = withContext<
  React.ComponentRef<typeof SeparatorPrimitive>,
  SideSeparatorProps
>(SeparatorPrimitive, 'separator')
export const Separator = (props: SideSeparatorProps) => {
  const [separatorProps, { className, ...rest }] = separator.splitVariantProps(props)
  return <SeparatorStyled className={cx(separator(separatorProps), className)} {...rest} />
}
