import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-gap: 0.6rem;
`

export const OnIcon = styled.svg``

export const OffIcon = styled.svg`
    opacity: 0.2;
`

export const Item = styled.label`
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: column;
    align-items: center;
    grid-gap: 0.6rem;
    cursor: pointer;

    ${OnIcon},
    ${OffIcon} {
        width: 1.4em;
        height: 1.4em;
        fill: currentColor;
        transition: opacity 350ms ease-in;
    }

    &:hover {
        & ${OnIcon}, & ${OffIcon} {
            opacity: 0.4;
        }
    }
`

export const Input = styled.input`
    display: none;

    &:checked + ${OffIcon} {
        display: none;
    }

    &:checked ~ ${OnIcon} {
        display: block;
        opacity: 1;
    }

    &:disabled ~ span {
        opacity: 0.5;
    }

    &:disabled ~ ${OffIcon} {
        opacity: 0.15;
    }

    ~ ${OnIcon} {
        display: none;
    }
`

export const Placeholder = styled.span`
    color: ${props => props.theme.colors.onSurface75};
`
