import React from 'react'
import { Component, Props } from '../../lib'
import { Root } from './Button.styled'
import Loader, { LoaderProps } from '../Loader'

export type ButtonProps = Props<{
    secondary?: boolean
    transparent?: boolean
    outline?: boolean
    text?: string
    loading?: LoaderProps
}>

export const Button: Component<ButtonProps> = ({ text, children = text, loading, transparent = false, secondary = false, outline = false, ...props }) => {
    return (
        <Root $secondary={secondary} $transparent={transparent} $outline={outline} as="button" {...props} disabled={!!loading || props.disabled}>
            {!!loading ? <Loader as="span" {...loading} /> : <span>{children}</span>}
        </Root>
    )
}
