import React from 'react'
import EmptyCart from '.'
import { storiesOf } from '@storybook/react'
import Button from '../Button'

storiesOf('📦 Components/EmptyCart', module).add('Default', () => (
    <EmptyCart title={{ text: 'Shopping Bag' }}>
        <Button style={{ marginTop: '2rem' }}>Get Shopping</Button>
    </EmptyCart>
))
