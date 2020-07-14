import styled from 'styled-components'

export const Root = styled.div`
    position: relative;
    width: calc(100vw);
    min-height: 10rem;
    padding: 0 1rem;

    @media ${props => props.theme.breakpoints.medium} {
        max-width: 40rem;
    }
`

export const CloseButton = styled.button`
    position: absolute;
    right: 1.5rem;
    top: 0.5rem;
    padding: 1rem;

    & > svg {
        fill: currentColor;
        width: 2rem;
        height: 2rem;
    }
`

export const Wrapper = styled.div`
    background: ${props => props.theme.colors.surface};
    color: ${props => props.theme.colors.onSurface};
    border-radius: 1rem;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.35);
    border: 0.1rem solid ${props => props.theme.colors.onSurface5};
    padding: 2rem;
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
`

export const Title = styled.h2`
    font-size: 1.3rem;
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.semi};
    text-transform: uppercase;
    color: ${props => props.theme.colors.onSurface50};
`

export const Categories = styled.ul`
    list-style-type: none;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: max-content;
    grid-gap: 1rem 1rem;
`

export const Category = styled.li`
    font-size: 1.3rem;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: auto 1fr;
    align-items: center;
    grid-gap: 1rem;
    min-height: 2rem;
    background-color: ${props => props.theme.colors.onSurface5};
    border-radius: 2rem;
    transition: background-color 200ms ease-in, color 200ms ease-in;
    color: ${props => props.theme.colors.onSurface75};

    & > span {
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }

    & > img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
        overflow: hidden;
    }

    & > svg {
        width: 2rem;
        height: 2rem;
        padding: 1rem 0 1rem 1rem;
        border-radius: 50%;
        transition: fill 200ms ease-in;
        fill: ${props => props.theme.colors.accent30};
    }

    &:hover {
        background-color: ${props => props.theme.colors.onSurface10};
        color: ${props => props.theme.colors.onSurface};

        & > svg {
            fill: ${props => props.theme.colors.accent50};
        }
    }
`

export const CmsBlock = styled.div``

export const CTAs = styled.div`
    padding-top: 2rem;
    border-top: 1px dashed ${props => props.theme.colors.onSurface15};
    display: flex;
    justify-content: center;
`
