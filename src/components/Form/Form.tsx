import React, { useCallback, useEffect, FormHTMLAttributes, LabelHTMLAttributes, InputHTMLAttributes, ReactElement } from 'react'
import { Component, Props, Override } from '../../lib'
import { Root, Field as FieldRoot, Label as LabelRoot, Error as ErrorRoot, Input as InputRoot, FormError as FormErrorRoot, FormSuccess as FormSuccessRoot, FieldColors } from './Form.styled'

export { FieldColors } from './Form.styled'

import { FormProvider, useForm, useFormContext, UseFormOptions, ValidationRules } from 'react-hook-form'

import { UseFormMethods } from 'react-hook-form/dist/types/form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

/** Form */
export type FormProps<P> = Override<
    FormHTMLAttributes<any>,
    {
        options?: UseFormOptions
        onInit?: (values: any) => any
        onValues?: (values: any) => any
        onErrors?: (values: FieldErrors<any>) => any
        onSubmit?: (values: any) => any
    }
>

export type FormContext = UseFormMethods

export const Form: Component<FormProps<any>> = React.forwardRef(({ children, onSubmit, onErrors, onValues, onInit, onChange, options, ...props }, ref: any) => {
    const form = useForm(options)

    if (ref) ref.current = form

    const handleOnValueChanges = useCallback(
        e => {
            const values = form.getValues()
            if (onValues) onValues(values)
            if (onChange) onChange(e)
        },
        [onChange, onValues, form]
    )

    useEffect(() => {
        const values = form.getValues()
        if (onInit) onInit(values)
    }, [onInit])

    useEffect(() => {
        if (onErrors && Object.entries(form.errors).length > 0) {
            onErrors(form.errors)
        }
    }, [onErrors, form.errors])

    return (
        <FormProvider {...form}>
            <Root onSubmit={onSubmit && form.handleSubmit(onSubmit)} onChange={handleOnValueChanges} {...props}>
                {children}
            </Root>
        </FormProvider>
    )
})

Form.displayName = 'Form'

export type FormFieldProps = Props<{
    name: string
    label?: ReactElement | string
    error?: string
    color?: FieldColors
    rules?: ValidationRules
}>

/** Field */

export const Field: Component = ({ children, ...props }) => {
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
export type FieldInputProps = InputHTMLAttributes<any> & { rules?: ValidationRules; color?: FieldColors }

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

/** Error */
export const FormSuccess: Component<FormErrorProps> = ({ children, ...props }) => {
    return <FormSuccessRoot {...props}>{children}</FormSuccessRoot>
}
