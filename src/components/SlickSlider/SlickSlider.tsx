import React, { useState, useCallback, HTMLAttributes, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Item, NavButton, ArrowIcon, SlickGlobalStyles } from './SlickSlider.styled'
import { Settings } from 'react-slick'

const Slick = typeof window === 'undefined' ? null : require('react-slick').default

export type SlickSliderProps = Settings & {
    buttons?: {
        previous?: HTMLAttributes<HTMLButtonElement>
        next?: {
            text: HTMLAttributes<HTMLButtonElement>
        }
    }
}

export const SlickSlider: Component<SlickSliderProps> = ({ accessibility = true, buttons, beforeChange, afterChange, fade = false, children, ...props }) => {
    const draggable = !fade

    /**
     * SSR Hack
     */
    const [isBrowser, setIsBrowser] = useState(false)
    useEffect(() => {
        if (!isBrowser) setIsBrowser(true)
    }, [isBrowser, setIsBrowser])

    const [dragging, setDragging] = useState(false)

    const handleBeforeChange = useCallback(
        (currentSlide: number, nextSlide: number) => {
            if (draggable) setDragging(true)
            if (beforeChange) beforeChange(currentSlide, nextSlide)
        },
        [draggable, setDragging, beforeChange]
    )

    const handleAfterChange = useCallback(
        (currentSlide: number) => {
            if (draggable) setDragging(false)
            if (afterChange) afterChange(currentSlide)
        },
        [draggable, setDragging, afterChange]
    )

    const handleOnItemClick = useCallback(
        e => {
            if (draggable && dragging) {
                e.preventDefault()
                e.stopPropagation()
            }
        },
        [draggable, dragging]
    )

    const items = React.Children.toArray(children)

    return isBrowser ? (
        <React.Fragment>
            <SlickGlobalStyles />
            {items.length > 0 ? (
                <Root
                    // key={isBrowser ? 'csr' : 'ssr'}
                    $draggable={draggable}
                    as={Slick}
                    respondTo="min"
                    draggable={draggable}
                    fade={fade}
                    accesibility={accessibility}
                    beforeChange={handleBeforeChange}
                    afterChange={handleAfterChange}
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
                    {items.map((item: any, index) => {
                        return <Item key={index}>{React.cloneElement(item, { onClickCapture: handleOnItemClick, draggable: false })}</Item>
                    })}
                </Root>
            ) : null}
        </React.Fragment>
    ) : null
}
