import React from 'react'
import Footer from '.'
import { storiesOf } from '@storybook/react'
import { FooterProps } from './Footer'

const FooterMockData: FooterProps = {
    loading: true,
    html: <>Footer goes here</>,
}

storiesOf('📦 Components/Footer', module).add('Default', () => <Footer {...FooterMockData} />)
