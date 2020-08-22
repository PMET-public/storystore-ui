import React from 'react'
import ProductItem from '.'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'
import { text, object, boolean } from '@storybook/addon-knobs'

const StoryContainer = styled.div`
    max-width: 100vw;
    width: 60rem;
`

const DelayedImage = 'https://deelay.me/2000/https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/700'

storiesOf('📦 Components/ProductItem', module).add('Default', () => (
    <StoryContainer>
        <ProductItem
            loading={boolean('loading', false)}
            badge={{
                text: text('badge', 'New Arrival'),
            }}
            colors={object('colors', [
                { label: 'green', value: 'green' },
                { label: 'blue', value: 'blue' },
                { label: 'gray', value: 'gray' },
            ])}
            image={{
                alt: '',
                src: DelayedImage,
            }}
            price={{
                regular: 49.99,
                special: 39.99,
                label: 'Starting at',
            }}
            title={{
                text: text('title', 'Circle Hooded Ice Flee'),
            }}
        />
    </StoryContainer>
))
