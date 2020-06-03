import React from 'react'
import { Component } from '../../lib'
import { Root } from './ProductCarousel.styled'
import { ProductItemSkeleton } from '../ProductItem/ProductItem.skeleton'
import SlickSlider, { SlickSliderProps } from '../SlickSlider'
import ProductItem, { ProductItemProps } from '../ProductItem'

export type ProductCarouselProps = {
    loading?: boolean
    items: ProductItemProps[]
} & SlickSliderProps

export const ProductCarousel: Component<ProductCarouselProps> = ({
    loading = false,
    items = [],
    accessibility = true,
    arrows = true,
    dots = true,
    speed = 400,
    infinite = true,
    centerMode = true,
    variableWidth = false,
    ...props
}) => {
    return (
        <Root
            as={SlickSlider}
            dots={dots}
            accessibility={accessibility}
            arrows={arrows}
            infinite={infinite}
            speed={speed}
            centerMode={centerMode}
            variableWidth={variableWidth}
            slidesToShow={4}
            slidestoScroll={1}
            responsive={[
                {
                    breakpoint: 1599,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 599,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ]}
            {...props}
        >
            {loading
                ? Array(6)
                      .fill(null)
                      .map((_, key) => <ProductItemSkeleton key={key} />)
                : items.map((item, key) => (
                      <ProductItem
                          key={key}
                          {...item}
                          image={{
                              ...item.image,
                          }}
                      />
                  ))}
        </Root>
    )
}
