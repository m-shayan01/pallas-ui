import { compact, getSlotCompoundVariant, memo, splitProps } from '../helpers.mjs';
import { createRecipe } from './create-recipe.mjs';

const toastDefaultVariants = {
  "variant": "bordered",
  "placement": "topRight",
  "iconType": "info"
}
const toastCompoundVariants = []

const toastSlotNames = [
  [
    "root",
    "toast__root"
  ],
  [
    "icon",
    "toast__icon"
  ],
  [
    "title",
    "toast__title"
  ],
  [
    "description",
    "toast__description"
  ],
  [
    "close",
    "toast__close"
  ],
  [
    "action",
    "toast__action"
  ],
  [
    "actions",
    "toast__actions"
  ],
  [
    "viewport",
    "toast__viewport"
  ]
]
const toastSlotFns = /* @__PURE__ */ toastSlotNames.map(([slotName, slotKey]) => [slotName, createRecipe(slotKey, toastDefaultVariants, getSlotCompoundVariant(toastCompoundVariants, slotName))])

const toastFn = memo((props = {}) => {
  return Object.fromEntries(toastSlotFns.map(([slotName, slotFn]) => [slotName, slotFn.recipeFn(props)]))
})

const toastVariantKeys = [
  "variant",
  "iconType",
  "placement"
]
const getVariantProps = (variants) => ({ ...toastDefaultVariants, ...compact(variants) })

export const toast = /* @__PURE__ */ Object.assign(toastFn, {
  __recipe__: false,
  __name__: 'toast',
  raw: (props) => props,
  variantKeys: toastVariantKeys,
  variantMap: {
  "variant": [
    "bordered",
    "shadow"
  ],
  "iconType": [
    "info",
    "warning",
    "success",
    "error"
  ],
  "placement": [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]
},
  splitVariantProps(props) {
    return splitProps(props, toastVariantKeys)
  },
  getVariantProps
})