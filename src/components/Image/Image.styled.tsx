import styled from 'styled-components'

export const Root = styled.span`
    position: relative;
    line-height: 0;
`

export const Placeholder = styled.img<{ $loaded?: boolean }>`
    position: relative;
    z-index: 0;
    background-color: ${props => props.theme.colors.onSurface10};
    opacity: ${props => (props.$loaded ? 0 : 1)};
    max-width: 100%;
`

export const Picture = styled.picture`
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 0;
    z-index: 1;
`

export const Img = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    transition: opacity 200ms ease;
    opacity: ${props => (props.$loaded ? 1 : 0.1)};
    filter: brightness(${props => (props.$vignette ? 0.95 : 1)});
    transform: translate3d(0, 0, 0);
    will-change: filter;
`
