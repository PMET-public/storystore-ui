import React from 'react'
import { Component } from '../../lib'
import { Root, Screen } from './Sidebar.styled'

import { useTransition, animated } from 'react-spring'

export type SidebarProps = {
    position: 'left' | 'right'
    onClose?: () => void
}

export const Sidebar: Component<SidebarProps> = ({ children, position = 'left', onClose = () => {} }) => {
    const slideTransitions = useTransition(children, null, {
        from: {
            opacity: 0,
            transform: position === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
        },
        enter: {
            opacity: 1,
            transform: 'translateX(0)',
        },
        leave: {
            opacity: 0,
            transform: position === 'left' ? 'translateX(-100%)' : 'translateX(100%)',
        },
    })

    const fadeTransitions = useTransition(children, null, {
        from: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
        },
        leave: {
            opacity: 0,
        },
    })

    return (
        <React.Fragment>
            {slideTransitions.map(
                ({ item, key, props }) =>
                    item && (
                        <Root as={animated.div} $position={position} key={key} style={props}>
                            {item}
                        </Root>
                    )
            )}

            {fadeTransitions.map(({ item, key, props }) => item && <Screen as={animated.div} key={key} style={props} onClick={onClose} />)}
        </React.Fragment>
    )
}
