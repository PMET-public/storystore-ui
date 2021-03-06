import styled from 'styled-components'

export const Root = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 2rem;
    grid-auto-rows: max-content;
`
export const List = styled.div`
    display: grid;
    grid-gap: 2rem 0.5rem;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;

    @media ${props => props.theme.breakpoints.medium} {
        grid-template-columns: repeat(2, 1fr);
    }

    @media ${props => props.theme.breakpoints.large} {
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${props => props.theme.breakpoints.xLarge} {
        grid-template-columns: repeat(4, 1fr);
    }
`

export const ItemWrapper = styled.div`
    & img {
        max-height: 60vh;
    }
`
