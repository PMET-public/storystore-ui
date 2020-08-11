import React from 'react'
import Filters, { FiltersProps } from '.'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'

storiesOf('📦 Components/Filters', module).add('Default', () => {
    const FiltersMockData: FiltersProps = {
        onValues: action('onValues'),
        onSubmit: action('onSubmit'),
        title: 'Filters',
        loading: boolean('loading', false),
        groups: [
            {
                title: 'Fashion',
                name: 'Fashion',
                items: [
                    {
                        count: 7,
                        href: '#',
                        label: '14K Gold',
                        value: 'Gold--value',
                    },
                    {
                        count: 68,
                        href: '#',
                        label: 'Acrylic',
                        value: 'Acrylic--value',
                    },
                    {
                        count: 68,
                        href: '#',
                        label: 'Cashmere',
                        value: 'Cashmere--value',
                    },
                    {
                        count: 5,
                        href: '#',
                        label: 'Sterling Silver',
                        value: 'Sterling--value',
                    },
                    {
                        count: 437,
                        href: '#',
                        label: 'Cotton',
                        value: 'Cotton--value',
                    },
                    {
                        count: 187,
                        href: '#',
                        label: 'Linen',
                        value: 'Linen--value',
                    },
                    {
                        count: 16,
                        href: '#',
                        label: 'Leather',
                        value: 'Leather--value',
                    },
                    {
                        count: 119,
                        href: '#',
                        label: 'Nylon',
                        value: 'Nylon--value',
                    },
                    {
                        count: 310,
                        href: '#',
                        label: 'Organic Cotton',
                        value: 'Organic--value',
                    },
                    {
                        count: 140,
                        href: '#',
                        label: 'Polyester',
                        value: 'Polyester--value',
                    },
                    {
                        count: 221,
                        href: '#',
                        label: 'Rayon',
                        value: 'Rayon--value',
                    },
                    {
                        count: 89,
                        href: '#',
                        label: 'Silk',
                        value: 'Silk--value',
                    },
                    {
                        count: 220,
                        href: '#',
                        label: 'Spandex',
                        value: 'Spandex--value',
                    },
                    {
                        count: 361,
                        href: '#',
                        label: 'Viscose',
                        value: 'Viscose--value',
                    },
                    {
                        count: 51,
                        href: '#',
                        label: 'Wool',
                        value: 'Wool--value',
                    },
                ],
            },
            {
                title: 'Style',
                name: 'Style',
                items: [
                    {
                        count: 195,
                        href: '#',
                        label: 'Above Knee',
                        value: 'Above--value',
                    },
                    {
                        count: 68,
                        href: '#',
                        label: 'Below Knee',
                        value: 'Below--value',
                    },
                    {
                        count: 85,
                        href: '#',
                        label: 'Ankle Length',
                        value: 'Ankle--value',
                    },
                    {
                        count: 34,
                        href: '#',
                        label: 'Halter Top',
                        value: 'Halter--value',
                    },
                    {
                        count: 204,
                        href: '#',
                        label: 'Short Sleeve',
                        value: 'Short--value',
                    },
                    {
                        count: 170,
                        href: '#',
                        label: 'Sleeveless',
                        value: 'Sleeveless--value',
                    },
                    {
                        count: 102,
                        href: '#',
                        label: 'Long Sleeve',
                        value: 'Long--value',
                    },
                    {
                        count: 102,
                        href: '#',
                        label: '3/4 Sleeve',
                        value: 'Sleeve--value',
                    },
                    {
                        count: 38,
                        href: '#',
                        label: 'Slim Fit',
                        value: 'Slim--value',
                    },
                    {
                        count: 51,
                        href: '#',
                        label: 'Wide Leg',
                        value: 'Wide--value',
                    },
                    {
                        count: 21,
                        href: '#',
                        label: 'Capri',
                        value: 'Capri--value',
                    },
                    {
                        count: 255,
                        href: '#',
                        label: 'Full Length',
                        value: 'Full--value',
                    },
                    {
                        count: 51,
                        href: '#',
                        label: 'Straight Leg',
                        value: 'Straight--value',
                    },
                    {
                        count: 119,
                        href: '#',
                        label: 'Open Front',
                        value: 'Open--value',
                    },
                    {
                        count: 153,
                        href: '#',
                        label: 'Crew',
                        value: 'Crew--value',
                    },
                    {
                        count: 17,
                        href: '#',
                        label: 'Hooded',
                        value: 'Hooded--value',
                    },
                    {
                        count: 51,
                        href: '#',
                        label: 'Scoopneck',
                        value: 'Scoopneck--value',
                    },
                    {
                        count: 34,
                        href: '#',
                        label: 'V-neck',
                        value: 'neck--value',
                    },
                    {
                        count: 51,
                        href: '#',
                        label: 'Button-down',
                        value: 'Button--value',
                    },
                ],
            },
            {
                title: 'Color',
                name: 'Color',
                items: [
                    {
                        count: 72,
                        href: '#',
                        label: 'Gold',
                        value: 'Gold--value',
                    },
                    {
                        count: 156,
                        href: '#',
                        label: 'Peach',
                        value: 'Peach--value',
                    },
                    {
                        count: 144,
                        href: '#',
                        label: 'Khaki',
                        value: 'Khaki--value',
                    },
                    {
                        count: 6,
                        href: '#',
                        label: 'Silver',
                        value: 'Silver--value',
                    },
                    {
                        count: 223,
                        href: '#',
                        label: 'Lilac',
                        value: 'Lilac--value',
                    },
                    {
                        count: 223,
                        href: '#',
                        label: 'Rain',
                        value: 'Rain--value',
                    },
                    {
                        count: 134,
                        href: '#',
                        label: 'Mint',
                        value: 'Mint--value',
                    },
                    {
                        count: 97,
                        href: '#',
                        label: 'Lily',
                        value: 'Lily--value',
                    },
                    {
                        count: 91,
                        href: '#',
                        label: 'Latte',
                        value: 'Latte--value',
                    },
                    {
                        count: 16,
                        href: '#',
                        label: 'Cocoa',
                        value: 'Cocoa--value',
                    },
                ],
            },
            {
                title: 'Has Video',
                name: 'Has Video',
                items: [
                    {
                        count: 18,
                        href: '#',
                        label: 'Yes',
                        value: 'true',
                    },
                    {
                        count: 1133,
                        href: '#',
                        label: 'No',
                        value: 'false',
                    },
                ],
            },
        ],
    }
    return <Filters {...FiltersMockData} />
})
