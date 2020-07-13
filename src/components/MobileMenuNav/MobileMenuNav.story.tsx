import React from 'react'
import MobileMenuNav from './'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/MobileMenuNav', module).add('Default', () => (
    <MobileMenuNav
        active={boolean('open', true)}
        categories={{
            title: 'Categories',
            items: [
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
            ],
        }}
        ctas={[
            {
                text: 'Sign in',
            },
        ]}
    ></MobileMenuNav>
))

storiesOf('📦 Components/MobileMenuNav', module).add('w/ CMS Block', () => (
    <MobileMenuNav
        active={boolean('open', true)}
        categories={{
            title: 'Categories',
            items: [
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
            ],
        }}
        ctas={[
            {
                text: 'Sign in',
            },
        ]}
    >
        <p style={{ padding: '2rem' }}>💅 Here is some HTML.</p>
    </MobileMenuNav>
))

storiesOf('📦 Components/MobileMenuNav', module).add('w/o Images', () => (
    <MobileMenuNav
        active={boolean('open', true)}
        categories={{
            title: 'Categories',
            items: [
                {
                    as: 'a',
                    href: '#',
                    text: "What's New",
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Women',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Men',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Gear',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Collection',
                },
                {
                    as: 'a',
                    href: '#',
                    text: 'Sale',
                },
            ],
        }}
        ctas={[
            {
                text: 'Sign in',
            },
        ]}
    ></MobileMenuNav>
))
