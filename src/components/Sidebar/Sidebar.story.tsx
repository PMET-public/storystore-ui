import React, { useEffect } from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import { useSidebar } from '../../hooks/useSidebar'
import { Sidebar, SidebarProps } from './Sidebar'

const StoryComponent = ({ settings }: { settings: SidebarProps }) => {
    const { set } = useSidebar()

    useEffect(() => {
        set({ ...settings })
    }, [settings, set])

    return <div style={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🕴I am some content in the page.</div>
}

storiesOf('📦 Components/Sidebar', module).add('Default', () => {
    const settings = {
        open: boolean('open', false),
        position: select('position', ['left', 'right'], 'left'),
        content: <>Hello</>,
    }
    return (
        <Sidebar>
            <StoryComponent settings={settings} />
        </Sidebar>
    )
})
