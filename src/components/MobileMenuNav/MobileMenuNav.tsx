import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Categories, Title, Category, CmsBlock, CTAs, CloseButton } from './MobileMenuNav.styled'
import { animated, useTransition } from 'react-spring'
import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'
import CloseSVG from 'remixicon/icons/System/close-line.svg'
import CategoryIconSVG from 'remixicon/icons/Finance/price-tag-3-fill.svg'

export type MobileMenuNavProps = {
    defaultActive?: boolean
    categories?: {
        title: string
        items: Array<
            Props<{
                text: string
                image?: ImageProps
            }>
        >
    }
    ctas?: Array<ButtonProps>
    onClose?: (...args: any) => any
}

export const MobileMenuNav: Component<MobileMenuNavProps> = ({ active = false, categories, children, ctas, onClose, ...props }) => {
    const transitions = useTransition(active, null, {
        from: { opacity: 0, transform: 'scale(0.95)', transformOrigin: 'top right' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.95)' },
        config: {
            duration: 200,
        },
    })

    return (
        <React.Fragment>
            {transitions.map(
                ({ key, item, props: style }) =>
                    item && (
                        <Root as={animated.div} key={key} {...props} style={{ ...props.style, ...style }}>
                            <CloseButton onClick={onClose}>
                                <CloseSVG />
                            </CloseButton>
                            <Wrapper>
                                {categories && (
                                    <React.Fragment>
                                        <Title>{categories.title}</Title>
                                        <Categories>
                                            {categories.items.map(({ _id, text, image, ...category }, key = _id) => (
                                                <Category key={key} {...category}>
                                                    {image ? <Image alt="null" {...image} /> : <CategoryIconSVG />}
                                                    <span>{text}</span>
                                                </Category>
                                            ))}
                                        </Categories>
                                    </React.Fragment>
                                )}
                                {children && <CmsBlock>{children}</CmsBlock>}
                                {ctas?.map((cta, key) => (
                                    <CTAs key={key}>
                                        <Button style={{ width: '100%' }} {...cta} />
                                    </CTAs>
                                ))}
                            </Wrapper>
                        </Root>
                    )
            )}
        </React.Fragment>
    )
}
