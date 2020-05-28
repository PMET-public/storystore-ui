import React, { HTMLAttributes, ReactElement } from 'react'
import { Component } from '../../../lib'
import { Wrapper, Input, Item, OffIcon, OnIcon, Placeholder } from './Checkbox.styled'

import { FormFieldProps, Field, Label, Error, FieldInput, FieldColors } from '../Form'

import RadioOnIconSvg from 'remixicon/icons/System/radio-button-fill.svg'
import RadioOffIconSvg from 'remixicon/icons/System/checkbox-blank-circle-fill.svg'
import CheckboxOnIconSvg from 'remixicon/icons/System/checkbox-fill.svg'
import CheckboxOffIconSvg from 'remixicon/icons/System/checkbox-blank-fill.svg'
import { useFormFieldError } from '../useFormFieldError'

export type CheckboxProps = FormFieldProps & {
    type?: 'checkbox' | 'radio'
    items: Array<
        {
            _id?: string | number
            label: ReactElement | string
            value?: string
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const Checkbox: Component<CheckboxProps> = ({ as, error, color: _color, rules, label, name, placeholder, type = 'checkbox', items, ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    return (
        <fieldset>
            <Field as={as} {...props}>
                {label && (
                    <Label as="legend" color={color}>
                        {label}
                    </Label>
                )}

                {placeholder && <Placeholder>{placeholder}</Placeholder>}

                <Wrapper>
                    {items.map(({ _id, label, ...item }, index) => (
                        <Item key={_id ?? index}>
                            <FieldInput as={Input} type={type} name={name} rules={rules} color={color as any} {...item} />
                            <OffIcon as={type === 'radio' ? RadioOffIconSvg : CheckboxOffIconSvg} />
                            <OnIcon as={type === 'radio' ? RadioOnIconSvg : CheckboxOnIconSvg} />
                            <span>{label}</span>
                        </Item>
                    ))}
                </Wrapper>

                <Error color={color}>{fieldError?.message}</Error>
            </Field>
        </fieldset>
    )
}
