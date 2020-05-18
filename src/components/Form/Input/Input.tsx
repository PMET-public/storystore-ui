import React, { useState, useCallback, useMemo, ChangeEvent, FocusEvent } from 'react'
import { Component } from '../../../lib'
import { Label as LabelRoot } from './Input.styled'
import { FormFieldProps, Field, FieldInput, Error, FieldColors } from '../Form'
import { InputSkeleton } from './Input.skeleton'
import { useFormFieldError } from '../useFormFieldError'

export type InputProps = FormFieldProps & {
    loading?: boolean
}

export const Input: Component<InputProps> = ({ as, error, color: _color, label, loading, name, rules, onBlur, onChange, onFocus, ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    const { defaultValue, value = defaultValue, placeholder } = props

    const hasErrors = Boolean(fieldError)

    const defaultActive = useMemo(() => {
        return !!value || !!placeholder || hasErrors
    }, [value, placeholder, hasErrors])

    const [active, setActive] = useState<boolean>(defaultActive)

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
        <Field as={as}>
            {label && (
                <LabelRoot htmlFor={`field-input__${name}`} color={color} $active={loading || defaultActive || active || hasErrors}>
                    {label}
                </LabelRoot>
            )}
            <React.Fragment>
                {loading ? (
                    <InputSkeleton />
                ) : (
                    <FieldInput id={`field-input__${name}`} type="text" onFocus={handleOnFocus} onChange={handleOnChange} onBlur={handleOnBlur} name={name} color={color} rules={rules} {...props} />
                )}
                <Error color={color}>{fieldError?.message}</Error>
            </React.Fragment>
        </Field>
    )
}
