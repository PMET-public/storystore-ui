import styled from 'styled-components'
import { Input } from '../Form.styled'

export const Root = styled.div`
    align-items: center;
    display: grid;
    grid-gap: 1.4rem;
    grid-template-columns: max-content max-content;
`

export const Actions = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: max-content max-content;
`

const Button = styled.button`
    font-size: 1.6rem;
    & > svg {
        fill: ${({ theme }) => theme.colors.onSurface};
        width: 1em;
        height: 1em;
    }

    &[disabled] {
        opacity: 0.35;
    }
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.onSurface10};
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    min-height: 2em;
    min-width: 2em;
`

export const Plus = styled(Button)``

export const Minus = styled(Button)``

export const Value = styled.span`
    & > sub {
        font-size: 80%;
    }

    & ${Input} {
        width: 3rem;
        text-align: center;

        -moz-appearance: textfield;
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
    }
`
