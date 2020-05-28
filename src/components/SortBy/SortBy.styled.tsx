import styled from 'styled-components'

export const Root = styled.div`
    grid-gap: 1rem;
    padding: 2rem;
`

export const Item = styled.div``

export const Icon = styled.div`
    color: currentColor;
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
    transition: opacity 350ms ease-in;
`

export const Label = styled.label`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;

    & ${Icon} {
        opacity: 0.15;

        & + ${Icon} {
            opacity: 1;
            display: none;
        }
    }

    &:hover {
        & ${Icon} {
            opacity: 0.4;
        }
    }
`

export const HiddenInput = styled.input`
    display: none;

    &:checked ~ ${Label} > ${Icon} {
        display: none;

        & + ${Icon} {
            display: block;
            opacity: 1;
        }
    }
`
