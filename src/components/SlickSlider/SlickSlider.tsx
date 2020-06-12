import React, { useState, useCallback, HTMLAttributes } from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles } from './SlickSlider.styled'
import { Settings } from 'react-slick'

const Slick = require('react-slick')

export type SlickSliderProps = Settings & {
    buttons?: {
        previous?: HTMLAttributes<HTMLButtonElement>
        next?: {
            text: HTMLAttributes<HTMLButtonElement>
        }
    }
}

export const SlickSlider: Component<SlickSliderProps> = ({ accessibility = true, onSwipe, buttons, fade = false, children, ...props }) => {
    const draggable = !fade

    const [swiped, setSwiped] = useState(false)

    const handleSwiped: typeof onSwipe = useCallback(
        x => {
            setSwiped(true)
            if (onSwipe) onSwipe(x)
        },
        [setSwiped, onSwipe]
    )

    const handleOnItemClick = useCallback(
        e => {
            if (swiped) {
                e.stopPropagation()
                e.preventDefault()
                setSwiped(false)
            }
        },
        [swiped, setSwiped]
    )

    const items = React.Children.toArray(children)

    return (
        <React.Fragment>
            <SlickGlobalStyles />
            {items.length > 0 ? (
                <Root
                    $draggable={draggable}
                    as={Slick.default}
                    respondTo="min"
                    draggable={draggable}
                    fade={fade}
                    accesibility={accessibility}
                    onSwipe={handleSwiped}
                    prevArrow={
                        <NavButton aria-label="previous" {...buttons?.previous}>
                            <ArrowIcon />
                        </NavButton>
                    }
                    nextArrow={
                        <NavButton aria-label="next" {...buttons?.next}>
                            <ArrowIcon />
                        </NavButton>
                    }
                    {...props}
                >
                    {items.map((item: any, key) => {
                        return <Item key={key}>{React.cloneElement(item, { onClickCapture: handleOnItemClick, draggable: false })}</Item>
                    })}
                </Root>
            ) : null}
        </React.Fragment>
    )
}
