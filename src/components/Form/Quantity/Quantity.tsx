import React, { useState, useEffect, useCallback } from 'react'
import { Component } from '../../../lib'
import { Root, Actions, Plus, Minus, Value } from './Quantity.styled'

import { useThrottle } from '../../../hooks/useThrottle'

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
    defaultValue: inputValue = 1,
    maxValue,
    minValue = 1,
    addLabel,
    removeLabel,
    substractLabel,
    delay = 250,
    error,
    hideError,
    disabled,
    fixed,
    onUpdate: _onUpdate,
    onRemove: _onRemove,
    ...props
}) => {
    const [value, setValue] = useState(inputValue)
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

    const handleUpdate = useCallback(({ target }) => {
        setValue(Number(target.value))
    }, [])

    const handleSubstract = useCallback(() => {
        setValue(value - 1)
    }, [value, setValue])

    const handleAdd = useCallback(() => {
        setValue(value + 1)
    }, [value, setValue])

    return (
        <Field $type={props.type}>
            {label && (
                <Label htmlFor={`field-input__${name}`} color={color}>
                    {label}
                </Label>
            )}

            <Root>
                <Value>
                    <sub>x</sub>{' '}
                    <FieldInput
                        id={`field-input__${name}`}
                        name={name}
                        type="number"
                        onChange={handleUpdate}
                        size={2}
                        value={value}
                        rules={rules}
                        color={color}
                        disabled={fixed || disabled}
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
                            <Minus disabled={disabled || (_onRemove ? value < minValue : value <= minValue)} type="button" onClick={handleSubstract}>
                                {_onRemove && value <= minValue ? <RemoveIconSvg aria-label={substractLabel} /> : <MinusIconSvg aria-label={removeLabel} />}
                            </Minus>

                            <Plus disabled={disabled || value === maxValue} type="button" onClick={handleAdd}>
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
