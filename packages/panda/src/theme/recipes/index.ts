import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'

import { accordian } from './accordian'
import { alert, alertDescription, alertTitle } from './alert'
import { badge } from './badge'
import { button } from './button'
import { card } from './card'
import { checkbox } from './checkbox'
import { heading } from './heading'
import { icon } from './icon'
import { input } from './input'
import { label } from './label'
import { modal } from './modal'
import { paragraph } from './paragraph'
import { popover } from './popover'
import { radioGroup } from './radio-group'
import { select } from './select'
import { slider } from './slider'
import { switchRecipe } from './switch'
import { tabs } from './tabs'
import { textarea } from './textarea'
import { tooltip } from './tooltip'

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  icon,
  button,
  alert,
  alertDescription,
  alertTitle,
  paragraph,
  heading,
  badge,
  input,
  label,
  textarea,
}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  card,
  modal,
  accordian,
  tabs,
  select,
  popover,
  tooltip,
  radioGroup,
  checkbox,
  slider,
  switchRecipe,
}
