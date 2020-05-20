import styled, { css } from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-template-columns: max-content 1fr;
`

export const SidebarContent = styled.div<{ $open?: boolean; $position: 'left' | 'right' }>(
    ({ theme, $open, $position }) => css`
        background-color: ${theme.colors.surface75};
        color: ${theme.colors.onSurface};
        box-shadow: ${$position === 'left' ? '0.2rem' : '-0.2rem'} 0 0.2rem ${theme.colors.onSurface15};
        height: 100%;
        min-width: 30rem;
        max-width: 80vw;

        /* Positioning */
        left: ${$position === 'left' ? 0 : 'unset'};
        right: ${$position === 'right' ? 0 : 'unset'};
        z-index: 10;

        /* Open/Close States */
        position: fixed;
        transform: translateX(${$open ? '0' : $position === 'left' ? ' -100%' : '100%'});
        transition: transform 300ms ease-out, opacity 300ms ease-out;
        opacity: ${$open ? 1 : 0.3};
    `
)

export const InnerContent = styled.div<{ $open?: boolean }>(
    ({ $open }) => css`
        opacity: ${$open ? 0.5 : 1};
        transition: opacity 300ms ease-out;
        z-index: 1;
    `
)
