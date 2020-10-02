import styled from 'styled-components'

export const Root = styled.div<{ $vignette?: boolean; $loaded?: boolean }>`
    position: relative;
    line-height: 0;

    ${props =>
        props.$vignette &&
        props.$loaded &&
        `
            &::after {
                pointer-events: none;
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                box-shadow: 0 0 10rem rgba(0, 0, 0, 0.2) inset;
                cursor: inherit;
            }
        `}
`

export const Placeholder = styled.img<{ $loaded?: boolean }>`
    position: relative;
    z-index: 0;
    background-color: ${props => props.theme.colors.onSurface10};
    opacity: ${props => (props.$loaded ? 0 : 1)};
    max-width: 100%;
    color: transparent;
`

export const Picture = styled.picture`
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 0;
    z-index: 1;
`

export const Img = styled.img<{ $loaded?: boolean }>`
    transition: opacity 200ms ease;
    opacity: ${props => (props.$loaded ? 1 : 0.1)};
    color: transparent;
`
