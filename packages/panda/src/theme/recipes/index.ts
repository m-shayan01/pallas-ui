import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'

import { accordian } from './accordian'
import { alert, alertDescription, alertTitle } from './alert'
import { badge } from './badge'
import { button } from './button'
import { card } from './card'
import { heading } from './heading'
import { icon } from './icon'
import { input } from './input'
import { label } from './label'
import { modal } from './modal'
import { paragraph } from './paragraph'
import { select } from './select'

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
}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  card,
  modal,
  accordian,
  select,
}
