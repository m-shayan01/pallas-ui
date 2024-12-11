import { styled } from '@styled-system/jsx'
import { type ButtonVariant, button } from '@styled-system/recipes'
import { Button as AriaButton, type ButtonProps as AriaButtonProps } from 'react-aria-components'

//export type ButtonProps = HTMLStyledProps<typeof Button>

export interface ButtonProps extends ButtonVariant, AriaButtonProps {}
// generate typescript version of the button react component with forwardRef
export const Button = styled(AriaButton, button)
