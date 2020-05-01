import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Title, Content, DoubleCheckIcon, ShoppingIcon, GraphicWrapper } from './EmptyCart.styled'

export type EmptyCartProps = {
    title: Props<{ text: string }>
    success?: boolean
}

export const EmptyCart: Component<EmptyCartProps> = ({ success, title, children, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                <GraphicWrapper>
                    {success && <DoubleCheckIcon />}
                    <ShoppingIcon />
                </GraphicWrapper>

                <Title {...title}>{title.text}</Title>
                {children && <Content>{children}</Content>}
            </Wrapper>
        </Root>
    )
}
