import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const lineProgressDefaultVariants = {
  "size": "md",
  "strokeLinecap": "butt"
}
const lineProgressCompoundVariants = []

const lineProgressSlotNames = [
  [
    "root",
    "lineProgress__root"
  ],
  [
    "label",
    "lineProgress__label"
  ],
  [
    "track",
    "lineProgress__track"
  ],
  [
    "fill",
    "lineProgress__fill"
  ]
]
const lineProgressSlotFns = /* @__PURE__ */ lineProgressSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, lineProgressDefaultVariants, getSlotCompoundVariant(lineProgressCompoundVariants, slotName))])

const lineProgressFn = memo((props = {}) => {
  return Object.fromEntries(lineProgressSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const lineProgressVariantKeys = [
  "strokeLinecap",
  "size"
]
const getVariantProps = (variants) => ({ ...lineProgressDefaultVariants, ...compact(variants) })

export const lineProgress = /* @__PURE__ */ Object.assign(lineProgressFn, {
  __recipe__: false,
  __name__: 'lineProgress',
  raw: (props) => props,
  variantKeys: lineProgressVariantKeys,
  variantMap: {
  "strokeLinecap": [
    "butt",
    "round"
  ],
  "size": [
    "sm",
    "md",
    "lg"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, lineProgressVariantKeys)
  },
  getVariantProps
})