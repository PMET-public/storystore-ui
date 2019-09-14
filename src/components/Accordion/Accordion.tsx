import React, { createContext, useState, useContext, useRef } from 'react'
import { Component } from '../../lib'
import { Root, Item, Button, ButtonLabel, ButtonIcon, Content } from './Accordion.styled'

import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'

import ArrowIconSvg from 'remixicon/icons/System/arrow-down-s-line.svg'

export type AccordionProps = {
    defaultSelected?: number
}

export type AccordionItemProps = {
    label: string
}

const ItemContext = createContext({ index: 0, active: false, onSelect: () => {} })

type CompoundComponent = {
    Item: Component<AccordionItemProps>
}

export const Accordion: Component<AccordionProps> & CompoundComponent = ({
    children,
    defaultSelected = -1,
    ...props
}) => {
    const [selected, setSelected] = useState(defaultSelected)

    return (
        <Root {...props}>
            {React.Children.map(children, (child, index) => {
                const active = selected === index
                const onSelect = () => setSelected(index)

                return (
                    <ItemContext.Provider key={index} value={{ index, active, onSelect }}>
                        {child}
                    </ItemContext.Provider>
                )
            })}
        </Root>
    )
}

Accordion.Item = ({ children, label, ...props }) => {
    const wrapperElemRef = useRef(null)

    const { height } = useMeasure(wrapperElemRef)

    const { active, onSelect } = useContext(ItemContext)

    const transition = useSpring(
        active
            ? {
                  height,
                  opacity: 1,
              }
            : {
                  height: 0,
                  opacity: 0,
              }
    )

    const triggerSelect = () => onSelect()

    return (
        <Item {...props}>
            <Button type="button" onClick={triggerSelect}>
                <ButtonLabel>{label}</ButtonLabel>
                <ButtonIcon $active={active}>
                    <ArrowIconSvg />
                </ButtonIcon>
            </Button>

            <animated.div style={{ overflow: 'hidden', position: 'relative', ...transition }}>
                <Content ref={wrapperElemRef}>{children}</Content>
            </animated.div>
        </Item>
    )
}
