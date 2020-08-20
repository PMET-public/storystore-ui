import styled from 'styled-components'

export const Root = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    overflow: hidden;
    will-change: filter;
    transform: translateZ(0);

    transition: opacity 200ms ease-out;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0.5)};
    filter: brightness(${props => (props.$vignette ? 0.95 : 1)});

    ${({ $loaded, theme }) => !$loaded && `background-color: ${theme.colors.onSurface15};`}
`
