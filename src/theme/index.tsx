import React from 'react'
import { defaultColors as colors } from './colors'
import { defaultTypography as typography } from './typography'
import { defaultBreakpoints as breakpoints, defaultLayout as layout } from './layout'
import { GlobalStyles } from './GlobalStyles'
import { useTheme } from './useTheme'
import 'focus-visible'

export const baseTheme = { colors, typography, breakpoints, layout }

export const UIBase = () => {
    const { colors, typography, breakpoints } = useTheme()

    return <GlobalStyles $colors={colors} $typography={typography} $breakpoints={breakpoints} />
}
