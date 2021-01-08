import React, { useState, useEffect, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root, Actions, Plus, Minus, Value } from './Quantity.styled'

import { useThrottle } from '../../../hooks/useThrottle'
import { useFormContext } from 'react-hook-form'

import PlusIconSvg from 'remixicon/icons/System/add-line.svg'
import MinusIconSvg from 'remixicon/icons/System/subtract-line.svg'
import RemoveIconSvg from 'remixicon/icons/System/delete-bin-2-line.svg'
import { Label, Error, Field, FieldInput, FormFieldProps } from '../Form'
import { useFormFieldError } from '../useFormFieldError'
import { FieldColors } from '../Form.styled'

export type QuantityProps = FormFieldProps & {
    addLabel?: string
    removeLabel?: string
    substractLabel?: string
    delay?: number
    hideError?: boolean
    fixed?: boolean
    onUpdate?: (value: number) => any
    onRemove?: () => any
}

export const Quantity: Component<QuantityProps> = ({
    name,
    label,
    rules,
    color: _color,
    defaultValue = 1,
    maxValue,
    minValue = 1,
    addLabel,
    removeLabel,
    substractLabel,
    delay = 250,
    error,
    hideError,
    disabled,
    readOnly,
    fixed,
    onUpdate: _onUpdate,
    onRemove: _onRemove,
    ...props
}) => {
    const { watch, setValue } = useFormContext()

    const value = watch(name, defaultValue)

    const [loaded, setLoaded] = useState(false)

    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors[fieldError.type ?? 'error'])

    const onUpdate = useThrottle(() => {
        if (!loaded) return

        if (value < minValue && typeof _onRemove === 'function') {
            _onRemove()
        } else if (typeof _onUpdate === 'function') {
            _onUpdate(value)
        }
    }, delay)

    useEffect(onUpdate, [value])

    useEffect(() => setLoaded(true), [])

    const handleSubstract = useCallback(() => {
        setValue(name, Number(value) - 1, { shouldDirty: true })
    }, [setValue, name, value])

    const handleAdd = useCallback(() => {
        setValue(name, Number(value) + 1, { shouldDirty: true })
    }, [setValue, name, value])

    return (
        <Field $type={props.type}>
            {label && (
                <Label htmlFor={`field-input__${name}`} color={color}>
                    {label}
                </Label>
            )}

            <Root>
                <Value>
                    <sub>×</sub>{' '}
                    <FieldInput
                        id={`field-input__${name}`}
                        name={name}
                        type="number"
                        size={2}
                        defaultValue={defaultValue}
                        rules={rules}
                        color={color}
                        disabled={fixed || disabled}
                        readOnly={readOnly}
                        {...props}
                    />
                </Value>

                <Actions>
                    {fixed ? (
                        <Minus type="button" onClick={handleSubstract}>
                            <RemoveIconSvg aria-label={substractLabel} />
                        </Minus>
                    ) : (
                        <React.Fragment>
                            <Minus disabled={readOnly || disabled || (_onRemove ? value < minValue : value <= minValue)} type="button" onClick={handleSubstract}>
                                {_onRemove && value <= minValue ? <RemoveIconSvg aria-label={substractLabel} /> : <MinusIconSvg aria-label={removeLabel} />}
                            </Minus>

                            <Plus disabled={readOnly || disabled || value === maxValue} type="button" onClick={handleAdd}>
                                <PlusIconSvg aria-label={addLabel} />
                            </Plus>
                        </React.Fragment>
                    )}
                </Actions>
            </Root>

            {!hideError && <Error color={color}>{fieldError?.message}</Error>}
        </Field>
    )
}
