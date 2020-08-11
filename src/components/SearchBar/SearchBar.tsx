import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, SearchIcon, Field, Count, ResetButton, ResetIcon } from './SearchBar.styled'

import { useThrottle } from '../../hooks/useThrottle'

import Loader, { LoaderProps } from '../Loader'

export type SearchBarProps = {
    clearButton?: boolean
    count?: string
    loading?: LoaderProps
    label?: string
    value?: string
    onUpdate?: (query: string) => any
    onSearch?: (query: string) => any
}

export const SearchBar: Component<SearchBarProps> = ({ clearButton = true, count, label = 'Search', loading, value: defaultValue = '', onSearch, onUpdate, ...props }) => {
    const [value, setValue] = useState(defaultValue)

    const throttledUpdate = useThrottle((query: string) => {
        if (onUpdate) onUpdate(query)
    }, 250)

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const query = event.currentTarget.value
            setValue(query)
            throttledUpdate(query)
        },
        [throttledUpdate]
    )

    const handleSubmit = useCallback(
        (event: FormEvent) => {
            event.preventDefault()
            if (onSearch && value) onSearch(value)
        },
        [onSearch, value]
    )

    const handleReset = useCallback(() => {
        setValue('')
        throttledUpdate('')
    }, [throttledUpdate])

    return (
        <Root {...props}>
            <form onSubmit={handleSubmit}>
                <Wrapper as="label">
                    <SearchIcon />

                    <Field aria-label={label} onChange={handleChange} placeholder={label} as="input" type="text" value={value} />

                    {<Count>{loading ? <Loader {...loading} /> : count}</Count>}
                    {clearButton && value.length > 0 && (
                        <ResetButton as="button" type="reset" aria-label="reset" onClick={handleReset}>
                            <ResetIcon />
                        </ResetButton>
                    )}
                </Wrapper>
            </form>
        </Root>
    )
}
