import React from 'react'
import Quantity from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Form from '..'
import { boolean, number, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Quantity', module)
    .add('Default', () => (
        <Form onValues={action('onValues')} onSubmit={action('onSubmit')}>
            <Quantity label={text('label', 'Qty.')} min={number('min', 1)} max={number('max', 10)} name="test" addLabel="Add" removeLabel="Remove" readOnly={boolean('Read Only', false)} />
        </Form>
    ))
    .add('w/ Remove', () => (
        <Form onValues={action('onValues')}>
            <Quantity name="test" addLabel="Add" removeLabel="Remove" onRemove={action('onRemove')} />
        </Form>
    ))
