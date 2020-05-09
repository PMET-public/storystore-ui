import styled from 'styled-components'

export const Root = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    transition-property: opacity;
    transition-duration: 500ms;
    transition-timing-function: ease;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0.5)};
    overflow: hidden;
    ${({ $vignette }) => $vignette && `filter: brightness(0.95);`}
`
