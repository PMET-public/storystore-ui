import React, { useCallback, useEffect, FormHTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes } from 'react'
import { Component, Props, Override } from '../../lib'
import { Root, Field as FieldRoot, Label as LabelRoot, Error as ErrorRoot, Input as InputRoot, FormError as FormErrorRoot, FieldColors } from './Form.styled'

export { FieldColors } from './Form.styled'

import { FormContext, useForm, useFormContext, ValidationOptions, FieldErrors, OnSubmit, FormContextValues, UseFormOptions } from 'react-hook-form'

/** Form */
export type FormProps<P> = Override<
    FormHTMLAttributes<any>,
    {
        onValues?: (values: any) => any
        onErrors?: (values: FieldErrors<any>) => any
        options?: UseFormOptions
        onSubmit?: OnSubmit<P>
    }
>

export type FormContext = FormContextValues

export const Form: Component<FormProps<any>> = React.forwardRef(({ children, onSubmit, onErrors, onValues, onChange, options, ...props }, ref: any) => {
    const form = useForm(options)

    if (ref) ref.current = form

    const handleOnValueChanges = useCallback(
        e => {
            const values = form.getValues({ nest: true })
            if (onValues) onValues(values)
            if (onChange) onChange(e)
        },
        [onChange, onValues, form]
    )

    useEffect(() => {
        if (onErrors) onErrors(form.errors)
    }, [onErrors, form.errors])

    return (
        <FormContext {...form}>
            <Root onSubmit={onSubmit && form.handleSubmit(onSubmit)} onChange={handleOnValueChanges} {...props}>
                {children}
            </Root>
        </FormContext>
    )
})

export type FormFieldProps = Props<{
    name: string
    label?: string
    error?: string
    color?: FieldColors
    rules?: ValidationOptions
}>

/** Field */
export type FieldProps = {}

export const Field: Component<FieldProps> = ({ children, ...props }) => {
    return <FieldRoot {...props}>{children}</FieldRoot>
}

/** Label */
export type LabelProps = LabelHTMLAttributes<any> & { color?: FieldColors }

export const Label: Component<LabelProps> = ({ children, color, ...props }) => {
    return (
        <LabelRoot $color={color} {...props}>
            {children}
        </LabelRoot>
    )
}

/** FieldInput */
export type FieldInputProps = InputHTMLAttributes<any> & { rules?: ValidationOptions; color?: FieldColors }

export const FieldInput: Component<FieldInputProps> = ({ children, rules, color, ...props }) => {
    const { register } = useFormContext()

    return (
        <InputRoot $color={color} {...props} ref={register({ ...rules })}>
            {children}
        </InputRoot>
    )
}

/** Field Error */
export type ErrorProps = { color?: FieldColors }

export const Error: Component<ErrorProps> = ({ children, color, ...props }) => {
    return (
        <ErrorRoot $color={color} {...props}>
            {children}
        </ErrorRoot>
    )
}

/** Error */
export type FormErrorProps = { color?: FieldColors }

export const FormError: Component<FormErrorProps> = ({ children, color, ...props }) => {
    return (
        <FormErrorRoot color={color} {...props}>
            {children}
        </FormErrorRoot>
    )
}
