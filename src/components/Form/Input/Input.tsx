import React, { useState, useCallback, ChangeEvent, FocusEvent, useEffect } from 'react'
import { Component } from '../../../lib'
import { Label as LabelRoot } from './Input.styled'
import { FormFieldProps, Field, FieldInput, Error, FieldColors } from '../Form'
import { InputSkeleton } from './Input.skeleton'
import { useFormFieldError } from '../useFormFieldError'
import { useFormContext } from 'react-hook-form'

export type InputProps = FormFieldProps & {
    loading?: boolean
}

export const Input: Component<InputProps> = ({ as, autoFocus, error, color: _color, label, loading, name, rules, onBlur, onChange, onFocus, ...props }) => {
    const { getValues } = useFormContext()

    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors[fieldError.type ?? 'error'])

    const { defaultValue, value = defaultValue ?? getValues(name), placeholder } = props

    const hasErrors = Boolean(fieldError)

    const [active, setActive] = useState(loading || !!value || !!placeholder || hasErrors)

    useEffect(() => {
        setActive(autoFocus || loading || !!value || !!placeholder || hasErrors)
    }, [autoFocus, loading, value, placeholder, hasErrors])

    const handleOnChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const { value, placeholder } = event.currentTarget
            setActive(!!value || !!placeholder || hasErrors)
            if (onChange) onChange(event)
        },
        [hasErrors, onChange]
    )

    const handleOnFocus = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            setActive(true)
            if (onFocus) onFocus(event)
        },
        [onFocus]
    )

    const handleOnBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            const { value, placeholder } = event.currentTarget
            setActive(!!value || !!placeholder || hasErrors)
            if (onBlur) onBlur(event)
        },
        [hasErrors, onBlur]
    )

    return (
        <Field as={as} $type={props.type}>
            {label && (
                <LabelRoot htmlFor={`field-input__${name}`} color={color} $active={active}>
                    {label}
                </LabelRoot>
            )}
            <React.Fragment>
                {loading ? (
                    <InputSkeleton />
                ) : (
                    <FieldInput
                        id={`field-input__${name}`}
                        onFocus={handleOnFocus}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        name={name}
                        color={color}
                        rules={rules}
                        autoFocus={autoFocus}
                        {...props}
                    />
                )}
                <Error color={color}>{fieldError?.message}</Error>
            </React.Fragment>
        </Field>
    )
}
