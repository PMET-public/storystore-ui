import React, { useState } from 'react'
import { Component } from '../../lib'
import { Root, Item, Label, Icon, HiddenInput } from './SortBy.styled'
import Form, { FormProps } from '../Form'
import { useFormContext } from 'react-hook-form'

import IconASC from 'remixicon/icons/Editor/sort-asc.svg'
import IconDESC from 'remixicon/icons/Editor/sort-desc.svg'
import IconNONE from 'remixicon/icons/System/checkbox-blank-circle-fill.svg'

export type SortByItemProps = {
    label: string
    value: string
}

export type SortByProps = FormProps<any> & { items: SortByItemProps[] }

export const SortByItem: Component<SortByItemProps> = ({ label, value }) => {
    const { register, getValues } = useFormContext()
    const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC')

    return (
        <Item>
            <HiddenInput id={`sortBy__radio__${value}--ASC`} type="radio" name="sortBy" value={[value, 'ASC']} ref={register()} />
            <HiddenInput id={`sortBy__radio__${value}--DESC`} type="radio" name="sortBy" value={[value, 'DESC']} ref={register()} />

            <Label
                htmlFor={`sortBy__radio__${value}--${order}`}
                onClick={() => {
                    const [_value, _order] = getValues('sortBy').split(',')

                    if (_value === value && _order === order) {
                        setOrder(order === 'DESC' ? 'ASC' : 'DESC')
                    }
                }}
            >
                <Icon as={IconNONE} />
                {order === 'ASC' ? <Icon as={IconASC} /> : <Icon as={IconDESC} />}
                {label}
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
