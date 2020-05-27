import styled from 'styled-components'

export const Root = styled.div<{ $position: 'left' | 'right' }>`
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 20;
    overflow: scroll;
    max-width: calc(100vw - 6rem);
    min-width: 30rem;
    color: ${props => props.theme.colors.onSurface};
    background-color: ${props => props.theme.colors.surface};
    -webkit-overflow-scrolling: touch;

    @media ${props => props.theme.breakpoints.smallOnly} {
        width: 100%;
    }

    ${props =>
        props.$position === 'left'
            ? `
                left: 0;
                box-shadow: 3rem 0 6rem rgba(0, 0, 0, 0.15);
            `
            : `
                right: 0;
                box-shadow: -3rem 0 6rem rgba(0, 0, 0, 0.15);
            `}
`

export const Screen = styled.div`
    position: fixed;
    height: 100%;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
    background: ${props => props.theme.colors.surface50};
`
