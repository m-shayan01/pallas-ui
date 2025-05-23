'use client'
import PrimitiveForm from '@pallas-ui/form'
import { type Assign, createStyleContext } from '@pallas-ui/style-context'
import { form } from '@styled-system/recipes'
import type { ComponentProps, JsxStyleProps } from '@styled-system/types'
import type * as React from 'react'

const { withProvider, withContext } = createStyleContext(form)

export const Provider = withProvider<
  React.ComponentRef<typeof PrimitiveForm.Provider>,
  Assign<ComponentProps<typeof PrimitiveForm.Provider>, JsxStyleProps>
>(PrimitiveForm.Provider, 'provider')

export const Label = withContext<
  React.ComponentRef<typeof PrimitiveForm.Label>,
  Assign<ComponentProps<typeof PrimitiveForm.Label>, JsxStyleProps>
>(PrimitiveForm.Label, 'label')

export const Description = withContext<
  React.ComponentRef<typeof PrimitiveForm.Description>,
  Assign<ComponentProps<typeof PrimitiveForm.Description>, JsxStyleProps>
>(PrimitiveForm.Description, 'description')

export const Message = withContext<
  React.ComponentRef<typeof PrimitiveForm.Message>,
  Assign<ComponentProps<typeof PrimitiveForm.Message>, JsxStyleProps>
>(PrimitiveForm.Message, 'message')

export const Field = PrimitiveForm.Field

export const Item = PrimitiveForm.Item

export const Control = PrimitiveForm.Control

export const useFormField = PrimitiveForm.useFormField

const Form = {
  Provider,
  Label,
  Description,
  Message,
  Field,
  Item,
  Control,
  useFormField,
}

export default Form
