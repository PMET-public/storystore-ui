import styled from 'styled-components'

export const Root = styled.div`
    position: relative;
    overflow: hidden;
`

export const Placeholder = styled.img<{ $loaded?: boolean }>`
    position: relative;
    z-index: 0;
    background-color: ${props => props.theme.colors.onSurface10};
    opacity: ${props => (props.$loaded ? 0 : 1)};
`

export const Picture = styled.picture`
    position: absolute;
    width: 100%;
    height: 100%;
`

export const Img = styled.img<{ $loaded?: boolean; $vignette?: boolean }>`
    will-change: filter;
    transform: translateZ(0);
    transition: opacity 300ms ease-out, filter 300ms ease-out;
    opacity: ${props => (props.$loaded ? 1 : 0.1)};
    filter: brightness(${props => (props.$vignette ? 0.95 : 1)}) blur(${props => (props.$loaded ? 0 : '10px')});
`
