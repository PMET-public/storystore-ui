import React from 'react'
import Skeleton from '.'
import { storiesOf } from '@storybook/react'

storiesOf('📦 Components/Skeleton', module).add('Default', () => (
    <Skeleton width={220} height={160}>
        <circle cx="10" cy="20" r="8" />
        <rect x="25" y="15" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="50" r="8" />
        <rect x="25" y="45" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="80" r="8" />
        <rect x="25" y="75" rx="5" ry="5" width="220" height="10" />
        <circle cx="10" cy="110" r="8" />
        <rect x="25" y="105" rx="5" ry="5" width="220" height="10" />
    </Skeleton>
))
