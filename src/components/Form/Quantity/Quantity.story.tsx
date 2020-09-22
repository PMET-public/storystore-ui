import React from 'react'
import Quantity from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Form from '..'
import { number, text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Form/Quantity', module)
    .add('Default', () => (
        <Form onChange={action('onUpdate')}>
            <Quantity label={text('label', 'Qty.')} min={number('min', 1)} max={number('max', 10)} name="test" addLabel="Add" removeLabel="Remove" onUpdate={action('onUpdate')} />
        </Form>
    ))
    .add('w/ Remove', () => (
        <Form onChange={action('onUpdate')}>
            <Quantity name="test" addLabel="Add" removeLabel="Remove" onUpdate={action('onUpdate')} onRemove={action('onRemove')} />
        </Form>
    ))
