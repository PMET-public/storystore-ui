import styled from 'styled-components'

export const Root = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
    width: 60rem;
    max-width: 100%;
`

export const Title = styled.h2`
    font-size: ${props => props.theme.typography.heading.size.secondary};
    font-family: ${props => props.theme.typography.heading.family};
    font-weight: ${props => props.theme.typography.heading.weight.bold};
`

export const Description = styled.div``
