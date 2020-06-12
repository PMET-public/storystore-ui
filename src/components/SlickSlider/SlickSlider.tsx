import React, { useState, useCallback, HTMLAttributes, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles } from './SlickSlider.styled'
import Slick, { Settings } from 'react-slick'

// const Slick = typeof window === 'undefined' ? null : require('react-slick').default

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

    /**
     * SSR Hack
     */
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => {
        if (!isBrowser) setIsBrowser(true)
    }, [isBrowser, setIsBrowser])

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

    return isBrowser ? (
        <React.Fragment>
            <SlickGlobalStyles />
            {items.length > 0 ? (
                <Root
                    key={isBrowser ? 'csr' : 'ssr'}
                    $draggable={draggable}
                    as={Slick}
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
    ) : null
}
