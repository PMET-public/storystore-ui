import React from 'react'
import Register from './'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Account/Register', module).add('Default', () => (
    <Register
        title={text('title', 'Create Account')}
        description={text('description', 'Register to get access to digital coupons, shopping lists, and more.')}
        success={text('success', '')}
        error={text('error', '')}
        onSubmit={action('onSubmit')}
        buttons={[
            { type: 'submit', text: 'Register' },
            { outline: true, text: 'Log In' },
        ]}
    />
))
