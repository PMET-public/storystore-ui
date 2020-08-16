import styled from 'styled-components'

import Carousel from '../Carousel'
import { Root as ImageRoot, Img } from '../Image/Image.styled'

export const Root = styled(Carousel)`
    --size: 10rem;
    font-size: var(--size);
`

export const CarouselItem = styled(Carousel.Item)`
    &:first-child {
        padding-left: 1rem;
    }

    &:last-child {
        padding-right: 1rem;
    }
`

export const Wrapper = styled.div`
    text-decoration: none;
    display: grid;

    & ${ImageRoot} {
        border-radius: 50%;
        overflow: hidden;
        height: var(--size);
        width: var(--size);
    }

    & ${Img} {
        object-fit: cover;
        object-position: center;
        display: inline-block;
        height: var(--size);
        width: var(--size);
        color: transparent;
`

export const Label = styled.div`
    font-weight: 400;
    font-size: 0.12em;
    margin-top: 0.6rem;
    overflow: hidden;
    padding: 0;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: var(--size);
`
