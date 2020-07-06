import React, { useState } from 'react'
import { Component } from '../../lib'
import { Root, Item, Label, IconOn, IconOff, IconDirection, HiddenInput } from './SortBy.styled'
import Form, { FormProps } from '../Form'
import { useFormContext } from 'react-hook-form'

import IconASC from 'remixicon/icons/Editor/sort-asc.svg'
import IconDESC from 'remixicon/icons/Editor/sort-desc.svg'
import RadioOnIconSvg from 'remixicon/icons/System/radio-button-fill.svg'
import RadioOffIconSvg from 'remixicon/icons/System/checkbox-blank-circle-fill.svg'

export type SortByItemProps = {
    label: string
    value: string
}

export type SortByProps = FormProps<any> & { items: SortByItemProps[] }

export const SortByItem: Component<SortByItemProps> = ({ label, value }) => {
    const { register, getValues } = useFormContext()

    const defaultOrder = getValues('sortBy')?.split(',')[1] ?? 'DESC'

    const [order, setOrder] = useState<'ASC' | 'DESC'>(defaultOrder)

    return (
        <Item>
            <HiddenInput id={`sortBy__radio__${value}--ASC`} type="radio" name="sortBy" value={[value, 'ASC']} ref={register()} />
            <HiddenInput id={`sortBy__radio__${value}--DESC`} type="radio" name="sortBy" value={[value, 'DESC']} ref={register()} />

            <Label
                htmlFor={`sortBy__radio__${value}--${order}`}
                onClick={() => {
                    const [_value, _order = 'ASC'] = getValues('sortBy').split(',')

                    if (_value === value && _order === order) {
                        setOrder(order === 'DESC' ? 'ASC' : 'DESC')
                    }
                }}
            >
                <IconOff as={RadioOffIconSvg} />
                <IconOn as={RadioOnIconSvg} />

                {label}

                {order === 'ASC' ? <IconDirection as={IconASC} /> : <IconDirection as={IconDESC} />}
            </Label>
        </Item>
    )
}

export const SortBy: Component<SortByProps> = ({ items = [], ...props }) => {
    return (
        <Root as={Form} {...props}>
            {items.map(item => (
                <SortByItem key={`${item.label}--${item.value}`} {...item} />
            ))}
        </Root>
    )
}
