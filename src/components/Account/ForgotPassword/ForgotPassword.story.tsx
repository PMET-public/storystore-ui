import React from 'react'
import ForgotPassword from './'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { text } from '@storybook/addon-knobs'

storiesOf('📦 Components/Account/ForgotPassword', module).add('Default', () => (
    <ForgotPassword
        title={text('title', 'Forgot Password?')}
        description={text('description', 'No problem. Enter your email address and we`ll send you details on how to recover it.')}
        success={text('success', 'Your request has been received. You will receive an email shortly. Please follow the instructions to recover your password.')}
        error={text('error', '')}
        onSubmit={action('onSubmit')}
        buttons={[
            { type: 'submit', text: 'Recover Password' },
            { outline: true, text: 'Log In' },
        ]}
    />
))
