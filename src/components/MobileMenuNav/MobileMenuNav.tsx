import React, { useState, useCallback } from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Categories, Category, ToggleButton, AdminBlock } from './MobileMenuNav.styled'
import MenuSVG from 'remixicon/icons/System/menu-line.svg'
import CloseSVG from 'remixicon/icons/System/close-line.svg'
import { animated, useTransition } from 'react-spring'
import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'

export type MobileMenuNavProps = {
    defaultActive?: boolean
    categories: Array<
        Props<{
            text: string
            image?: ImageProps
        }>
    >
    cta: ButtonProps
}

export const MobileMenuNav: Component<MobileMenuNavProps> = ({ defaultActive = false, categories, children, cta, ...props }) => {
    const [active, setActive] = useState(defaultActive)

    const handleToggleActive = useCallback(() => {
        setActive(!active)
    }, [active])

    const transitions = useTransition(active, null, {
        from: { opacity: 0, transform: 'scale(0.95)', transformOrigin: 'top right' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.95)' },
        config: {
            duration: 200,
        },
    })

    return (
        <Root {...props}>
            <ToggleButton $active={active} onClick={handleToggleActive}>
                {active ? <CloseSVG /> : <MenuSVG />}
            </ToggleButton>
            {transitions.map(
                ({ key, item, props }) =>
                    item && (
                        <Wrapper as={animated.div} key={key} style={props}>
                            <Categories>
                                {categories.map(({ _id, text, image }, key = _id) => (
                                    <Category key={key}>
                                        {image && <Image alt="null" {...image} />}
                                        <span>{text}</span>
                                    </Category>
                                ))}
                            </Categories>
                            {children}
                            {cta && (
                                <AdminBlock>
                                    <Button style={{ width: '100%' }} {...cta} />
                                </AdminBlock>
                            )}
                        </Wrapper>
                    )
            )}
        </Root>
    )
}
