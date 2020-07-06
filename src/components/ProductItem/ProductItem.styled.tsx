import styled from 'styled-components'

import { Root as PriceRoot } from '../Price/Price.styled'
import ImageComponent from '../Image'

export const Root = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Badge = styled.span`
    background-color: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.onAccent};
    font-size: 1.2rem;
    left: 2rem;
    letter-spacing: 0.05rem;
    padding: 0.5rem 0.75rem;
    position: absolute;
    text-transform: uppercase;
    top: 2rem;
    z-index: 1;
`

export const ImageWrapper = styled.div`
    flex-grow: 1;
    & > img {
        background-color: #fff;
    }
`

export const Image = styled(ImageComponent)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

export const Colors = styled.ul`
    display: grid;
    grid-auto-columns: 1rem;
    grid-gap: 0.5rem;
    grid-auto-flow: column;
    height: 1rem;
`

export const Color = styled.li`
    height: 1rem;
    width: 1rem;
    border-radius: 50%;
    filter: contrast(0.85);
    will-change: filter;
    transform: translateZ(0);
`

export const Details = styled.span`
    display: grid;
    font-size: 1.4rem;
    grid-gap: 0.65rem;
    padding: 1rem;

    @media ${props => props.theme.breakpoints.medium} {
        font-size: 1.6rem;
    }
`

export const Title = styled.div`
    font-size: 1.6rem;
    font-weight: 600;
`

export const PriceWrapper = styled.span`
    ${PriceRoot} {
        font-size: 0.9em;
    }
`
