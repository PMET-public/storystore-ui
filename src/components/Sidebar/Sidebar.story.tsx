import React from 'react'
import Sidebar from '.'
import { storiesOf } from '@storybook/react'
import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('📦 Components/Sidebar', module).add('Default', () => {
    const open = boolean('open', false)

    return (
        <Sidebar position={select('position', ['left', 'right'], 'left')} onClose={action('onClose')}>
            {open && <div>Howdy 👋</div>}
        </Sidebar>
    )
})
