import React, { useState, useRef, useCallback, ReactElement } from 'react'
import { Component, Props } from '../../lib'
import { Root, Title, Wrapper, Group, ListWrapper, List, GroupLabel, Count, ToggleIcon, ToggleButton } from './Filters.styled'
import { FiltersSkeleton } from './Filters.skeleton'
import { useMeasure } from '../../hooks/useMeasure'

import { Form, FormProps } from '../Form'
import Checkbox from '../Form/Checkbox'

export type FiltersProps = FormProps<any> & {
    title?: ReactElement | string
    disabled?: boolean
    loading?: boolean
    groups: FiltersGroupProps[]
}

export const Filters: Component<FiltersProps> = ({ groups = [], disabled, title, loading, ...props }) => {
    const elRef = useRef<HTMLDivElement>(null)

    if (loading) return <FiltersSkeleton />

    return (
        <Root as={Form} {...props}>
            {title && <Title>{title}</Title>}
            <fieldset disabled={disabled}>
                <Wrapper ref={elRef}>
                    {groups.map(({ _id, ...group }, index) => (
                        <FiltersGroup key={_id ?? index} {...group} />
                    ))}
                </Wrapper>
            </fieldset>
        </Root>
    )
}

/**
 * Filters Group
 */

export type FiltersGroupProps = {
    _id?: string | number
    title: string
    name: string
    offset?: number
    type?: 'checkbox' | 'radio'
    items: Array<
        Props<{
            _id?: string | number
            count?: number
            label: string
            value: string
        }>
    >
}
const FiltersGroup: Component<FiltersGroupProps> = ({ name, type = 'checkbox', title, items = [], offset = 4, ...props }) => {
    const [open, setOpen] = useState(false)
    const handleOnToggle = useCallback(() => setOpen(!open), [open, setOpen])

    const elRef = useRef<HTMLDivElement>(null)

    const { height } = useMeasure(elRef)

    return (
        <Group {...props}>
            <ListWrapper $duration={items.length * 20 + 'ms'} style={{ maxHeight: open ? `${height / 10}rem` : `calc(2.3em * ${offset})` }}>
                <List ref={elRef}>
                    <GroupLabel>{title}</GroupLabel>

                    <Checkbox
                        type={type}
                        name={name}
                        items={items.map(({ _id, count, label, value, ...item }, index) => ({
                            _id: _id ?? index,
                            label: (
                                <>
                                    {label} {count && <Count>{count}</Count>}
                                </>
                            ),
                            value,
                            ...item,
                        }))}
                    />
                </List>
            </ListWrapper>

            {items.length > offset && (
                <div>
                    <ToggleButton $active={open} type="button" onClick={handleOnToggle}>
                        <ToggleIcon />
                        {open ? 'Less' : 'More'}
                    </ToggleButton>
                </div>
            )}
        </Group>
    )
}
