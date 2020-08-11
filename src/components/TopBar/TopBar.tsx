import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper } from './TopBar.styled'

export type TopBarProps = {
    sticky?: boolean
}

export const TopBar: Component<TopBarProps> = ({ children, sticky = false, ...props }) => {
    return (
        <Root $sticky={sticky} {...props}>
            <Wrapper $margin>{children}</Wrapper>
        </Root>
    )
}
