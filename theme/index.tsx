import React from 'react'
import { defaultColors as colors } from './colors'
import { defaultTypography as typography } from './typography'
import { defaultBreakpoints as breakpoints, defaultLayout as layout } from './layout'
import { GlobalStyles } from './GlobalStyles'
import { DefaultTheme, ThemeProvider as StyledThemeProvider } from 'styled-components'

export const baseTheme: DefaultTheme = { colors, typography, breakpoints, layout }

export const ThemeProvider = (theme = baseTheme) => {
    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyles />

            {/* SVGs Effects */}
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ position: 'fixed', width: 0, height: 0 }}>
                <defs>
                    <filter id="vignette">
                        <feOffset dx="0" dy="0" />
                        <feGaussianBlur stdDeviation="30" result="offset-blur" />
                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                        <feFlood floodColor="black" floodOpacity="1" result="color" />
                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                        <feComponentTransfer in="shadow" result="shadow">
                            <feFuncA type="linear" slope=".25" />
                        </feComponentTransfer>
                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                    </filter>
                </defs>

                <filter id="blur">
                    <feGaussianBlur stdDeviation="10" />
                </filter>
            </svg>
        </StyledThemeProvider>
    )
}
