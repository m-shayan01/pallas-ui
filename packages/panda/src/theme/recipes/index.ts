import type { RecipeConfig, RecipeVariantRecord, SlotRecipeConfig } from '@pandacss/dev'

import { accordian } from './accordian'
import { alert, alertDescription, alertTitle } from './alert'
import { badge } from './badge'
import { button } from './button'
import { card } from './card'
import { checkbox } from './checkbox'
import { daypicker } from './daypicker'
import { heading } from './heading'
import { icon } from './icon'
import { input } from './input'
import { label } from './label'
import { menubar } from './menu-bar'
import { modal } from './modal'
import { paragraph } from './paragraph'
import { popover } from './popover'
import { progress } from './progress'
import { radioGroup } from './radio-group'
import { segmented } from './segmented'
import { select } from './select'
import { slider } from './slider'
import { spinner } from './spinner'
import { switchRecipe } from './switch'
import { tabs } from './tabs'
import { textarea } from './textarea'
import { toast } from './toast'
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
  label,
  textarea,
  spinner,
}

export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
  card,
  modal,
  accordian,
  menubar,
  toast,
  tabs,
  progress,
  select,
  popover,
  tooltip,
  radioGroup,
  checkbox,
  slider,
  switchRecipe,
  daypicker,
  input,
  segmented,
}
