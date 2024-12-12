import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'

import { accordian } from './accordian'
import { alert, alertDescription, alertTitle } from './alert'
import { badge } from './badge'
import { button } from './button'
import { card } from './card'
import { heading } from './heading'
import { icon } from './icons'
import { modal } from './modal'
import { paragraph } from './paragraph'

export const recipes: Record<string, Partial<RecipeConfig<RecipeVariantRecord>>> = {
  icon,
  button,
  alert,
  alertDescription,
  alertTitle,
  paragraph,
  heading,
  badge,
}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  card,
  modal,
  accordian,
}
