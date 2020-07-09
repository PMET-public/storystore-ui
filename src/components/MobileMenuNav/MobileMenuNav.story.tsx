import React from 'react'
import MobileMenuNav from './'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/MobileMenuNav', module).add('Default', () => (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'flex-end', padding: '2rem' }}>
        <MobileMenuNav
            defaultActive
            categories={[
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: "What's New",
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb2.jpg'),
                    },
                    text: 'Women',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb3.jpg'),
                    },
                    text: 'Men',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb4.jpg'),
                    },
                    text: 'Gear',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb5.jpg'),
                    },
                    text: 'Collection',
                },
                {
                    as: 'a',
                    href: '#',
                    image: {
                        src: require('../../../public/images/fashion-thumb1.jpg'),
                    },
                    text: 'Sale',
                },
            ]}
            cta={{
                text: 'Sign in',
            }}
        >
            {/* <p style={{ padding: '2rem' }}>💅 Here is some HTML.</p> */}
        </MobileMenuNav>
    </div>
))
