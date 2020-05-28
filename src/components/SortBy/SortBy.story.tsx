import React from 'react'
import SortBy from './'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/SortBy', module).add('Default', () => (
    <SortBy
        options={{ defaultValues: { sortBy: 'price,ASC' } }}
        onValues={action('onValues')}
        items={[
            { label: 'Relevance', value: 'relevance' },
            { label: 'Price', value: 'price' },
            { label: 'Newest', value: 'newest' },
        ]}
    />
))
