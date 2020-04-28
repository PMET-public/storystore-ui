import React from 'react'
import Error from '.'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'

storiesOf('📦 Components/Error', module).add('Default', () => <Error type={select('type', ['500', '404', '401', 'Offline'], '500')}>{text('message', 'Internal Server Error.')}</Error>)
