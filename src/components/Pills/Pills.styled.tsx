import styled from 'styled-components'

export const Root = styled.div``

export const Wrapper = styled.div`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    grid-gap: 1rem;
    margin-bottom: -1rem;
    padding: 0 0 1rem;

    &::after {
        content: '';
        display: block;
        height: 1px;
        width: 1px;
        visibility: hidden;
    }
`

export const Item = styled.div`
    border-radius: 1rem;
    border: 0.1rem solid ${props => props.theme.colors.onSurface15};
    color: ${props => props.theme.colors.onSurface};
    font-weight: 600;
    padding: 1rem 1.4rem;
    transition: border 0.5s ease-out;

    &:not([disabled]):hover {
        border-color: ${props => props.theme.colors.onSurface};
    }
`

export const ItemWrapper = styled.span`
    align-items: center;
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 1rem;
`

export const Count = styled.span`
    color: ${props => props.theme.colors.onSurface75};
    font-size: 0.9em;
    font-weight: 400;
`
