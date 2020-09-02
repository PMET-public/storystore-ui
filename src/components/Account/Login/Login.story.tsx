import React from 'react'
import Login from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Account/Login', module).add('Default', () => (
    <Login
        title={text('title', 'Log In')}
        description={text('description', '')}
        success={text('success', '')}
        error={text('error', '')}
        onSubmit={action('onSubmit')}
        buttons={[
            { type: 'submit', text: 'Login' },
            { outline: true, text: 'Create Account' },
        ]}
    />
))
