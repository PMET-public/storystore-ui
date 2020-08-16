import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Badge, ImageWrapper, Colors, Color, Details, Title, PriceWrapper } from './ProductItem.styled'
import { ProductItemSkeleton } from './ProductItem.skeleton'
import Image, { ImageProps } from '../Image'
import Price, { PriceProps } from '../Price'

export type ProductItemProps = {
    loading?: boolean
    badge?: Props<{
        text: string
    }>
    colors?: Array<Props<{ label: string; value: string }>>
    image: ImageProps
    price: PriceProps
    title: Props<{
        text: string
    }>
}

export const ProductItem: Component<ProductItemProps> = ({ loading, badge, colors, image, price, title, ...props }) => {
    return (
        <Root {...props}>
            {loading ? (
                <ProductItemSkeleton />
            ) : (
                <React.Fragment>
                    {badge && (
                        <Badge as="span" {...badge}>
                            {badge.text}
                        </Badge>
                    )}

                    <ImageWrapper>
                        <Image width={4} height={5} vignette {...image} />
                    </ImageWrapper>

                    <Details>
                        <Title {...title}>{title.text}</Title>

                        <PriceWrapper>
                            <Price {...price} />
                        </PriceWrapper>

                        <Colors>
                            {colors?.map(({ label, value, ...color }, index) => (
                                <Color arial-label={label} key={index} style={{ backgroundColor: value }} {...color} />
                            ))}
                        </Colors>
                    </Details>
                </React.Fragment>
            )}
        </Root>
    )
}
