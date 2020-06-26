import React, { HTMLAttributes, ReactElement } from 'react'
import { Component } from '../../../lib'
import { Item } from './ColorSwatches.styled'
import { FormFieldProps, Field, Label, FieldInput, Error, FieldColors } from '../Form'
import { ColorSwatchesSkeleton } from './ColorSwatches.skeleton'
import { useFormFieldError } from '../useFormFieldError'
import Carousel from '../../Carousel'

export type ColorSwatchesProps = FormFieldProps & {
    loading?: boolean
    type?: 'radio' | 'checkbox'
    items: Array<
        {
            label: ReactElement | string
            color: string
            disabled?: boolean
        } & HTMLAttributes<HTMLInputElement>
    >
}

export const ColorSwatches: Component<ColorSwatchesProps> = ({ loading, error, color: _color, label, name, rules, type = 'radio', items = [], ...props }) => {
    const fieldError = useFormFieldError({ name, error })

    const color = _color ?? (fieldError && FieldColors.error)

    return (
        <Field {...props}>
            {loading ? (
                <ColorSwatchesSkeleton />
            ) : (
                <React.Fragment>
                    {label && (
                        <Label htmlFor={props.name} color={color}>
                            {label}
                        </Label>
                    )}

                    <Carousel gap={0.3} padding={0.3} show="auto" snap={false} hideScrollBar>
                        {items.map(({ label, color, ...item }, index) => (
                            <Item key={index}>
                                <FieldInput id={`swatch-group__${name}__${index}`} rules={rules} name={name} type={type} color={color as any} {...item} />
                                {/* @ts-ignore */}
                                <label htmlFor={`swatch-group__${name}__${index}`} aria-label={label}>
                                    <span style={{ backgroundColor: color }}></span>
                                </label>
                            </Item>
                        ))}
                    </Carousel>
                    <Error color={color as any}>{fieldError?.message}</Error>
                </React.Fragment>
            )}
        </Field>
    )
}
