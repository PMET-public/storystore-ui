import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
`

export const Item = styled.div`
    border-bottom-width: 0.1rem;
    border-color: ${props => props.theme.colors.onSurface15};
    border-style: solid;
    display: grid;
    grid-auto-columns: 1fr;
    grid-auto-rows: minmax(max-content, max-content);

    &:first-of-type {
        border-top-width: 0.1rem;
    }
`

export const Button = styled.button`
    align-items: center;
    color: inherit;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    padding: 2rem;
    text-align: left;
    width: 100%;
`

export const ButtonLabel = styled.span`
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight};
    flex-grow: 1;
`

export const ButtonIcon = styled.div<{ active?: boolean }>`
    font-size: 1.6rem;
    width: 1em;
    height: 1em;
    fill: currentColor;
    transition: transform 305ms ease-out;
    width: 1.6rem;

    ${props =>
        props.active &&
        `
            transform: rotateX(180deg);
        `}
`

export const Content = styled.div`
    padding: 1rem 2rem 4rem;
`
