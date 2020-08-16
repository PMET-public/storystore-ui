import styled from 'styled-components'

export const Root = styled.picture<{ $loaded?: boolean; $error?: boolean; $vignette?: boolean }>`
    transition: filter 100ms ease;
    ${({ $loaded, $error, theme }) => (!$loaded || $error) && `background-color: ${theme.colors.onSurface10};`}
    ${({ $vignette }) => `filter: brightness(${$vignette ? 0.95 : 1});`}
    will-change: filter;
    transform: translateZ(0);
    line-height: 0;
`

export const Img = styled.img<{ $loaded?: boolean }>`
    transition: all 100ms ease;
    opacity: ${({ $loaded }) => ($loaded ? 1 : 0.1)};
    ${({ $loaded }) => `filter: blur(${$loaded ? 0 : '1px'});`}
    overflow: hidden;
`
