import React from 'react'
import ColorSwatches from '.'
import { storiesOf } from '@storybook/react'
import { object, boolean, text, select } from '@storybook/addon-knobs'
import { Form, FieldColors } from '../Form'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Form/ColorSwatches', module).add('Default', () => (
    <Form onSubmit={action('onSubmit')}>
        <ColorSwatches
            loading={boolean('loading', false)}
            label={text('label', '')}
            name="color"
            type="radio"
            items={object('list', [
                { label: 'Blue', color: 'blue' },
                { label: 'Red', color: 'red', disabled: true },
                { label: 'Teal', color: 'teal', defaultChecked: true },
                { label: 'purple', color: 'purple' },
                { label: 'yellow', color: 'yellow' },
            ])}
            onChange={action('onChange')}
            error={text('error', '')}
            color={select(
                'color',
                {
                    default: FieldColors.default,
                    error: FieldColors.error,
                    warning: FieldColors.warning,
                    notice: FieldColors.notice,
                },
                undefined
            )}
        />
    </Form>
))
