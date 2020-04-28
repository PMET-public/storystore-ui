import React from 'react'
import HotSpots from '.'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

const PriceTag = styled.div`
    font-weight: 600;
    & > a {
        margin-right: 1rem;
    }

    & > em {
        border-radius: 0.5rem;
        padding-left: 1rem;
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.onSecondary};
    }
`

const PriceTagMock = ({ text, price }: any) => (
    <PriceTag>
        <a href="#">{text}</a>
        <em>{price}</em>
    </PriceTag>
)

storiesOf('📦 Components/HotSpots', module)
    .add('Default', () => (
        <HotSpots
            image={{
                alt: 'Shop the Look',
                src: require('../../../public/images/products-hotspots.jpg'),
                height: 600,
                width: 600,
            }}
            description="A lot of stuffs"
        >
            <HotSpots.Item coords={{ x: 15, y: 42 }} id="0" label="Sweater">
                <PriceTagMock text="Knit Sweater" price="$29.99" />
            </HotSpots.Item>
            <HotSpots.Item coords={{ x: 78, y: 30 }} id="1" label="Bag">
                <PriceTagMock text="Handbag" price="$19.99" />
            </HotSpots.Item>
            <HotSpots.Item coords={{ x: 63, y: 75 }} id="2" label="Pants">
                <PriceTagMock text="Cotton Chinos" price="$29.99" />
            </HotSpots.Item>
        </HotSpots>
    ))
    .add('w/ Link', () => (
        <HotSpots
            image={{
                alt: 'Shop the look',
                src: require('../../../public/images/products-hotspots.jpg'),
                height: 600,
                width: 600,
            }}
            description="A lot of stuffs"
        >
            <a href="https://magento.com" target="blank">
                <HotSpots.Item coords={{ x: 15, y: 42 }} id="0" label="Sweater" />
            </a>
        </HotSpots>
    ))
