import React from 'react'
import { Component } from '../../lib'
import { Root, Wrapper, Svg, Label, Count } from './Icon.styled'
import { ReactComponentLike } from 'prop-types'

import { useTransition, animated } from 'react-spring'

export type IconProps = {
    count?: number
    svg?: ReactComponentLike
    text?: string | null
}

export const Icon: Component<IconProps> = ({ children, count, svg: SvgComponent, text, ...props }) => {
    const countTransitions = useTransition(count, p => p, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0) translateY(-4rem)', transformOrigin: 'center' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0) translateY(4rem)' },
    })

    const hasCount = typeof count === 'number'

    return (
        <Root {...props}>
            <Wrapper hasCount={hasCount}>
                {SvgComponent ? <Svg as={SvgComponent} /> : children}

                {countTransitions.map(({ item, props, key }) =>
                    item ? (
                        <Count>
                            <animated.span key={key} style={props}>
                                {item > 99 ? '+99' : count}
                            </animated.span>
                        </Count>
                    ) : null
                )}
            </Wrapper>

            {text ? <Label hasCount={hasCount}>{text}</Label> : null}
        </Root>
    )
}
