import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Categories, Title, Category, CmsBlock, CTAs, CloseButton, Screen } from './MobileMenuNav.styled'
import { animated, useTransition } from 'react-spring'
import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'
import CloseSVG from 'remixicon/icons/System/close-line.svg'
import CategoryIconSVG from 'remixicon/icons/Finance/price-tag-3-fill.svg'
import { useResize } from '../../hooks/useResize'

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
    closeOnTouchOutside?: boolean
}

export const MobileMenuNav: Component<MobileMenuNavProps> = ({ active = false, categories, children, ctas, onClose, closeOnTouchOutside, ...props }) => {
    const transitions = useTransition(active, null, {
        from: { opacity: 0, transform: 'scale(0.95)', transformOrigin: 'top right' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.95)' },
        config: {
            duration: 200,
        },
    })

    const { vHeight } = useResize()

    return (
        <React.Fragment>
            {closeOnTouchOutside && active && <Screen onClick={onClose} />}

            {transitions.map(
                ({ key, item, props: style }) =>
                    item && (
                        <Root as={animated.div} key={key} {...props} style={{ ...props.style, ...style }}>
                            <CloseButton onClick={onClose}>
                                <CloseSVG />
                            </CloseButton>
                            <Wrapper $maxHeight={vHeight}>
                                {categories && (
                                    <React.Fragment>
                                        <Title>{categories.title}</Title>
                                        <Categories>
                                            {categories.items.map(({ _id, text, image, ...category }, key = _id) => (
                                                <li key={key}>
                                                    <Category {...category}>
                                                        {image ? <Image alt="null" {...image} /> : <CategoryIconSVG />}
                                                        <span>{text}</span>
                                                    </Category>
                                                </li>
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
