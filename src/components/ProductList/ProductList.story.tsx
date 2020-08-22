import React from 'react'
import ProductList from '.'
import { storiesOf } from '@storybook/react'
import { number, boolean } from '@storybook/addon-knobs'

const DelayedImage = 'https://deelay.me/2000/https://vignette.wikia.nocookie.net/theoffice/images/c/c5/Dwight_.jpg/revision/latest/scale-to-width-down/700'

storiesOf('📦 Components/ProductList', module).add('Default', () => (
    <ProductList
        loading={boolean('loading', false)}
        loadingMore={boolean('loadingMore', false)}
        items={new Array(number('# items', 7)).fill(null).map(() => ({
            image: {
                alt: '',
                src: DelayedImage,
            },
            price: {
                regular: 49.99,
                special: 39.99,
                label: 'Starting at',
            },
            title: {
                text: 'Circle Hooded Ice Flee',
            },
            colors: [
                { label: 'brown', value: 'brown' },
                { label: 'gray', value: 'gray' },
                { label: 'black', value: 'black' },
                { label: 'blue', value: 'blue' },
            ],
        }))}
    />
))
