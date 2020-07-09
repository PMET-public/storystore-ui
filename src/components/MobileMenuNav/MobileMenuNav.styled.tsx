import styled from 'styled-components'

export const Root = styled.div`
    position: relative;
`

export const ToggleButton = styled.button<{ $active?: boolean }>`
    position: relative;
    z-index: 2;
    color: ${props => props.theme.colors.primary};
    background-color: ${props => (props.$active ? 'transparent' : props.theme.colors.primary10)};
    line-height: 0;
    padding: 1rem;
    border-radius: ${props => (props.$active ? '50%' : '0.7rem')};
    transition: background-color 250ms ease-in, border-radius 250ms ease-in;

    & > svg {
        fill: currentColor;
        width: 2rem;
    }

    &:hover {
        background-color: ${props => props.theme.colors.primary15};
        border-radius: 50%;
    }
`

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    background: ${props => props.theme.colors.surface90};
    color: ${props => props.theme.colors.onSurface};
    border-radius: 1.8rem;
    box-shadow: 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1);
    border: 0.1rem solid ${props => props.theme.colors.onSurface5};
    z-index: 1;
    width: calc(100vw - 4rem);
    min-height: 10rem;
    padding: 2rem;

    @media ${props => props.theme.breakpoints.medium} {
        width: 40rem;
    }
`

export const Categories = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
`

export const Category = styled.li`
    font-size: 0.8em;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 0.7rem;

    & > span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    & > img {
        width: 3.2rem;
        height: 3.2rem;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }
`

export const AdminBlock = styled.div`
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px dashed ${props => props.theme.colors.onSurface15};
    display: flex;
    justify-content: center;
`
