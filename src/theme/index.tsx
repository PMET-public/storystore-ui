import React from 'react'
import { defaultColors as colors } from './colors'
import { defaultTypography as typography } from './typography'
import { defaultBreakpoints as breakpoints, defaultLayout as layout } from './layout'
import { GlobalStyles } from './GlobalStyles'
import { ToastsStyles } from './ToastsStyles'
import { useTheme } from './useTheme'
import { toast } from '../lib'
import 'focus-visible'

if (typeof window !== 'undefined') {
    toast.configure({
        position: toast.POSITION.BOTTOM_RIGHT,
    })
}

export const baseTheme = { colors, typography, breakpoints, layout }

export const UIBase = () => {
    const { colors, typography, breakpoints } = useTheme()
    return (
        <React.Fragment>
            <GlobalStyles $colors={colors} $typography={typography} $breakpoints={breakpoints} />
            <ToastsStyles $colors={colors} />
        </React.Fragment>
    )
}
