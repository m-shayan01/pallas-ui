'use client'

import type * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import {
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  type UseFormReturn,
  useFormContext,
} from 'react-hook-form'

import { Label as RadixLabel } from '@radix-ui/react-label'

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)

const Field = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState, formState } = useFormContext()

  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

const Provider = React.forwardRef<
  React.ElementRef<'form'>,
  React.ComponentPropsWithoutRef<'form'> & {
    form: UseFormReturn<FieldValues>
    children: React.ReactNode
  }
>(({ form, children, ...props }, ref) => {
  return (
    <FormProvider {...form}>
      <form ref={ref} {...props}>
        {children}
      </form>
    </FormProvider>
  )
})

const Item = ({ children }: { children: React.ReactNode }) => {
  const id = React.useId()

  return <FormItemContext.Provider value={{ id }}>{children}</FormItemContext.Provider>
}

Item.displayName = 'Item'

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField()

  return (
    <RadixLabel
      ref={ref}
      data-field-state={error ? 'error' : 'success'}
      htmlFor={formItemId}
      {...props}
    />
  )
})
Label.displayName = 'Label'

const Control = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { formItemId, error } = useFormField()

  return (
    <Slot ref={ref} data-field-state={error ? 'error' : 'success'} id={formItemId} {...props} />
  )
})
Control.displayName = 'Control'

const Description = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField()

  return <p ref={ref} id={formDescriptionId} {...props} />
})
Description.displayName = 'Description'

const Message = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...props }, ref) => {
    const { error, formMessageId } = useFormField()
    const body = error ? String(error?.message ?? '') : children

    if (!body) {
      return null
    }

    return (
      <p ref={ref} id={formMessageId} data-field-state={error ? 'error' : 'success'} {...props}>
        {body}
      </p>
    )
  },
)
Message.displayName = 'Message'

export { useFormField, Provider, Item, Label, Control, Description, Message, Field }
