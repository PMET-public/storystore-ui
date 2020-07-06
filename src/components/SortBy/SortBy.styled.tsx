import styled from 'styled-components'

export const Root = styled.div`
    grid-gap: 0.8rem;
`

export const Item = styled.div``

const Icon = styled.svg`
    fill: currentColor;
    width: 2rem;
    height: 2rem;
    transition: opacity 350ms ease-in;
`

const IconRadio = styled(Icon)``

export const IconDirection = styled(Icon)`
    display: none;
`

export const IconOn = styled(IconRadio)`
    display: none;
`

export const IconOff = styled(IconRadio)`
    opacity: 0.2;
`

export const Label = styled.label`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-gap: 0.6rem;
    align-items: center;
    cursor: pointer;
    user-select: none;

    &:hover {
        & ${IconOff} {
            opacity: 0.4;
        }
    }
`

export const HiddenInput = styled.input`
    display: none;

    &:checked ~ ${Label} {
        & > ${IconOff} {
            display: none;
        }

        & > ${IconOn} {
            display: block;
        }

        & ${IconDirection} {
            display: block;
        }
    }
`
