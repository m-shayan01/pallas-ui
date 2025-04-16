import { cx } from '@styled-system/css'
import { sidebar } from '@styled-system/recipes'
import { Separator as Comp, type SeparatorProps } from '../separator'

export const Separator = ({ className, ...props }: SeparatorProps) => {
  return <Comp data-sidebar="separator" className={cx(sidebar().separator, className)} {...props} />
}
Separator.displayName = 'SidebarSeparator'
