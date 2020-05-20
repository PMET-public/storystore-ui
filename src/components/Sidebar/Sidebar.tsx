import React, { useState, createContext, ComponentType, ReactElement, useCallback, useRef } from 'react'
import { Component } from '../../lib'
import { Root, SidebarContent, InnerContent } from './Sidebar.styled'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'

export type SidebarProps = {
    open?: boolean
    position?: 'left' | 'right'
    content?: ComponentType | ReactElement | string | null
}

export const SidebarContext = createContext<
    SidebarProps & {
        set: (args: SidebarProps) => void
        update: (args: SidebarProps) => void
    }
>({
    content: null,
    set: () => {},
    update: () => {},
})

export const Sidebar: Component = ({ children, ...props }) => {
    const [settings, setSettings] = useState<SidebarProps>({
        open: false,
        position: 'left',
        content: null,
    })

    const handleSetSettings = useCallback(
        (newSettings: SidebarProps) => {
            setSettings({ ...newSettings })
        },
        [setSettings]
    )

    const handleUpdateSettings = useCallback(
        (newSettings: SidebarProps) => {
            setSettings({ ...settings, ...newSettings })
        },
        [setSettings, settings]
    )

    const sidebarRef = useRef(null)

    useOnClickOutside(sidebarRef, () => {
        handleUpdateSettings({ open: false })
    })

    const { position = 'left', open, content } = settings

    return (
        <SidebarContext.Provider value={{ ...settings, set: handleSetSettings, update: handleUpdateSettings }}>
            <Root {...props}>
                <SidebarContent ref={sidebarRef} $open={open} $position={position}>
                    {content}
                </SidebarContent>
                <InnerContent $open={open}>{children}</InnerContent>
            </Root>
        </SidebarContext.Provider>
    )
}
