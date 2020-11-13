import React from 'react'
import { baseTheme, UIBase } from '../src/theme'
import { ThemeProvider } from 'styled-components'

import styled from 'styled-components'

const StoryWrapper = styled.div`
    min-height: 100vh;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const decorators = [
    Story => (
        <ThemeProvider theme={baseTheme}>
            <StoryWrapper>
                <UIBase />
                <Story />
            </StoryWrapper>
        </ThemeProvider>
    ),
]
